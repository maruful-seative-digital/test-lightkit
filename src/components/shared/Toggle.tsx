type BaseInputAttributes = React.ComponentPropsWithoutRef<"input">;

interface InputProps extends BaseInputAttributes {
  extraClassNames?: string;
}

const Toggle = (props: InputProps): React.ReactElement => {
  return (
    <div
      className={`relative w-8 h-5 border rounded-full cursor-pointer border-border-3 ${
        props.checked ? "bg-action-primary" : "bg-background-3"
      }`}
    >
      <input {...props} type="checkbox" className="sr-only peer" />
      <span className="absolute w-4 transition-all duration-300 rounded-full h-4 bg-background-inverse left-[2px] top-[1px] peer-checked:left-3"></span>
    </div>
  );
};

export default Toggle;
