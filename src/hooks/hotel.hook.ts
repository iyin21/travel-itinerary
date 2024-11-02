import { fetchHotels } from "@services/hotels"
import { useQuery } from "@tanstack/react-query"

const useGetHotels = ({
    dest_id,
    search_type,
    arrival_date,
    departure_date,
    adults,
    children_age,
    room_qty,
    page_number,
    units,
    temperature_unit,
    languagecode,
    currency_code,
}: {
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
}) => {
    const result = useQuery({
        queryKey: [
            "flights",
            {
                dest_id,
                search_type,
                arrival_date,
                departure_date,
                adults,
                children_age,
                room_qty,
                page_number,
                units,
                temperature_unit,
                languagecode,
                currency_code,
            },
        ],
        queryFn: () =>
            fetchHotels({
                dest_id,
                search_type,
                arrival_date,
                departure_date,
                adults,
                children_age,
                room_qty,
                page_number,
                units,
                temperature_unit,
                languagecode,
                currency_code,
            }),
    })
    return result
}

export { useGetHotels }
