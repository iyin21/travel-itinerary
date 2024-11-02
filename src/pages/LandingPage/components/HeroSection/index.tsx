import TripCard from "./tripCard"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { HiArrowRight } from "react-icons/hi"
import { FiCalendar } from "react-icons/fi"
import { PiUserPlusBold } from "react-icons/pi"
import { SlOptions } from "react-icons/sl"
import One from "@assets/icons/one.svg"

const HeroSection = () => {
    return (
        <div className="pb-4">
            <div className="bg-banner bg-cover p-6 h-[200px]">
                <div className="bg-[#FFFFFF33] p-4 w-fit">
                    <HiOutlineArrowLeft size="22px" color="#344054" />
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <div className="flex bg-[#FEF4E6] p-2 text-[#7A4504]  items-center gap-2 font-medium w-fit">
                        <FiCalendar />
                        <p>21 March 2024</p>
                        <HiArrowRight />
                        <p>21 April 2024</p>
                    </div>
                    <h1 className="font-semibold mt-1"> Bahamas Family Trip</h1>
                    <p className="text=gray-100">
                        New York,  United States of America{" "}
                        <span className="text-[#D0D5DD]">|</span> Solo Trip
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center ">
                        <div className="px-12 py-3 bg-[#E7F0FF] mr-4 rounded">
                            <PiUserPlusBold color="#0D6EFD" size="22px" />
                        </div>
                        <SlOptions />
                    </div>
                    <div className="mt-6 ml-4">
                        <img src={One} alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-4 flex gap-1 flex-wrap mb-10">
                <TripCard
                    backgroundColor="bg-black-90 "
                    btnText="Add Activities"
                    btnVariant="primary"
                    color="text-white-100"
                    title="Activities"
                />
                <TripCard
                    backgroundColor="bg-blue-70 "
                    btnText="Add Hotels"
                    btnVariant="primary"
                    color="text-black-100"
                    title="Hotels"
                />
                <TripCard
                    backgroundColor="bg-blue-100 "
                    btnText="Add Flights"
                    btnVariant="secondary"
                    color="text-white-100"
                    title="Flights"
                />
            </div>
            <p className="text-2lg text-black-90 font-semibold">
                Trip itineraries
            </p>
            <p className="text-gray-100 text-2sm">
                Your trip itineraries are placed here
            </p>
        </div>
    )
}
export default HeroSection
