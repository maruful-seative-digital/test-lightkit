import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";

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

export default function ForgotPassword() {
  const [userData, setUserData] = useState<User[]>([]);

  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getDataFromFirestore();
      setUserData(data);
    }
    fetchData();
  }, []);

  const handleForgetPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const validEmail = userData.find((data) => data.email === email);

    if (validEmail) {
      resetPassword(email)
        .then(() => {
          webflow.notify({
            type: "Success",
            message: "Password reset email sent successfully!",
          });

          navigate("/login");

          form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      webflow.notify({
        type: "Error",
        message: "Please enter a valid email address",
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-52.25px)] flex-col">
      <h2 className="text-xl">Forgot Password?</h2>
      <p className="mt-1 text-small text-text-2">
        No worries! Enter your email to reset your password.
      </p>

      {/* form wrapper */}
      <div>
        <form onSubmit={handleForgetPassword} className="my-4 w-80">
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

          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 py-2 text-white bg-action-primary-hover rounded-xl leading-[0px] text-large font-semibold"
          >
            <span>Submit</span>
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
        </form>

        <Link
          to="/login"
          className="flex items-center gap-2 font-medium text-small text-text-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6667 10.75C17.0809 10.75 17.4167 10.4142 17.4167 10C17.4167 9.58579 17.0809 9.25 16.6667 9.25V10.75ZM16.6667 9.25H3.33337V10.75H16.6667V9.25Z"
              fill="#bdbdbd"
            />
            <path
              d="M8.33337 5L3.33337 10L8.33337 15"
              stroke="#bdbdbd"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Back to sign in</span>
        </Link>
      </div>
    </div>
  );
}
