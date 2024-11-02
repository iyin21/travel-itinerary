import { APIResponse } from "."

export type FlightResponse = APIResponse<Data[]>

export interface Stops {
    numberOfStops: number
    count: number
    minPrice: {
        currencyCode: string
        units: number
        nanos: number
    }
}
export interface Airline {
    name: string
    logoUrl: string
    iataCode: string
    count: number
    minPrice: {
        currencyCode: string
        units: number
        nanos: number
    }
}
export interface DepartureIntervals {
    start: string
    end: string
}
export interface Times {
    start: string
    end: string
    count: number
}
export interface FlightTimes {
    arrival: Times[]
    departure: Times[]
}
export interface Baggage {
    paramName: string
    count: number
    enabled: boolean
    baggageType: string
}
export interface Duration {
    min: number
    max: number
    durationType: string
    enabled: boolean
    paramName: string
}
export interface Legs {
    departureTime: string
    arrivalTime: string
    departureAirport: {
        type: string
        code: string
        city: string
        cityName: string
        country: string
        countryName: string
        name: string
    }
    arrivalAirport: {
        type: string
        code: string
        city: string
        cityName: string
        country: string
        countryName: string
        name: string
    }
    cabinClass: string
    flightInfo: {
        facilities: []
        flightNumber: number
        planeType: ""
        carrierInfo: {
            operatingCarrier: string
            marketingCarrier: string
            operatingCarrierDisclosureText: ""
        }
    }
    carriers: string[]
    carriersData: CarriersData[]
    totalTime: number
    flightStops: []
}
export interface CarriersData {
    name: string
    code: string
    logo: string
}
export interface TravellerCheckedLuggage {
    travellerReference: string
    luggageAllowance: {
        luggageType: string
        ruleType: string
        maxPiece: number
        maxWeightPerPiece: number
        massUnit: string
    }
}
export interface TravellerCabinLuggage {
    travellerReference: string
    luggageAllowance: {
        luggageType: string
        maxPiece: number
        maxWeightPerPiece: number
        massUnit: string
        sizeRestrictions: {
            maxLength: number
            maxWidth: number
            maxHeight: number
            sizeUnit: string
        }
    }
}
export interface Segments {
    departureAirport: {
        type: string
        code: string
        city: string
        cityName: string
        country: string
        countryName: string
        name: string
    }
    arrivalAirport: {
        type: string
        code: string
        city: string
        cityName: string
        country: string
        countryName: string
        name: string
    }
    departureTime: string
    arrivalTime: string
    legs: Legs[]
    totalTime: number
    travellerCheckedLuggage: TravellerCheckedLuggage[]
    travellerCabinLuggage: TravellerCabinLuggage[]
    isAtolProtected: boolean
    showWarningDestinationAirport: boolean
    showWarningOriginAirport: boolean
}
export interface Data {
    aggregation: {
        totalCount: number
        filteredTotalCount: number
        stops: Stops[]
        airlines: Airline[]
        departureIntervals: DepartureIntervals[]
        flightTimes: FlightTimes[]
        durationMin: number
        durationMax: number
        minPrice: {
            currencyCode: string
            units: number
            nanos: number
        }
        minPriceFiltered: {
            currencyCode: string
            units: number
            nanos: number
        }
        baggage: Baggage[]
        budget: {
            paramName: string
            min: {
                currencyCode: string
                units: number
                nanos: number
            }
            max: {
                currencyCode: string
                units: number
                nanos: number
            }
        }
        budgetPerAdult: {
            paramName: string
            min: {
                currencyCode: string
                units: number
                nanos: number
            }
            max: {
                currencyCode: string
                units: number
                nanos: number
            }
        }
        duration: Duration[]
    }
    flightOffers: [
        {
            token: string
            segments: Segments[]
            priceBreakdown: {
                total: {
                    currencyCode: string
                    units: number
                    nanos: number
                }
                baseFare: {
                    currencyCode: string
                    units: number
                    nanos: number
                }
                fee: {
                    currencyCode: string
                    units: number
                    nanos: number
                }
                tax: {
                    currencyCode: string
                    units:number
                    nanos: number
                }
                totalRounded: {
                    currencyCode: string
                    nanos: number
                    units: number
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: string
                    units: number
                    nanos: number
                }
                totalWithoutDiscount: {
                    currencyCode: string
                    units: number
                    nanos: number
                }
                totalWithoutDiscountRounded: {
                    currencyCode: string
                    nanos: number
                    units: number
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 57
                            nanos: 40000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 57
                            nanos: 40000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 400000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 360000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 134
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E2775_2_AI678"
            seatAvailability: {
                numberOfSeatsAvailable: 3
            }
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q226jMBD9muapGGxzSySrSiF0k-VSEtqIvFjEcQiUrVfYu6F8fR1S2Z5zzniOZjQXpf7KhWmeu6a-KGn8k6AWStSV4oCJP-a51-EoxEfzWZtV05vPWRKuYuSk2buFwlVgwkfoPVqmoQ9blE98UIbsGZk1Rw4qyQgsfmhPXIDdzfv6V7yfUkwoYgP8GuEgwvkrvid78nKIsuzuOpEkuA7ZuJRJIa9xWHvp7joUrYR5c0VpKMe3VTnmVjmmsNvEYZpv2zTctgnev_leUqzRVtcn7SGKo0uwbYYy_yi9vMvl7cXF5qA9u6kVZ3pWAGxvDictKkn8O2OKoB96UmSHHevZvUtFsINdbxIDgcjD_kzyjjPViM_f_Iss1z50Db0u8R9hY0fdles5ht4cZ1pvHlAAMfLtftDsAS_1rakFLI0XjVBjRQ8WCG-fRzp3NDA6v6kTdWyMb5WcIuS4mpyprWNDIYCTtaXrvYaR2n0nEf4G_K-osewBAAA."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T21:00:00"
                    arrivalTime: "2023-11-25T23:10:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T21:00:00"
                            arrivalTime: "2023-11-25T23:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 816
                                planeType: "77W"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                            departureTerminal: "2"
                            arrivalTerminal: "3"
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T08:00:00"
                    arrivalTime: "2023-12-02T10:10:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T08:00:00"
                            arrivalTime: "2023-12-02T10:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 675
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1098
                    nanos: 870000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 200
                    nanos: 180000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 132
                            nanos: 850000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_AI816_2_6E675"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q226jMBD9mvapGGxzSyWrSrl0k-WyJLQRebGIQ7iUDSvsbth8_U5IZXvOmaMzmvE0Sv2Rz7p-6tu6UVL7kqge1FCXqkJi-K2fRgiHYfhsz7VetqP-msZ-EBErST8M4geejp-w82ToGhzxXLxUk9LkKNhje6hQKQXD-TcdmY2ovf5Y_Yh2syQGxUxEf4XUC2kW2HdxZG_7ME3vVUcWe5cpvS5lnMtL5NdOsr1MeSdx1l5I4svre1BcM6O4JrhfR36SbbrE33Qx3b27TpyvyAb8cbcPo7DxNu1UZJ-Fk_WZvL0oX--hZju3qgTMipDpLPCcD6Vk7p0Jxcg3PSq2pZbxeh8WPkAtajtzMjFMHOo-yqqvhGqH88_qH1uuXGxrsK7hL6HaltuB7WJTg9VVAoT1A_Gw5drn5gDsgS7h1txABmADiAFLvjeQR4Ed-MICEHxxsx65ZVJ6c1acEMsGcuImxJZjhOfSjq92AFdujr0k9D_KaBc87QEAAA.."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T21:00:00"
                    arrivalTime: "2023-11-25T23:10:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T21:00:00"
                            arrivalTime: "2023-11-25T23:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 816
                                planeType: "77W"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                            departureTerminal: "2"
                            arrivalTerminal: "3"
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T07:15:00"
                    arrivalTime: "2023-12-02T09:25:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T07:15:00"
                            arrivalTime: "2023-12-02T09:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6814
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1098
                    nanos: 870000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 200
                    nanos: 180000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 132
                            nanos: 850000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_AI816_2_6E6814"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q226jMBT8mvapGGxzSyWrSiHsJsulJKQRebGI4xAoW1fYu7B8_Tqhsn1mzmhGxzpXpb7ks2leuqa-Kmn8kaAWStSV4oCJ3-al1-UkxEfzWZtV05uvWRKuYuSk2buFwlVgwifoPVmmoQ97Ll_4qAzZM_LYnDioJCOw-KY9cQF2N-_rn_HhLjGhiA3wW4SDCOdoN4s9-XGMsmxOnUkSDGM2LWVSyCEOay_dDWPRSpg3A0pDOe1X5ZRb5ZTCbhOHab5t03DbJviw972kWKOt9iftMYqja7BtxjL_KL28y-XtxcXmqDPzYM70XwGwvQW896KSxJ8ZUwR907MiO-xYr-7cKoId7Hr3ZiQQedh_lLzjTDXi8xf_R5ZrH7qGXpf4i7Cxo-7KRdA39Oo408LmAQXQcb8Ww1mzB7zUt6YWsDReNUKNFT1aYLnX7EQXjgZGFzfrmTo2xjcnpwg5riYXauvaUAjgPdrS9UHDRO2-kwj_B5nZupDtAQAA"
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T21:00:00"
                    arrivalTime: "2023-11-25T23:10:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T21:00:00"
                            arrivalTime: "2023-11-25T23:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 816
                                planeType: "77W"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                            departureTerminal: "2"
                            arrivalTerminal: "3"
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T06:30:00"
                    arrivalTime: "2023-12-02T08:40:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T06:30:00"
                            arrivalTime: "2023-12-02T08:40:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6218
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1098
                    nanos: 870000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 200
                    nanos: 180000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1299
                    nanos: 50000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 260000000
                    units: 1300
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 58
                            nanos: 770000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 36
                            nanos: 0
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 483
                            nanos: 10000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 94
                            nanos: 760000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 577
                            nanos: 770000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 670000000
                            units: 576
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 132
                            nanos: 850000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 145
                            nanos: 820000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_AI816_2_6E6218"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2Q227iMBCGn4ZeNU5s5wCVrFVJAgVyaJYCpTdWMCYE2HoVu4Xm6XdIVp7x_38zHlmaozF_9ZNtHy51dTTa-tKoUkZVpZFIqD_2oYFrp9S5_qzssm7scZ5GcUK8LF87JIpDGz_i4NGxLTjiaftL3oylG8Ee6p1EpRaMLv7bhvmI-vP17CXZdCWhDHMRfZ3QcEKL0OuLDZu-b5aL_smepeH1lrfPOn3TbhJVQbpyNWSQnQoNGaR4PE2dbJq2-4-3-tqu4m1bONs2w5fXvI1_svMKZmfk9_J6S08fUe7MV0kMGU2SdTGgEUT3lRSCYYTcYIQ7VqVmxOmtMIwMe7s3bEk9Z-z3aBj1Xep2cGOYBHT4oOVFClOrz4X8YX5MgsCzYGHqm1Cr4H7sA8PupACeD0iI3eNZed_gBvQZouIOckCPoBi05GSIontzx0ceiOCjO-25hyV2wUkeYHIfOfA71hwj3I2e-GwD0nJ_eD19Hf4BbWWtxe4BAAA."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T01:20:00"
                    arrivalTime: "2023-11-25T03:20:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T01:20:00"
                            arrivalTime: "2023-11-25T03:20:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 2775
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7200
                            flightStops: []
                        },
                    ]
                    totalTime: 7200
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T08:00:00"
                    arrivalTime: "2023-12-02T10:10:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T08:00:00"
                            arrivalTime: "2023-12-02T10:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 675
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1106
                    nanos: 620000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 233
                    nanos: 610000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 570000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E2775_2_6E675"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q227qMBD8GvrUOLGdG5Wso5IEDpALlAKHvljBmBDKqavYFJqv70Iq73hmRzuytQdjPvWTbe9PdXUw2jprVCmjqtJIJNR_e9_AtVXqvf6o7LJu7EGRxUlKvLxYOSROIhs_4uDRsS044mnzR16NpRvBHuqtRKUWjE5_ZcN8RP3Javw3Xd8toQxzEZ0NaTSks43bmQ0b_Vsvpt3IjmXR5Vq0zzp71W4aV0G2dDUgyI9zDQgyPBhlTj7K2t3ba31pl8mmnTubNsenWdEm3_n7ErJj8rK4XLPjW1w4k2WaAOJhupr3aAx1f0oKwTBCbtDH916VmhGnk8IwEnZyZ9iCes7A71rDqO_S7utXhklAwwctT1KYWn1M5TfzExIEngULU1-EWnPuJ36IXQuWJwUYkx6JsK9a7-sTVI8-Q1XcQQ7wARgDl5yEKKKgtrzvAQnev43uuIcldkFJHmByi-z5ra05RvgePfLxGqjlfng5nvc_tI4-Oe8BAAA."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T01:20:00"
                    arrivalTime: "2023-11-25T03:20:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T01:20:00"
                            arrivalTime: "2023-11-25T03:20:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 2775
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7200
                            flightStops: []
                        },
                    ]
                    totalTime: 7200
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T07:15:00"
                    arrivalTime: "2023-12-02T09:25:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T07:15:00"
                            arrivalTime: "2023-12-02T09:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6814
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1106
                    nanos: 620000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 233
                    nanos: 610000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 570000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E2775_2_6E6814"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q227iMBD9GvrUOLGdG5WsFZDAArk0pYGlL1YwJoRSUsVuofn6DsnKM3MumiNLc9T6Uz2Z5uFclUetjC-FylrXZaElEvWHeWhg7Or6vbqUZlE15jiNgzAiTpKuLRKEExM_Yu_RMg144mn7R960oRrBHqqdRIUSjC7_04a5iLqL9fxvtOksUWtmI_o8pZMpzWar3mzY7N9mtexX9iyeXG9pO1Lxq7KjoPTi3FbQXnLKFLQX4_EstpJZ3O7fXqtrm4fbNrO2bYLPz2kb_iTvOWTn5GV1vcWntyC1FnkUQgfTaJ0NaADVfSWFYBgh2xviTteFYsTqqdCM-D3da7aijjV2e6kZdW1qd-LGMPGo_6DkWQpd1Zel_GFuSDzPMeBg9TehRsbd0CXYN-B4UoCxGJAJdi9HVTTABnQEVXILWYBHQAxYcOKjUQ5sx4cOgODD--qeO1hiG5jkHib3yIHfZcUxwl30xOcbgJa7_vX0dfgFtqQAfu8BAAA."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T01:20:00"
                    arrivalTime: "2023-11-25T03:20:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T01:20:00"
                            arrivalTime: "2023-11-25T03:20:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 2775
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7200
                            flightStops: []
                        },
                    ]
                    totalTime: 7200
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T06:30:00"
                    arrivalTime: "2023-12-02T08:40:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T06:30:00"
                            arrivalTime: "2023-12-02T08:40:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6218
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1106
                    nanos: 620000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 233
                    nanos: 610000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 570000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E2775_2_6E6218"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2QUW-bMBSFf037VAy2wQ6VrCmFsKUFMlLSiL5YxHEIJIsn7C2UXz-HTLbv-c6RLV_dozG_9bPrHs5tczTa-aNBo4xqaiOBUL_cQ2_LTqlTe2ncuu3dl1UWL1IU5KsPD8WLyIVPkD55rmOXeK6-ycE4uhfssd1JUGvBYPkfe0YAJq8fyx_pdoqEMswH-GeCowQXlN7Dnn2v3igJJ7dnWXQdVuNcZ6X203hOs42v81KjPLrCotPjZlGNhVeNOTyv0jgv1l0er7sMbzcnmpVLtH6_Dln3maTJMVq3Q1WcKlqcC307afn6mcZimL6SwvYKgE9DOHlVawbvPSlhGJrdcW_YOw68F3K3hmFKCZ7MwCCiePao5VkK06rLm_xiZEE8P3DswNRfhJ2Cz5eEzhw7Oyms3zygCPoXMny1lh7w3O6Ge8CzerQKrdbcJyC5JTseBlYED29X9zwIBRKWJEfkgCwcuG9ryyGA09OOL7dWRh4SbejlH0vEBzHuAQAA"
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T02:30:00"
                    arrivalTime: "2023-11-25T04:35:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T02:30:00"
                            arrivalTime: "2023-11-25T04:35:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6045
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7500
                            flightStops: []
                        },
                    ]
                    totalTime: 7500
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T09:00:00"
                    arrivalTime: "2023-12-02T10:55:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T09:00:00"
                            arrivalTime: "2023-12-02T10:55:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 678
                                planeType: "321"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 6900
                            flightStops: []
                            departureTerminal: "3"
                            arrivalTerminal: "2"
                        },
                    ]
                    totalTime: 6900
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1387
                    nanos: 50000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1175
                    nanos: 50000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 212
                    nanos: 10000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 410000000
                    units: 1388
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1387
                    nanos: 50000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 410000000
                    units: 1388
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 57
                            nanos: 40000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 57
                            nanos: 40000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 400000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 360000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 750000000
                            units: 620
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 134
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E6045_2_AI678"
            seatAvailability: {
                numberOfSeatsAvailable: 3
            }
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2QUW-bMBSFf037VAy2AZNK1pRC2NICGZQ0Ii8WcRwCYaHD3kL59XNgsn3Pd46uZeuelfqUz6Z5auvqrKTxR4KqU11VKgF498s89bocuu5SXyuzrHvzZRMHqwg5yebDQsHKN-ETJE-WaejFn4tvYlCG7Dl9rA8ClJJTmP_HnroAu68f6x_Rbop4p6gN8M8Q-yFOrWwOe_q9eCPuYnJHGvu3YTMuZZxLOwqWJN7aMsklSvwbTBs5blfFmFrFmMB2EwVJmjVJkDUx3m0vJM7XKHu_DXGzD6Pw7Gf1UKSXgqRtKu8nyl_3UbCPpqcE138FwCYLOPmulBSSGbmiyJvxqOg7dqwXd7aKYoLwbAYKEcHeoxSt4Krurm_ii7or14GGnlf3F2EjYsu1SzxDj05w7bcPyIfoiu1Tq-kBL_WumAUsrWetUGvJIMQgvEcHtnC0cLa49x6Z43n2PRcMuban4cRsXWsGAZzuNmy90zIyh8jP31__AClJdr7uAQAA"
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T22:15:00"
                    arrivalTime: "2023-11-26T00:25:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T22:15:00"
                            arrivalTime: "2023-11-26T00:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 651
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T09:00:00"
                    arrivalTime: "2023-12-02T10:55:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T09:00:00"
                            arrivalTime: "2023-12-02T10:55:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 678
                                planeType: "321"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 6900
                            flightStops: []
                            departureTerminal: "3"
                            arrivalTerminal: "2"
                        },
                    ]
                    totalTime: 6900
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1367
                    nanos: 700000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1156
                    nanos: 640000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 211
                    nanos: 50000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 370000000
                    units: 1366
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1367
                    nanos: 700000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 370000000
                    units: 1366
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 56
                            nanos: 560000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 56
                            nanos: 560000000
                        }
                    },
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 43
                            nanos: 640000000
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 611
                            nanos: 450000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 511
                            nanos: 250000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 200000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 730000000
                            units: 609
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 611
                            nanos: 450000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 730000000
                            units: 609
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 611
                            nanos: 490000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 511
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 200000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 730000000
                            units: 609
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 611
                            nanos: 490000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 730000000
                            units: 609
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 750000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 134
                            nanos: 100000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 750000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 250000000
                            units: 143
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E651_2_AI678"
            seatAvailability: {
                numberOfSeatsAvailable: 3
            }
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2QW1OrMBSFf40-SUgI5eJMxuHS1vaQYsXK1JcMpCmFVvGQaCu_3hScZNa31pqdPOyDUp_y3jT3p7o6KGl8SVC1qq0KJQBv3819p6Vs22P9UZlF3ZlhSuNpYk1W6Su04mlkojvk3kHT0Iffbx_ERRmy4-S2LgUoJCf-n-uIA7CzfF08JvlQ8VYRG-CnGY5meB3aY9mRRxiF-dOQdoRG50vaB5K-yHMSBy7NzijtN1YSb2Har9bPzSp-bijON2dJUTincDWn_e4ti9V2fdzKfLqcJxHKNo1U9HSUycvxkkyXxfC94JwgAGzXR0NuC0kQHi1XxPJGu1MkwxMYOmNUBLu2P4YLQZaLvVspToKruv34J35IsPCQY-gVtd8WNjIWLBzXM_S2BNd5c2NFCAv15RXa3eBA34pBADUPmkizYG8QzK5NyfyJBmf-dXTHJqVXXnvBrrpnttaaIYCGdw1b5Bo9Qz9w_7-xfgEpvgSm3gEAAA.."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T21:00:00"
                    arrivalTime: "2023-11-25T23:10:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T21:00:00"
                            arrivalTime: "2023-11-25T23:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 816
                                planeType: "77W"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                            departureTerminal: "2"
                            arrivalTerminal: "3"
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "3"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 22.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T09:00:00"
                    arrivalTime: "2023-12-02T10:55:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T09:00:00"
                            arrivalTime: "2023-12-02T10:55:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 678
                                planeType: "321"
                                carrierInfo: {
                                    operatingCarrier: "AI"
                                    marketingCarrier: "AI"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["AI", "AI"]
                            carriersData: [
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                                {
                                    name: "Air India"
                                    code: "AI"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                                },
                            ]
                            totalTime: 6900
                            flightStops: []
                            departureTerminal: "3"
                            arrivalTerminal: "2"
                        },
                    ]
                    totalTime: 6900
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "WEIGHT_BASED"
                                maxTotalWeight: 44.1
                                massUnit: "LB"
                                maxPiece: 1
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 17.6
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                            personalItem: true
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1377
                    nanos: 250000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1197
                    nanos: 410000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 179
                    nanos: 830000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 390000000
                    units: 1377
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1377
                    nanos: 250000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 390000000
                    units: 1377
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "Air India"
                            code: "AI"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 79
                            nanos: 260000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 79
                            nanos: 260000000
                        }
                        avgPerInfant: {
                            currencyCode: "AED"
                            units: 21
                            nanos: 300000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 622
                            nanos: 880000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 543
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 79
                            nanos: 260000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 420000000
                            units: 624
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 622
                            nanos: 880000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 420000000
                            units: 624
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 622
                            nanos: 880000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 543
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 79
                            nanos: 260000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 420000000
                            units: 624
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 622
                            nanos: 880000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 420000000
                            units: 624
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 131
                            nanos: 500000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 110
                            nanos: 190000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 21
                            nanos: 300000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 230000000
                            units: 132
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 131
                            nanos: 500000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 230000000
                            units: 132
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: false
                segments: [
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 22.1
                            massUnit: "LB"
                            maxPiece: 1
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                    [
                        {
                            luggageType: "PERSONAL_ITEM"
                            maxPiece: 2
                        },
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 17.6
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "WEIGHT_BASED"
                            maxTotalWeight: 44.1
                            massUnit: "LB"
                            maxPiece: 2
                        },
                    ],
                ]
            }
            extraProducts: [
                {
                    type: "flexibleTicket"
                    priceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                    }
                },
            ]
            offerExtras: {
                flexibleTicket: {
                    airProductReference: "n/a"
                    travellers: ["1", "2"]
                    priceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                    }
                }
            }
            ancillaries: {
                flexibleTicket: {
                    airProductReference: "n/a"
                    travellers: ["1", "2"]
                    priceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 96
                            nanos: 420000000
                        }
                    }
                    preSelected: false
                }
            }
            appliedDiscounts: []
            offerKeyToHighlight: "1_AI816_2_AI678"
            seatAvailability: {
                numberOfSeatsAvailable: 3
            }
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2Q227iMBCGn4ZeNY4POVayVoUEFsihlFKW3ljBmCSUNlXsFpqn7zRZeWb-_xt7ZGkqYz70nW0fz3VZGW19alQ2pikLo5Bs3uxjC2XfNK_1e2kXdWuP8zSKE-pm-TOmUTyxyS3xb7FtwZF3uz_qaizdSn5T7xUqtORs-d-23EPMWzzP_ybbviUbwx3EHqZsMmUruhuaLZ_9266Xw5MDTyeXa97d6_RJO0lU-unG0ZB-dlppSD8l41mKs1naHV6e6ku3iXfdCu-6jJwf8i7-zl43MDunj-vLNT29RDlebJIYMpout-WIRRD9V0pKThBy_JD03BSaUzxYaTgNBnswfM1cPPYGNJy5Qch6uHJCfRbcaHVW0tTN-1J9cy_2XGLBvpovyqxEAPuuBatTEngxohNCi0p1AbgRu4coBUYYtAIloIUghKHo93YvQhdEivCXDsLFBQ3AKeEdVQHmKByotSCI9LMnMd-CdCL8onW1_wF_YqpY7gEAAA.."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T22:15:00"
                    arrivalTime: "2023-11-26T00:25:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T22:15:00"
                            arrivalTime: "2023-11-26T00:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 651
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T08:00:00"
                    arrivalTime: "2023-12-02T10:10:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T08:00:00"
                            arrivalTime: "2023-12-02T10:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 675
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1087
                    nanos: 700000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 230
                    nanos: 670000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E651_2_6E675"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2Q227iMBCGn4ZeNY4POVayViUJFMihLKWU3ljBOAfKNivsLTRPv7PJyjPzf_9oRpamMea3frDt6tzWjdHWH43qznR1aRSS3S-7ukA5dN1H-1nbZXuxp0UWJyl18-IV0ziJbHJP_HtsW_Dkw_6HuhlLXyS_aw8KlVpytvqPF-4h5i1fF0_pbmjJznAHsecZi2ZsHUzH5oXP33ab1Thy5Fl0vRX9o85etJPGtZ9tHQ3p56e1hvQzMp1nOJ9n_fH9pb3222Tfr_G-z8n5ueiT7_xjC7sL-nNzvWWn97jAy22aQMaz1a6esBhi-EpJyQlCjh-SwXel5hSPKA2nwYhHwzfMxVNvtIYzNwjZYG6cUJ8Fd1qdlTRt97lS39xLPJdYcK_uizIrFeAD4lhwOyWhsZzQiDhVbZoWaMIeIWqBEQZtQAloKQhhKGKABxG6IFKE_2aPwsUlDYCU8CpVAlTCgdoKgsiwexKLHUgvwi_aNoe_j0ELB-8BAAA."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T22:15:00"
                    arrivalTime: "2023-11-26T00:25:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T22:15:00"
                            arrivalTime: "2023-11-26T00:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 651
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T07:15:00"
                    arrivalTime: "2023-12-02T09:25:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T07:15:00"
                            arrivalTime: "2023-12-02T09:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6814
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1087
                    nanos: 700000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 230
                    nanos: 670000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E651_2_6E6814"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y2Q227iMBCGn4ZeNY4POVayVkACBXIoS1NKb6zgHAiwzSr2Fpqn39lk5Zn5v380I0tz0vq3ejLN6trUJ62MPwrVrW7rXJdItr_MqoNybNtL81mbedOZszQOwojaSfqGaRDOTfJI3EdsGvDk0-FHedeG6iR_aI4lypXkbPMfO-4g5qzfVs_RfmjJVnMLsZcFmy_YNl2OzY4v3_e7zThS8Hh-u6f9VMWvyoqC2o0zS0G6yXmrIN2YzJYxTpZxX3y8Nrc-Cw_9Fh_6hFxf0j78Ti4Z7K7oz93tHp8_ghSvsyiEDBabfT1hAcTwVSklJwhZrk8G3-aKUzyi1Jx6Ixaa75iNZ85oNWe257PB3DmhLvMeVHktpW7az035zZ3QsYkB92q_KDMiAZ4Sz4DblRIa6wmdE6voq9sFaMKmELXACIOeQAloLghhaJoBHoVvg0jh_5sthI1z6gGVwqnKHKASFtRGEESG3bNY7UF64X_R5nT8C10_nC3vAQAA"
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T22:15:00"
                    arrivalTime: "2023-11-26T00:25:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T22:15:00"
                            arrivalTime: "2023-11-26T00:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 651
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T06:30:00"
                    arrivalTime: "2023-12-02T08:40:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T06:30:00"
                            arrivalTime: "2023-12-02T08:40:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6218
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1087
                    nanos: 700000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 230
                    nanos: 670000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1318
                    nanos: 370000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 620000000
                    units: 1318
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 460
                            nanos: 970000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 330000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 574
                            nanos: 650000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 0
                            units: 573
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 170
                            nanos: 60000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E651_2_6E6218"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1Q227iMBD9GvrUOL4lgUrWqpDAArk0S4GlL1YwJoSyzSp2C83X75CsPMfnMh5ZmpO1f82T6x4vVXmyxvk0qKxtXRZWI1X_cY8NXPu6fq8-SreoGnecJWEUUy_NNpiG0cQljyR4xK4DRz3tfuibdUyjxEO116gwSrDlf9kIHzF_sZn_jLddpGorOGIvUzaZstynfdiI2e_tatk_OYhkcr1l7bNJXg2PwzJI1twAgvScG0CQkPEsweksaQ9vr9W1XUe7Nse7NiWXl6yNvtP3NczO6a_V9Zac38IML9ZxBAin8SYfsBCq-0orJQhCPBiRzteFERT3UllBh708WLFiHh77vbWC-ZzxztwEoQEbPhh90cpW9cdSfws_8jH3HFhY_UWZk0sIAs-B3WkFfjGgE8KLy7DyQA3YM1QpMcLAJ2ACXEjuo_De3MuRB6Tk6O4O0iOacFBaBoTeR47ybitJEOlGz3K-BWqlP7yeP4__AIe0hnHuAQAA"
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T02:30:00"
                    arrivalTime: "2023-11-25T04:35:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T02:30:00"
                            arrivalTime: "2023-11-25T04:35:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6045
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7500
                            flightStops: []
                        },
                    ]
                    totalTime: 7500
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T08:00:00"
                    arrivalTime: "2023-12-02T10:10:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T08:00:00"
                            arrivalTime: "2023-12-02T10:10:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 675
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1106
                    nanos: 620000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 233
                    nanos: 610000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 570000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E6045_2_6E675"
            extraProductDisplayRequirements: {}
        },
        {
            token: "d7699_H4sIAAAAAAAA_y1QbW-qMBT-Ne7TKC0toEuamwnoVXkZc-p1XxqsFXFuLLSbjl-_I9z0nPO85Dxpco7GfOoH2z6cq_JotPWlUVmbuiyMQrJ-tw8NjF1dv1UfpV1UjT3OkjCKHTfN1tgJo8Am98S_x7YFTz5s_6irsXQj-V21U6jQktPFf9pwD1Fvvp79jTedJWvDGaJPExpMaJ5Evdnw6b_NctGv7HkSXK5Z-6iTF83isPSTFdPQfnrKNbSfkPE0wek0afevL9WlXUXbNsfbNiXnp6yNftK3FWRnzvPyck1Or2GG56s4gg4n8Tof0BCq-0pJyQlCzB-RTteF5g7uqTTcGfZ0b_iSunjs9dJw6jHKOnHlxPHp8E6rs5Kmqj8W6od7kYeZa8HB6m-HWrkAY0iYBcdTEoz5wAmId2wKswM2oI9QpcAIAx4BCWAhmIcCCmwnRi6AFKPb6l64RBEGTAmfOLfIQdxkJQgiXfQkZhuAVnjDy-nr8AvXIbKn7wEAAA.."
            segments: [
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    departureTime: "2023-11-25T02:30:00"
                    arrivalTime: "2023-11-25T04:35:00"
                    legs: [
                        {
                            departureTime: "2023-11-25T02:30:00"
                            arrivalTime: "2023-11-25T04:35:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6045
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7500
                            flightStops: []
                        },
                    ]
                    totalTime: 7500
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
                {
                    departureAirport: {
                        type: "AIRPORT"
                        code: "DEL"
                        city: "DEL"
                        cityName: "Delhi"
                        country: "IN"
                        countryName: "India"
                        name: "Delhi"
                    }
                    arrivalAirport: {
                        type: "AIRPORT"
                        code: "BOM"
                        city: "BOM"
                        cityName: "Mumbai"
                        country: "IN"
                        countryName: "India"
                        name: "Mumbai"
                    }
                    departureTime: "2023-12-02T07:15:00"
                    arrivalTime: "2023-12-02T09:25:00"
                    legs: [
                        {
                            departureTime: "2023-12-02T07:15:00"
                            arrivalTime: "2023-12-02T09:25:00"
                            departureAirport: {
                                type: "AIRPORT"
                                code: "DEL"
                                city: "DEL"
                                cityName: "Delhi"
                                country: "IN"
                                countryName: "India"
                                name: "Delhi"
                            }
                            arrivalAirport: {
                                type: "AIRPORT"
                                code: "BOM"
                                city: "BOM"
                                cityName: "Mumbai"
                                country: "IN"
                                countryName: "India"
                                name: "Mumbai"
                            }
                            cabinClass: "ECONOMY"
                            flightInfo: {
                                facilities: []
                                flightNumber: 6814
                                planeType: ""
                                carrierInfo: {
                                    operatingCarrier: "6E"
                                    marketingCarrier: "6E"
                                    operatingCarrierDisclosureText: ""
                                }
                            }
                            carriers: ["6E", "6E"]
                            carriersData: [
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                                {
                                    name: "IndiGo"
                                    code: "6E"
                                    logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                                },
                            ]
                            totalTime: 7800
                            flightStops: []
                        },
                    ]
                    totalTime: 7800
                    travellerCheckedLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "CHECKED_IN"
                                ruleType: "PIECE_BASED"
                                maxPiece: 1
                                maxWeightPerPiece: 33.1
                                massUnit: "LB"
                            }
                        },
                    ]
                    travellerCabinLuggage: [
                        {
                            travellerReference: "1"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                        {
                            travellerReference: "2"
                            luggageAllowance: {
                                luggageType: "HAND"
                                maxPiece: 1
                                maxWeightPerPiece: 15.4
                                massUnit: "LB"
                                sizeRestrictions: {
                                    maxLength: 21.7
                                    maxWidth: 13.8
                                    maxHeight: 9.8
                                    sizeUnit: "INCH"
                                }
                            }
                        },
                    ]
                    isAtolProtected: false
                    showWarningDestinationAirport: false
                    showWarningOriginAirport: false
                },
            ]
            priceBreakdown: {
                total: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                baseFare: {
                    currencyCode: "AED"
                    units: 1106
                    nanos: 620000000
                }
                fee: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                tax: {
                    currencyCode: "AED"
                    units: 233
                    nanos: 610000000
                }
                totalRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                moreTaxesAndFees: {}
                discount: {
                    currencyCode: "AED"
                    units: 0
                    nanos: 0
                }
                totalWithoutDiscount: {
                    currencyCode: "AED"
                    units: 1338
                    nanos: 240000000
                }
                totalWithoutDiscountRounded: {
                    currencyCode: "AED"
                    nanos: 990000000
                    units: 1336
                }
                carrierTaxBreakdown: [
                    {
                        carrier: {
                            name: "IndiGo"
                            code: "6E"
                            logo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                        }
                        avgPerAdult: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        avgPerChild: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                    },
                ]
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 610000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 420000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 468
                            nanos: 570000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 115
                            nanos: 810000000
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 584
                            nanos: 380000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 10000000
                            units: 584
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 169
                            nanos: 440000000
                        }
                        totalWithoutDiscountRounded: {
                            currencyCode: "AED"
                            nanos: 960000000
                            units: 168
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
            priceDisplayRequirements: []
            pointOfSale: "us"
            tripType: "ROUNDTRIP"
            posMismatch: {
                detectedPointOfSale: "us"
                isPOSMismatch: false
                offerSalesCountry: "us"
            }
            includedProducts: {
                areAllSegmentsIdentical: true
                segments: [
                    [
                        {
                            luggageType: "HAND"
                            maxPiece: 2
                            maxWeightPerPiece: 15.4
                            massUnit: "LB"
                            sizeRestrictions: {
                                maxLength: 21.7
                                maxWidth: 13.8
                                maxHeight: 9.8
                                sizeUnit: "INCH"
                            }
                        },
                        {
                            luggageType: "CHECKED_IN"
                            ruleType: "PIECE_BASED"
                            maxPiece: 2
                            maxWeightPerPiece: 33.1
                            massUnit: "LB"
                        },
                    ],
                ]
            }
            extraProducts: []
            offerExtras: {}
            brandedFareInfo: {
                fareName: "Regular fare"
                cabinClass: "ECONOMY"
                features: []
                fareAttributes: []
                nonIncludedFeatures: []
            }
            ancillaries: {}
            appliedDiscounts: []
            offerKeyToHighlight: "1_6E6045_2_6E6814"
            extraProductDisplayRequirements: {}
        },
    ]
    flightDeals: [
        {
            key: "CHEAPEST"
            offerToken: "d7699_H4sIAAAAAAAA_02QbW_aMBDHPw191Ti280QqWdPyUAZNQhkEmr6xgjEhwJo29hbIp981dNJ09v1___OdLN1B63f1YJr7c10dtDJ-K1Q1uqlKLZFofpn7FtK2aU71W2WWdWsG8zSKE-pk8zWmURya5J5499g0IMRD8U1etKFawe7qrUSlEoziL2yZiyx3tp7-SDZDSTSa2ch6frTCR2thh7diyyZ5Evjp4HYsDbsuiWLvP7XnfazS3PayVaGy48JLSTBJcTZJ-93rKuz6PC76BS76jJyfofeanXKVrqb05_JSLE6F2sSzyRzP8iSGG-LrZtnp7JiPrGj4VArBCEK255PBN6VixL2h0IyOb7jTbGk5OPh60QzM-DZxYYR61vhOybMUum7enuSV5U8-8Q3YXPOHWsaag8euQd1_3o1dzzFgqVKAn41oWPsfh3MLMLK-w6k4RhBAh4EIUMkJeUGBj6LPpi33HRDB_U-3447tSAEkObFdCbDnNuSaE0SG8SOfbkB67tOqc7d_AegAqEkOAgAA"
            price: {
                currencyCode: "AED"
                units: 1288
                nanos: 540000000
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 570
                            nanos: 500000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 471
                            nanos: 330000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 99
                            nanos: 170000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 570
                            nanos: 500000000
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 570
                            nanos: 460000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 471
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 99
                            nanos: 170000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 570
                            nanos: 460000000
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 147
                            nanos: 580000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 132
                            nanos: 160000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 15
                            nanos: 430000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 147
                            nanos: 580000000
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
        },
        {
            key: "FASTEST"
            offerToken: "d7699_H4sIAAAAAAAA_y2QUXOjIBSFf037VFFAQTvDdFKN3bRq1tQ0Y18YQ4zRpGFH6Mb11y8xHeCe75y5DMw9aP1HPdr2_tQ2B62sbwUaqWVT6RoI-WXve1O2Uh7bc2NXbW8_L9NoniAvW344KJqHNnyA9MGxLbPEY_lUD9pSvWD37bYGlRIMFj_YMwIwef1Y_Eo2UySkZi7Av2Mcxjh_cW9hz17KN0qCye1YGl6G5ThTaaHcJJrRdO2qrFAoCy8w79S4npdj7pRjBk_LJMryVZdFqy7Fm_WRpsUCrd4vQ9p9xkl8CFftUObHkuanXF1PUrx-JpEYpqdqYf4KgEsDOHlZKQbpDYVmyL_hTrN37DnP5GY1w5QSPJmBQUSxf6_qUy10K89v9T9G5ohSzzIDk38RtnI-WxDqW2Z2tTB-fYdC6H6T3Zdv6A7PzG64AxyjB6PQaMWRD-JrsuWBZ0Tw4Nq6414gkDBUc0T2yMCeu6a2HAI4Xe34YmNk5AFRmp7_A23DfwruAQAA"
            price: {
                currencyCode: "AED"
                units: 1387
                nanos: 50000000
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 400000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 360000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 134
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
        },
        {
            key: "BEST"
            offerToken: "d7699_H4sIAAAAAAAA_y2QUXOjIBSFf037VFFAQTvDdFKN3bRq1tQ0Y18YQ4zRpGFH6Mb11y8xHeCe75y5DMw9aP1HPdr2_tQ2B62sbwUaqWVT6RoI-WXve1O2Uh7bc2NXbW8_L9NoniAvW344KJqHNnyA9MGxLbPEY_lUD9pSvWD37bYGlRIMFj_YMwIwef1Y_Eo2UySkZi7Av2Mcxjh_cW9hz17KN0qCye1YGl6G5ThTaaHcJJrRdO2qrFAoCy8w79S4npdj7pRjBk_LJMryVZdFqy7Fm_WRpsUCrd4vQ9p9xkl8CFftUObHkuanXF1PUrx-JpEYpqdqYf4KgEsDOHlZKQbpDYVmyL_hTrN37DnP5GY1w5QSPJmBQUSxf6_qUy10K89v9T9G5ohSzzIDk38RtnI-WxDqW2Z2tTB-fYdC6H6T3Zdv6A7PzG64AxyjB6PQaMWRD-JrsuWBZ0Tw4Nq6414gkDBUc0T2yMCeu6a2HAI4Xe34YmNk5AFRmp7_A23DfwruAQAA"
            price: {
                currencyCode: "AED"
                units: 1387
                nanos: 50000000
            }
            travellerPrices: [
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 400000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 624
                            nanos: 50000000
                        }
                    }
                    travellerReference: "1"
                    travellerType: "ADULT"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 520
                            nanos: 360000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 100
                            nanos: 680000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 623
                            nanos: 680000000
                        }
                    }
                    travellerReference: "2"
                    travellerType: "KID"
                },
                {
                    travellerPriceBreakdown: {
                        total: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                        baseFare: {
                            currencyCode: "AED"
                            units: 134
                            nanos: 290000000
                        }
                        fee: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        tax: {
                            currencyCode: "AED"
                            units: 10
                            nanos: 650000000
                        }
                        moreTaxesAndFees: {}
                        discount: {
                            currencyCode: "AED"
                            units: 0
                            nanos: 0
                        }
                        totalWithoutDiscount: {
                            currencyCode: "AED"
                            units: 144
                            nanos: 940000000
                        }
                    }
                    travellerReference: "3"
                    travellerType: "KID"
                },
            ]
        },
    ]
    atolProtectedStatus: "NONE"
    isOffersCabinClassExtended: false
    baggagePolicies: [
        {
            code: "AI"
            name: "Air India"
            url: "http://www.airindia.in/baggage.htm"
        },
        {
            code: "6E"
            name: "IndiGo"
            url: "https://www.goindigo.in/baggage.html"
        },
        {
            code: "SG"
            name: "SpiceJet"
            url: "https://corporate.spicejet.com/AirTravelBaggageFaq.aspx"
        },
        {
            code: "UK"
            name: "Vistara"
            url: "https://www.airvistara.com/lk/en/vistara-experience/on-ground/baggage/lost-damaged-or-delayed-baggage"
        },
    ]
}
