type BaseSelectAttributes = React.ComponentPropsWithoutRef<"select">;

type OptionProp = {
  label: string;
  value: string;
};

interface SelectProps extends BaseSelectAttributes {
  options: OptionProp[];
}

const SelectField = ({
  options,
  ...restProp
}: SelectProps): React.ReactElement => {
  return (
    <select
      className="p-2 rounded shadow-action-secondary bg-background-5 text-text-1 text-small"
      {...restProp}
    >
      {options.map((option: OptionProp) => (
        <option className="px-4 py-2" value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
