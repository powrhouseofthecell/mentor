import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarRange, Settings2 } from "lucide-react";
import Create_Event_Form from "./create-event-form";

export default function Create_Event() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-amber-200 fixed right-0 m-6 bottom-0">
          <CalendarRange className="mr-2 h-4 w-4" size={16} />
          Create Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit event</DialogTitle>
        </DialogHeader>

        <div className="">
          <Create_Event_Form />
        </div>
      </DialogContent>
    </Dialog>
  );
}
