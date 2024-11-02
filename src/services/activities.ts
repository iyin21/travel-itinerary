import axiosInstance from "."

interface IFetchHotels {
    id: string
    sortBy: string
    page: string
    currency_code: string
    languagecode: string
}
export const fetchActivities = async (filters: IFetchHotels) => {
    const response = await axiosInstance.get<unknown>(
        "/attraction/searchAttractions",
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
