import {
  FormLabel,
  InputGroup,
  FormControl as ChakraFormControl,
  FormControlProps,
  InputProps,
} from "@chakra-ui/react";
import { Controller, Control, FieldError } from "react-hook-form";

import { FormData, FormFields } from "@interface/formData";

import { FormControlInput } from "./FormControlInput";

export type ControlledInputProps = FormControlProps & {
  name: FormFields;
  label: string;
  error?: FieldError;
  control: Control<FormData>;
  inputProps?: InputProps;
};

export function ControlledInput({
  name,
  label,
  error,
  control,
  inputProps,
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
          inputProps={{
            value: value,
            onChange: onChange,
            ...inputProps
          }}
          {...rest}
        />
      )}
    />
  )
}
