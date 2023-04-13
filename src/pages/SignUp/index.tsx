import {
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';

import { useSignUp } from './useSignUp';

import { Header, NavLink, SubmitButton, ControlledInput } from '@components/Form';


export function SignUp() {
  const { control, errors, handleSubmit } = useSignUp();

  function createUser(data: any) {
    console.log('User data: ', data);
  }

  return (
    <Flex
      minH='100vh'
      align='center'
      justify='center'
    >
      <Stack spacing='8' py='12' px='6'>
        <Header title='Cadastre-se' subtitle='e aproveite todos os recursos' />

        <Box
          p='8'
          w='500px'
          bg='blueGray.800'
          rounded='lg'
          boxShadow='lg'
        >
          <form onSubmit={handleSubmit(createUser)}>
            <Stack spacing='4'>
              <ControlledInput
                name='name'
                label='Nome'
                error={errors.name}
                control={control}
                isRequired
                inputProps={{
                  placeholder: 'Digite seu nome',
                }}
              />
              <ControlledInput
                name='email'
                label='Email'
                error={errors.email}
                isRequired
                control={control}
                inputProps={{
                  type: 'email',
                  placeholder: 'Digite seu email',
                }}
              />
              <ControlledInput
                name='password'
                label='Senha'
                error={errors.password}
                isRequired
                control={control}
                inputProps={{
                  type: 'password',
                  placeholder: 'Digite sua senha',
                }}
              />
              <ControlledInput
                name='confirm_password'
                label='Confirmar senha'
                error={errors.confirm_password}
                isRequired
                control={control}
                inputProps={{
                  type: 'password',
                  placeholder: 'Confirme sua senha',
                }}
              />

              <SubmitButton title='Cadastrar' />

              <NavLink text='Já tem conta?' textLink='Entrar' />
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
