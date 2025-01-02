import { FormikProps } from "formik";

import { FormValuesType, GeneralSettingFromType } from "../InputFields";
import InputField from "../../../components/shared/Input.";
import { useState } from "react";
import formImage1 from "../../../assets/input-field/form-version-one-img.png";
import formImage2 from "../../../assets/input-field/form-version-two-img.png";

type PropsType = {
  fromValues: FormValuesType[];
  generalSettingFormik: FormikProps<GeneralSettingFromType>;
  handleInputDelete: (id: string) => void;
  editFieldId: string | null;
  setEditFieldId: React.Dispatch<React.SetStateAction<string | null>>;
  generalValues: GeneralSettingFromType | null;
};

const PreviewPanel = ({
  generalValues,
  fromValues,
  // generalSettingFormik,
  handleInputDelete,
  editFieldId,
  setEditFieldId,
}: PropsType): React.ReactElement => {
  const [activeTab, setActiveTab] = useState<string | null>(
    "custom-input-field"
  );

  const blueFill = "#8ac2ff";
  const grayFill = "#6D6D6D";

  const formTemplates = [
    {
      id: 0,
      name: "Form Template 1",
      image: formImage1,
      link: "https://lightkit.webflow.io/components/forms/form-1#form-template-v1",
    },
    {
      id: 1,
      name: "Form Template 2",
      image: formImage2,
      link: "https://lightkit.webflow.io/components/forms/form-2#form-template-v2",
    },
  ];

  const handleCopy = async (id: number) => {
    const res = await fetch("/inputTemplates.json");
    const data = await res.json();

    const copyJson = (event: ClipboardEvent) => {
      event.preventDefault();

      if (event.clipboardData) {
        // Set the copied data in the clipboard as a string
        event.clipboardData.setData(
          "application/json",
          JSON.stringify(data[id])
        );

        webflow.notify({ type: "Success", message: "Form template copied!" });
      } else {
        console.error("Clipboard data is not available.");
      }
    };

    document.addEventListener("copy", copyJson);
    document.execCommand("copy");
    document.removeEventListener("copy", copyJson);
  };

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

      <div className="px-4 py-6">
        {/* custom input field tab */}
        {activeTab === "custom-input-field" && (
          <div>
            <div className="flex flex-col w-full gap-1 mb-4">
              {generalValues && generalValues.hasTitle ? (
                <h4 className="font-semibold text-large">
                  {generalValues.title}
                </h4>
              ) : null}

              {generalValues && generalValues.hasSubTitle ? (
                <h4 className="text-small text-text-2">
                  {generalValues.subTitle}
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
                        extraClassNames={`${
                          value.input.type === "checkbox" ||
                          value.input.type === "radio"
                            ? "shadow-none"
                            : ""
                        }`}
                      />

                      {value.id !== editFieldId ? (
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
                      ) : (
                        <div className="w-1/3"></div>
                      )}
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

            {generalValues || fromValues.length !== 0 ? (
              <>
                {generalValues && (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 mt-4 rounded w-fit bg-background-inverse text-text-inverse text-small"
                  >
                    {generalValues.buttonText}
                  </button>
                )}
              </>
            ) : (
              <div className="flex gap-1 flex-col items-center justify-center p-8 rounded bg-background-2 text-small max-w-[280px] mx-auto">
                <svg
                  width="16"
                  height="32"
                  viewBox="0 0 16 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_262_277)">
                    <path
                      d="M10.2619 10.7024L9.92746 11.0741L10.2619 10.7024ZM12.9011 13.0777L12.5666 13.4493L12.9011 13.0777ZM14.436 14.7694L13.9792 14.9728L13.9792 14.9728L14.436 14.7694ZM2.11436 21.8856L2.46792 21.5321H2.46791L2.11436 21.8856ZM13.8856 21.8856L13.532 21.5321L13.532 21.5321L13.8856 21.8856ZM9.33331 22.1667H6.66665V23.1667H9.33331V22.1667ZM1.83331 17.3333V14.6667H0.833313V17.3333H1.83331ZM14.1666 17.0419V17.3333H15.1666V17.0419H14.1666ZM9.92746 11.0741L12.5666 13.4493L13.2356 12.706L10.5964 10.3308L9.92746 11.0741ZM15.1666 17.0419C15.1666 15.9164 15.1767 15.2037 14.8927 14.566L13.9792 14.9728C14.1566 15.371 14.1666 15.828 14.1666 17.0419H15.1666ZM12.5666 13.4493C13.4689 14.2614 13.8019 14.5747 13.9792 14.9728L14.8927 14.566C14.6087 13.9283 14.0722 13.459 13.2356 12.706L12.5666 13.4493ZM6.68651 9.83333C7.74104 9.83333 8.13898 9.84105 8.49366 9.97715L8.85193 9.04353C8.28403 8.82561 7.66531 8.83333 6.68651 8.83333V9.83333ZM10.5964 10.3308C9.87243 9.67918 9.41975 9.26142 8.85193 9.04353L8.49366 9.97715C8.84841 10.1133 9.14764 10.3722 9.92746 11.0741L10.5964 10.3308ZM6.66665 22.1667C5.39543 22.1667 4.49232 22.1656 3.80721 22.0735C3.13649 21.9833 2.75005 21.8142 2.46792 21.5321L1.76081 22.2392C2.25972 22.7381 2.89235 22.9595 3.67396 23.0646C4.4412 23.1677 5.4237 23.1667 6.66665 23.1667V22.1667ZM0.833313 17.3333C0.833313 18.5763 0.832251 19.5588 0.935403 20.326C1.04049 21.1076 1.2619 21.7403 1.76081 22.2392L2.46791 21.5321C2.18578 21.2499 2.01666 20.8635 1.92649 20.1928C1.83437 19.5077 1.83331 18.6045 1.83331 17.3333H0.833313ZM9.33331 23.1667C10.5763 23.1667 11.5588 23.1677 12.326 23.0646C13.1076 22.9595 13.7402 22.7381 14.2392 22.2392L13.532 21.5321C13.2499 21.8142 12.8635 21.9833 12.1927 22.0735C11.5076 22.1656 10.6045 22.1667 9.33331 22.1667V23.1667ZM14.1666 17.3333C14.1666 18.6045 14.1656 19.5077 14.0735 20.1928C13.9833 20.8635 13.8142 21.2499 13.532 21.5321L14.2392 22.2392C14.7381 21.7403 14.9595 21.1076 15.0646 20.326C15.1677 19.5588 15.1666 18.5763 15.1666 17.3333H14.1666ZM1.83331 14.6667C1.83331 13.3954 1.83437 12.4923 1.92649 11.8072C2.01666 11.1365 2.18578 10.7501 2.46792 10.4679L1.76081 9.76082C1.2619 10.2597 1.04049 10.8924 0.935403 11.674C0.832251 12.4412 0.833313 13.4237 0.833313 14.6667H1.83331ZM6.68651 8.83333C5.4369 8.83333 4.44959 8.83228 3.67923 8.93538C2.89486 9.04036 2.26011 9.26152 1.76081 9.76082L2.46792 10.4679C2.74967 10.1862 3.13729 10.0168 3.81188 9.92654C4.50048 9.83438 5.40872 9.83333 6.68651 9.83333V8.83333Z"
                      fill="#F5F5F5"
                    />
                    <path
                      opacity="0.5"
                      d="M8.66669 9.66667V11.3333C8.66669 12.9047 8.66669 13.6904 9.15484 14.1785C9.643 14.6667 10.4287 14.6667 12 14.6667H14.6667"
                      stroke="#F5F5F5"
                    />
                    <ellipse
                      opacity="0.5"
                      cx="11.3334"
                      cy="17.6667"
                      rx="0.666667"
                      ry="1"
                      fill="#F5F5F5"
                    />
                    <path
                      opacity="0.5"
                      d="M6 19.6667C7.2111 20.4741 8.7889 20.4741 10 19.6667"
                      stroke="#F5F5F5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <ellipse
                      opacity="0.5"
                      cx="4.66667"
                      cy="17.6667"
                      rx="0.666667"
                      ry="1"
                      fill="#F5F5F5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_262_277">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="text-center">
                  <h3>Nothing is cooked yet!</h3>
                  <p className="text-text-2">
                    Start building from pre-made templates or build your own.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* pre-made templates tab */}
        {activeTab === "pre-made-templates" && (
          <div className="grid grid-cols-2 gap-2">
            {formTemplates.map((template) => (
              <div
                key={template.id}
                className="h-full bg-gradient-to-b from-white/[.12] to-white/10 rounded-md py-1 px-[6px] shadow-action-colored text-small flex flex-col gap-2"
              >
                <img
                  src={template.image}
                  alt="Preview of form template one"
                  className="w-full h-full rounded-md"
                />

                {/* template card text and buttons wrapper */}
                <div className="flex items-center justify-between w-full h-full">
                  <h4>{template.name}</h4>

                  {/* form buttons wrapper */}
                  <div className="flex items-center gap-1">
                    {/* preview button wrapper */}
                    <button
                      onClick={() => window.open(template.link, "_blank")}
                      className="bg-gradient-to-b from-white/[.12] to-white/10 shadow-action-secondary rounded p-[2px]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.7039 5.10983C5.10926 5.10983 5.43788 4.78122 5.43788 4.37585C5.43788 3.97049 5.10926 3.64188 4.7039 3.64188C4.29853 3.64188 3.96992 3.97049 3.96992 4.37585C3.96992 4.78122 4.29853 5.10983 4.7039 5.10983Z"
                          fill="#F5F5F5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.70392 2.41858C3.41992 2.41858 2.31413 3.17943 1.81185 4.27382C1.78212 4.33861 1.78212 4.41314 1.81185 4.47793C2.31414 5.5723 3.41991 6.33313 4.7039 6.33313C5.98791 6.33313 7.09369 5.57228 7.59597 4.47789C7.6257 4.4131 7.6257 4.33856 7.59597 4.27378C7.09368 3.17941 5.98791 2.41858 4.70392 2.41858ZM4.7039 5.84381C3.65845 5.84381 2.75176 5.24769 2.30605 4.37587C2.75175 3.50404 3.65845 2.9079 4.70392 2.9079C5.74937 2.9079 6.65607 3.50402 7.10177 4.37584C6.65607 5.24767 5.74937 5.84381 4.7039 5.84381Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleCopy(template.id)}
                      className="bg-action-primary shadow-action-secondary rounded p-[2px]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.40497 1.92926C3.40497 1.65902 3.62404 1.43994 3.89429 1.43994L6.8302 1.43994C7.10044 1.43994 7.31951 1.65902 7.31951 1.92926L7.31951 4.86517C7.31951 5.13541 7.10044 5.35449 6.8302 5.35449L3.89429 5.35449C3.62404 5.35449 3.40497 5.13541 3.40497 4.86517L3.40497 1.92926ZM3.89429 1.92926L6.8302 1.92926L6.8302 4.86517L3.89429 4.86517L3.89429 1.92926Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M1.93701 2.9079L1.93701 6.33313C1.93701 6.60337 2.15609 6.82244 2.42633 6.82244L5.85156 6.82244V6.33313L2.42633 6.33313L2.42633 2.9079H1.93701Z"
                          fill="#F5F5F5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.40497 1.92926C3.40497 1.65902 3.62404 1.43994 3.89429 1.43994L6.8302 1.43994C7.10044 1.43994 7.31951 1.65902 7.31951 1.92926L7.31951 4.86517C7.31951 5.13541 7.10044 5.35449 6.8302 5.35449L3.89429 5.35449C3.62404 5.35449 3.40497 5.13541 3.40497 4.86517L3.40497 1.92926ZM3.89429 1.92926L6.8302 1.92926L6.8302 4.86517L3.89429 4.86517L3.89429 1.92926Z"
                        />
                        <path d="M1.93701 2.9079L1.93701 6.33313C1.93701 6.60337 2.15609 6.82244 2.42633 6.82244L5.85156 6.82244V6.33313L2.42633 6.33313L2.42633 2.9079H1.93701Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;
