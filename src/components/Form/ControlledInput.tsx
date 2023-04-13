import {
  InputProps,
  FormControlProps,
} from "@chakra-ui/react";
import { Controller, Control, FieldError } from "react-hook-form";

import { FormData, FormFields } from "@interface/formData";

import { FormControlInput } from "./FormControlInput";

export type ControlledInputProps = FormControlProps & {
  name: FormFields;
  label: string;
  error?: FieldError;
  control: Control<FormData>;
  isPassword?: boolean;
  inputProps?: InputProps;
  handleToggleShowPassword?: () => void;
};

export function ControlledInput({
  name,
  label,
  error,
  control,
  isPassword,
  inputProps,
  handleToggleShowPassword,
  ...rest
}: ControlledInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }}) => (
        <FormControlInput
          label={label}
          error={error}
          isInvalid={!!error?.message}
          isPassword={isPassword}
          inputProps={{
            value: value,
            onChange: onChange,
            ...inputProps
          }}
          handleToggleShowPassword={handleToggleShowPassword}
          {...rest}
        />
      )}
    />
  )
}
