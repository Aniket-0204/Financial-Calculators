import { Link } from "react-router";
import { TrendingUp, Calculator, ArrowRight, ShieldCheck, Zap } from "lucide-react";

function LandingPage() {
    return (
        <div className="space-y-16 py-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-slate-500 to-slate-400 bg-clip-text text-transparent ">Master Your </span>
                    <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                        Financial Future
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    Powerful tools to plan your investments and withdrawals.
                    Simple, accurate, and designed for Indian investors.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        to="/calculators/sip"
                        className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-900/20 flex items-center justify-center gap-2"
                    >
                        <TrendingUp className="w-5 h-5" />
                        Start SIP Calculation
                    </Link>
                    <Link
                        to="/calculators/swp"
                        className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-all border border-slate-700 flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-5 h-5" />
                        Plan SWP Withdrawals
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Instant Results</h3>
                    <p className="text-slate-400">
                        Get real-time calculations as you type. Visualize your wealth growth with interactive charts.
                    </p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                        <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Detailed Breakdown</h3>
                    <p className="text-slate-400">
                        View month-by-month schedules, total investments, and final returns at a glance.
                    </p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                        <ShieldCheck className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Indian Context</h3>
                    <p className="text-slate-400">
                        Formatted for Indian numerical system (Lakhs/Crores) for easy readability.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
