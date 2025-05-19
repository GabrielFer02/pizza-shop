import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import zod from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpForm = zod.object({
  email: zod.string().email(),
  restaurantName: zod.string(),
  managerName: zod.string(),
  phone: zod.string(),
});

type SignUpForm = zod.infer<typeof SignUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {

      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Restaurante cadastrado com sucesso.', {
        action: { label: 'Login', onClick: () => navigate('/sign-in') },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante.');
    }
  }

  return (
    <>
      <Helmet title='Cadastro' />
      <div className='p-8'>
        <Button asChild className='absolute top-8 right-8' variant='ghost'>
          <Link to='/sign-in'>Fazer login</Link>
        </Button>

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
              <Label htmlFor='restaurantName'>Nome do estabelecimento</Label>
              <Input
                id='restaurantName'
                type='text'
                {...register('restaurantName')}
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='managerName'>Seu nome</Label>
              <Input
                id='managerName'
                type='text'
                {...register('managerName')}
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='phone'>Seu celular</Label>
              <Input id='phone' type='tel' {...register('phone')} />
            </div>

            <Button type='submit' disabled={isSubmitting} className='w-full'>
              Finalizar cadastro
            </Button>

            <p className='text-muted-foreground px-6 text-center text-sm leading-relaxed'>
              Ao continuar, você concorda com nosso{' '}
              <a href='' className='underline underline-offset-4'>
                termos de serviço
              </a>{' '}
              e{' '}
              <a href='' className='underline underline-offset-4'>
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
