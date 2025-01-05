import { useEffect, useRef, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { GetDataFromFirestore } from "../utils/getDataFromFirestore";

interface User {
  id: string;
  name: string;
  email: string;
  pricingPlan: string;
}

const updateNameInFirestore = async (
  email: string,
  newName: string
): Promise<void> => {
  try {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error("No user found with the provided email.");
      return;
    }

    querySnapshot.forEach(async (docSnapshot) => {
      const userDocRef = docSnapshot.ref;
      await updateDoc(userDocRef, { name: newName });
    });
  } catch (error) {
    console.error(error);
  }
};

export default function Profile() {
  const [isFirstTab, setIsFirstTab] = useState(true);
  const [isSecondTab, setIsSecondTab] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { userData, setUserData } = GetDataFromFirestore();

  const nameRef = useRef<HTMLParagraphElement>(null);

  const { user, updateUserProfile, resetPassword } = useAuth();

  useEffect(() => {
    // Real-time listener for Firestore data
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as User)
      );
      setUserData(data); // Keep userData in sync with Firestore
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const currentUser = userData.find((u) => u.email === user?.email);

  useEffect(() => {
    if (!currentUser || !currentUser.email) return;

    const userDocRef = doc(db, "users", currentUser.email);

    const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists() && nameRef.current) {
        nameRef.current.textContent = docSnapshot.data()?.name || "";
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [currentUser]);

  const handleFirstTab = () => {
    setIsFirstTab(true);
    setIsSecondTab(false);
  };

  const handleSecondTab = () => {
    setIsFirstTab(false);
    setIsSecondTab(true);
  };

  const handleNameChange = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;

    updateUserProfile(name)
      .then(() => {
        if (user?.email) {
          updateNameInFirestore(user.email, name);
          webflow.notify({
            type: "Success",
            message: "User Name updated successfully!",
          });
          setShowForm(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdatePassword = () => {
    if (user?.email) {
      resetPassword(user.email)
        .then(() => {
          webflow.notify({
            type: "Success",
            message: "Password reset email sent successfully!",
          });

          handleFirstTab();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.error("User email is not available.");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {/* tab buttons wrapper */}
      <div className="h-fit flex flex-col px-6 divide-y divide-gray-300 rounded-[20px] bg-background-input text-large leading-[0px]">
        <button
          onClick={handleFirstTab}
          className={`flex items-center justify-start gap-3 py-4 ${
            isFirstTab ? "text-text-1" : "text-text-3"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.121 17.804C7.21942 16.6179 9.58958 15.9963 12 16C14.5 16 16.847 16.655 18.879 17.804M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Profile Info</span>
        </button>
        <button
          onClick={handleSecondTab}
          className={`flex items-center justify-start gap-3 py-4 ${
            isSecondTab ? "text-text-1" : "text-text-3"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Settings</span>
        </button>
      </div>

      {/* tabs contents wrapper */}
      <div className="col-span-2 p-6 rounded-[20px] bg-background-input h-fit">
        {/* first tab contents */}
        {isFirstTab && (
          <div className="flex flex-col items-start gap-[30px] w-full">
            <div className="flex items-center w-full">
              <p className="w-1/6 text-small text-text-3">Name:</p>
              <p className="w-5/6 text-large text-text-1" ref={nameRef}>
                {currentUser?.name}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className={`flex items-center justify-center ${
                  showForm ? "hidden" : "block"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="16"
                  height="16"
                  x="0"
                  y="0"
                  viewBox="0 0 401.523 401"
                  enable-background="new 0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M370.59 250.973c-5.524 0-10 4.476-10 10v88.789c-.02 16.562-13.438 29.984-30 30H50c-16.563-.016-29.98-13.438-30-30V89.172c.02-16.559 13.438-29.98 30-30h88.79c5.523 0 10-4.477 10-10 0-5.52-4.477-10-10-10H50c-27.602.031-49.969 22.398-50 50v260.594c.031 27.601 22.398 49.968 50 50h280.59c27.601-.032 49.969-22.399 50-50v-88.793c0-5.524-4.477-10-10-10zm0 0"
                      fill="#fff"
                      opacity="1"
                      data-original="#fff"
                    ></path>
                    <path
                      d="M376.629 13.441c-17.574-17.574-46.067-17.574-63.64 0L134.581 191.848a9.997 9.997 0 0 0-2.566 4.402l-23.461 84.7a9.997 9.997 0 0 0 12.304 12.308l84.7-23.465a9.997 9.997 0 0 0 4.402-2.566l178.402-178.41c17.547-17.587 17.547-46.055 0-63.641zM156.37 198.348 302.383 52.332l47.09 47.09-146.016 146.016zm-9.406 18.875 37.62 37.625-52.038 14.418zM374.223 74.676 363.617 85.28l-47.094-47.094 10.61-10.605c9.762-9.762 25.59-9.762 35.351 0l11.739 11.734c9.746 9.774 9.746 25.59 0 35.36zm0 0"
                      fill="#fff"
                      opacity="1"
                      data-original="#fff"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleNameChange} className="w-80">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-1 font-semibold text-large"
                  >
                    Change Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="text-black py-2 pr-[18px] pl-[46px] border-none text-small rounded-full w-full block leading-[0px]"
                      placeholder="Enter new name"
                      required
                    />
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute transform -translate-y-1/2 top-1/2 left-4"
                    >
                      <path
                        d="M13.3333 4.99984C13.3333 6.84079 11.8409 8.33317 9.99992 8.33317C8.15897 8.33317 6.66659 6.84079 6.66659 4.99984C6.66659 3.15889 8.15897 1.6665 9.99992 1.6665C11.8409 1.6665 13.3333 3.15889 13.3333 4.99984Z"
                        stroke="#899AB2"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16.6666 14.5832C16.6666 16.6542 16.6666 18.3332 9.99992 18.3332C3.33325 18.3332 3.33325 16.6542 3.33325 14.5832C3.33325 12.5121 6.31802 10.8332 9.99992 10.8332C13.6818 10.8332 16.6666 12.5121 16.6666 14.5832Z"
                        stroke="#899AB2"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <button
                    type="submit"
                    className="w-full px-2 py-2 font-semibold text-center rounded text-large bg-action-primary-hover shadow-action-secondary text-text-1"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-full px-2 py-2 font-semibold text-center text-black bg-white rounded text-large shadow-action-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* second tab contents */}
        {isSecondTab && (
          <div>
            <div className="flex items-center mb-5">
              <p className="w-1/6 text-small text-text-3">Email:</p>
              <p className="w-5/6 text-large text-text-1">{user?.email}</p>
            </div>

            <div className="flex items-center">
              <p className="w-1/6 text-small text-text-3">Password:</p>
              <div className="flex items-center w-5/6 gap-3">
                <p className="text-large text-text-1">******</p>
                <button
                  onClick={handleUpdatePassword}
                  className="flex items-center justify-center w-fit px-5 gap-2 py-2 text-white bg-action-primary-hover rounded-xl leading-[0px] text-large font-semibold"
                >
                  <span>Change</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z"
                      fill="white"
                    />
                    <path
                      d="M14 6L20 12L14 18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
