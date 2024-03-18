'use client';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// type Resource_Type = {
//   name: string;
//   type: string;
// };
export default function All_Resources() {
  const [resources, set_resources] = useState<any>([]);
  useEffect(() => {
    const url = `${BASE_URL}/resources`;
    get_resources(url).then((resources) => {
      set_resources(resources.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function get_resources(url: string) {
    const resources = await axios({
      method: 'GET',
      url,
      withCredentials: true,
    });
    return resources;
  }

  console.log(resources.data, 'this is the resource');
  return (
    <>
      {resources?.map((resource: any, idx: any) => {
        return (
          <>
            <a target='__blank' key={idx} href={`http://127.0.0.1:8000/uploads/${resource.name}`}>
              <Image width={100} height={100} alt='file icon' src='/file.svg' />
              {resource.name}
            </a>
          </>
        );
      })}
    </>
  );
}
