import ActivitiesIcon from "@assets/icons/activities.svg"
import HotelsIcon from "@assets/icons/hotels.svg"
import FlightsIcon from "@assets/icons/flights.svg"
import StudyIcon from "@assets/icons/study.svg"
import VisaIcon from "@assets/icons/visa.svg"
import ImmigrationIcon from "@assets/icons/immigration.svg"
import MedicalIcon from "@assets/icons/medical.svg"
import VacationIcon from "@assets/icons/vacation.svg"


export const routes = [
    { name: "Activities", Icon: ActivitiesIcon },
    {
        name: "Hotels",
        Icon: HotelsIcon,
        
    },
    {
        name: "Flights",
        Icon: FlightsIcon,
        link: "/market_intelligence",
    },
    {
        name: "Study",
        Icon: StudyIcon,
        link: "/account_settings",
    },
    {
        name: "Visa",
        Icon: VisaIcon,
        link: "/account_settings",
    },
    {
        name: "Immigration",
        Icon: ImmigrationIcon,
        
    },
    {
        name: "Medical",
        Icon: MedicalIcon,
        
    },
    {
        name: "Vacation",
        Icon: VacationIcon,
        
    },
    
    
]
