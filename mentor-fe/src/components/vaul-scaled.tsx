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

import { ExternalLink } from 'lucide-react';
import { Hover_Card } from './hover-card';

export default function Vaul_Scaled({ mentor_id }: any) {
  const [goal, setGoal] = React.useState(350);
  const [calendly_id, set_calendly_id] = React.useState('');
  const [mentor_name, set_mentor_name] = React.useState('');

  const url = `${BASE_URL}/mentors/${mentor_id}`;
  async function get_mentor() {
    const mentor = await axios({
      method: 'GET',
      url,
      withCredentials: true,
    });
    console.log(mentor.data.calendly_id);
    set_calendly_id(mentor.data.calendly_id);
    set_mentor_name(mentor.data.name);
    console.log(calendly_id, mentor_name);
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
          {/* <ExternalLink strokeWidth={1.25} /> */}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus, nulla magnam placeat eaque, odit
            iste vitae doloremque veritatis, nisi magni ut cupiditate eligendi blanditiis ratione commodi expedita sunt.
            Nostrum.
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
            <h2>The mentor has not step up their calendly ID yet.</h2>
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