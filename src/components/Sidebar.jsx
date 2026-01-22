import { NavLink } from "react-router";

function Sidebar() {
    const linkClasses = ({ isActive }) =>
        `block px-4 py-2 rounded-md text-sm font-medium mb-1 transition-colors ${isActive
            ? "bg-slate-800 text-white border-l-4 border-primary-500"
            : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
        }`;

    return (
        <aside className="w-64 bg-slate-900 border-l border-slate-800 hidden lg:block h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
            <div className="p-4">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    All Calculators
                </h3>
                <nav>
                    <NavLink to="/calculators/sip" className={linkClasses}>
                        SIP Calculator
                    </NavLink>
                    <NavLink to="/calculators/swp" className={linkClasses}>
                        SWP Calculator
                    </NavLink>
                    <NavLink to="/calculators/lumpsum" className={linkClasses}>
                        Lumpsum Calculator
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
