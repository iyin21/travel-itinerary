import Sidebar from "./sidebar/sidebar"
import TopNav from "./TopNav/topNav"
import { ReactNode } from "react"

interface Props {
    
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    
    return (
        <div className="h-full relative ">
            
                <TopNav/>
            
            <div className="relative pl-72 py-6 pr-10  bg-[#F0F2F5] ">
                <div className=" fixed left-6 lg:w-64 h-screen overflow-y-auto no-scrollbar">
                    <Sidebar />
                </div>
                
                <main className="bg-[#FFFFFA] w-full h-full overflow-y-auto  px-4  lg:px-6 py-6 ml-4 rounded">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
