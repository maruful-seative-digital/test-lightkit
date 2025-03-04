import { FormikProps } from "formik";

import { FormValuesType, GeneralSettingFromType } from "../InputFields";
import Button from "../../../components/shared/Button";
import { useAuth } from "../../../providers/AuthProvider";
import useEmailVerification from "../../../hooks/useEmailVerification";
import { sendEmailVerification } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { addDataToFirestore } from "../../../utils/addDataToFirestore";
import { GetDataFromFirestore } from "../../../utils/getDataFromFirestore";

type PropsType = {
  fromValues: FormValuesType[];
  generalSettingFormik: FormikProps<GeneralSettingFromType>;
  selectedWebflowEl: string | null | undefined;
  generalValues: GeneralSettingFromType | null;
};

const CreateInputWebflowElements = ({
  fromValues,
  // generalSettingFormik,
  selectedWebflowEl,
  generalValues,
}: PropsType): React.ReactElement => {
  const { user, loginWithGoogle } = useAuth();
  const emailVerified = useEmailVerification();

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/signup/email-verification";

  const { userData } = GetDataFromFirestore();

  async function createWebflowElement() {
    const selectedElement = await webflow.getSelectedElement();

    if (!emailVerified) {
      return webflow.notify({
        type: "Info",
        message: "Please verify your email to Insert",
      });
    }

    if (selectedElement?.children && selectedElement.type === "FormForm") {
      // Main Form div
      const fromWFEl = await selectedElement?.append(
        webflow.elementPresets.DivBlock
      );

      // Form Title
      if (generalValues?.hasTitle) {
        const formHeadingWFEl = await fromWFEl?.append(
          webflow.elementPresets.DOM
        );

        formHeadingWFEl.setTag("h3");
        formHeadingWFEl.setTextContent(generalValues?.title);
      }

      // Form Subtitle
      if (generalValues?.hasSubTitle) {
        const formHeadingWFEl = await fromWFEl?.append(
          webflow.elementPresets.Paragraph
        );

        formHeadingWFEl.setTextContent(generalValues?.subTitle);
      }

      fromValues.forEach(async (item) => {
        // Input Wrapper Div
        const inputWrapperDivWFEl = await fromWFEl?.append(
          webflow.elementPresets.DivBlock
        );

        // Input Label
        if (item.labelText.text !== null) {
          const inputLabelWFEl = await inputWrapperDivWFEl.append(
            webflow.elementPresets.FormBlockLabel
          );
          await inputLabelWFEl.setTextContent(item.labelText.text);
        }

        // Input Element
        const formInputWFEl = await inputWrapperDivWFEl.append(
          webflow.elementPresets.DOM
        );

        await formInputWFEl?.setTag("input");
        await formInputWFEl?.setAttribute("type", item.input.type);
        await formInputWFEl?.setAttribute("name", item.input.name);

        if (item.input.isRequired) {
          await formInputWFEl?.setAttribute("required", "true");
        }

        if (item.input.placeholder !== null) {
          await formInputWFEl?.setAttribute(
            "placeholder",
            item.input.placeholder
          );
        }

        // Hint paragraph
        if (item.input.hint !== null) {
          const inputHintWFEl = await inputWrapperDivWFEl.append(
            webflow.elementPresets.FormBlockLabel
          );
          await inputHintWFEl.setTextContent(item.input.hint);
        }
      });

      const submitButtonWFEl = await selectedElement?.append(
        webflow.elementPresets.FormButton
      );

      submitButtonWFEl.setCustomAttribute(
        "value",
        generalValues?.buttonText || "Submit"
      );
    }
  }

  const handleGoogleLogin = async () => {
    loginWithGoogle()
      .then(async (result) => {
        const user = result.user;
        const pricingPlan = "free";

        sendEmailVerification(user).then(() => {
          if (result.user) {
            navigate(redirectPath);
          }

          if (!user.emailVerified) {
            webflow.notify({
              type: "Info",
              message: "Email verification mail sent to your email address",
            });
          } else {
            webflow.notify({
              type: "Success",
              message: "User logged in successfully!",
            });
          }
        });

        const email = user.email;
        const displayName = user.displayName;

        if (!email || !displayName) {
          console.error("Missing user information.");
          return;
        }

        const userAlreadyRegistered = userData.find(
          (user) => user.email === email
        );

        if (!userAlreadyRegistered) {
          const added = await addDataToFirestore(
            displayName,
            email,
            pricingPlan
          );

          if (added) {
            webflow.notify({
              type: "Success",
              message: "User registered successfully!",
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
  };

  return (
    <div className="fixed bottom-0 right-0 w-[66%] px-4 py-3 border-t border-border-1 flex items-center justify-between bg-background-1 border-l">
      {selectedWebflowEl !== "FormForm" ? (
        <div className="flex items-center gap-1 text-text-1 text-small">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M9.83585 8.83585L14.1464 13.1464C14.4614 13.4614 14.2383 14 13.7929 14H11.3297C11.1297 14 10.9489 13.8808 10.8701 13.697L9.02273 9.38637C8.80587 8.88035 9.44657 8.44657 9.83585 8.83585Z"
              fill="#F5F5F5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 4.70708C6 3.81618 7.07714 3.37001 7.70711 3.99998L18 14.2929C18.63 14.9228 18.1838 16 17.2929 16H11.7071L7.70711 20C7.07714 20.6299 6 20.1838 6 19.2929L6 4.70708ZM17.2929 15L7 4.70708L7 19.2929L11 15.2929C11.1875 15.1053 11.4419 15 11.7071 15H17.2929Z"
              fill="#F5F5F5"
            />
          </svg>

          <span>Please select a</span>

          <div className="w-3 h-3 border border-white rounded-[1px]"></div>

          <span>Form to continue</span>
        </div>
      ) : (
        <div></div>
      )}

      <Button
        onClick={() => (user ? createWebflowElement() : handleGoogleLogin())}
        variant="actionPrimaryHover"
        extraClassNames={`shadow-action-colored ${
          selectedWebflowEl !== "FormForm"
            ? "cursor-not-allowed opacity-40"
            : "opacity-100"
        }`}
        disabled={selectedWebflowEl !== "FormForm"}
      >
        <span>Insert to Webflow</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 7.5C8.55228 7.5 9 7.05228 9 6.5C9 5.94772 8.55228 5.5 8 5.5C7.44772 5.5 7 5.94772 7 6.5C7 7.05228 7.44772 7.5 8 7.5Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.20852 2.08964C8.07612 2.02887 7.92379 2.02888 7.79139 2.08965C5.61488 3.08861 4.08392 5.2556 4.00334 7.7896L2.14645 9.6465C2.05268 9.74026 2 9.86744 2 10.0001L2 13.5C2 13.6932 2.1113 13.8692 2.28588 13.9519C2.46047 14.0346 2.66709 14.0094 2.81662 13.887L5.27894 11.8724C5.92796 12.7461 6.79119 13.4513 7.79148 13.9104C7.92388 13.9712 8.07621 13.9712 8.20861 13.9104C9.20887 13.4513 10.0721 12.7461 10.7211 11.8724L13.1834 13.887C13.3329 14.0094 13.5395 14.0346 13.7141 13.9519C13.8887 13.8692 14 13.6932 14 13.5V10.0001C14 9.86744 13.9473 9.74026 13.8536 9.6465L11.9967 7.7896C11.9161 5.25558 10.3851 3.08858 8.20852 2.08964ZM5 8.00001C5 5.86346 6.21827 4.01049 7.99996 3.09961C9.78169 4.01047 11 5.86347 11 8.00004C11 8.13265 11.0527 8.25984 11.1464 8.3536L13 10.2072V12.4449L10.931 10.7521C10.8193 10.6607 10.6736 10.6221 10.5313 10.646C10.3891 10.67 10.2641 10.7542 10.1885 10.8771C9.65993 11.7364 8.90173 12.4394 8.00003 12.9004C7.09831 12.4394 6.3401 11.7364 5.81154 10.8771C5.73595 10.7542 5.61096 10.67 5.46868 10.646C5.3264 10.622 5.18071 10.6607 5.06904 10.7521L3 12.4449L3 10.2072L4.85355 8.3536C4.94732 8.25984 5 8.13261 5 8.00001Z"
            fill="white"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CreateInputWebflowElements;
