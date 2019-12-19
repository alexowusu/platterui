export interface Reading {
    temperature: string;
    feelsGoodTemp: string;
    humidity: string;
    MaxUVIndex: string;
    precipitationProb: string;
    visibility: string;
    weatherType: string;
    windDirection: string;
    windGust: string;
    windSpeed: string;
}

export interface Period {
    timestamp: Date;
    reading: Reading;
}

export interface Summary {
    temp: number;
    humidity: number;
    windSpeed: number;
}

export interface Weather {
    elevation: string;
    locationId: string;
    latitude: string;
    longitude: string;
    name: string;
    county: string;
    periods: Period[];
    dataDate: Date;
    country: string;
    summary: Summary;
}


