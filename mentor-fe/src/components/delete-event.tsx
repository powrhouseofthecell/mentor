'use client';

import { Button } from '@/components/ui/button';
import { BASE_URL } from '../../config';
import { toast } from 'sonner';
import axios from 'axios';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { CalendarOff } from 'lucide-react';

export default function Delete_Event_Form({ id }: any) {
  async function delete_event() {
    const url = `${BASE_URL}/events/${id}`;

    try {
      const response = await axios({
        method: 'DELETE',
        url,
        withCredentials: true,
      });
      if (!response.data.error) {
        toast.info('Event deleted');
      }
    } catch (error: any) {
      toast(`${error.response.data.message}`);
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>
          <CalendarOff size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete this event?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={delete_event} className='bg-red-400'>
            Delete Event
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
