// SharedStateContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface SharedStateContextType {
  selectedFeature: string | null;
  setSelectedFeature: React.Dispatch<React.SetStateAction<string | null>>;
}

// Define props for the provider to include children
interface SharedStateProviderProps {
  children: ReactNode;
}

const SharedStateContext = createContext<SharedStateContextType | undefined>(
  undefined
);

export const SharedStateProvider: React.FC<SharedStateProviderProps> = ({
  children,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const states = { selectedFeature, setSelectedFeature };

  return (
    <SharedStateContext.Provider value={states}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = (): SharedStateContextType => {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }
  return context;
};
