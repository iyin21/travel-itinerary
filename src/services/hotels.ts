import axiosInstance from "."

interface IFetchHotels {
    dest_id: string
    search_type: string
    arrival_date: string
    departure_date: string
    adults: string
    children_age: string
    room_qty: string
    page_number: string
    units: string
    temperature_unit: string
    languagecode: string
    currency_code: string
}
export const fetchHotels = async (filters: IFetchHotels) => {
    const response = await axiosInstance.get<unknown>("/hotels/searchHotels", {
        headers: {
            "x-rapidapi-key":
                "d7a70d68fcmsh888a523be638486p141667jsn953f01179c2e",
            "x-rapidapi-host": "booking-com15.p.rapidapi.com",
        },
        params: filters,
    })
    return response.data
}
