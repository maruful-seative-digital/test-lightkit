type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;
type ButtonVariantTypes = {
  actionPrimaryHover: string;
  actionSecondary: string;
};

interface ButtonProps extends BaseButtonAttributes {
  extraClassNames?: string;
  variant: "actionSecondary" | "actionPrimaryHover";
  children: React.ReactNode;
}

const variants: ButtonVariantTypes = {
  actionPrimaryHover:
    "bg-action-primary-hover flex items-center gap-1 px-3 py-2 rounded w-fit text-large text-action-primary",
  actionSecondary:
    "bg-background-3 shadow-action-secondary text-text-1 py-1 px-2 text-small",
};

const Button = ({
  children,
  variant = "actionSecondary",
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
