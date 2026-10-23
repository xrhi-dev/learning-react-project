
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    const linkStyle = ({ isActive }) =>
        `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
            isActive
                ? "bg-indigo-500/15 text-indigo-300"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 text-white shadow-lg backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

                {/* Logo */}
                <Link to="/" className="flex shrink-0 items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 font-black text-white shadow-lg shadow-indigo-500/20">
                        X
                    </div>
                    <span className="text-xl font-extrabold tracking-wider">
                        XRHI<span className="text-indigo-400">.</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <NavLink to="/counter" className={linkStyle}>
                        Counter
                    </NavLink>

                    <NavLink to="/color-picker" className={linkStyle}>
                        <span className="flex items-center gap-2">
                            <span>🎨</span>
                            <span className="hidden sm:inline">Color Picker</span>
                            <span className="sm:hidden">Colors</span>
                        </span>
                    </NavLink>

                    <NavLink to="/todo-list" className={linkStyle}>
                        <span className="flex items-center gap-2">
                            <span>✓</span>
                            <span className="hidden sm:inline">To Do List</span>
                            <span className="sm:hidden">Tasks</span>
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
