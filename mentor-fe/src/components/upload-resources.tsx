import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import axios from 'axios';
import { Upload } from 'lucide-react';
import { BASE_URL } from '../../config';
import { toast } from 'sonner';

export default function Upload_Resources({ get_resources, set_resources }: any) {
  const handle_file_selected = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
    const files = Array.from(e.target.files!);
    const url = `${BASE_URL}/resources/upload/`;
    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      const response = await axios({
        method: 'POST',
        url,
        data: formData,
        withCredentials: true,
      });
      toast.info(`Resource uploaded`);
      get_resources(`${BASE_URL}/resources`).then((resources: any) => {
        set_resources(resources?.data);
      });
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
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
