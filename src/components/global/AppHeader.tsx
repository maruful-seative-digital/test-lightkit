import { useState } from "react";
import Button from "../shared/Button";
import { useAuth } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import placeholderUserImage from "../../assets/placeholders/placeholder-user.png";
import useEmailVerification from "../../hooks/useEmailVerification";

type PropTypes = {
  children: React.ReactNode;
};

const AppHeader = ({ children }: PropTypes) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const emailVerified = useEmailVerification();

  console.log("email verified: ", emailVerified);

  const handleLogout = () => {
    logout()
      .then(() => {
        setShowMenu(false);
        webflow.notify({
          type: "Success",
          message: "User logged out successfully!",
        });
        navigate("/");
      })
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
          <a target="_blank" href="https://discord.com/invite/Fq4knTuw">
            <Button variant="actionSecondary">Get Support</Button>
          </a>
        </div>
        {user ? (
          <div className="relative flex items-center">
            <button onClick={() => setShowMenu(!showMenu)}>
              <img
                src={user?.photoURL ? user.photoURL : placeholderUserImage}
                alt="User image"
                className="w-6 h-6 rounded-full"
                loading="lazy"
              />
            </button>

            {/* menu list */}
            {showMenu && (
              <div className="absolute z-10 overflow-hidden text-white border rounded -right-1 h-fit w-fit top-8 text-small bg-background-2 border-border-1">
                <ul>
                  <li>
                    <Link
                      onClick={() => setShowMenu(false)}
                      to="/profile"
                      className="block px-4 py-2 cursor-pointer hover:bg-background-3"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setShowMenu(false)}
                      to="/subscription"
                      className="block px-4 py-2 cursor-pointer hover:bg-background-3"
                    >
                      Subscription
                    </Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 cursor-pointer hover:bg-background-3"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/signup"
            // className="p-1 rounded bg-background-3 text-text-1"
          >
            <button className="flex items-center gap-1 px-2 py-1 rounded bg-action-primary-hover w-fit shadow-action-secondary text-text-1 text-small">
              Get Started
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
