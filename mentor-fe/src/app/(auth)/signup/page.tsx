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
import { CheckCircledIcon } from '@radix-ui/react-icons';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const url = `${BASE_URL}/auth/signup`;
    const response_signup = await axios({
      method: 'POST',
      url,
      data: values,
      withCredentials: true,
    });
    if (!response_signup.data.error) {
      toast({
        description: 'Signup successful',
      });
      // localStorage.setItem('isLoggedIn', 'true');
      // localStorage.setItem('user_id', response.data._id);

      // Automatic login after signup
      const { email, password } = values;
      const url = `${BASE_URL}/auth/login`;
      const response_login = await axios({
        method: 'POST',
        url,
        data: { email, password },
        withCredentials: true,
      });

      if (response_login.request.statusText === 'OK') {
        router.push('/events');
      } else {
        router.push('/login');
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response_signup.data.message}`,
      });
    }
  }

  return (
    <Form {...form}>
      <div className='form_container flex items-center justify-center h-lvh'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-96'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Jon' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*  */}
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-96'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='jon@doe.com' {...field} />
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
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-48' type='submit'>
            Signup
          </Button>
        </form>
      </div>
    </Form>
  );
}
