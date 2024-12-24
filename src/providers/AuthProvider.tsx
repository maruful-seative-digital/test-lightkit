import { createContext, ReactNode, useState } from "react";

type User = Record<string, unknown>;

export type AuthContextTypes = {
  name: string;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextTypes | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const name = "adnan";

  const authData: AuthContextTypes = { user, setUser, name };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
