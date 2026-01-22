import Accordion from "../Accordion";

function LumpsumContent() {
    return (
        <>
            <section className="mt-16 space-y-12 text-slate-300">
                {/* How to Use */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">How to Plan a Lumpsum Investment</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Got a bonus, sold a property, or received a large gift? A Lumpsum investment allows you to put a significant amount of money to work immediately. Unlike SIPs, where you invest small amounts over time, a lumpsum investment exposes your entire capital to the market from Day 1, allowing it to compound for longer.
                    </p>
                    <div className="space-y-4 text-slate-400">
                        <div>
                            <strong className="text-slate-200 block mb-1">1. Total Investment</strong>
                            <p>This is the one-time amount you want to invest. Ensure you don't need this money for immediate expenses, as equity markets prefer long-term holding.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">2. Expected Rate of Return</strong>
                            <p>Historically, Indian equity markets (Nifty 50) have delivered 12-14% CAGR over long periods (10+ years). For debt funds, you can assume 6-8%.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">3. Investment Duration</strong>
                            <p>The magic of lumpsum lies in time. The longer you leave it untouched, the more "doubling cycles" your money goes through.</p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">Why Go for Lumpsum?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Maximum Compounding</h3>
                            <p className="text-slate-400 text-sm">
                                Since your entire capital is invested from day one, every single rupee starts earning interest immediately.
                            </p>
                        </div>
                        <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Ideal for Windfalls</h3>
                            <p className="text-slate-400 text-sm">
                                Perfect for investing yearly bonuses, inheritance, or profit from business deals. Don't let large cash sit idle in savings accounts.
                            </p>
                        </div>
                        <div className="bg-slate-900/30 p-5 rounded-xl border border-slate-800">
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Convenience</h3>
                            <p className="text-slate-400 text-sm">
                                It's a "fill it, shut it, forget it" approach. You don't need to worry about maintaining monthly bank balances for auto-debits.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formula */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">The Power of Compound Interest</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Lumpsum investments follow the classic compound interest formula. It highlights how 'Time' is the exponent, meaning it has the most explosive impact on your wealth.
                    </p>
                    <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 flex flex-col items-center justify-center">
                        <p className="text-primary-500 font-mono text-3xl font-bold tracking-wider mb-2">
                            A = P (1 + r)<sup>n</sup>
                        </p>
                        <span className="text-xs text-slate-500 uppercase tracking-widest mt-2">Compound Interest Formula</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="p-4 bg-slate-900/50 rounded-lg border-l-2 border-primary-500">
                            <strong className="text-slate-200 block text-lg">A</strong>
                            <span className="text-slate-400">Total Maturity Value</span>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border-l-2 border-primary-500">
                            <strong className="text-slate-200 block text-lg">P</strong>
                            <span className="text-slate-400">Principal Investment</span>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border-l-2 border-primary-500">
                            <strong className="text-slate-200 block text-lg">r</strong>
                            <span className="text-slate-400">Annual Return / 100</span>
                        </div>
                        <div className="p-4 bg-slate-900/50 rounded-lg border-l-2 border-primary-500">
                            <strong className="text-slate-200 block text-lg">n</strong>
                            <span className="text-slate-400">Years Invested</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-300 mb-8 text-center underline decoration-primary-500/30 underline-offset-8">Frequently Asked Questions</h2>
                <Accordion items={[
                    {
                        title: "What is a Lumpsum Investment?",
                        content: "A Lumpsum investment is a one-time investment in a financial instrument like a mutual fund, fixed deposit, or equity. Unlike SIP, you invest the entire amount upfront instead of spreading it over monthly installments."
                    },
                    {
                        title: "Is Lumpsum investment better than SIP?",
                        content: "It depends on the market condition and your surplus cash. Lumpsum is generally better when you believe the market is at a low point and likely to rise. SIP is safer for long-term investors as it averages out the cost through Rupee Cost Averaging."
                    },
                    {
                        title: "How accurate is the Lumpsum calculator?",
                        content: "The calculator uses precise mathematical formulas to provide estimates. However, actual returns in mutual funds depend on market performance and may vary from the estimates."
                    },
                    {
                        title: "What is the minimum amount for Lumpsum investment?",
                        content: "Most mutual fund schemes allow lumpsum investments starting from ₹5,000, while some may allow as low as ₹1,000 depending on the scheme's AMC rules."
                    },
                    {
                        title: "Can I do Lumpsum and SIP in the same fund?",
                        content: "Yes, you can have an ongoing SIP and also make additional lumpsum investments in the same mutual fund folio whenever you have surplus funds."
                    }
                ]} />
            </section>
        </>
    );
}

export default LumpsumContent;
