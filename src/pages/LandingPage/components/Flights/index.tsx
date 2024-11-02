import { PiAirplaneInFlightBold } from "react-icons/pi"
import { Button } from "@components/index"
import AmericanAirline from "@assets/icons/americanAirline.svg"
import { PiAirplaneTakeoffBold } from "react-icons/pi"
import { PiAirplaneLandingBold } from "react-icons/pi"
import Duration from "@assets/icons/duration.svg"
import { PiSuitcaseRollingBold } from "react-icons/pi"
import { PiFilmSlateBold } from "react-icons/pi"
import { PiForkKnifeBold } from "react-icons/pi"
import { PiUsbBold } from "react-icons/pi"
import { useGetFlights } from "@hooks/flight.hook"
import { Input } from "@components/index"
import { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"

const Flights = () => {
    const [search, setSearch] = useState("DEL.AIRPORT")
    useEffect(() => {
        if (search && search.length > 0) {
            setTimeout(() => {
                refetch()
            }, 1000)
        }
    }, [search])
    const { data, refetch } = useGetFlights({
        fromId: "BOM.AIRPORT",
        toId: search,
        departDate: "2024-11-09",
        returnDate: "2024-11-16",
        pageNo: "1",
        adults: "1",
        children: "0,17",
        sort: "BEST",
        cabinClass: "ECONOMY",
        currency_code: "AED",
    })
    console.log("data", data)
    return (
        <div className="bg-[#F0F2F5] p-4 py-6 text-black-90 rounded ">
            <div className="flex justify-between">
                <div className="flex items-center mb-4">
                    <PiAirplaneInFlightBold color="#344054" size="22px" />
                    <p className="font-semibold ml-2 text-lg">Flights</p>
                </div>
                <Input
                    placeholder="Search flight"
                    className="  p-4  text-[12px] text-grey-100 ml-6"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="secondary">Add Flights</Button>
            </div>
            <div className="flex d  mt-4">
                <div className="bg-white-100 w-full rounded-l  ">
                    <div className="flex justify-between p-4 items-center">
                        <div className="flex items-center">
                            <img src={AmericanAirline} alt="" />
                            <div className="pl-2">
                                <p className="text-2lg font-semibold">
                                    American Airlines
                                </p>
                                <div className="flex items-center mt-1">
                                    <p className="text-gray-100 text-md font-medium">
                                        AA-829 .
                                    </p>
                                    <p className="bg-blue-90 p-2 rounded text-white-100 text-sm ml-2">
                                        First Class
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <h2 className="text-black-90 font-semibold">
                                    08:35
                                </h2>
                                <p className="text-2sm text-gray-100">
                                    Sun, 20 Aug
                                </p>
                            </div>
                            <div className="px-4">
                                <div className="flex justify-between ">
                                    <PiAirplaneTakeoffBold />
                                    <p className="text-gray-100 font-medium text-md">
                                        Duration: 1h 45m
                                    </p>
                                    <PiAirplaneLandingBold />
                                </div>
                                <img
                                    src={Duration}
                                    alt=""
                                    className="w-[230px] py-1"
                                />
                                <div className="flex text-md justify-between">
                                    <p className="text-black-100 font-semibold">
                                        LOS
                                    </p>
                                    <p className="text-gray-100 font-medium">
                                        Direct
                                    </p>
                                    <p className="text-black-100 font-semibold">
                                        SIN
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-black-90 font-semibold">
                                    09:55
                                </h2>
                                <p className="text-2sm text-gray-100">
                                    Sun, 20 Aug
                                </p>
                            </div>
                        </div>
                        <div></div>
                        <h1 className="font-semibold">₦123,450.00</h1>
                    </div>
                    <div className="border-t border-b border-[#E4E7EC] py-3 px-4 flex items-center lg:flex-nowrap flex-wrap">
                        <p className="pr-2">Facilities:</p>
                        <PiSuitcaseRollingBold />
                        <p className="px-2">
                            Baggage: 20kg, Cabin Baggage: 8kg
                        </p>
                        <PiFilmSlateBold />
                        <p className="px-2">In flight entertainment</p>
                        <PiForkKnifeBold />
                        <p className="px-2">In flight meal</p>
                        <PiUsbBold />
                        <p className="pl-2">USB Port</p>
                    </div>
                    <div className="text-blue-100 flex  p-4 text-md">
                        <a href="" className="flex-none">
                            Flight details
                        </a>
                        <a href="" className="flex-1 pl-6">
                            Price details
                        </a>
                        <a href="" className="flex-none">
                            Edit details
                        </a>
                    </div>
                </div>
                <div className="bg-[#FBEAE9] items-center p-2 flex-end rounded-r">
                    <IoMdClose color="#9E0A05" className="py-auto h-full" />
                </div>
            </div>
        </div>
    )
}

export default Flights
