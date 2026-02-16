import { notFound } from 'next/navigation';
import { cars } from '@/lib/car-data';
import { VehicleDetail } from '@/components/vehicle-detail';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { id } = await params;
    const car = cars.find((c) => c.id === id);
    if (!car) return { title: 'Car Not Found' };

    return {
        title: `${car.year} ${car.make} ${car.model} - AutoMarkt`,
        description: car.description,
    };
}

export function generateStaticParams() {
    return cars.map((car) => ({ id: car.id }));
}

export default async function CarDetailPage({ params }: PageProps) {
    const { id } = await params;
    const car = cars.find((c) => c.id === id);

    if (!car) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <VehicleDetail car={car} />
            </main>
            <SiteFooter />
        </div>
    );
}
