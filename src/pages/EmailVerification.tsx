import { sendEmailVerification } from "firebase/auth";
import { useAuth } from "../providers/AuthProvider";

export default function EmailVerification() {
  const { user } = useAuth();

  const handleEmailVerification = () => {
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          webflow.notify({
            type: "Success",
            message: "Email verification link sent successfully!",
          });
        })
        .catch((error) => {
          console.log(error.message);
          webflow.notify({
            type: "Error",
            message: error.message,
          });
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-52.25px)] flex-col w-80 mx-auto">
      <h2 className="text-xl">Check Your Email</h2>
      <p className="mt-1 text-center text-small text-text-2">
        Please use the verification link sent on your inbox to complete your
        registration.
      </p>

      <div className="flex items-center justify-center gap-1 mt-8 text-large">
        <p className="font-medium text-text-2">Haven’t received the email?</p>
        <button
          onClick={handleEmailVerification}
          className="font-semibold border-b border-white"
        >
          Click here to resend
        </button>
      </div>
    </div>
  );
}
