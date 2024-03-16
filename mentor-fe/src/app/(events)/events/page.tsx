'use client';

import { BellIcon, CheckIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
import { DialogDemo } from '@/components/edit-event';

type CardProps = React.ComponentProps<typeof Card>;

async function get_events(url: any) {
  const events = await axios({
    method: 'GET',
    url,
    withCredentials: true,
  });
  return events;
}

export default function CardDemo({ className, ...props }: CardProps) {
  const [events, set_events] = useState<any>([]);
  const [attend_text, set_attended_text] = useState('');

  useEffect(() => {
    const url = `${BASE_URL}/events`;
    get_events(url).then((events) => {
      set_events(events.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handle_event_attendece(event_id: string) {
    const url = `${BASE_URL}/events/attend/${event_id}`;
    await axios({
      method: 'POST',
      url,
      withCredentials: true,
    });
    const get_event_url = `${BASE_URL}/events`;
    get_events(get_event_url).then((events) => {
      set_events(events.data.data);
    });
  }

  return (
    <>
      <div className='flex flex-wrap gap-10 justify-center mt-12'>
        {events.map((event: any, idx: number) => {
          return (
            <Card key={idx} className={cn('w-[380px]', className)} {...props}>
              <CardHeader>
                <CardTitle className='flex justify-between'>
                  {event.event_name}

                  <span>
                    <DialogDemo />
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className='grid gap-4'>
                <div className=' flex items-center space-x-4 rounded-md border p-4'>
                  <BellIcon />
                  <div className='flex-1 space-y-1'>
                    <p className='text-sm font-medium leading-none'>Organised By:</p>
                    <p className='text-sm text-muted-foreground'> {event.organised_by.name}</p>
                    <p className='text-sm text-muted-foreground text-stone-300'>{event.event_date}</p>
                  </div>
                </div>
                <div>
                  <div className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
                    <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                    <div className='space-y-1'>
                      <p className='text-sm text-muted-foreground'>{event.event_description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handle_event_attendece(event._id)} className='w-full'>
                  {event.attended_by.includes(localStorage.getItem('user_id')) ? (
                    <>
                      <CheckIcon className='mr-2 h-4 w-4' /> Your seat is reserved.
                    </>
                  ) : (
                    <>
                      <CheckIcon className='mr-2 h-4 w-4' /> Click to attend the event.
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
