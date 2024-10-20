import { FormikProps } from "formik";

import { FormValuesType, GeneralSettingFromType } from "../InputFields";
import InputField from "../../../components/shared/Input.";

type PropsType = {
  fromValues: FormValuesType[];
  generalSettingFormik: FormikProps<GeneralSettingFromType>;
  handleInputDelete: (id: string) => void;
  setEditFieldId: React.Dispatch<React.SetStateAction<string | null>>;
};

const PreviewPanel = ({
  fromValues,
  generalSettingFormik,
  handleInputDelete,
  setEditFieldId,
}: PropsType): React.ReactElement => {
  const { values: generalSettingValues } = generalSettingFormik;
  return (
    <div className="w-[66%] px-4 pt-4">
      <div className="flex flex-col w-full gap-1 mb-4">
        {generalSettingValues.hasTitle ? (
          <h4 className="font-semibold text-large">
            {generalSettingValues.title}
          </h4>
        ) : null}

        {generalSettingValues.hasSubTitle ? (
          <h4 className="text-small text-text-2">
            {generalSettingValues.subTitle}
          </h4>
        ) : null}
      </div>

      {fromValues.map((value) => (
        <div id={value.id} className="mt-2">
          <div className="flex w-full gap-4">
            <div className="flex flex-col gap-[6px] w-full">
              <label className="text-text-1 text-small">
                {value.labelText.text}
              </label>
              <InputField
                type={value.input.type}
                readOnly
                placeholder={
                  value.input.placeholder ? value.input.placeholder : ""
                }
              />
            </div>
            <div className="flex items-center gap-4 mt-5 text-small">
              <button
                onClick={() => {
                  setEditFieldId(value.id);
                }}
                className="flex items-center gap-1 text-blue-text"
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
              <button
                onClick={() => handleInputDelete(value.id)}
                className="flex items-center gap-1 text-red-text"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 2C6.44772 2 6 2.44772 6 3V4H3V5H4V11.5C4 12.3284 4.67157 13 5.5 13H11.5C12.3284 13 13 12.3284 13 11.5V5H14V4H11V3C11 2.44772 10.5523 2 10 2H7ZM10 4V3H7V4H10ZM5 11.5V5H12V11.5C12 11.7761 11.7761 12 11.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z"
                    fill="#FF8A8A"
                  />
                </svg>

                <span>Delete</span>
              </button>
            </div>
          </div>
          {value.input.hint ? (
            <p className="text-small text-text-3 mt-[6px]">
              {value.input.hint}
            </p>
          ) : null}
        </div>
      ))}

      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 mt-4 rounded w-fit bg-background-inverse text-text-inverse text-small"
      >
        {generalSettingValues.buttonText}
      </button>
    </div>
  );
};

export default PreviewPanel;
