'use client';
import axios from 'axios';
import { BASE_URL } from '../../../../config';
import { useEffect, useState } from 'react';
import Resource_Card from '@/components/resource-card';
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

  return (
    <>
      <div className='pt-16'>
        <h1 className='text-4xl pb-10 m-6 mt-0 font-black'>Resources Section</h1>
        <div className='flex flex-wrap justify-center '>
          {resources?.map((resource: any, idx: any) => {
            return (
              <>
                <Resource_Card key={idx} resource_name={resource.name} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
