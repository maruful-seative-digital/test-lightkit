import { useContext } from "react";
import Button from "../shared/Button";
import { AuthContext } from "../../providers/AuthProvider";

type PropTypes = {
  children: React.ReactNode;
};

const AppHeader = ({ children }: PropTypes) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { loginWithGoogle, logout, user } = authContext;

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then()
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <header className="flex items-center justify-between w-full px-4 py-3 border-b bg-background-input border-border-1">
      {children}
      <div className="flex items-center justify-end gap-3">
        <div className="flex items-center gap-2">
          <a target="_blank" href="https://lightkit.webflow.io/docs">
            <Button variant="actionSecondary">Documentation</Button>
          </a>
          <a target="_blank" href="https://discord.gg/H9UQbTHnAT">
            <Button variant="actionSecondary">Get Support</Button>
          </a>
        </div>
        {user ? (
          <button onClick={handleLogout} className="text-white">
            logout
          </button>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="p-1 rounded bg-background-3 text-text-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2ZM6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5Z"
                fill="#F5F5F5"
              />
              <path
                d="M3 11.5C3 10.6716 3.67157 10 4.5 10H11.5C12.3284 10 13 10.6716 13 11.5V13H14V11.5C14 10.1193 12.8807 9 11.5 9H4.5C3.11929 9 2 10.1193 2 11.5V13H3V11.5Z"
                fill="#F5F5F5"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
