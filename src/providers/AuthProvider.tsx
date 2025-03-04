import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  UserCredential,
  User,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export type AuthContextTypes = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginWithGoogle: () => Promise<UserCredential>;
  loginWithPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  logout: () => Promise<void>;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  updateUserProfile: (name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextTypes | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = (): Promise<UserCredential> => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name: string): Promise<void> => {
    if (!auth.currentUser) {
      return Promise.reject(new Error("No user is currently signed in."));
    }

    return updateProfile(auth?.currentUser, {
      displayName: name,
    });
  };

  const resetPassword = (email: string): Promise<void> => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData: AuthContextTypes = {
    user,
    setUser,
    loading,
    setLoading,
    loginWithGoogle,
    loginWithPassword,
    logout,
    createUser,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextTypes => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
