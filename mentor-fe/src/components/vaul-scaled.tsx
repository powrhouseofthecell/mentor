import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { BASE_URL } from '../../config';
import axios from 'axios';

import { Hover_Card } from './hover-card';
import { toast } from 'sonner';

export default function Vaul_Scaled({ mentor_id }: any) {
  const [goal, setGoal] = React.useState(350);
  const [calendly_id, set_calendly_id] = React.useState('');
  const [mentor_name, set_mentor_name] = React.useState('');

  const url = `${BASE_URL}/mentors/${mentor_id}`;
  async function get_mentor() {
    try {
      const mentor = await axios({
        method: 'GET',
        url,
        withCredentials: true,
      });
      set_calendly_id(mentor.data.calendly_id);
      set_mentor_name(mentor.data.name);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  }
  React.useEffect(() => {
    get_mentor();
  });
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='mt-3 ml-12' variant='outline'>
          <Hover_Card name={mentor_name} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Set a meet</DrawerTitle>
            <DrawerDescription>You can have a 30 mins session with {mentor_name}</DrawerDescription>
          </DrawerHeader>
          <div className='mentor_details'>
            <p className='text-sm text-amber-200'>
              {mentor_name} is a full stack developer, having worked with MERN, Rust and GoLang. Connect with{' '}
              {mentor_name} to get you CV checked and get insights about how you can land more interviews and get
              interview prep.
            </p>
          </div>
          {calendly_id ? (
            <div className='p-4 pb-0'>
              <a href={`${calendly_id}/athena-mentorship-session`} className='underline' target='_blank'>
                <Button onClick={get_mentor} className='w-full'>
                  Set up Meet
                </Button>
              </a>{' '}
            </div>
          ) : (
            <div className='p-4 pb-0'>
              <Button disabled className='w-full'>
                Set up Meet
              </Button>
            </div>
          )}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
