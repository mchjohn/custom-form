import {
  FormLabel,
  InputGroup,
  InputProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

import { InputForm } from "./Input";

export type FormControlInputProps = FormControlProps & {
  label: string;
  error?: FieldError;
  inputProps?: InputProps;
};

export function FormControlInput({ label, error, inputProps, ...rest }: FormControlInputProps) {
  return (
    <FormControl {...rest}>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <InputForm {...inputProps} />
      </InputGroup>

      {error?.message ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
    </FormControl>
  )
}
