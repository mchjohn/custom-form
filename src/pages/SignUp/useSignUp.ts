import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormData } from '@interface/formData';

import { schema } from './schema';

export function useSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    }
  });

  function onSubmit(data: FormData) {
    console.log('Submitted', data);
  }

  function handleToggleShowPassword() {
    setShowPassword(prevState => !prevState);
  }

  console.log('Errors: ', errors)

  return {
    errors,
    control,
    showPassword,
    onSubmit,
    handleSubmit,
    handleToggleShowPassword
  }
}
