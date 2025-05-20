import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Building, ChevronDown, LogOut } from 'lucide-react';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex items-center gap-2 select-none'
          variant='outline'
        >
          Pizza Shop
          <ChevronDown className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          <span>Gabriel Fernando</span>
          <span className='text-muted-foreground text-xs font-normal'>
            gf313074@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className='mr-2 h-4 w-4' />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-rose-500 dark:text-rose-400'>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
