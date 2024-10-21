import { FormikProps } from "formik";

import { FormValuesType, GeneralSettingFromType } from "../InputFields";
import InputField from "../../../components/shared/Input.";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<string | null>(
    "custom-input-field"
  );

  const blueFill = "#8ac2ff";
  const grayFill = "#6D6D6D";

  const { values: generalSettingValues } = generalSettingFormik;

  return (
    <div className="w-[66%]">
      <h3 className="p-4 text-large">Preview</h3>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-4 text-large border-y border-border-1">
        <div
          onClick={() => setActiveTab("custom-input-field")}
          className={`flex items-center gap-1 py-3 border-b cursor-pointer ${
            activeTab === "custom-input-field"
              ? "border-blue-border text-blue-text"
              : "text-text-inactive border-transparent"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3334 2.66666L9.33341 2.66666V3.33333L10.3334 3.33333C10.8857 3.33333 11.3334 3.78105 11.3334 4.33333L11.3334 11.6667C11.3334 12.2189 10.8857 12.6667 10.3334 12.6667H9.33341V13.3333H10.3334C10.8786 13.3333 11.3627 13.0715 11.6667 12.6668C11.9708 13.0715 12.4549 13.3333 13.0001 13.3333H14.0001V12.6667H13.0001C12.4478 12.6667 12.0001 12.2189 12.0001 11.6667L12.0001 4.33333C12.0001 3.78105 12.4478 3.33333 13.0001 3.33333H14.0001V2.66666H13.0001C12.4549 2.66666 11.9708 2.92845 11.6667 3.33317C11.3627 2.92845 10.8786 2.66666 10.3334 2.66666Z"
              fill={activeTab === "custom-input-field" ? blueFill : grayFill}
            />
            <path
              d="M3.33341 5.66666C3.33341 5.48257 3.48265 5.33333 3.66675 5.33333L10.0001 5.33333V4.66666L3.66675 4.66666C3.11446 4.66666 2.66675 5.11438 2.66675 5.66666L2.66675 10.3333C2.66675 10.8856 3.11446 11.3333 3.66675 11.3333L10.0001 11.3333L10.0001 10.6667H3.66675C3.48265 10.6667 3.33341 10.5174 3.33341 10.3333L3.33341 5.66666Z"
              fill={activeTab === "custom-input-field" ? blueFill : grayFill}
            />
            <path
              opacity="0.4"
              d="M6.79289 6C7.23835 6 7.46143 6.53857 7.14645 6.85355L4.85355 9.14645C4.53857 9.46143 4 9.23835 4 8.79289L4 6.5C4 6.22386 4.22386 6 4.5 6L6.79289 6Z"
              fill={activeTab === "custom-input-field" ? blueFill : grayFill}
            />
          </svg>
          <span>Custom Input Field</span>
        </div>

        <div
          onClick={() => setActiveTab("pre-made-templates")}
          className={`flex items-center gap-1 py-3 border-b cursor-pointer ${
            activeTab === "pre-made-templates"
              ? "border-blue-border text-blue-text"
              : "text-text-inactive border-transparent"
          }`}
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
              d="M1.5 5C1.5 3.34315 2.84315 2 4.5 2C6.15685 2 7.5 3.34315 7.5 5C7.5 6.65685 6.15685 8 4.5 8C2.84315 8 1.5 6.65685 1.5 5ZM4.5 3C3.39543 3 2.5 3.89543 2.5 5C2.5 6.10457 3.39543 7 4.5 7C5.60457 7 6.5 6.10457 6.5 5C6.5 3.89543 5.60457 3 4.5 3Z"
              fill={activeTab === "pre-made-templates" ? blueFill : grayFill}
            />
            <path
              d="M5 9V11H7V12H5V14H4V12H2L2 11H4V9H5Z"
              fill={activeTab === "pre-made-templates" ? blueFill : grayFill}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 9C9.44772 9 9 9.44772 9 10L9 13C9 13.5523 9.44772 14 10 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H10ZM10 13V10H13V13H10Z"
              fill={activeTab === "pre-made-templates" ? blueFill : grayFill}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3779 2.56531C11.9989 1.87045 11.0011 1.87045 10.6221 2.56531L8.46438 6.52115C8.1009 7.18752 8.58321 8 9.34227 8L13.6577 8C14.4168 8 14.8991 7.18752 14.5356 6.52115L12.3779 2.56531ZM11.5 3.04416L13.6577 7L9.34227 7L11.5 3.04416Z"
              fill={activeTab === "pre-made-templates" ? blueFill : grayFill}
            />
          </svg>
          <span>Pre-made Templates</span>
        </div>
      </div>

      <div className="py-6 pl-8 pr-4">
        {/* custom input field tab */}
        {activeTab === "custom-input-field" && (
          <div>
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
                <div className="w-full gap-4">
                  <div className="flex flex-col gap-[6px] w-full">
                    <label className="text-text-1 text-small">
                      {value.labelText.text}
                    </label>
                    <div className="flex items-center w-full gap-4">
                      <InputField
                        type={value.input.type}
                        readOnly
                        placeholder={
                          value.input.placeholder ? value.input.placeholder : ""
                        }
                      />

                      <div className="flex items-center gap-4 text-small">
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
        )}

        {/* pre-made templates tab */}
        {activeTab === "pre-made-templates" && <div>hello</div>}
      </div>
    </div>
  );
};

export default PreviewPanel;
