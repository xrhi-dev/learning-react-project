import { Navbar } from "./Components/Navbar"
import { Footer } from "./Components/Footer"
import { Outlet } from "react-router-dom"

export function Layout()
{
    return(
        <div className="min-h-screen flex flex-col bg-slate-200 overflow-hidden">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}