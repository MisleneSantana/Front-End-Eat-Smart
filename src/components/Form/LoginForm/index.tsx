import { Input } from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './loginFormSchema';

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const loginFormSubmit: SubmitHandler<ILoginFormData> = (loginFormData) => {
    console.log(loginFormData);
    // Executar função de request de Login, recebendo loginFormData como parâmetro
  };

  return (
    <form onSubmit={handleSubmit(loginFormSubmit)}>
      <Input
        type='email'
        label='Email'
        placeholder='Email'
        id='email'
        {...register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Senha'
        placeholder='Senha'
        id='password'
        {...register('password')}
        error={errors.password}
      />
      <button type='submit' disabled>
        Login
      </button>
    </form>
  );
};
