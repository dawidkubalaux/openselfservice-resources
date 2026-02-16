import Image from 'next/image';
import Link from 'next/link';
import { Fuel, Gauge, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Car } from '@/lib/car-data';

interface CarCardProps {
    car: Car;
}

export function CarCard({ car }: CarCardProps) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(car.price);

    const formattedMileage = new Intl.NumberFormat('en-US').format(car.mileage);

    return (
        <Link
            href={`/cars/${car.id}`}
            className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {car.featured && (
                    <Badge className="absolute left-3 top-3">Featured</Badge>
                )}
                <Badge
                    variant="secondary"
                    className="absolute right-3 top-3 bg-background/90 text-foreground backdrop-blur"
                >
                    {car.fuelType}
                </Badge>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <div className="mb-1 flex items-start justify-between gap-2">
                    <div>
                        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            {car.make} {car.model}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {car.year} &middot; {car.color}
                        </p>
                    </div>
                    <p className="shrink-0 text-lg font-bold text-primary">
                        {formattedPrice}
                    </p>
                </div>

                <div className="mt-3 flex items-center gap-4 border-t pt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Gauge className="h-3.5 w-3.5" />
                        {formattedMileage} km
                    </span>
                    <span className="flex items-center gap-1">
                        <Fuel className="h-3.5 w-3.5" />
                        {car.transmission}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                        <MapPin className="h-3.5 w-3.5" />
                        {car.location}
                    </span>
                </div>
            </div>
        </Link>
    );
}
