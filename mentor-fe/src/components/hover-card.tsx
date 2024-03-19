import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Video } from 'lucide-react';

export function Hover_Card({ name }: { name: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='ghost'>
          <Video size={16} />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-15'>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <p className='text-xs'>@{name}</p>
            <p className='text-xs'>Book a google meet session with {name} for mentorship.</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
