import { Link } from "react-router-dom"

export function Navbar()
{
    return(
        <nav className="flex gap-03 items-center justify-between bg-slate-900 text-white">
            <h1 className="pl-2 font-bold">XRHI</h1>
            <div>
            <Link to="/counter"><button className="bg-slate-950 p-3 m-0">Counter</button></Link>      
            <Link to="/color-picker" className="bg-slate-950 p-3 m-0" ><button>Color Picker</button></Link>
            <Link to="/todo-list" className="bg-slate-950 p-3 m-0" ><button>To Do List</button></Link>
            </div> 
        </nav>
    )
}