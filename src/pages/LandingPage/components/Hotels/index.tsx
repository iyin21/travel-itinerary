import { Button } from "@components/index"
import { PiWarehouseBold } from "react-icons/pi"
import { RiMapPinLine } from "react-icons/ri"
import { FaStar } from "react-icons/fa"
import { PiBedFill } from "react-icons/pi"
import { FiCalendar } from "react-icons/fi"
import { PiSwimmingPoolBold } from "react-icons/pi"
import { PiWineBold } from "react-icons/pi"
import { Input } from "@components/index"
import { useGetHotels } from "@hooks/hotel.hook"
import { useState, useEffect } from "react"
import HotelImage from "@assets/images/hotelImage.png"
import { IoMdClose } from "react-icons/io"

const Hotels = () => {
    const [search, setSearch] = useState("CITY")
    useEffect(() => {
        if (search && search.length > 0) {
            setTimeout(() => {
                refetch()
            }, 1000)
        }
    }, [search])
    const { data, refetch } = useGetHotels({
        dest_id: "-2092174",
        search_type: search,
        arrival_date: "2024-11-15",
        departure_date: "2024-11-29",
        adults: "1",
        children_age: "0,17",
        room_qty: "1",
        page_number: "1",
        units: "metric",
        temperature_unit: "c",
        languagecode: "en-us",
        currency_code: "AED",
    })
    console.log("data", data)
    return (
        <div className="bg-[#344054] p-4 mt-4 rounded">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <PiWarehouseBold color="white" size="20px" />
                    <p className="text-lg text-white-100 pl-2 font-semibold">
                        Hotels
                    </p>
                </div>
                <Input
                    placeholder="Search flight"
                    className="  p-4  text-[12px] text-grey-100 ml-6"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="secondary" className="!text-black-100 ">
                    Add Hotels
                </Button>
            </div>
            <div className="flex ">
                <div className="flex bg-white-100 rounded-l p-4">
                    <div className="flex">
                        <img src={HotelImage} alt="" />
                        <div className="pl-2">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-2lg text-black-100 font-semibold">
                                        Riviera Resort, Lekki
                                    </p>
                                    <p className="max-w-[300px]">
                                        18, Kenneth Agbakuru Street, Off Access
                                        Bank Admiralty Way, Lekki Phase1
                                    </p>
                                    <div className="flex text-md items-center mt-2">
                                        <RiMapPinLine color="#0D6EFD" />
                                        <p className="text-blue-100 mr-4 pl-1">
                                            Show in map
                                        </p>
                                        <FaStar color="#F4B93E" />
                                        <p className="text-gray-100 text-md pr-3 pl-1">
                                            8.5 (436)
                                        </p>
                                        <PiBedFill />
                                        <p className="text-gray-100 pl-2">
                                            King size room
                                        </p>
                                    </div>
                                </div>
                                <div className="text-black-90">
                                    <h1 className="text-black-90 font-semibold">
                                        ₦123,450.00
                                    </h1>
                                    <p className="text-md font-medium">
                                        Total Price: NGN 560,000
                                    </p>
                                    <p className="text-md font-medium">
                                        1 room x 10 nights incl. taxes
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-b text-lg text-gray-100 flex w-full items-center flex-wrap justify-between text-md py-2 mt-4">
                                <div className="flex items-center">
                                    <p className="pr-2">Facilities:</p>
                                    <PiSwimmingPoolBold />
                                    <p className="px-2">Pool</p>
                                    <PiWineBold />
                                    <p className="pl-1">Bar</p>
                                </div>
                                <div className="flex items-center">
                                    <FiCalendar />
                                    <p className="px-2">Check In: 20-04-2024</p>
                                    <FiCalendar />
                                    <p className="pl-1">
                                        Check Out: 29-04-2024
                                    </p>
                                </div>
                            </div>
                            <div className="text-blue-100 flex text-md font-medium mt-4">
                                <a href="" className="flex-none">
                                    Hotel details{" "}
                                </a>
                                <a href="" className="flex-1 pl-6">
                                    Price details{" "}
                                </a>
                                <a href="" className="flex-none">
                                    Edit details{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FBEAE9] items-center p-2 flex-end rounded-r">
                    <IoMdClose
                        color="#9E0A05"
                        className="py-auto h-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hotels
