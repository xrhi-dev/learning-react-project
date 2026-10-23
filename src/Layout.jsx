
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-200">
            <Navbar />

            <main className="flex min-h-screen flex-1 flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
