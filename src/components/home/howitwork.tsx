'use client';

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';

export default function WorkSection() {
    const faqs = [
        {
            point: "Is GulfTicket legal in Malaysia?",
            answer: "GulfTicket operates online and its legality depends on local jurisdiction. Check local laws before participating.",
        },
        {
            point: "How do I register?",
            answer: "Use your mobile number, verify with OTP, deposit RM50, and you're in!",
        },
        {
            point: "Can I withdraw anytime?",
            answer: "Yes, withdrawals are instant to PromptPay and other supported methods.",
        },
    ];

    return (
        <section className="bg-[#001F5B] text-white px-6 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-white text-xl">
                                {item.point}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-200 text-lg">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
