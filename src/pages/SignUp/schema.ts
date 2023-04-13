import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(4, 'Nome deve ter no mínimo 4 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .max(12, 'Senha deve ter no máximo 12 caracteres'),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref('password'), 'As senhas não conferem'],
      'As senhas não conferem',
    ),
});
