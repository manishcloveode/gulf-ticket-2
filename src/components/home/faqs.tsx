'use client';

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';

export default function FaqSection() {
    const faqs = [
        {
            question: " Legal in Malaysia?",
            answer:
                "",
        },
        {
            question: "Min Deposit?",
            answer:
                "",
        },
        {
            question: " Withdrawal time?",
            answer:
                "",
        },
        {
            question: "Live Draw Access? ",
            answer:
                "",
        },
        {
            question: "Winnings Paid?",
            answer:
                "",
        },
    ];

    return (
        <section className="bg-[#191970] ">
            <div className="container mx-auto text-white px-6 py-16 ">
                <h2 className="text-4xl font-bold mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((item, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                            <AccordionTrigger className="text-left text-xl font-medium text-white  transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-200 text-base leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </section>
    );
}
