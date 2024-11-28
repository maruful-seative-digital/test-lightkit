import { createContext, ReactNode } from "react";

interface AuthContextType {
  currentUrl: string | null;
  accessInfo: {
    accessToken: string | null;
    refreshToken: string | null;
    userVerified: boolean | null;
  } | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode; // Type 'children' as ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const currentUrl = window.location.href;
  const accessInfo = { accessToken: "", refreshToken: "", userVerified: false };

  const authData = { currentUrl, accessInfo };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
