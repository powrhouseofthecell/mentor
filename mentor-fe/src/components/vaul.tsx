'use client';

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

import { Pin } from 'lucide-react';

export default function Vaul_Scaled({ mentor_id }: any) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='outline'>
          <Pin size={16} /> &nbsp; &nbsp; Note
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Important note using calendly.</DrawerTitle>
          </DrawerHeader>
          <div className='mentor_details'>
            <li className='text-sm text-amber-200'>Make sure your username is correct</li>
            <li className='text-sm text-amber-200'>
              Make sure you&rsquo;ve an event create named <i className='text-amber-400'>Athena - Mentorship Session</i>
            </li>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant='outline'>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
