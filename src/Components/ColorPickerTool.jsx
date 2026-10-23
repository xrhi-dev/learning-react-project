
import { useState } from "react";

function ColorPickerTool() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const copyColor = () => {
        navigator.clipboard.writeText(color);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-2xl">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-400">
                        XRHI Tools
                    </p>

                    <h1 className="text-3xl font-bold">
                        Color Picker<span className="text-indigo-400">.</span>
                    </h1>

                    <p className="mt-2 text-sm text-slate-400">
                        Choose a color and preview it instantly.
                    </p>
                </div>

                {/* Color Preview */}
                <div
                    className="mb-6 flex h-52 items-end overflow-hidden rounded-2xl border border-slate-700 p-4 transition-colors duration-300"
                    style={{ backgroundColor: color }}
                >
                    <div className="rounded-xl bg-black/50 px-4 py-2 backdrop-blur-sm">
                        <p className="text-sm text-white">Selected color</p>
                        <p className="font-mono text-xl font-bold text-white">
                            {color.toUpperCase()}
                        </p>
                    </div>
                </div>

                {/* Color Input */}
                <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div>
                        <label
                            htmlFor="color-picker"
                            className="block font-semibold"
                        >
                            Choose a color
                        </label>
                        <p className="mt-1 text-sm text-slate-400">
                            Click the color square to change it.
                        </p>
                    </div>

                    <input
                        id="color-picker"
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="h-12 w-16 cursor-pointer rounded-lg border-2 border-slate-600 bg-transparent p-1"
                    />
                </div>

                {/* Hex Code and Copy Button */}
                <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400">
                            Hex code
                        </p>
                        <p className="font-mono text-lg font-semibold">
                            {color.toUpperCase()}
                        </p>
                    </div>

                    <button
                        onClick={copyColor}
                        className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold transition hover:bg-indigo-400 active:scale-95"
                    >
                        Copy code
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ColorPickerTool;
