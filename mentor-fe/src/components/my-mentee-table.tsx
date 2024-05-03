import { Avatar, AvatarFallback } from "./ui/avatar";
export default function My_Mentee_Table({ mentee }: any) {
  return (
    <tbody>
      <tr className=" border-b  dark:border-gray-700 ">
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Avatar>
            <AvatarFallback>{mentee.name.split("")[0]}</AvatarFallback>
          </Avatar>
          <div className="ps-3">
            <div className="text-base font-semibold">{mentee.name}</div>
            <div className="font-normal text-gray-500">{mentee.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">{mentee.role}</td>
      </tr>
    </tbody>
  );
}
