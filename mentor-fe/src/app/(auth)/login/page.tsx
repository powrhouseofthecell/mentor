'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { BASE_URL } from '../../../../config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email('Not a valid email'),
  password: z.string().min(6, {
    message: 'Password must at least be 8 characters long.',
  }),
});

export default function ProfileForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `${BASE_URL}/auth/login`;
    try {
      const response = await axios({
        method: 'POST',
        url,
        data: values,
        withCredentials: true,
      });
      if (!response.data.error) {
        toast({
          description: 'Login Successful',
        });
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user_id', response.data._id);
        router.push('/events');
      }
    } catch (error: any) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${error.response.data.message}`,
      });
    }
  }

  return (
    <Form {...form}>
      <div className='form_container flex items-center justify-center h-lvh'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='px-16 py-24 border-solid border-2 border-gray-600 rounded-2xl space-y-8'>
          {/*  */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-96'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john@doe.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*  */}
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='w-96'>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' type='submit'>
            Login
          </Button>

          <p className='text-sm'>
            Are you new here?
            <Link href={'/signup'}>
              {' '}
              <span className='text-blue-600'>signup</span>
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
}
