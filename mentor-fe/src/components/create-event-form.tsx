'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Date_Picker_With_Range from './date-picker-range';
import { BASE_URL } from '../../config';
import { toast } from 'sonner';
import axios from 'axios';

const formSchema = z.object({
  event_name: z.any(),
  event_description: z.any(),
  event_date: z.any(),
});

export default function Create_Event_Form() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `${BASE_URL}/events/create`;

    const { event_description, event_name } = values;
    const event_date = '12-07-2024';
    try {
      const response = await axios({
        method: 'POST',
        url,
        data: { event_description, event_name, event_date },
        withCredentials: true,
      });
      if (!response.data.error) {
        toast.success('Event create');
      }
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='event_name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event name</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
        <FormField
          control={form.control}
          name='event_description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event name</FormLabel>
              <FormControl>
                <Textarea placeholder='Type your description here' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
        {/* <FormField
          control={form.control}
          name='event_date'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event date</FormLabel>
              <FormControl>
                <Date_Picker_With_Range />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
