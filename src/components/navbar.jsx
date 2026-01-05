import { NavLink } from "react-router";

import { Calculator, TrendingUp } from "lucide-react";
function Navbar() {
    return (
        <header>
            <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10 w-full" aria-label="Main Navigation">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <NavLink to="/">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary-600 p-2 rounded-lg text-white">
                                    <Calculator className="h-6 w-6" />
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                                    FinCalc
                                </span>
                            </div>
                        </NavLink>
                        <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${isActive
                                        ? 'bg-slate-700 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                                    }`
                                }
                            >
                                <TrendingUp className="w-4 h-4" />
                                SIP
                            </NavLink>
                            <NavLink
                                to="/swp"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${isActive
                                        ? 'bg-slate-700 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                                    }`
                                }
                            >
                                <Calculator className="w-4 h-4" />
                                SWP
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;