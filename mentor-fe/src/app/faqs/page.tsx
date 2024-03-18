import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs_data = [
  {
    acc_trigger: 'Lorem Ipsum 1',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 2',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 3',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 4',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 5',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 6',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 7',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 8',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 9',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
  {
    acc_trigger: 'Lorem Ipsum 10',
    acc_content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid nisi consequuntur sequi qui rem vitae dolorem est cumque optio.',
  },
];

export default function FAQ_Accordion() {
  return (
    <>
      <Accordion type='single' collapsible className='w-[950px] pt-32 mx-auto'>
        <h1 className='text-4xl pb-20 font-black'>Frequently asked questions</h1>
        {faqs_data.map((data, idx) => {
          return (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{data.acc_trigger}</AccordionTrigger>
              <AccordionContent>{data.acc_content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
