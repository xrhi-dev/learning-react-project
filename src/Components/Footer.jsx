
export function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-800 bg-slate-950 px-4 py-6 text-slate-400">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">

                <h1 className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-bold tracking-wider text-white">
                        XRHI<span className="text-indigo-400">.</span>
                    </span>
                    {" "}All rights reserved.
                </h1>

                <p className="text-xs text-slate-500">
                    Built with <span className="text-indigo-400">React</span> &{" "}
                    <span className="text-indigo-400">Tailwind CSS</span>
                </p>

            </div>
        </footer>
    );
}
