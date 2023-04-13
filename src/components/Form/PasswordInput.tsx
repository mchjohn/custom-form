import {
  Input,
  Button,
  InputRightElement
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

type Props = {
  placeholder?: string;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
}

export function PasswordInput({
  placeholder,
  showPassword,
  toggleShowPassword
}: Props) {
  return (
    <>
      <Input type={showPassword ? 'text' : 'password'} placeholder={placeholder} />
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
