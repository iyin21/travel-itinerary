import { routes } from "./utils/route"
import Logo from "@assets/icons/logo.svg"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
    return (
        <aside className="bg-white-100 px-4  py-6 pb-16 rounded">
            <ul className=" ">
                {routes?.slice(0, 5).map((route, index) => (
                    <li className="flex items-center my-1 text-md " key={index}>
                        <p className="flex items-center text-gray-100 gap-2 font-medium mb-6">
                            <div className="flex items-center gap-2 w-full m">
                                <img src={route.Icon} alt="" />
                                <span className="">{route?.name}</span>
                            </div>
                        </p>
                    </li>
                ))}
            </ul>
            <div className="mt-6 bg-[#F0F2F5] p-4 flex items-center">
                <img src={Logo} alt="" />
                <p className="text-gray-100 ml-2">Personal Account</p>
                <div>
                    <IoIosArrowUp color="#667185" size="22px"/>
                    <IoIosArrowDown color="#667185" size="22px"/>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
