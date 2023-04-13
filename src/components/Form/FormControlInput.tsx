import {
  FormLabel,
  InputGroup,
  InputProps,
  FormControl,
  FormControlProps,
} from "@chakra-ui/react";

import { InputForm } from "./Input";

export type FormControlInputProps = FormControlProps & {
  label: string;
  inputProps?: InputProps;
};

export function FormControlInput({ label, inputProps, ...rest }: FormControlInputProps) {
  return (
    <FormControl {...rest}>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <InputForm {...inputProps} />
      </InputGroup>
    </FormControl>
  )
}
