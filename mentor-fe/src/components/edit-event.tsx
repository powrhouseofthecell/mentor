import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pencil1Icon } from '@radix-ui/react-icons';
import Edit_Event_Form from './edit-event-form';

export default function Edit_Event({ id }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Button variant='ghost'>
            <Pencil1Icon />
          </Button>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit event</DialogTitle>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <Edit_Event_Form id={id} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
