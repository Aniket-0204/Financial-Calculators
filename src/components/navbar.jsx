import { NavLink, Link } from "react-router";
import { Calculator, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary-500" : "text-slate-400 hover:text-white"
        }`;

    return (
        <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}

                    <Link to="/" className="flex items-center cursor-pointer ">
                        <img src={logo} alt="Ukuaris Logo" width="159" height="48" className=" cursor-pointer transition-transform duration-300 hover:scale-103" />
                    </Link>


                    <div className="hidden md:flex items-center space-x-8 cursor-pointer absolute left-1/2 transform -translate-x-1/2">
                        <NavLink to="/" className={navLinkClass}>Home</NavLink>
                        <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    </div>


                    <div className="hidden md:flex lg:hidden items-center space-x-4">
                        {/* Calculators Dropdown - ONLY ON MOBILE/TABLET (MD to LG) */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium text-sm px-3 py-2 rounded-md hover:bg-slate-800 transition-colors">
                                <Calculator className="w-4 h-4" />
                                <span>Calculators</span>
                            </button>
                            <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-1">
                                <NavLink to="/calculators/sip" className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white text-left">SIP Calculator</NavLink>
                                <NavLink to="/calculators/swp" className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white text-left">SWP Calculator</NavLink>
                                <NavLink to="/calculators/lumpsum" className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white text-left">Lumpsum Calculator</NavLink>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-slate-400 hover:text-white p-2 cursor-pointer">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 ">
                    <NavLink to="/" onClick={toggleMenu} className="block py-2 text-slate-400 hover:text-white text-base font-medium border-b border-slate-800">Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className="block py-2 text-slate-400 hover:text-white text-base font-medium border-b border-slate-800">About</NavLink>
                    <NavLink to="/calculators/sip" onClick={toggleMenu} className="block py-2 text-slate-400 hover:text-white text-base font-medium pl-4">SIP Calculator</NavLink>
                    <NavLink to="/calculators/swp" onClick={toggleMenu} className="block py-2 text-slate-400 hover:text-white text-base font-medium pl-4">SWP Calculator</NavLink>
                    <NavLink to="/calculators/lumpsum" onClick={toggleMenu} className="block py-2 text-slate-400 hover:text-white text-base font-medium pl-4">Lumpsum Calculator</NavLink>
                </div>

            )
            }
        </header >
    );
}

export default Navbar;
