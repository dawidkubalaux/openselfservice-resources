'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Data shaped after the DXP "FAQ Section" CMS block                 */
/*  Block: preTitle, title, description, sections[], banner, oneColumn */
/*  Section (content.faq-section): title, items[]                     */
/*  Item (content.message): title, description                        */
/*  Banner (content.banner): title, description, link                 */
/* ------------------------------------------------------------------ */

interface FaqMessage {
    title: string;
    description: string;
}

interface FaqSectionGroup {
    title: string;
    items: FaqMessage[];
}

interface FaqBanner {
    title: string;
    description?: string;
    link?: { label: string; url: string };
}

interface FaqBlockData {
    preTitle?: string;
    title: string;
    description?: string;
    sections: FaqSectionGroup[];
    oneColumn?: boolean;
    banner?: FaqBanner;
}

const faqData: FaqBlockData = {
    preTitle: 'FAQ',
    title: 'Frequently Asked Questions',
    description:
        'Find answers to the most common questions about buying and selling on AutoMarkt.',
    oneColumn: true,
    sections: [
        {
            title: 'Buying a Vehicle',
            items: [
                {
                    title: 'How are vehicles verified on AutoMarkt?',
                    description:
                        'Every vehicle listed on AutoMarkt goes through a comprehensive 150-point inspection conducted by certified mechanics. We verify the VIN, check service history, confirm mileage accuracy, and perform a thorough mechanical and cosmetic evaluation.',
                },
                {
                    title: 'Can I arrange a test drive before purchasing?',
                    description:
                        'Absolutely. You can schedule a test drive directly through the platform. We coordinate with the seller or dealer to find a convenient time and location. For remote buyers, we also offer virtual video walkarounds.',
                },
                {
                    title: 'Is there a warranty on purchased vehicles?',
                    description:
                        'Many vehicles come with remaining manufacturer warranty. Additionally, we partner with extended warranty providers to offer protection plans ranging from 6 months to 3 years covering major mechanical components.',
                },
            ],
        },
        {
            title: 'Payments & Financing',
            items: [
                {
                    title: 'What payment methods are accepted?',
                    description:
                        'We accept bank transfers, financing through our partner lenders, and escrow payments for added security. All transactions are processed through our secure payment system to protect both buyers and sellers.',
                },
                {
                    title: 'Can I get financing for my purchase?',
                    description:
                        'Yes, we offer pre-approved financing through multiple lending partners. You can check your rate without affecting your credit score and receive offers from several lenders to find the best terms.',
                },
            ],
        },
        {
            title: 'Selling a Vehicle',
            items: [
                {
                    title: 'How does the selling process work?',
                    description:
                        'Listing your car is free and takes about 10 minutes. Simply create an account, upload photos, enter vehicle details, and set your price. Our pricing tool provides market comparisons to help you set a competitive price.',
                },
                {
                    title: 'How long does it take to sell a car?',
                    description:
                        'On average, vehicles listed on AutoMarkt sell within 14 days. Well-priced cars with complete documentation and quality photos tend to sell even faster. Our analytics dashboard helps you track interest and adjust your listing.',
                },
            ],
        },
    ],
    banner: {
        title: 'Still have questions?',
        description:
            'Our support team is available 7 days a week to help you with anything you need.',
        link: { label: 'Contact Support', url: '#' },
    },
};

export function FaqSection() {
    const { preTitle, title, description, sections, oneColumn, banner } =
        faqData;

    return (
        <section id="faq" className="border-t bg-card py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    {preTitle && (
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                            {preTitle}
                        </p>
                    )}
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-card-foreground">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-4 text-pretty text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                {/* Sections grid — oneColumn = single col, otherwise 2-col on lg */}
                <div
                    className={`mx-auto grid gap-10 ${oneColumn ? 'max-w-3xl grid-cols-1' : 'max-w-5xl grid-cols-1 lg:grid-cols-2'}`}
                >
                    {sections.map((section, sIdx) => (
                        <div key={sIdx}>
                            <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                                {section.title}
                            </h3>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {section.items.map((item, iIdx) => (
                                    <AccordionItem
                                        key={iIdx}
                                        value={`s${sIdx}-i${iIdx}`}
                                    >
                                        <AccordionTrigger className="text-left text-card-foreground">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent className="leading-relaxed text-muted-foreground">
                                            {item.description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                {banner && (
                    <div className="mx-auto mt-12 max-w-3xl rounded-xl border bg-background p-6 text-center lg:p-8">
                        <h3 className="text-lg font-semibold text-foreground">
                            {banner.title}
                        </h3>
                        {banner.description && (
                            <p className="mt-2 text-sm text-muted-foreground">
                                {banner.description}
                            </p>
                        )}
                        {banner.link && (
                            <Button asChild className="mt-4 gap-2">
                                <Link href={banner.link.url}>
                                    {banner.link.label}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
