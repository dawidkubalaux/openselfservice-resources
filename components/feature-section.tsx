import {
    Shield,
    Search,
    CreditCard,
    CheckCircle,
    Headphones,
    BarChart3,
} from 'lucide-react';

const features = [
    {
        title: 'Verified Listings',
        description:
            'Every vehicle undergoes a comprehensive 150-point inspection before being listed on our platform.',
        icon: CheckCircle,
    },
    {
        title: 'Smart Search',
        description:
            'Find exactly what you need with advanced filters for make, model, price, mileage, and more.',
        icon: Search,
    },
    {
        title: 'Secure Transactions',
        description:
            'Protected payments with escrow service ensure your money is safe until the car is delivered.',
        icon: Shield,
    },
    {
        title: 'Fair Pricing',
        description:
            'Market-based pricing analysis helps you understand if a listing offers good value for money.',
        icon: BarChart3,
    },
    {
        title: 'Flexible Financing',
        description:
            'Pre-approved financing options from multiple lenders with competitive interest rates.',
        icon: CreditCard,
    },
    {
        title: 'Expert Support',
        description:
            'Our automotive specialists are available to guide you through every step of the process.',
        icon: Headphones,
    },
];

export function FeatureSection() {
    return (
        <section id="features" className="bg-muted/50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                        How It Works
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Everything you need to buy with confidence
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                        From discovery to delivery, we make car buying simple,
                        transparent, and secure.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border bg-primary/10">
                                <feature.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="mb-2 font-semibold text-card-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
