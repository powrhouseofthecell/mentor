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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import My_Mentor_Table from "./my-mentor-table";

export default function My_Mentors_List({ mentors }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="flex flex-col">
          <span>{mentors.length}</span>
          <span>Mentors</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your mentors</AlertDialogTitle>
          {mentors.length > 0 ? (
            <AlertDialogDescription>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name/Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Role
                      </th>
                    </tr>
                  </thead>
                  {mentors.map((mentor: any, idx: any) => {
                    return <My_Mentor_Table key={idx} mentor={mentor} />;
                  })}
                </table>
              </div>
            </AlertDialogDescription>
          ) : (
            <p className="text-gray-400">You have not mentors!</p>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
