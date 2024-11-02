//import { FlightResponse } from "@/types/api/flight.types"

import axiosInstance from "."

interface IFetchFlight {
    fromId: string
    toId: string
    departDate: string
    returnDate: string
    pageNo: string
    adults: string
    children: string
    sort: string
    cabinClass: string
    currency_code: string
}
export const fetchFlights = async (filters: IFetchFlight) => {
    const response = await axiosInstance.get<unknown>(
        "/flights/searchFlights",
        {
            headers: {
                "x-rapidapi-key":
                    "d7a70d68fcmsh888a523be638486p141667jsn953f01179c2e",
                "x-rapidapi-host": "booking-com15.p.rapidapi.com",
            },
            params: filters,
        }
    )
    return response.data
}
