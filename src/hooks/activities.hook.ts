import { fetchActivities } from "@services/activities"
import { useQuery } from "@tanstack/react-query"

const useGetActivities = ({
    id,
    sortBy,
    page,
    currency_code,
    languagecode,
}: {
    id: string
    sortBy: string
    page: string
    currency_code: string
    languagecode: string
}) => {
    const result = useQuery({
        queryKey: [
            "flights",
            {
                id,
                sortBy,
                page,
                currency_code,
                languagecode,
            },
        ],
        queryFn: () =>
            fetchActivities({
                id,
                sortBy,
                page,
                currency_code,
                languagecode,
            }),
    })
    return result
}

export { useGetActivities }
