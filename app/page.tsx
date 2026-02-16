import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { CarListings } from '@/components/car-listings';
import { FeatureSection } from '@/components/feature-section';
import { FaqSection } from '@/components/faq-section';
import { CtaSection } from '@/components/cta-section';
import { SiteFooter } from '@/components/site-footer';

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <HeroSection />
                <CarListings />
                <FeatureSection />
                <FaqSection />
                <CtaSection />
            </main>
            <SiteFooter />
        </div>
    );
}
