import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useAuth } from "../providers/AuthProvider";

const useEmailVerification = () => {
  const [userEmailVerified, setUserEmailVerified] = useState(
    auth.currentUser?.emailVerified
  );

  const { user, setUser } = useAuth();

  useEffect(() => {
    setUserEmailVerified(user?.emailVerified);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "visible") {
        if (user) {
          await user.reload();
          if (user.emailVerified) {
            setUserEmailVerified(user.emailVerified);
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [user]);

  return userEmailVerified;
};

export default useEmailVerification;
