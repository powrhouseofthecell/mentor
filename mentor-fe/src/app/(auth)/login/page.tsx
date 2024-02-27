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
  // name: z.string().min(2, {
  //   message: 'Name must be at least 2 characters.',
  // }),
  email: z.string().email('Not a valid email'),
  password: z.string().min(6, {
    message: 'Password must at least be 8 characters long.',
  }),
});

export default function ProfileForm() {
  const router = useRouter();
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const url = `${BASE_URL}/auth/login`;
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
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: `${response.data.message}`,
      });
    }
  }

  return (
    <Form {...form}>
      <div className='form_container flex items-center justify-center h-lvh'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-48' type='submit'>
            Login
          </Button>
        </form>
      </div>
    </Form>
  );
}
