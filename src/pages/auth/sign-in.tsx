import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignInForm = zod.object({
  email: zod.string().email(),
});

type SignInForm = zod.infer<typeof SignInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  function handleSignIn(data: SignInForm) {
    console.log(data)
  }

  return (
    <>
      <Helmet title='Login' />
      <div className='p-8'>
        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Acessar painel
            </h1>
            <p className='text-muted-foreground text-sm'>
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <Button type='submit' disabled={isSubmitting} className='w-full'>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
