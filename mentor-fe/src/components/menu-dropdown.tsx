'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { ModeToggle } from '@/components/theme-switch';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export function DropdownMenuDemo() {
  const router = useRouter();
  const { toast } = useToast();

  async function handle_logout() {
    const url = `${BASE_URL}/auth/logout`;
    const response = await axios({
      method: 'POST',
      url,
    });
    if (!response.data.error) {
      toast({
        description: 'Logged out',
      });
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('user_id');
      router.push('/login');
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.data.message}`,
      });
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <span>
          <ModeToggle />
        </span>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handle_logout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
