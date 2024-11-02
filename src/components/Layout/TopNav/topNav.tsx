import { Input } from "@components/index"
import Avatar from "@assets/icons/avatar.svg"
import { FiChevronDown } from "react-icons/fi"
import Logo from "@assets/icons/logo.svg"
import { PiHouse } from "react-icons/pi"
import { PiWallet } from "react-icons/pi"
import { PiListChecksBold } from "react-icons/pi"
import { PiHandCoins } from "react-icons/pi"
import { Button } from "@components/index"
import { GoBell } from "react-icons/go"
import { PiBasket } from "react-icons/pi"
import { PiPlusSquare } from "react-icons/pi"
import ChartSplice from "@assets/icons/chartSplice.svg"

const TopNav = () => {
    return (
        <nav
            className={`w-full px-2 sm:pl-6 lg:px-8  py-4 justify-between sticky top-0 z-20 flex items-center bg-white-100`}
        >
            <div className="flex">
                <img src={Logo} alt=""  />
                <Input
                    placeholder="Search"
                    className="  p-4  text-[12px] text-grey-100 ml-6"
                />
            </div>

            <div className="flex  gap-3 items-center text-gray-100 text-2sm">
                <div className=" place-items-center">
                    <PiHouse color="#667185" size="22px" />
                    <p className="mt-2">Home</p>
                </div>
                <div className=" place-items-center">
                    <img src={ChartSplice} alt="" className="w-6" />
                    <p className="mt-2">Dashboard</p>
                </div>
                <div className=" place-items-center">
                    <PiWallet color="#667185"  size="22px"/>
                    <p className="mt-2">Wallet</p>
                </div>
                <div className=" place-items-center">
                    <PiListChecksBold color="#344054"  size="22px"/>
                    <p className="mt-2 text-black-90 font-medium">Plan a trip</p>
                </div>
                <div className=" place-items-center border-r border-[#98A2B3] pr-3">
                    <PiHandCoins color="#667185"  size="22px"/>
                    <p className="mt-2">Commission for life</p>
                </div>

               
                <Button variant="primary">Subscribe</Button>
                <div className=" place-items-center">
                    <GoBell color="#667185"  size="22px"/>
                    <p className="mt-2">Notification</p>
                </div>
                <div className=" place-items-center">
                    <PiBasket color="#667185"  size="22px"/>
                    <p className="mt-2">Carts</p>
                </div>
                <div className=" place-items-center">
                    <PiPlusSquare color="#667185" size="22px" />
                    <p className="mt-2">Create</p>
                </div>
                <img src={Avatar} alt="" className="ml-2 mt-2" />

                <FiChevronDown
                    color="#247B7B"
                    size="22px"
                    className="cursor-pointer"
                />
            </div>
        </nav>
    )
}

export default TopNav
