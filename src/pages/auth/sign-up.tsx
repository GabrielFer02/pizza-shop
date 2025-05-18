import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpForm = zod.object({
  email: zod.string().email(),
});

type SignUpForm = zod.infer<typeof SignUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: { label: 'Reenviar', onClick: () => handleSignUp(data) },
      });
    } catch {
      toast.error('Credenciais inválidas.');
    }
  }

  return (
    <>
      <Helmet title='Cadastro' />
      <div className='p-8'>
        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Criar conta grátis
            </h1>
            <p className='text-muted-foreground text-sm'>
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <Button type='submit' disabled={isSubmitting} className='w-full'>
              Finalizar cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
