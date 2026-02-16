'use client';

import { useState, useMemo } from 'react';
import { CarCard } from '@/components/car-card';
import { CarFilters } from '@/components/car-filters';
import { cars } from '@/lib/car-data';

export function CarListings() {
    const [selectedMake, setSelectedMake] = useState('all');
    const [selectedBody, setSelectedBody] = useState('all');
    const [selectedFuel, setSelectedFuel] = useState('all');
    const [selectedSort, setSelectedSort] = useState('featured');

    const filteredCars = useMemo(() => {
        let result = [...cars];

        if (selectedMake !== 'all') {
            result = result.filter((c) => c.make === selectedMake);
        }
        if (selectedBody !== 'all') {
            result = result.filter((c) => c.bodyType === selectedBody);
        }
        if (selectedFuel !== 'all') {
            result = result.filter((c) => c.fuelType === selectedFuel);
        }

        switch (selectedSort) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'year-desc':
                result.sort((a, b) => b.year - a.year);
                break;
            case 'mileage-asc':
                result.sort((a, b) => a.mileage - b.mileage);
                break;
            default:
                result.sort(
                    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
                );
        }

        return result;
    }, [selectedMake, selectedBody, selectedFuel, selectedSort]);

    const handleReset = () => {
        setSelectedMake('all');
        setSelectedBody('all');
        setSelectedFuel('all');
        setSelectedSort('featured');
    };

    return (
        <section
            id="listings"
            className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24"
        >
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                    Browse Inventory
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    Available Vehicles
                </h2>
                <p className="mt-2 text-muted-foreground">
                    {filteredCars.length}{' '}
                    {filteredCars.length === 1 ? 'vehicle' : 'vehicles'} found
                </p>
            </div>

            <CarFilters
                selectedMake={selectedMake}
                selectedBody={selectedBody}
                selectedFuel={selectedFuel}
                selectedSort={selectedSort}
                onMakeChange={setSelectedMake}
                onBodyChange={setSelectedBody}
                onFuelChange={setSelectedFuel}
                onSortChange={setSelectedSort}
                onReset={handleReset}
            />

            {filteredCars.length > 0 ? (
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            ) : (
                <div className="mt-16 flex flex-col items-center justify-center rounded-xl border bg-card py-16 text-center">
                    <p className="text-lg font-semibold text-card-foreground">
                        No vehicles found
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Try adjusting your filters to see more results.
                    </p>
                </div>
            )}
        </section>
    );
}
