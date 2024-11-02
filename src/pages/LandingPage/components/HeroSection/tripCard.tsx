import { Button } from "@components/index"

interface TripCardInterface {
    title: string
    backgroundColor: string
    color: string
    btnVariant: "primary" | "secondary"
    btnText: string
}

const TripCard = ({
    title,
    backgroundColor,
    color,
    btnVariant,
    btnText,
}: TripCardInterface) => {
    return (
        <div className={`${backgroundColor + " " + color} p-4 w-[300px] rounded`}>
            <h5 className="mt-2">{title}</h5>
            <p className="text-2sm">
                Build, personalize, and optimize your itineraries with our trip
                planner.
            </p>
            <Button variant={btnVariant} className="mt-8 w-full">
                {btnText}
            </Button>
        </div>
    )
}

export default TripCard
