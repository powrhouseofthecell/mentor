import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs_data = [
  {
    acc_trigger: "Is there any fee for using the mentorship platform?",
    acc_content:
      "No, our mentorship platform is completely free to use for all registered users. We believe in providing accessible opportunities for mentorship and skill development to students and professionals alike.",
  },
  {
    acc_trigger: "How do I sign up as a mentee?",
    acc_content:
      "To sign up as a mentee, simply navigate to the signup page and fill out the required information. Once submitted, your mentee account will be created.",
  },
  {
    acc_trigger: "Can I switch from being a mentee to a mentor?",
    acc_content:
      "Yes, you can transition from being a mentee to a mentor. After actively participating as a mentee and demonstrating your skills and expertise, you can apply to become a mentor. Your application will be reviewed, and upon approval, you'll gain mentor privileges",
  },
  {
    acc_trigger: "How do I create events as a mentor?",
    acc_content:
      "As a mentor, you'll have the ability to create events for mentees. Simply navigate to the events section of the platform and click on the 'Create Event' button. Fill out the necessary details such as the event title, description, date, and time, and then publish the event for mentees to see and RSVP.",
  },
  {
    acc_trigger: "Can I check who is attending my events?",
    acc_content:
      "Yes, if you have created the event you check the list of people who are attending the event.",
  },
  {
    acc_trigger: "How can I share resources with other users?",
    acc_content:
      "There is a dedicated resource page where you can upload the resources and others can download.",
  },
  {
    acc_trigger: "How do virtual meetings with mentors work?",
    acc_content:
      "After getting you connection request accepted by the mentor, you can schedule a one-on-one 30 minute connect on Google Meet.",
  },
  {
    acc_trigger: "What is the coding playground feature?",
    acc_content:
      "We have tried to bring the coding playground feature where you can code and tests in multiple languages ranging from JavaScript, TypeScript Java, C# etc.",
  },
  {
    acc_trigger:
      "How are virtual meetings scheduled between mentors and mentees?",
    acc_content:
      "Based on the available slots that the mentor has selected, you can select on slot from that and a meet will be scheduled.",
  },
  {
    acc_trigger: "What criteria are used for becoming mentors?",
    acc_content:
      "These process is 100% manual, only after verifying if the person can provide value to students and can guide them only then is the role changed to a mentor.",
  },
];

export default function FAQ_Accordion() {
  return (
    <>
      <Accordion type="single" collapsible className="w-[950px] pt-32 mx-auto">
        <h1 className="text-4xl pb-20 font-black">
          Frequently asked questions
        </h1>
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
