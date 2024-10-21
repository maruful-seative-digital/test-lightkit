import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { generateUid } from "../../utils/utilKit";

import ControlPanel from "./components/ControlPanel";
import CreateInputWebflowElements from "./components/CreateInputWebflowElements";
import PreviewPanel from "./components/PreviewPanel";

export interface FormValuesType {
  id: string;
  labelText: { text: string | null };
  input: {
    type: string;
    placeholder: string | null;
    name: string;
    hint: string | null;
    isRequired: boolean;
  };
}

export interface ValuesFromType {
  type: string;
  name: string;
  label: string;
  hasLabel: boolean;
  hint: string;
  hasHint: boolean;
  placeholder: string;
  hasPlaceholder: boolean;
  isRequired: boolean;
}
export interface GeneralSettingFromType {
  title: string;
  hasTitle: boolean;
  subTitle: string;
  hasSubTitle: boolean;
  buttonText: string;
}

const InputFields = (): React.ReactElement => {
  const [fromValues, setFromValues] = useState<FormValuesType[]>([]);
  const [editFieldId, setEditFieldId] = useState<string | null>(null);
  const [selectedWebflowEl, setSelectedWebflowEl] = useState<
    string | null | undefined
  >(null);

  const valuesFormik = useFormik({
    initialValues: {
      type: "text",
      name: "",
      label: "",
      hasLabel: true,
      hint: "",
      hasHint: true,
      placeholder: "",
      hasPlaceholder: true,
      isRequired: false,
    },
    onSubmit: (values) => {
      setFromValues((prevValues: FormValuesType[]): FormValuesType[] => {
        if (editFieldId === null) {
          const newValues = {
            id: generateUid(values.type),
            labelText: { text: values.hasLabel ? values.label : null },
            input: {
              type: values.type,
              placeholder: values.hasPlaceholder ? values.placeholder : null,
              name: values.name,
              hint: values.hasHint ? values.hint : null,
              isRequired: values.isRequired,
            },
          };

          valuesFormik.setFieldValue("type", "text");
          valuesFormik.setFieldValue("name", "Text field");
          valuesFormik.setFieldValue("label", "Label");
          valuesFormik.setFieldValue("hasLabel", true);
          valuesFormik.setFieldValue("hint", "Text Hint");
          valuesFormik.setFieldValue("hasHint", true);
          valuesFormik.setFieldValue("placeholder", "Type here...");
          valuesFormik.setFieldValue("hasPlaceholder", true);

          return [...prevValues, newValues];
        }

        if (editFieldId) {
          const editFieldIndex = prevValues.findIndex(
            (value) => value.id === editFieldId
          );

          const updatedObj = {
            id: editFieldId,
            labelText: { text: values.hasLabel ? values.label : null },
            input: {
              type: values.type,
              placeholder: values.hasPlaceholder ? values.placeholder : null,
              name: values.name,
              hint: values.hasHint ? values.hint : null,
              isRequired: values.isRequired,
            },
          };

          prevValues[editFieldIndex] = updatedObj;

          setEditFieldId(null);

          valuesFormik.setFieldValue("type", "text");
          valuesFormik.setFieldValue("name", "Text field");
          valuesFormik.setFieldValue("label", "Label");
          valuesFormik.setFieldValue("hasLabel", true);
          valuesFormik.setFieldValue("hint", "Text Hint");
          valuesFormik.setFieldValue("hasHint", true);
          valuesFormik.setFieldValue("placeholder", "Type here...");
          valuesFormik.setFieldValue("hasPlaceholder", true);

          return prevValues;
        }

        return prevValues;
      });
    },
  });

  const generalSettingFormik = useFormik({
    initialValues: {
      title: "",
      hasTitle: true,
      subTitle: "",
      hasSubTitle: false,
      buttonText: "Submit",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleInputDelete = (id: string): void => {
    setFromValues((prevValues) => {
      const updatedInputs = prevValues.filter((value) => value.id !== id);

      return [...updatedInputs];
    });
  };

  useEffect(() => {
    if (editFieldId !== null) {
      const editFieldObj = fromValues.find((value) => value.id === editFieldId);
      valuesFormik.setFieldValue("type", editFieldObj?.input?.type);
      valuesFormik.setFieldValue("name", editFieldObj?.input?.name);
      valuesFormik.setFieldValue(
        "placeholder",
        editFieldObj?.input?.placeholder
      );
      valuesFormik.setFieldValue("label", editFieldObj?.labelText?.text);
      valuesFormik.setFieldValue("hint", editFieldObj?.input?.hint);
    }
  }, [editFieldId]);

  const handleCurrentWebflowEl = async () => {
    if (selectedWebflowEl !== "FormForm") {
      const selectedEl = await webflow.getSelectedElement();
      const selectedElType = selectedEl?.type;
      setSelectedWebflowEl(selectedElType);
    }
  };

  useEffect(() => {
    webflow.getSelectedElement().then((el) => {
      if (el?.type !== "FormForm") {
        webflow.notify({ type: "Info", message: "Please Select a Form" });
      }

      setSelectedWebflowEl(el?.type);
    });
  }, []);

  return (
    <>
      <section
        onClick={handleCurrentWebflowEl}
        className="flex min-h-screen divide-x divide-border-1 text-text-1"
      >
        <ControlPanel
          valuesFormik={valuesFormik}
          generalSettingFormik={generalSettingFormik}
        />
        <PreviewPanel
          fromValues={fromValues}
          generalSettingFormik={generalSettingFormik}
          handleInputDelete={handleInputDelete}
          setEditFieldId={setEditFieldId}
        />
      </section>
      <CreateInputWebflowElements
        fromValues={fromValues}
        generalSettingFormik={generalSettingFormik}
        selectedWebflowEl={selectedWebflowEl}
      />
    </>
  );
};

export default InputFields;
