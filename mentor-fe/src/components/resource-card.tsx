import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';

export default function Resource_Card({ resource_name }: any) {
  return (
    <Card className='w-[200px] m-6 mt-0'>
      <CardHeader>
        <h4>{resource_name.split('.')[0]}</h4>
        <CardDescription>
          Description about the resource
          <br />
          <Badge variant='destructive'>{resource_name.split('.')[1]}</Badge>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <a className='w-full' target='__blank' href={`http://127.0.0.1:8000/uploads/${resource_name}`}>
          <Button className='w-full'>Download</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
