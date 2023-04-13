import {
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';

import { InputsForm } from './InputsForm';

import { ButtonLink } from '@components/Form/ButtonLink';
import { HeaderForm } from '@components/Form/HeaderForm';
import { ButtonForm } from '@components/Form/ButtonForm';

export function SignUp() {
  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
    >
      <Stack spacing='8' py='12' px='6'>
        <HeaderForm />

        <Box
          p='8'
          w='500px'
          bg='blueGray.800'
          rounded='lg'
          boxShadow='lg'
        >
          <Stack spacing='4'>
            <InputsForm />

            <ButtonForm />

            <ButtonLink />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
