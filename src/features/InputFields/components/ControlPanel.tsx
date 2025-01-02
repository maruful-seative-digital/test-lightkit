import { FormikProps } from "formik";
import InputField from "../../../components/shared/Input.";
import SelectField from "../../../components/shared/SelectField";
import { GeneralSettingFromType, ValuesFromType } from "../InputFields";
import Toggle from "../../../components/shared/Toggle";
import Tooltip from "../../../components/global/Tooltip";
import Button from "../../../components/shared/Button";

const typesAvailable: {
  label: string;
  value: string;
}[] = [
  { label: "Text", value: "text" },
  { label: "Email", value: "email" },
  { label: "Password", value: "password" },
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
  generalValues: GeneralSettingFromType | null;
  isGeneralSettingsEditing: boolean;
  setIsGeneralSettingsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editFieldId: string | null;
};

const ControlPanel = ({
  isGeneralSettingsEditing,
  setIsGeneralSettingsEditing,
  valuesFormik,
  generalSettingFormik,
  generalValues,
  editFieldId,
}: PropsType) => {
  const { values, handleChange, handleSubmit, setFieldValue, dirty } =
    valuesFormik;
  const {
    values: generalSettingValues,
    handleSubmit: handleGeneralSettingSubmit,
    setFieldValue: setGeneralSettingFieldValue,
    handleChange: handleGeneralSettingChanges,
    dirty: generalSettingDirty,
  } = generalSettingFormik;
  return (
    <div className="w-[34%]">
      {/* General settings container */}
      <div className={`w-full p-4 bg-[#2e2e2e]`}>
        {/* Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 font-semibold text-large">
            <h3>General settings</h3>
            <Tooltip title="Use this section for customizing the form info." />
          </div>

          {generalValues !== null && !isGeneralSettingsEditing ? (
            <button
              onClick={() => {
                setIsGeneralSettingsEditing(true);
              }}
              className="flex items-center gap-1 text-blue-text text-small"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1465 6.85359L9.14648 4.85359L9.85359 4.14648L11.8536 6.14648L11.1465 6.85359Z"
                  fill="#8AC2FF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4393 2.35352C11.0251 1.76774 11.9749 1.76774 12.5607 2.35352L13.6464 3.43931C14.2322 4.0251 14.2322 4.97484 13.6464 5.56063L6.20711 13H3V9.79286L10.4393 2.35352ZM11.8536 3.06063C11.6583 2.86537 11.3417 2.86537 11.1464 3.06063L4 10.2071V12H5.79289L12.9393 4.85352C13.1346 4.65826 13.1346 4.34168 12.9393 4.14642L11.8536 3.06063Z"
                  fill="#8AC2FF"
                />
              </svg>
              <span>Edit</span>
            </button>
          ) : null}
        </div>

        {/* Form */}
        <form
          onSubmit={handleGeneralSettingSubmit}
          className={`flex flex-col gap-4 mt-4 ${
            generalValues !== null && !isGeneralSettingsEditing
              ? "opacity-40"
              : "opacity-100"
          }`}
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

          {generalValues === null ? (
            <Button
              disabled={!generalSettingDirty}
              type="submit"
              variant="actionPrimaryHover"
              extraClassNames={`${
                generalSettingDirty ? "opacity-100" : "opacity-40"
              }`}
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
            </Button>
          ) : null}

          {isGeneralSettingsEditing ? (
            <Button type="submit" variant="actionPrimaryHover">
              <span>Update</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2C7.06653 2 6.6425 2.0425 6.23199 2.12371L6.42606 3.1047C6.773 3.03606 7.13204 3 7.5 3C10.5376 3 13 5.46243 13 8.5C13 11.5376 10.5376 14 7.5 14C7.13204 14 6.773 13.9639 6.42606 13.8953L6.23199 14.8763C6.6425 14.9575 7.06653 15 7.5 15C11.0899 15 14 12.0899 14 8.5C14 4.91015 11.0899 2 7.5 2Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M3.88815 3.09512C3.17953 3.56953 2.56953 4.17953 2.09512 4.88815L2.92609 5.44447C3.32778 4.84447 3.84447 4.32778 4.44447 3.92609L3.88815 3.09512Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M1.12371 7.23199C1.0425 7.6425 1 8.06653 1 8.5C1 8.93347 1.0425 9.3575 1.12371 9.76801L2.1047 9.57394C2.03606 9.227 2 8.86796 2 8.5C2 8.13204 2.03606 7.773 2.1047 7.42606L1.12371 7.23199Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M2.09512 12.1119C2.56953 12.8205 3.17953 13.4305 3.88815 13.9049L4.44447 13.0739C3.84447 12.6722 3.32778 12.1555 2.92609 11.5555L2.09512 12.1119Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M7 6.70711L5.35355 8.35355L4.64645 7.64645L7.5 4.79289L10.3536 7.64645L9.64645 8.35355L8 6.70711L8 12H7L7 6.70711Z"
                  fill="#F5F5F5"
                />
              </svg>
            </Button>
          ) : null}
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

          {editFieldId === null ? (
            <Button
              disabled={!dirty}
              type="submit"
              variant="actionPrimaryHover"
              extraClassNames={`${dirty ? "opacity-100" : "opacity-40"}`}
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
            </Button>
          ) : (
            <Button type="submit" variant="actionPrimaryHover">
              <span>Update</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2C7.06653 2 6.6425 2.0425 6.23199 2.12371L6.42606 3.1047C6.773 3.03606 7.13204 3 7.5 3C10.5376 3 13 5.46243 13 8.5C13 11.5376 10.5376 14 7.5 14C7.13204 14 6.773 13.9639 6.42606 13.8953L6.23199 14.8763C6.6425 14.9575 7.06653 15 7.5 15C11.0899 15 14 12.0899 14 8.5C14 4.91015 11.0899 2 7.5 2Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M3.88815 3.09512C3.17953 3.56953 2.56953 4.17953 2.09512 4.88815L2.92609 5.44447C3.32778 4.84447 3.84447 4.32778 4.44447 3.92609L3.88815 3.09512Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M1.12371 7.23199C1.0425 7.6425 1 8.06653 1 8.5C1 8.93347 1.0425 9.3575 1.12371 9.76801L2.1047 9.57394C2.03606 9.227 2 8.86796 2 8.5C2 8.13204 2.03606 7.773 2.1047 7.42606L1.12371 7.23199Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M2.09512 12.1119C2.56953 12.8205 3.17953 13.4305 3.88815 13.9049L4.44447 13.0739C3.84447 12.6722 3.32778 12.1555 2.92609 11.5555L2.09512 12.1119Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M7 6.70711L5.35355 8.35355L4.64645 7.64645L7.5 4.79289L10.3536 7.64645L9.64645 8.35355L8 6.70711L8 12H7L7 6.70711Z"
                  fill="#F5F5F5"
                />
              </svg>
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ControlPanel;
