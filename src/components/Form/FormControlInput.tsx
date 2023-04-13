import {
  Button,
  FormLabel,
  InputGroup,
  InputProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  InputRightElement,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { InputForm } from "./Input";

export type FormControlInputProps = FormControlProps & {
  label: string;
  error?: FieldError;
  isPassword?: boolean;
  inputProps?: InputProps;
  handleToggleShowPassword?: () => void;
};

export function FormControlInput({
  label,
  error,
  isPassword,
  inputProps,
  handleToggleShowPassword,
  ...rest
}: FormControlInputProps) {
  const showPassword = inputProps?.type === 'password';

  return (
    <FormControl {...rest}>
      <FormLabel>{label}</FormLabel>

      <InputGroup>
        <InputForm {...inputProps} />

        {isPassword ? (
          <InputRightElement width='4.5rem'>
            <Button
              h='1.75rem'
              bg='blueGray.900'
              size='sm'
              colorScheme="blueGray"
              onClick={handleToggleShowPassword}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        ) : null}

      </InputGroup>

      {error?.message ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
    </FormControl>
  )
}
