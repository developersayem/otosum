import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import Link from "next/link";

interface IFaq {
  question: string;
  answer: string;
}

export default function Home() {
  const faq: IFaq[] = [
    {
      question: "question1",
      answer: "Answer1",
    },
    {
      question: "question2",
      answer: "Answer2",
    },
    {
      question: "question3",
      answer: "Answer3",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 light">
      <Button variant="outline">ShadCN</Button>
      <div className="p-3">
        <Link href="/dashboard">
          <Button variant="greenBtn">Dashboard</Button>
        </Link>
      </div>
      <div className="w-[500px] p-5">
        {faq.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="p-3">
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
}
