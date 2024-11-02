import { fetchFlights } from "@services/flights"
import { useQuery} from "@tanstack/react-query"

const useGetFlights = ({
    fromId,
    toId,
    departDate,
    returnDate,
    pageNo,
    adults,
    children,
    sort,
    cabinClass,
    currency_code,
}: {
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
}) => {
    const result = useQuery({
        queryKey: [
            "flights",
            {
                fromId,
                toId,
                departDate,
                returnDate,
                pageNo,
                adults,
                children,
                sort,
                cabinClass,
                currency_code,
            },
        ],
        queryFn: () =>
            fetchFlights({
                fromId,
                toId,
                departDate,
                returnDate,
                pageNo,
                adults,
                children,
                sort,
                cabinClass,
                currency_code,
            }),
    })
    return result
}

export { useGetFlights }
