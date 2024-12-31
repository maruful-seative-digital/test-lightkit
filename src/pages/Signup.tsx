import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

interface User {
  id: string;
  name: string;
  email: string;
}

async function getDataFromFirestore(): Promise<User[]> {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data: User[] = [];
  querySnapshot.forEach((doc) => {
    const userData = doc.data() as Omit<User, "id">;
    data.push({ id: doc.id, ...userData });
  });
  return data;
}

async function addDataToFirestore(
  name: string,
  email: string
): Promise<boolean> {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
    });

    console.log(docRef.id);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const [userData, setUserData] = useState<User[]>([]);

  const navigate = useNavigate();

  const { loginWithGoogle, createUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const data = await getDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  }, []);

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    createUser(email, password)
      .then((result) => {
        sendEmailVerification(result.user).then(() => {
          if (result.user) {
            navigate("/register/email-verification");
          }

          webflow.notify({
            type: "Info",
            message: "Email verification mail sent to your email address",
          });
        });

        form.reset();
      })
      .catch((error) => console.log(error.message));

    const userAlreadyRegistered = userData.find((user) => user.email === email);

    console.log(userAlreadyRegistered);

    if (!userAlreadyRegistered) {
      const added = await addDataToFirestore(name, email);

      if (added) {
        webflow.notify({
          type: "Success",
          message: "User registered successfully!",
        });
      }
    }
  };

  const handleGoogleLogin = async () => {
    loginWithGoogle()
      .then(async (result) => {
        const user = result.user;

        sendEmailVerification(user).then(() => {
          if (result.user) {
            navigate("/register/email-verification");
          }

          webflow.notify({
            type: "Info",
            message: "Email verification mail sent to your email address",
          });
        });

        const email = user.email;
        const displayName = user.displayName;

        if (!email || !displayName) {
          console.error("Missing user information.");
          return;
        }

        const userAlreadyRegistered = userData.find(
          (user) => user.email === email
        );

        if (!userAlreadyRegistered) {
          const added = await addDataToFirestore(displayName, email);

          if (added) {
            webflow.notify({
              type: "Success",
              message: "User registered successfully!",
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-52.25px)] flex-col">
      <h2 className="text-xl">Create an Account</h2>
      <p className="mt-1 text-small text-text-2">Let’s get started today 💖</p>

      {/* form wrapper */}
      <div>
        <form onSubmit={handleRegister} className="mt-4 w-80">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-large"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="text-black py-2 pr-[18px] pl-[46px] border-none text-small rounded-full w-full block leading-[0px]"
                placeholder="Enter your name"
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

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-large"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="text-black py-2 pr-[18px] pl-[46px] border-none text-small rounded-full block w-full leading-[0px]"
                placeholder="Enter your email"
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
                  d="M5.00008 6.66683L6.79916 8.16606C8.32969 9.4415 9.09496 10.0792 10.0001 10.0792C10.9052 10.0792 11.6705 9.4415 13.201 8.16606L15.0001 6.66683M8.33341 16.6668H11.6667C14.8094 16.6668 16.3808 16.6668 17.3571 15.6905C18.3334 14.7142 18.3334 13.1429 18.3334 10.0002C18.3334 6.85747 18.3334 5.28612 17.3571 4.30981C16.3808 3.3335 14.8094 3.3335 11.6667 3.3335H8.33342C5.19072 3.3335 3.61937 3.3335 2.64306 4.30981C1.66675 5.28612 1.66675 6.85747 1.66675 10.0002C1.66675 13.1429 1.66675 14.7142 2.64306 15.6905C3.61937 16.6668 5.19072 16.6668 8.33341 16.6668Z"
                  stroke="#899AB2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-1 font-semibold text-large"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={!showPassword ? "password" : "text"}
                id="password"
                className="text-black py-2 pr-[18px] pl-[46px] border-none text-small rounded-full block w-full leading-[0px]"
                placeholder="Enter your password"
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
                <g clipPath="url(#clip0_4001_241)">
                  <path
                    d="M4.25008 8.33317C4.25008 8.74738 4.58587 9.08317 5.00008 9.08317C5.4143 9.08317 5.75008 8.74738 5.75008 8.33317H4.25008ZM14.2501 8.33317C14.2501 8.74738 14.5859 9.08317 15.0001 9.08317C15.4143 9.08317 15.7501 8.74738 15.7501 8.33317H14.2501ZM6.66675 12.5832C6.25253 12.5832 5.91675 12.919 5.91675 13.3332C5.91675 13.7474 6.25253 14.0832 6.66675 14.0832V12.5832ZM6.67425 14.0832C7.08846 14.0832 7.42425 13.7474 7.42425 13.3332C7.42425 12.919 7.08846 12.5832 6.67425 12.5832V14.0832ZM9.99258 12.5832C9.57837 12.5832 9.24258 12.919 9.24258 13.3332C9.24258 13.7474 9.57837 14.0832 9.99258 14.0832V12.5832ZM10.0001 14.0832C10.4143 14.0832 10.7501 13.7474 10.7501 13.3332C10.7501 12.919 10.4143 12.5832 10.0001 12.5832V14.0832ZM13.3259 12.5832C12.9117 12.5832 12.5759 12.919 12.5759 13.3332C12.5759 13.7474 12.9117 14.0832 13.3259 14.0832V12.5832ZM13.3334 14.0832C13.7476 14.0832 14.0834 13.7474 14.0834 13.3332C14.0834 12.919 13.7476 12.5832 13.3334 12.5832V14.0832ZM6.66675 9.08317H13.3334V7.58317H6.66675V9.08317ZM13.3334 17.5832H6.66675V19.0832H13.3334V17.5832ZM6.66675 17.5832C5.46703 17.5832 4.6427 17.5816 4.0235 17.4983C3.42589 17.418 3.13285 17.2741 2.92931 17.0706L1.86865 18.1313C2.39734 18.66 3.05968 18.8822 3.82363 18.985C4.56601 19.0848 5.50944 19.0832 6.66675 19.0832V17.5832ZM0.916748 13.3332C0.916748 14.4905 0.915155 15.4339 1.01497 16.1763C1.11768 16.9402 1.33996 17.6026 1.86865 18.1313L2.92931 17.0706C2.72577 16.8671 2.58194 16.574 2.50159 15.9764C2.41834 15.3572 2.41675 14.5329 2.41675 13.3332H0.916748ZM17.5834 13.3332C17.5834 14.5329 17.5818 15.3572 17.4986 15.9764C17.4182 16.574 17.2744 16.8671 17.0709 17.0706L18.1315 18.1313C18.6602 17.6026 18.8825 16.9402 18.9852 16.1763C19.085 15.4339 19.0834 14.4905 19.0834 13.3332H17.5834ZM13.3334 19.0832C14.4907 19.0832 15.4342 19.0848 16.1765 18.985C16.9405 18.8822 17.6028 18.66 18.1315 18.1313L17.0709 17.0706C16.8673 17.2741 16.5743 17.418 15.9767 17.4983C15.3575 17.5816 14.5331 17.5832 13.3334 17.5832V19.0832ZM13.3334 9.08317C14.5331 9.08317 15.3575 9.08476 15.9767 9.16801C16.5743 9.24836 16.8673 9.39219 17.0709 9.59573L18.1315 8.53507C17.6028 8.00638 16.9405 7.7841 16.1765 7.68139C15.4342 7.58158 14.4907 7.58317 13.3334 7.58317V9.08317ZM19.0834 13.3332C19.0834 12.1759 19.085 11.2324 18.9852 10.4901C18.8825 9.7261 18.6602 9.06377 18.1315 8.53507L17.0709 9.59573C17.2744 9.79927 17.4182 10.0923 17.4986 10.6899C17.5818 11.3091 17.5834 12.1335 17.5834 13.3332H19.0834ZM6.66675 7.58317C5.50944 7.58317 4.56601 7.58158 3.82363 7.68139C3.05968 7.7841 2.39734 8.00638 1.86865 8.53507L2.92931 9.59573C3.13285 9.39219 3.42589 9.24836 4.0235 9.16801C4.6427 9.08476 5.46703 9.08317 6.66675 9.08317V7.58317ZM2.41675 13.3332C2.41675 12.1335 2.41834 11.3091 2.50159 10.6899C2.58194 10.0923 2.72577 9.79927 2.92931 9.59573L1.86865 8.53507C1.33996 9.06377 1.11768 9.7261 1.01497 10.4901C0.915155 11.2324 0.916748 12.1759 0.916748 13.3332H2.41675ZM5.75008 8.33317V6.6665H4.25008V8.33317H5.75008ZM14.2501 6.6665V8.33317H15.7501V6.6665H14.2501ZM10.0001 2.4165C12.3473 2.4165 14.2501 4.31929 14.2501 6.6665H15.7501C15.7501 3.49087 13.1757 0.916504 10.0001 0.916504V2.4165ZM5.75008 6.6665C5.75008 4.31929 7.65287 2.4165 10.0001 2.4165V0.916504C6.82444 0.916504 4.25008 3.49087 4.25008 6.6665H5.75008ZM6.66675 14.0832H6.67425V12.5832H6.66675V14.0832ZM9.99258 14.0832H10.0001V12.5832H9.99258V14.0832ZM13.3259 14.0832H13.3334V12.5832H13.3259V14.0832Z"
                    fill="#899AB2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4001_241">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute transform -translate-y-1/2 top-1/2 right-4"
                  >
                    <path
                      d="M17.271 7.25377L16.6767 7.71124L16.6767 7.71124L17.271 7.25377ZM17.271 12.7466L16.6767 12.2891L16.6767 12.2891L17.271 12.7466ZM18.3334 10.0002L17.5834 10.0002L18.3334 10.0002ZM2.72916 7.25377L3.32348 7.71124L3.32348 7.71124L2.72916 7.25377ZM2.72916 12.7466L3.32348 12.2891L3.32348 12.2891L2.72916 12.7466ZM3.32348 7.71124C4.67006 5.96182 6.84742 4.0835 10.0001 4.0835V2.5835C6.18293 2.5835 3.61671 4.8711 2.13483 6.7963L3.32348 7.71124ZM10.0001 4.0835C13.1527 4.0835 15.3301 5.96182 16.6767 7.71124L17.8653 6.7963C16.3835 4.8711 13.8172 2.5835 10.0001 2.5835V4.0835ZM16.6767 12.2891C15.3301 14.0385 13.1527 15.9168 10.0001 15.9168V17.4168C13.8172 17.4168 16.3835 15.1292 17.8653 13.204L16.6767 12.2891ZM10.0001 15.9168C6.84742 15.9168 4.67006 14.0385 3.32348 12.2891L2.13483 13.204C3.61671 15.1292 6.18293 17.4168 10.0001 17.4168V15.9168ZM16.6767 7.71124C17.0444 8.18901 17.2482 8.46047 17.3818 8.7628C17.5043 9.04011 17.5834 9.38571 17.5834 10.0002L19.0834 10.0002C19.0834 9.24847 18.9855 8.68096 18.7538 8.15665C18.5333 7.65736 18.2058 7.23869 17.8653 6.7963L16.6767 7.71124ZM17.8653 13.204C18.2058 12.7616 18.5333 12.343 18.7538 11.8437C18.9855 11.3194 19.0834 10.7519 19.0834 10.0002L17.5834 10.0002C17.5834 10.6146 17.5043 10.9602 17.3818 11.2375C17.2482 11.5399 17.0444 11.8113 16.6767 12.2891L17.8653 13.204ZM2.13483 6.7963C1.79432 7.23869 1.46689 7.65736 1.24631 8.15665C1.01469 8.68096 0.916748 9.24847 0.916748 10.0002L2.41675 10.0002C2.41675 9.38571 2.49588 9.04011 2.61839 8.7628C2.75195 8.46047 2.95573 8.18902 3.32348 7.71124L2.13483 6.7963ZM3.32348 12.2891C2.95573 11.8113 2.75195 11.5399 2.61839 11.2375C2.49588 10.9602 2.41675 10.6146 2.41675 10.0002L0.916748 10.0002C0.916748 10.7519 1.01469 11.3194 1.24631 11.8437C1.46689 12.343 1.79432 12.7616 2.13483 13.204L3.32348 12.2891ZM11.7501 10.0002C11.7501 10.9667 10.9666 11.7502 10.0001 11.7502V13.2502C11.795 13.2502 13.2501 11.7951 13.2501 10.0002H11.7501ZM10.0001 11.7502C9.03358 11.7502 8.25008 10.9667 8.25008 10.0002H6.75008C6.75008 11.7951 8.20516 13.2502 10.0001 13.2502V11.7502ZM8.25008 10.0002C8.25008 9.03366 9.03358 8.25016 10.0001 8.25016V6.75016C8.20516 6.75016 6.75008 8.20524 6.75008 10.0002H8.25008ZM10.0001 8.25016C10.9666 8.25016 11.7501 9.03366 11.7501 10.0002H13.2501C13.2501 8.20524 11.795 6.75016 10.0001 6.75016V8.25016Z"
                      fill="#899AB2"
                    />
                  </svg>
                )}

                {showPassword && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute transform -translate-y-1/2 top-1/2 right-4"
                  >
                    <path
                      d="M12.1083 7.8916L7.8916 12.1083C7.34994 11.5666 7.0166 10.8249 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C10.8249 7.0166 11.5666 7.34994 12.1083 7.8916Z"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.8499 4.8084C13.3915 3.7084 11.7249 3.1084 9.99987 3.1084C7.0582 3.1084 4.31654 4.84173 2.4082 7.84173C1.6582 9.01673 1.6582 10.9917 2.4082 12.1667C3.06654 13.2001 3.8332 14.0917 4.66654 14.8084"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.0166 16.2751C7.9666 16.6751 8.97493 16.8917 9.99993 16.8917C12.9416 16.8917 15.6833 15.1584 17.5916 12.1584C18.3416 10.9834 18.3416 9.0084 17.5916 7.8334C17.3166 7.40006 17.0166 6.99173 16.7083 6.6084"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9252 10.5835C12.7085 11.7585 11.7502 12.7168 10.5752 12.9335"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.8915 12.1084L1.6665 18.3334"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3334 1.6665L12.1084 7.8915"
                      stroke="#899AB2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-end gap-2 mb-8">
            <label
              htmlFor="terms"
              className="font-medium text-large text-text-2"
            >
              <Link to="">Agree to Terms and Conditions</Link>
            </label>
            <input
              onClick={() => setTerms(!terms)}
              id="terms"
              type="checkbox"
              name="terms"
              className="rounded-full cursor-pointer"
              required
            />
          </div>

          <div className="leading-[0px] text-large font-semibold">
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 py-2 text-white bg-background-input rounded-xl"
            >
              <span>Sign Up</span>
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

            <div className="flex items-center gap-1 my-4">
              <div className="w-full h-[1px] bg-white"></div>
              <p>or</p>
              <div className="w-full h-[1px] bg-white"></div>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full gap-2 py-2 text-black bg-white rounded-xl"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2669 10.0608V14.1917H18.0076C17.7555 15.5202 16.999 16.6451 15.8645 17.4015L19.3263 20.0876C21.3433 18.2258 22.5069 15.4912 22.5069 12.2427C22.5069 11.4864 22.4391 10.759 22.313 10.0609L12.2669 10.0608Z"
                  fill="#4285F4"
                />
                <path
                  d="M6.28892 14.0305L5.50815 14.6282L2.74444 16.7809C4.4996 20.2621 8.09694 22.667 12.2666 22.667C15.1466 22.667 17.5611 21.7166 19.326 20.0876L15.8642 17.4015C14.9139 18.0415 13.7017 18.4294 12.2666 18.4294C9.4933 18.4294 7.13698 16.5579 6.29328 14.0366L6.28892 14.0305Z"
                  fill="#34A853"
                />
                <path
                  d="M2.74451 7.21961C2.01727 8.65471 1.60034 10.2741 1.60034 12.0002C1.60034 13.7262 2.0172 15.3458 2.74444 16.7809C2.74444 16.7905 6.29369 14.0268 6.29369 14.0268C6.08036 13.3868 5.95426 12.708 5.95426 12.0001C5.95426 11.2921 6.08036 10.6133 6.29369 9.97334L2.74451 7.21961Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2669 5.58079C13.8378 5.58079 15.2342 6.12381 16.3493 7.1711L19.4038 4.11658C17.5517 2.39054 15.1469 1.3335 12.2669 1.3335C8.09716 1.3335 4.49967 3.72867 2.74451 7.21961L6.29351 9.97355C7.13711 7.4523 9.49352 5.58079 12.2669 5.58079Z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-1 mt-8 text-large">
          <p className="font-medium text-text-2">Already have an account?</p>
          <Link to="/login" className="font-semibold border-b border-white">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
