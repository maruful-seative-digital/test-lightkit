import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the form data (replace this with your actual form structure)
type FormData = {
  emailVerified?: boolean;
  generalValues?: {
    hasTitle?: boolean;
    title?: string;
    hasSubTitle?: boolean;
    subTitle?: string;
    buttonText?: string;
  };
  fromValues?: Array<{
    labelText?: { text?: string | null };
    input?: {
      type?: string;
      name?: string;
      isRequired?: boolean;
      placeholder?: string;
      hint?: string;
    };
  }>;
};

// Define the type for the context value
interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

// Create the context with the appropriate type
const FormContext = createContext<FormContextType | undefined>(undefined);

export const InputFormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the context
export const useInputFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useInputFormContext must be used within a InputFormProvider"
    );
  }
  return context;
};
