import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import axios from 'axios';
import { Upload } from 'lucide-react';
import { BASE_URL } from '../../config';

export default function Upload_Resources() {
  const handle_file_selected = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
    const files = Array.from(e.target.files!);
    const url = `${BASE_URL}/resources/upload/`;
    // const r = await axios({
    //   method: 'POST',
    //   url,
    //   data: files[0],
    // });
    console.log(files[0]);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-amber-200 fixed right-0 m-6 bottom-0'>
          <Button className='bg-amber-200 fixed right-0 m-6 bottom-0'>
            <Upload size={16} /> &nbsp; Upload resources
          </Button>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Upload Resource</DialogTitle>
        </DialogHeader>

        <div className=''>
          <input onChange={handle_file_selected} type='file' name='' id='' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
