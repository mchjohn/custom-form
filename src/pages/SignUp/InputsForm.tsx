import { useState } from 'react';

import { InputForm } from '@components/Form/InputForm';

export function InputsForm() {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  return (
    <>
      <InputForm
        id='name'
        label='Nome'
        placeholder='Digite seu nome'
        isRequired
      />

      <InputForm
        id='email'
        type='email'
        label='Email'
        placeholder='Digite seu e-mail'
        isRequired
      />

      <InputForm
        id='password'
        label='Senha'
        isPassword
        isRequired
        placeholder='Digite sua senha'
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
      />

      <InputForm
        id='confirm_password'
        label='Senha'
        isPassword
        isRequired
        placeholder='Confirme a senha'
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
      />
    </>
  );
}
