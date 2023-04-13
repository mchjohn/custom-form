import {
  Input,
  Button,
  InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { CustomInputProps } from "./InputForm";

type Props = Partial<CustomInputProps>;

export function PasswordInput({
  showPassword,
  toggleShowPassword,
  ...rest
}: Props) {
  return (
    <>
      <Input type={showPassword ? 'text' : 'password'} {...rest} />
      <InputRightElement h='full'>
        <Button
          variant='ghost'
          onClick={toggleShowPassword}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </>
  )
}
