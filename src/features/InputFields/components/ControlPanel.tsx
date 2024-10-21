import { FormikProps } from "formik";
import InputField from "../../../components/shared/Input.";
import SelectField from "../../../components/shared/SelectField";
import { GeneralSettingFromType, ValuesFromType } from "../InputFields";
import Toggle from "../../../components/shared/Toggle";
import Tooltip from "../../../components/global/Tooltip";

const typesAvailable: {
  label: string;
  value: string;
}[] = [
  { label: "Text", value: "text" },
  { label: "Email", value: "email" },
  { label: "Number", value: "number" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Radio", value: "radio" },
  { label: "Tel", value: "tel" },
  { label: "URL", value: "url" },
  { label: "Date", value: "date" },
  { label: "Datetime-local", value: "datetime-local" },
  { label: "Time", value: "time" },
];

type PropsType = {
  valuesFormik: FormikProps<ValuesFromType>;
  generalSettingFormik: FormikProps<GeneralSettingFromType>;
};

const ControlPanel = ({ valuesFormik, generalSettingFormik }: PropsType) => {
  const { values, handleChange, handleSubmit, setFieldValue } = valuesFormik;
  const {
    values: generalSettingValues,
    handleSubmit: handleGeneralSettingSubmit,
    setFieldValue: setGeneralSettingFieldValue,
    handleChange: handleGeneralSettingChanges,
  } = generalSettingFormik;
  return (
    <div className="w-[34%]">
      {/* General settings container */}
      <div className="w-full p-4 bg-[#2e2e2e]">
        {/* Title */}
        <div className="flex items-center gap-1 font-semibold text-large">
          <h3>General settings</h3>
          <Tooltip title="Use this section for customizing the form info." />
        </div>

        {/* Form */}
        <form
          onSubmit={handleGeneralSettingSubmit}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col w-full gap-1">
            <label className="flex items-center justify-between text-small">
              <span>Form title</span>
              <Toggle
                name="hasTitle"
                checked={generalSettingValues.hasTitle}
                onChange={(event) =>
                  setGeneralSettingFieldValue("hasTitle", event.target.checked)
                }
              />
            </label>

            <InputField
              type="text"
              id="title"
              name="title"
              value={generalSettingValues.title}
              onChange={handleGeneralSettingChanges}
              extraClassNames={`${
                !generalSettingValues.hasTitle ? "hidden" : ""
              }`}
              placeholder="Enter title here"
              disabled={!generalSettingValues.hasTitle}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="flex items-center justify-between text-small">
              <div className="flex items-center gap-1">
                <span>Form subtitle</span>
                <Tooltip title="Optional block to add more context about the form." />
              </div>
              <Toggle
                name="hasSubTitle"
                checked={generalSettingValues.hasSubTitle}
                onChange={(event) =>
                  setGeneralSettingFieldValue(
                    "hasSubTitle",
                    event.target.checked
                  )
                }
              />
            </label>

            <InputField
              type="text"
              id="subTitle"
              name="subTitle"
              value={generalSettingValues.subTitle}
              onChange={handleGeneralSettingChanges}
              extraClassNames={`${
                !generalSettingValues.hasSubTitle ? "hidden" : ""
              }`}
              placeholder="Enter subtitle here"
              disabled={!generalSettingValues.hasSubTitle}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="buttonText" className="text-small">
              Button label
            </label>
            <InputField
              type="text"
              id="buttonText"
              name="buttonText"
              value={generalSettingValues.buttonText}
              onChange={handleGeneralSettingChanges}
            />
          </div>
        </form>
      </div>

      {/* Input settings container */}
      <div className="w-full px-4 py-6">
        {/* Title */}
        <div className="flex items-center gap-1 font-semibold text-large">
          <h3>Input settings</h3>
          <Tooltip title="Use this section for customizing the input field." />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="type"
              className="flex items-center gap-1 text-small"
            >
              <span>Input type</span>
              <Tooltip title="Select your preferred input type from the list given." />
            </label>
            <SelectField
              options={typesAvailable}
              id="type"
              name="type"
              value={values.type}
              onChange={(event) => {
                handleChange(event);
                if (
                  event.target.value === "radio" ||
                  event.target.value === "checkbox"
                ) {
                  setFieldValue("hasHint", false);
                  setFieldValue("hasPlaceholder", false);
                } else {
                  setFieldValue("hasHint", true);
                  setFieldValue("hasPlaceholder", true);
                }
              }}
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="flex items-center justify-between text-small">
              <div className="flex items-center gap-1">
                <span>Is Required</span>
                <Tooltip title="Make the input field mandatory or not." />
              </div>

              <Toggle
                name="isRequired"
                checked={values.isRequired}
                onChange={(event) =>
                  setFieldValue("isRequired", event.target.checked)
                }
              />
            </label>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="flex items-center justify-between text-small">
              <div className="flex items-center gap-1">
                <span>Label text</span>
                <Tooltip title="Label text will be added as the title of the input field." />
              </div>

              <Toggle
                name="hasLabel"
                checked={values.hasLabel}
                onChange={(event) =>
                  setFieldValue("hasLabel", event.target.checked)
                }
              />
            </label>
            <InputField
              type="text"
              id="label"
              extraClassNames={`${!values.hasLabel ? "hidden" : ""}`}
              value={values.label}
              onChange={handleChange}
              disabled={!values.hasLabel}
              placeholder="Enter label here"
            />
          </div>

          {values.type === "checkbox" || values.type === "radio" ? null : (
            <div className="flex flex-col w-full gap-1">
              <label className="flex items-center justify-between text-small">
                <div className="flex items-center gap-1">
                  <span>Placeholder text</span>
                  <Tooltip title="Placeholder text will be added as the default field text." />
                </div>

                <Toggle
                  name="hasPlaceholder"
                  checked={values.hasPlaceholder}
                  disabled={
                    values.type === "checkbox" || values.type === "radio"
                  }
                  onChange={(event) =>
                    setFieldValue("hasPlaceholder", event.target.checked)
                  }
                />
              </label>
              <InputField
                type="text"
                id="placeholder"
                value={values.placeholder}
                onChange={handleChange}
                extraClassNames={`${!values.hasPlaceholder ? "hidden" : ""}`}
                placeholder="Enter placeholder here"
              />
            </div>
          )}

          {values.type === "checkbox" || values.type === "radio" ? null : (
            <div className="flex flex-col w-full gap-1">
              <label className="flex items-center justify-between text-small">
                <div className="flex items-center gap-1">
                  <span>Hint text</span>
                  <Tooltip title="Hint text will be added to give more context about the input field." />
                </div>

                <Toggle
                  name="hasLabel"
                  checked={values.hasHint}
                  disabled={
                    values.type === "checkbox" || values.type === "radio"
                  }
                  onChange={(event) =>
                    setFieldValue("hasHint", event.target.checked)
                  }
                />
              </label>
              <InputField
                type="text"
                id="hint"
                value={values.hint}
                extraClassNames={`${!values.hasHint ? "hidden" : ""}`}
                onChange={handleChange}
                disabled={!values.hasHint}
                placeholder="Enter hint here"
              />
            </div>
          )}

          <div className="flex flex-col w-full gap-1">
            <label className="flex items-center gap-1 text-small">
              <span>CMS field title</span>
              <Tooltip title="A column will be created on Webflow CMS by this title." />
            </label>
            <InputField
              type="text"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter CMS field title here"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-1 px-3 py-2 w-fit bg-[#006ACC] rounded text-[12.5px]"
          >
            <span>Add to preview</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00004 4C5.37598 4 3.11613 5.55492 2.08964 7.79148C2.02887 7.92388 2.02888 8.07621 2.08965 8.20861C3.11615 10.4451 5.37597 12 8.00001 12C10.6241 12 12.8839 10.4451 13.9104 8.20852C13.9712 8.07612 13.9712 7.92379 13.9104 7.79139C12.8839 5.55488 10.6241 4 8.00004 4ZM8.00001 11C5.86346 11 4.01048 9.78173 3.09961 8.00004C4.01047 6.21831 5.86347 5 8.00004 5C10.1366 5 11.9896 6.21827 12.9004 7.99996C11.9896 9.78169 10.1366 11 8.00001 11Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlPanel;
