'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
    { label: 'Browse Cars', url: '#listings' },
    { label: 'How It Works', url: '#features' },
    { label: 'FAQ', url: '#faq' },
];

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="AutoMarkt home"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                        <Car className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        AutoMarkt
                    </span>
                </Link>

                <nav
                    className="hidden items-center gap-8 md:flex"
                    aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.url}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <Button variant="ghost" size="sm">
                        Sign In
                    </Button>
                    <Button size="sm">List Your Car</Button>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </Button>
            </div>

            {mobileMenuOpen && (
                <div className="border-t bg-background px-4 py-4 md:hidden">
                    <nav
                        className="flex flex-col gap-3"
                        aria-label="Mobile navigation"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.url}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-3 flex flex-col gap-2 border-t pt-3">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                            <Button size="sm">List Your Car</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
