// @ts-nocheck

import {
  Accordion as UiAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@workspace/ui/components/accordion';

type Item = {
  id: number;
  title: string;
  content: string;
};
type AccordionProps = {
  items?: Item[];
};
export default function AccordionDemo({ items = [] }: AccordionProps) {
  return (
    <UiAccordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </UiAccordion>
  );
}
