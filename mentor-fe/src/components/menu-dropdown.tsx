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
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ModeToggle } from '@/components/theme-switch';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function Dropdown_Menu() {
  const router = useRouter();

  async function handle_logout() {
    const url = `${BASE_URL}/auth/logout`;
    try {
      const response = await axios({
        method: 'POST',
        url,
      });
      if (!response.data.error) {
        toast.info('You are logged out!');
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('user_id');
        router.push('/login');
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
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
          <Link href='/resources'>
            <DropdownMenuItem>Resources</DropdownMenuItem>
          </Link>
          <Link href='/events/create'>
            <DropdownMenuItem>Create Event</DropdownMenuItem>
          </Link>
          <Link href='/events'>
            <DropdownMenuItem>Events</DropdownMenuItem>
          </Link>
          <Link href='/mentors'>
            <DropdownMenuItem>Mentors</DropdownMenuItem>
          </Link>
          <Link href='/meet'>
            <DropdownMenuItem>Meet</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Team</DropdownMenuItem>
        <a target='__blank' href='https://github.com/powrhouseofthecell'>
          <DropdownMenuItem>GitHub</DropdownMenuItem>
        </a>
        <Link href={'/faqs'}>
          <DropdownMenuItem>FAQs</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handle_logout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
