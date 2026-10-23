
import { useState,useEffect } from "react";

function CounterTool() {
     const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("counter");
        return savedCount !== null ? Number(savedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("counter", count);
    }, [count]);

    function checkChange(operate) {
        if (operate === "+") {
            setCount(c => c + 1);
        } else if (operate === "-") {
            setCount(c => c - 1);
        } else if (operate === "reset") {
            setCount(0);
        }
    }

    return (
        <div className="flex flex-1 items-center justify-center bg-slate-900 px-4 py-12 text-white">
            <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950 p-8 text-center shadow-2xl">

                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                    XRHI Tools
                </p>

                <h1 className="mb-8 text-3xl font-bold">
                    Counter<span className="text-indigo-400">.</span>
                </h1>

                {/* Counter Display */}
                <div className="mb-8 flex h-48 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                    <span className="break-all px-4 text-8xl font-bold tabular-nums tracking-tight text-white">
                        {count}
                    </span>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-3 gap-3">
                    <button
                        onClick={() => checkChange("-")}
                        className="rounded-xl border border-slate-700 bg-slate-800 py-4 text-2xl font-bold transition hover:border-indigo-400 hover:bg-slate-700 active:scale-95"
                        aria-label="Decrease count"
                    >
                        −
                    </button>

                    <button
                        onClick={() => checkChange("reset")}
                        className="rounded-xl bg-indigo-500 px-2 py-4 font-semibold transition hover:bg-indigo-400 active:scale-95"
                    >
                        Reset
                    </button>

                    <button
                        onClick={() => checkChange("+")}
                        className="rounded-xl border border-slate-700 bg-slate-800 py-4 text-2xl font-bold transition hover:border-indigo-400 hover:bg-slate-700 active:scale-95"
                        aria-label="Increase count"
                    >
                        +
                    </button>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                    Increment · Decrement · Reset
                </p>
            </div>
        </div>
    );
}

export default CounterTool;
