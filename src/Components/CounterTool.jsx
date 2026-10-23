
import { useState } from "react";

function CounterTool() {
    const [count, setCount] = useState(0);

    function checkChange(operate) {
        if (operate === "+") {
            setCount(count => count + 1);

        } 
        else if (operate === "-") {
            setCount(count - 1);
        } 
        else if (operate === "reset") {
            setCount(0);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <h1 className="flex items-center justify-center text-9xl bg-slate-700 w-50 h-50 rounded-4xl m-4">{count}</h1>
            <div>
            <button className="p-5 bg-slate-950 rounded-4xl" onClick={() => checkChange("+")}>+</button>
            <button className="p-5 bg-slate-950 rounded-4xl" onClick={() => checkChange("-")}>-</button>
            <button className="p-5 bg-slate-950 rounded-4xl" onClick={() => checkChange("reset")}>Reset</button>
            </div>
        </div>
    );
}

export default CounterTool;
