import Input from "@/components/ui/Input";
import React from "react";
import { useFormStatus } from "react-dom";
import {
  FieldPath,
  FieldValues,
  FormProvider,
  useController,
  useFormContext,
  useFormState,
} from "react-hook-form";

const Form = FormProvider;

const useControlledForm = (name: FieldPath<FieldValues>) => {
  const { control, trigger, reset } = useFormContext();

  const { field } = useController({
    name,
    control,
  });

  const { errors } = useFormState({ control, name });

  const handleTextOnChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    field.onChange({ target: { value: e.target.value } });
    trigger(name);
  };

  const isValid = !errors[name];
  const errorMessage = errors[name]?.message as string;
  const handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    field.onChange({ target: { value: e.currentTarget.value } });
  };

  return {
    handleButtonOnClick,
    handleTextOnChange,
    isValid,
    errorMessage,
    field,
    reset,
  };
};
const FormTextField = ({ name }: { name: FieldPath<FieldValues> }) => {
  const { handleTextOnChange, isValid, field } = useControlledForm(name);
  const { pending } = useFormStatus();
  return (
    <>
      <div className="flex-1 space-y-2">
        <Input
          type="text"
          onChange={handleTextOnChange}
          value={field.value || ""}
        />
      </div>
      <button
        type="submit"
        disabled={!isValid || pending}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md  bg-navBackground p-2 font-semibold"
      >
        등록
      </button>
    </>
  );
};

export { Form, FormTextField };
