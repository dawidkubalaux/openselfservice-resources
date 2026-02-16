'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    Calendar,
    Fuel,
    Gauge,
    MapPin,
    Palette,
    Zap,
    Phone,
    Mail,
    Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Car } from '@/lib/car-data';

interface VehicleDetailProps {
    car: Car;
}

export function VehicleDetail({ car }: VehicleDetailProps) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(car.price);

    const formattedMileage = new Intl.NumberFormat('en-US').format(car.mileage);

    const specs = [
        { label: 'Year', value: String(car.year), icon: Calendar },
        { label: 'Mileage', value: `${formattedMileage} km`, icon: Gauge },
        { label: 'Fuel Type', value: car.fuelType, icon: Fuel },
        { label: 'Horsepower', value: `${car.horsepower} HP`, icon: Zap },
        { label: 'Color', value: car.color, icon: Palette },
        { label: 'Location', value: car.location, icon: MapPin },
    ];

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to listings
            </Link>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Left column - Image and tabs */}
                <div className="lg:col-span-2">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted">
                        <Image
                            src={car.image}
                            alt={`${car.year} ${car.make} ${car.model}`}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 66vw"
                        />
                        {car.featured && (
                            <Badge className="absolute left-4 top-4">
                                Featured
                            </Badge>
                        )}
                    </div>

                    <Tabs defaultValue="overview" className="mt-6">
                        <TabsList className="w-full justify-start">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="features">Features</TabsTrigger>
                            <TabsTrigger value="specs">
                                Specifications
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="mt-4">
                            <div className="rounded-xl border bg-card p-6">
                                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                                    About This Vehicle
                                </h3>
                                <p className="leading-relaxed text-muted-foreground">
                                    {car.description}
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="features" className="mt-4">
                            <div className="rounded-xl border bg-card p-6">
                                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                                    Equipment & Features
                                </h3>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {car.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-2"
                                        >
                                            <Check className="h-4 w-4 shrink-0 text-primary" />
                                            <span className="text-sm text-muted-foreground">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="specs" className="mt-4">
                            <div className="rounded-xl border bg-card p-6">
                                <h3 className="mb-4 text-lg font-semibold text-card-foreground">
                                    Technical Specifications
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {specs.map((spec) => (
                                        <div
                                            key={spec.label}
                                            className="flex items-center gap-3 rounded-lg border p-3"
                                        >
                                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                                                <spec.icon className="h-4 w-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    {spec.label}
                                                </p>
                                                <p className="text-sm font-medium text-card-foreground">
                                                    {spec.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Right column - Price and contact */}
                <div className="flex flex-col gap-6">
                    <div className="rounded-xl border bg-card p-6">
                        <div className="mb-1 flex items-center gap-2">
                            <Badge variant="secondary">{car.bodyType}</Badge>
                            <Badge variant="secondary">
                                {car.transmission}
                            </Badge>
                        </div>
                        <h1 className="mt-3 text-2xl font-bold text-card-foreground">
                            {car.make} {car.model}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {car.year} &middot; {formattedMileage} km
                        </p>

                        <Separator className="my-4" />

                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-primary">
                                {formattedPrice}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Estimated monthly:{' '}
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'EUR',
                                maximumFractionDigits: 0,
                            }).format(Math.round(car.price / 48))}
                            /mo (48 months)
                        </p>

                        <div className="mt-6 flex flex-col gap-3">
                            <Button size="lg" className="w-full gap-2">
                                <Phone className="h-4 w-4" />
                                Contact Seller
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full gap-2"
                            >
                                <Mail className="h-4 w-4" />
                                Send Message
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-xl border bg-card p-6">
                        <h3 className="mb-3 text-sm font-semibold text-card-foreground">
                            Key Highlights
                        </h3>
                        <div className="flex flex-col gap-3">
                            {specs.slice(0, 4).map((spec) => (
                                <div
                                    key={spec.label}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-sm text-muted-foreground">
                                        {spec.label}
                                    </span>
                                    <span className="text-sm font-medium text-card-foreground">
                                        {spec.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border bg-muted/50 p-6">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">
                                    Location
                                </p>
                                <p className="mt-0.5 text-sm text-muted-foreground">
                                    {car.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
