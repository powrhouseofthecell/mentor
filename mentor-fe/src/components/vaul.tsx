'use client';

// import { Drawer } from 'vaul';

// export default function Vaul() {
//   return (
//     <Drawer.Root>
//       <Drawer.Trigger asChild>
//         <button>
//           {' '}
//           <span className='text-sm text-blue-600 underline decoration-solid'>Note</span>{' '}
//         </button>
//       </Drawer.Trigger>
//       <Drawer.Portal>
//         <Drawer.Overlay className='fixed inset-0 bg-black/40' />
//         <Drawer.Content className='bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0'>
//           <div className='p-4 bg-white rounded-t-[10px] flex-1'>
//             <div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />
//             <div className='max-w-md mx-auto'>
//               <Drawer.Title className='font-medium mb-4'></Drawer.Title>
//               <p className='text-zinc-600 mb-2'></p>
//               <p className='text-zinc-600 mb-8'>
//                 <br />
//                 <span className='decoration-solid'>
//                   <i className='text-indigo-400'>Athena - Mentorship Session</i>{' '}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </Drawer.Content>
//       </Drawer.Portal>
//     </Drawer.Root>
//   );
// }

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
            <li className='text-sm text-amber-200'>Make sure you&rsquo;ve an event create named</li>
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
