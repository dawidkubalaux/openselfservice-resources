'use client';

import { SlidersHorizontal } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { makes, bodyTypes, fuelTypes } from '@/lib/car-data';

interface CarFiltersProps {
    selectedMake: string;
    selectedBody: string;
    selectedFuel: string;
    selectedSort: string;
    onMakeChange: (value: string) => void;
    onBodyChange: (value: string) => void;
    onFuelChange: (value: string) => void;
    onSortChange: (value: string) => void;
    onReset: () => void;
}

export function CarFilters({
    selectedMake,
    selectedBody,
    selectedFuel,
    selectedSort,
    onMakeChange,
    onBodyChange,
    onFuelChange,
    onSortChange,
    onReset,
}: CarFiltersProps) {
    const hasFilters =
        selectedMake !== 'all' ||
        selectedBody !== 'all' ||
        selectedFuel !== 'all';

    return (
        <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-3 lg:grid-cols-4">
                <Select value={selectedMake} onValueChange={onMakeChange}>
                    <SelectTrigger aria-label="Filter by make">
                        <SelectValue placeholder="Make" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Makes</SelectItem>
                        {makes.map((make) => (
                            <SelectItem key={make} value={make}>
                                {make}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={selectedBody} onValueChange={onBodyChange}>
                    <SelectTrigger aria-label="Filter by body type">
                        <SelectValue placeholder="Body Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Body Types</SelectItem>
                        {bodyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={selectedFuel} onValueChange={onFuelChange}>
                    <SelectTrigger aria-label="Filter by fuel type">
                        <SelectValue placeholder="Fuel Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Fuel Types</SelectItem>
                        {fuelTypes.map((fuel) => (
                            <SelectItem key={fuel} value={fuel}>
                                {fuel}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={selectedSort} onValueChange={onSortChange}>
                    <SelectTrigger aria-label="Sort listings">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="featured">Featured First</SelectItem>
                        <SelectItem value="price-asc">
                            Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-desc">
                            Price: High to Low
                        </SelectItem>
                        <SelectItem value="year-desc">Newest First</SelectItem>
                        <SelectItem value="mileage-asc">
                            Lowest Mileage
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {hasFilters && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onReset}
                    className="shrink-0"
                >
                    Clear Filters
                </Button>
            )}
        </div>
    );
}
