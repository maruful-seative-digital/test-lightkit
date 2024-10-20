type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;
type ButtonVariantTypes = {
  base: string;
  outline: string;
  defaultPrimary: string;
  defaultSecondary: string;
};

interface ButtonProps extends BaseButtonAttributes {
  extraClassNames?: string;
  variant: "base" | "outline" | "defaultPrimary" | "defaultSecondary";
  children: React.ReactNode;
}

const variants: ButtonVariantTypes = {
  base: "bg- text-gray-800  hover:bg-gray-100",
  outline: "bg-gray-700 text-gray-50  hover:bg-gray-600",
  defaultPrimary: "bg-background-inverse text-text-inverse",
  defaultSecondary:
    "bg-background-3 shadow-action-secondary text-text-1 py-1 px-2 text-small",
};

const Button = ({
  children,
  variant = "defaultPrimary",
  extraClassNames = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`py-1 px-2 rounded-md ${variants[variant]} ${extraClassNames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
