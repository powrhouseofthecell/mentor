// import { UserRoundPlus } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Vaul_Scaled from '@/components/vaul-scaled';

// export default function Mentor_Actions({ mentor_id, follow_request, mentors_list }: any) {
//   const comp_map = {
//     req_sent: <Disabled_Button />,
//     req_accepted: <Vaul_Scaled mentor_id={mentor_id} />,
//     same_user: '',
//   };
//   return (
//     <>
//       {/* <Vaul_Scaled mentor_id={mentor_id} /> */}
//       {mentors_list.map((mentor: any, idx: any) => {
//         return mentor.connect_request.map((request: any, idx: any) => {
//           return localStorage.getItem('user_id') === request ? (
//             <Disabled_Button />
//           ) : (
//             <Active_Button follow_request={follow_request} mentor_id={mentor_id} />
//           );
//         });
//       })}
//     </>
//   );
// }

// function Active_Button({ follow_request, mentor_id }: any) {
//   return (
//     <Button className='ml-3' variant={'secondary'} onClick={() => follow_request(mentor_id)}>
//       <UserRoundPlus size={16} /> &nbsp; Connect
//     </Button>
//   );
// }

// function Disabled_Button() {
//   return (
//     <Button disabled className='ml-3' variant={'secondary'}>
//       <UserRoundPlus size={16} /> &nbsp; Connect
//     </Button>
//   );
// }
