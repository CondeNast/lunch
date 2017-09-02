export class WorkLocation {
    name: string;
    lunchLocations: LunchLocation[];
    latitude?: number;
    longitude?: number;
    description?: string;
    freeFoodChannel?: string;
}

export enum LunchGenre {
    Pizza, Burgers, Greek, Sushi, Steak, BBQ, Tacos, Indian, Thai
}

export enum PriceType {
    EveryDay, OnceAWeek, SpecialOccasion 
}

export class LunchLocation {
    name: string;
    description: string;
    genres: LunchGenre[];
    vouchedBy: string;
    priceType: PriceType;
    latitude?: number;
    longitude?: number;
    streetAddress?: string;
}