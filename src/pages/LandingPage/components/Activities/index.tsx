import { Button } from "@components/index"
import { RiMapPinLine } from "react-icons/ri"
import { FaStar } from "react-icons/fa"
import { LuClock3 } from "react-icons/lu"
import { IoIosArrowDropup } from "react-icons/io"
import { IoIosArrowDropdown } from "react-icons/io"
import { PiRoadHorizonBold } from "react-icons/pi"
import { Input } from "@components/index"
import { useState, useEffect } from "react"
import { useGetActivities } from "@hooks/activities.hook"
import ActivityImage from "@assets/images/activityImage.png"
import { IoMdClose } from "react-icons/io"

const Activities = () => {
    const [search, setSearch] = useState("trending")
    useEffect(() => {
        if (search && search.length > 0) {
            setTimeout(() => {
                refetch()
            }, 1000)
        }
    }, [search])
    const { data, refetch } = useGetActivities({
        id: "eyJ1ZmkiOi0yMDkyMTc0fQ==",
        sortBy: search,
        page: "1",
        currency_code: "INR",
        languagecode: "en-us",
    })
    console.log("data", data)
    return (
        <div className="bg-blue-80 p-4 text-white-100 mt-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <PiRoadHorizonBold color="white" size="20px" />
                    <p className="text-lg text-white-100 pl-2 font-semibold">
                        Activities
                    </p>
                </div>
                <Input
                    placeholder="Search flight"
                    className="  p-4  text-[12px] text-grey-100 ml-6"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="secondary">Add Activities</Button>
            </div>
            <div className="flex ">
                <div className="flex bg-white-100 p-4 rounded-l">
                    <div className="flex">
                        <img src={ActivityImage} alt="" />
                        <div className="pl-2">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-2lg text-black-100 font-semibold">
                                        The Museum of Modern Art
                                    </p>
                                    <p className="text-black-90 max-w-[300px]">
                                        Works from Van Gogh to Warhol & beyond
                                        plus a sculpture garden, 2 cafes & The
                                        modern restaurant
                                    </p>
                                    <div className="flex text-md items-center mt-2">
                                        <RiMapPinLine color="#0D6EFD" />
                                        <p className="text-blue-100  pl-1 pr-3">
                                            Directions
                                        </p>
                                        <FaStar color="#F4B93E" />
                                        <p className="text-gray-100 text-md pl-1 pr-3">
                                            4.5 (436)
                                        </p>
                                        <LuClock3 color="#344054" />
                                        <p className="text-gray-100 text-md pl-1">
                                            1 Hour{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-black-90">
                                    <h1 className="text-black-90 font-semibold">
                                        ₦123,450.00
                                    </h1>
                                    <p className="text-md font-medium">
                                        10:30 AM on Mar 19
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-b text-md text-gray-100 flex justify-between py-2 items-center font-medium">
                                <div className="flex">
                                    <p>What's Included:</p>

                                    <p className="pl-2">
                                        Admission to the Empire State Building
                                    </p>
                                    <a href="" className="text-blue-100 pl-2">
                                        See more
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <p className="bg-blue-90 p-2 text-white-100 text-sm rounded h-fit">
                                        Day 1
                                    </p>

                                    <div className="pl-2">
                                        <IoIosArrowDropup
                                            size="22px"
                                            color="#98A2B3"
                                        />
                                        <IoIosArrowDropdown
                                            size="22px"
                                            color="#98A2B3"
                                            className="mt-3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-blue-100 flex text-md font-medium mt-4">
                                <a href="" className="flex-none">
                                    Activity details{" "}
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

export default Activities
