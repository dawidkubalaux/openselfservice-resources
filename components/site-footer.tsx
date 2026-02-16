import Link from 'next/link';
import { Car } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerGroups = [
    {
        title: 'Marketplace',
        items: [
            { label: 'Browse Cars', url: '#listings' },
            { label: 'Sell Your Car', url: '#' },
            { label: 'Financing', url: '#' },
            { label: 'Car Valuation', url: '#' },
        ],
    },
    {
        title: 'Company',
        items: [
            { label: 'About Us', url: '#' },
            { label: 'Careers', url: '#' },
            { label: 'Press', url: '#' },
            { label: 'Contact', url: '#' },
        ],
    },
    {
        title: 'Support',
        items: [
            { label: 'Help Center', url: '#' },
            { label: 'Safety Tips', url: '#' },
            { label: 'Terms of Service', url: '#' },
            { label: 'Privacy Policy', url: '#' },
        ],
    },
];

export function SiteFooter() {
    return (
        <footer className="border-t bg-card" role="contentinfo">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div>
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            aria-label="AutoMarkt home"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                                <Car className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-card-foreground">
                                AutoMarkt
                            </span>
                        </Link>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Your trusted platform for buying and selling premium
                            vehicles. Verified listings, secure transactions,
                            and expert support.
                        </p>
                    </div>

                    {footerGroups.map((group) => (
                        <nav key={group.title} aria-label={group.title}>
                            <h3 className="mb-4 text-sm font-semibold text-card-foreground">
                                {group.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.url}
                                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>

                <Separator className="my-8" />

                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} AutoMarkt. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
