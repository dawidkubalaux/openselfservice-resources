import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
    return (
        <section className="bg-foreground py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                        Ready to Sell?
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-background">
                        List your car and reach thousands of buyers
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-background/70">
                        Create a free listing in minutes. Our platform connects
                        you with serious buyers and provides tools to manage
                        your sale from start to finish.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button size="lg" className="gap-2">
                            Start Selling <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
