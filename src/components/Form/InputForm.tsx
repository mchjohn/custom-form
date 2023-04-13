import {
  Input,
  FormLabel,
  InputGroup,
  FormControl,
} from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";

import { PasswordInput } from "./PasswordInput";

type Props = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  isPassword?: boolean;
  placeholder?: string;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
}

export function InputForm({
  id,
  type,
  label,
  isRequired,
  isPassword,
  placeholder,
  showPassword,
  toggleShowPassword,
}: Props) {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        {isPassword ?
          <PasswordInput
            placeholder={placeholder}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
          />
          :
          <Input type={type} placeholder={placeholder} />
        }
      </InputGroup>
    </FormControl>
  )
}
