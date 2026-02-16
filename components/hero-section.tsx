import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-foreground py-24 lg:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_70%)]" />
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                        Premium Car Marketplace
                    </p>
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
                        Find Your Next{' '}
                        <span className="text-primary">Dream Car</span>
                    </h1>
                    <p className="mt-6 text-pretty text-lg leading-relaxed text-background/70">
                        Browse thousands of verified vehicles from trusted
                        sellers across the country. Every car inspected, every
                        deal transparent.
                    </p>

                    <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search by make, model, or keyword..."
                                className="h-12 bg-background pl-10 text-foreground"
                            />
                        </div>
                        <Button size="lg" className="h-12 px-8">
                            Search Cars
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-background/50">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-background">
                                2,400+
                            </span>{' '}
                            Verified Listings
                        </div>
                        <div className="hidden h-4 w-px bg-background/20 sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-background">
                                98%
                            </span>{' '}
                            Customer Satisfaction
                        </div>
                        <div className="hidden h-4 w-px bg-background/20 sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-background">
                                150+
                            </span>{' '}
                            Trusted Dealers
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
