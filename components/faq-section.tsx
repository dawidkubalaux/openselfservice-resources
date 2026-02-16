'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: 'How are vehicles verified on AutoMarkt?',
        answer: 'Every vehicle listed on AutoMarkt goes through a comprehensive 150-point inspection conducted by certified mechanics. We verify the VIN, check service history, confirm mileage accuracy, and perform a thorough mechanical and cosmetic evaluation.',
    },
    {
        question: 'Can I arrange a test drive before purchasing?',
        answer: 'Absolutely. You can schedule a test drive directly through the platform. We coordinate with the seller or dealer to find a convenient time and location. For remote buyers, we also offer virtual video walkarounds.',
    },
    {
        question: 'What payment methods are accepted?',
        answer: 'We accept bank transfers, financing through our partner lenders, and escrow payments for added security. All transactions are processed through our secure payment system to protect both buyers and sellers.',
    },
    {
        question:
            'Is there a warranty on vehicles purchased through AutoMarkt?',
        answer: 'Many vehicles come with remaining manufacturer warranty. Additionally, we partner with extended warranty providers to offer protection plans ranging from 6 months to 3 years covering major mechanical components.',
    },
    {
        question: 'How does the selling process work?',
        answer: 'Listing your car is free and takes about 10 minutes. Simply create an account, upload photos, enter vehicle details, and set your price. Our pricing tool provides market comparisons to help you set a competitive price.',
    },
    {
        question: 'Can I get financing for my purchase?',
        answer: 'Yes, we offer pre-approved financing through multiple lending partners. You can check your rate without affecting your credit score and receive offers from several lenders to find the best terms.',
    },
];

export function FaqSection() {
    return (
        <section id="faq" className="py-16 lg:py-24">
            <div className="mx-auto max-w-3xl px-4 lg:px-8">
                <div className="mb-12 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                        FAQ
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Find answers to the most common questions about buying
                        and selling on AutoMarkt.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
