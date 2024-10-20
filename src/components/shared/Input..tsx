type BaseInputAttributes = React.ComponentPropsWithoutRef<"input">;

interface InputProps extends BaseInputAttributes {
  extraClassNames?: string;
}

export default function InputField({
  extraClassNames = "",
  ...restProps
}: InputProps) {
  return (
    <input
      className={`p-1 border border-border-2 rounded bg-background-input border-border-2/40 text-small text-text-1 shadow-input-inner-shadow placeholder:text-text-1 ${extraClassNames}`}
      {...restProps}
    />
  );
}
