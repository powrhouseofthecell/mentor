'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { BASE_URL } from '../../../config';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Vaul from '@/components/vaul';

import { Button } from '@/components/ui/button';

const formSchema = z.object({
  calendly_id: z.string().min(3, {
    message: 'Minimum should be 3 characters long',
  }),
});

export default function Calendly_Link() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `${BASE_URL}/meet/link`;
    try {
      const response = await axios({
        method: 'POST',
        url,
        data: values,
        withCredentials: true,
      });
      if (!response.data.error) {
        toast.success('Link added!');
        router.push('/mentors');
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }

  return (
    <Form {...form}>
      <div className='form_container flex items-center justify-center h-lvh'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='px-16 py-24 border-solid border-2 border-gray-600 rounded-2xl space-y-8'>
          {/*  */}
          <h1 className='text-4xl font-black'>
            <span className='text-4xl'>Your time is precious,</span>
            <br />
            <span className='text-2xl text-amber-200'>make other&apos;s shine with it</span>
          </h1>
          <FormField
            control={form.control}
            name='calendly_id'
            render={({ field }) => (
              <FormItem className='w-96'>
                <FormLabel>Calendly Link</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' type='submit'>
            Save Changes
          </Button>
          <Vaul />
        </form>
      </div>
    </Form>
  );
}
