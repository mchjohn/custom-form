import {
  Input,
  FormLabel,
  InputGroup,
  InputProps,
  FormControl,
  FormControlProps,
} from "@chakra-ui/react";

import { PasswordInput } from "./PasswordInput";

export type CustomInputProps = FormControlProps & InputProps & {
  label: string;
  isPassword?: boolean;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
};

export function InputForm({
  label,
  isPassword,
  showPassword,
  toggleShowPassword,
  ...rest
}: CustomInputProps) {
  return (
    <FormControl {...rest}>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        {isPassword ?
          <PasswordInput
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            {...rest}
          />
          :
          <Input {...rest} />
        }
      </InputGroup>
    </FormControl>
  )
}
