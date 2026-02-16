export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
    transmission: 'Automatic' | 'Manual';
    bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Truck' | 'Van';
    color: string;
    horsepower: number;
    location: string;
    image: string;
    featured: boolean;
    description: string;
    features: string[];
}

export const cars: Car[] = [
    {
        id: '1',
        make: 'BMW',
        model: 'M4 Competition',
        year: 2024,
        price: 78900,
        mileage: 2400,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        bodyType: 'Coupe',
        color: 'Isle of Man Green',
        horsepower: 503,
        location: 'Munich, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: true,
        description:
            'A nearly new M4 Competition with the iconic Isle of Man Green finish. Full M Performance package with carbon fiber roof and ceramic brakes.',
        features: [
            'Carbon Fiber Roof',
            'Ceramic Brakes',
            'Head-Up Display',
            'Harman Kardon Sound',
            'Adaptive M Suspension',
        ],
    },
    {
        id: '2',
        make: 'Mercedes-Benz',
        model: 'EQS 580',
        year: 2024,
        price: 105000,
        mileage: 8200,
        fuelType: 'Electric',
        transmission: 'Automatic',
        bodyType: 'Sedan',
        color: 'Obsidian Black',
        horsepower: 516,
        location: 'Stuttgart, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: true,
        description:
            'The flagship electric sedan from Mercedes-Benz. Hyperscreen dashboard, rear-axle steering, and over 350 miles of range.',
        features: [
            'MBUX Hyperscreen',
            'Rear-Axle Steering',
            'Burmester 4D Sound',
            'Air Suspension',
            'Augmented Reality Navigation',
        ],
    },
    {
        id: '3',
        make: 'Porsche',
        model: 'Cayenne Turbo GT',
        year: 2023,
        price: 189500,
        mileage: 5100,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        bodyType: 'SUV',
        color: 'Arctic Grey',
        horsepower: 631,
        location: 'Zuffenhausen, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: true,
        description:
            'The most powerful Cayenne ever built. Titanium exhaust, carbon ceramic brakes, and performance-tuned suspension for track-ready capability.',
        features: [
            'Carbon Ceramic Brakes',
            'Titanium Exhaust',
            'Sport Chrono Package',
            'PDCC Sport',
            'Lightweight Package',
        ],
    },
    {
        id: '4',
        make: 'Audi',
        model: 'RS e-tron GT',
        year: 2024,
        price: 147000,
        mileage: 3500,
        fuelType: 'Electric',
        transmission: 'Automatic',
        bodyType: 'Sedan',
        color: 'Daytona Grey',
        horsepower: 637,
        location: 'Ingolstadt, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: false,
        description:
            "Audi's high-performance electric grand tourer. Stunning design meets blistering performance with 637 horsepower and all-wheel drive.",
        features: [
            'Matrix LED Headlights',
            'Bang & Olufsen Sound',
            'Carbon Fiber Package',
            'Air Suspension',
            'Laser Light',
        ],
    },
    {
        id: '5',
        make: 'Volkswagen',
        model: 'Golf R',
        year: 2024,
        price: 46200,
        mileage: 12000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        bodyType: 'Hatchback',
        color: 'Lapiz Blue',
        horsepower: 315,
        location: 'Wolfsburg, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: false,
        description:
            'The ultimate hot hatch. Torque vectoring all-wheel drive, drift mode, and a digital cockpit in a practical package.',
        features: [
            'Torque Vectoring AWD',
            'Drift Mode',
            'Digital Cockpit Pro',
            'DCC Adaptive Dampers',
            'Akrapovic Exhaust',
        ],
    },
    {
        id: '6',
        make: 'Toyota',
        model: 'Land Cruiser',
        year: 2024,
        price: 92400,
        mileage: 6800,
        fuelType: 'Hybrid',
        transmission: 'Automatic',
        bodyType: 'SUV',
        color: 'Heritage Blue',
        horsepower: 409,
        location: 'Berlin, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: false,
        description:
            'The legendary Land Cruiser returns with hybrid power. Unmatched off-road capability combined with modern luxury and efficiency.',
        features: [
            'Multi-Terrain Select',
            'Crawl Control',
            'Kinetic Dynamic Suspension',
            'JBL Premium Audio',
            '360-Degree Camera',
        ],
    },
    {
        id: '7',
        make: 'Ford',
        model: 'Mustang GT',
        year: 2024,
        price: 55800,
        mileage: 1200,
        fuelType: 'Petrol',
        transmission: 'Manual',
        bodyType: 'Coupe',
        color: 'Grabber Blue',
        horsepower: 480,
        location: 'Cologne, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: false,
        description:
            'The all-new S650 Mustang GT with the legendary 5.0L V8. Now with a digital dash and the most advanced chassis ever in a Mustang.',
        features: [
            '5.0L V8 Engine',
            'MagneRide Dampers',
            'Recaro Seats',
            '12-inch Digital Cluster',
            'Active Valve Exhaust',
        ],
    },
    {
        id: '8',
        make: 'Tesla',
        model: 'Model S Plaid',
        year: 2024,
        price: 108900,
        mileage: 4200,
        fuelType: 'Electric',
        transmission: 'Automatic',
        bodyType: 'Sedan',
        color: 'Pearl White',
        horsepower: 1020,
        location: 'Hamburg, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: true,
        description:
            'The fastest production sedan in the world. Tri-motor all-wheel drive with carbon-sleeved rotors delivering insane performance.',
        features: [
            'Tri-Motor AWD',
            'Yoke Steering',
            '22-Speaker Audio',
            'Full Self-Driving',
            'Carbon Fiber Spoiler',
        ],
    },
    {
        id: '9',
        make: 'Range Rover',
        model: 'Sport SV',
        year: 2024,
        price: 175000,
        mileage: 7800,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        bodyType: 'SUV',
        color: 'Charente Grey',
        horsepower: 626,
        location: 'Frankfurt, Germany',
        image: '/placeholder.svg?height=400&width=600',
        featured: false,
        description:
            'The most dynamic Range Rover ever. Bespoke ceramic brakes, carbon fiber body panels, and a hand-assembled twin-turbo V8.',
        features: [
            'Carbon Ceramic Brakes',
            'Switchable Exhaust',
            'SVR Bucket Seats',
            'Meridian Signature Sound',
            'Terrain Response 2',
        ],
    },
];

export const makes = [...new Set(cars.map((c) => c.make))].sort();
export const bodyTypes = [...new Set(cars.map((c) => c.bodyType))].sort();
export const fuelTypes = [...new Set(cars.map((c) => c.fuelType))].sort();
export const transmissions = [
    ...new Set(cars.map((c) => c.transmission)),
].sort();
