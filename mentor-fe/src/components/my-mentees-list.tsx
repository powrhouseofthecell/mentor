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
import My_Mentee_Table from "./my-mentee-table";

export default function My_Mentees_List({ mentees }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="flex flex-col">
          <span>{mentees.length}</span>
          <span>Mentees</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Your mentees</AlertDialogTitle>
          {mentees.length > 0 ? (
            <AlertDialogDescription className="relative overflow-x-auto">
              {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {mentees.map((mentee: any) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">{mentee.name}</td>
                        <td className="px-6 py-4">{mentee.email}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> */}
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
                  {mentees.map((mentee: any, idx: any) => {
                    return <My_Mentee_Table key={idx} mentee={mentee} />;
                  })}
                </table>
              </div>
            </AlertDialogDescription>
          ) : (
            <p className="text-gray-400">
              You have no mentees under you right now!
            </p>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
