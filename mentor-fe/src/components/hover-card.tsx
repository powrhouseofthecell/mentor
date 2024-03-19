import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export function Hover_Card({ name }: { name: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant='ghost'>
          <span className='text-xs'>@{name}</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-15'>
        <div className='flex justify-between space-x-4'>
          <div className='space-y-1'>
            <p className='text-xs'>@{name}</p>
            <p className='text-xs'>{name} is a full stack developer, having worked with MERN, Rust and GoLang.</p>
            <div className='flex items-center pt-2'>
              {/* <span className='text-xs text-muted-foreground'>Joined December 2021</span> */}
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
