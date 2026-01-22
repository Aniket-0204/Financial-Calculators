import Accordion from "../Accordion";

function SWPContent() {
    return (
        <>
            <section className="mt-16 space-y-12 text-slate-300">
                {/* How to Use */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">How to Setup a Systematic Withdrawal Plan</h2>
                    <p className="text-slate-400 leading-relaxed">
                        An SWP (Systematic Withdrawal Plan) allows you to withdraw a fixed amount of money from your mutual fund investments at regular intervals—be it monthly, quarterly, or annually. It's an excellent way to generate a steady income stream post-retirement.
                    </p>
                    <div className="space-y-4 text-slate-400">
                        <div>
                            <strong className="text-slate-200 block mb-1">1. Total Investment (Corpus)</strong>
                            <p>Enter your current total investment value. This could be your retirement corpus or a lump sum amount you have accumulated.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">2. Withdrawal per Month</strong>
                            <p>Decide how much money you need for your monthly expenses. A good rule of thumb is to withdraw less than your expected annual return to keep your capital intact.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">3. Expected Annual Return</strong>
                            <p>Enter the rate at which you expect your remaining balance to grow. For a balanced portfolio (debt + equity), 8-10% is a reasonable estimate.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">4. Time Period</strong>
                            <p>How long do you want this income stream to last? Enter the number of years you plan to withdraw.</p>
                        </div>
                    </div>
                </div>

                {/* Strategies and Benefits */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">Why SWP is Smarter Than Dividends</h2>
                    <div className="space-y-6 text-slate-400 leading-relaxed">
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Tax Efficiency</h3>
                            <p>
                                In a traditional dividend plan, the entire dividend amount is taxable. In SWP, each withdrawal is a mix of your principal and capital gains. You are only taxed on the gains portion, which significantly lowers your tax liability.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Market Stability</h3>
                            <p>
                                During market downturns, you don't have to sell a large chunk of your portfolio. By withdrawing a fixed small amount, you ride out volatility while your remaining capital waits for the market to recover.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Inflation Protection</h3>
                            <p>
                                Unlike fixed deposits where interest remains constant, your mutual fund returns potentially beat inflation over the long term. You can even increase your withdrawal amount annually to match rising costs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Calculation Logic & Table */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">Understanding the SWP Math</h2>
                    <p className="text-slate-400 leading-relaxed">
                        The logic is simple: Your money earns interest for the month, and then you withdraw a portion of it.
                        <br />
                        Our calculator uses the <strong>Effective Monthly Rate</strong> formula <code>(1 + R)<sup>1/12</sup> - 1</code> and assumes withdrawals happen after interest is added.
                    </p>

                    <div className="bg-slate-900/40 p-6 rounded-xl border-l-4 border-primary-500">
                        <h3 className="text-lg font-semibold text-slate-200 mb-4">Example Scenario</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-slate-950/50 p-4 rounded-lg">
                                <span className="text-xs text-slate-500 uppercase block">Investment</span>
                                <span className="text-base font-bold text-slate-200">₹50,000</span>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-lg">
                                <span className="text-xs text-slate-500 uppercase block">Withdrawal</span>
                                <span className="text-base font-bold text-slate-200">₹1,000 / mo</span>
                            </div>
                            <div className="bg-slate-950/50 p-4 rounded-lg">
                                <span className="text-xs text-slate-500 uppercase block">Return Rate</span>
                                <span className="text-base font-bold text-slate-200">10% p.a.</span>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 mb-4">
                            <strong>Total Interest Earned (1st Year):</strong> ₹4,459
                        </p>

                        <div className="overflow-x-auto rounded-lg border border-slate-800">
                            <table className="w-full text-xs md:text-sm text-left text-slate-400">
                                <thead className="text-slate-200 uppercase bg-slate-900/80 border-b border-slate-700">
                                    <tr>
                                        <th className="px-4 py-3">Month</th>
                                        <th className="px-4 py-3">Opening Bal</th>
                                        <th className="px-4 py-3">Interest Earned</th>
                                        <th className="px-4 py-3">Withdrawal</th>
                                        <th className="px-4 py-3">Closing Bal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 bg-slate-950/30">
                                    <tr><td className="px-4 py-3">1</td><td className="px-4 py-3">₹50,000</td><td className="px-4 py-3 text-green-300">+₹399</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹49,399</td></tr>
                                    <tr><td className="px-4 py-3">2</td><td className="px-4 py-3">₹49,399</td><td className="px-4 py-3 text-green-300">+₹394</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹48,793</td></tr>
                                    <tr><td className="px-4 py-3">3</td><td className="px-4 py-3">₹48,793</td><td className="px-4 py-3 text-green-300">+₹389</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹48,182</td></tr>
                                    <tr><td className="px-4 py-3">4</td><td className="px-4 py-3">₹48,182</td><td className="px-4 py-3 text-green-300">+₹384</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹47,566</td></tr>
                                    <tr><td className="px-4 py-3">5</td><td className="px-4 py-3">₹47,566</td><td className="px-4 py-3 text-green-300">+₹379</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹46,945</td></tr>
                                    <tr><td className="px-4 py-3">6</td><td className="px-4 py-3">₹46,945</td><td className="px-4 py-3 text-green-300">+₹374</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹46,319</td></tr>
                                    <tr><td className="px-4 py-3">7</td><td className="px-4 py-3">₹46,319</td><td className="px-4 py-3 text-green-300">+₹369</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹45,688</td></tr>
                                    <tr><td className="px-4 py-3">8</td><td className="px-4 py-3">₹45,688</td><td className="px-4 py-3 text-green-300">+₹364</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹45,052</td></tr>
                                    <tr><td className="px-4 py-3">9</td><td className="px-4 py-3">₹45,052</td><td className="px-4 py-3 text-green-300">+₹359</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹44,411</td></tr>
                                    <tr><td className="px-4 py-3">10</td><td className="px-4 py-3">₹44,411</td><td className="px-4 py-3 text-green-300">+₹354</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹43,765</td></tr>
                                    <tr><td className="px-4 py-3">11</td><td className="px-4 py-3">₹43,765</td><td className="px-4 py-3 text-green-300">+₹349</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹43,114</td></tr>
                                    <tr><td className="px-4 py-3">12</td><td className="px-4 py-3">₹43,114</td><td className="px-4 py-3 text-green-300">+₹344</td><td className="px-4 py-3 text-red-400">-₹1,000</td><td className="px-4 py-3 font-semibold text-slate-300">₹42,458</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center underline decoration-primary-500/30 underline-offset-8">Frequently Asked Questions</h2>
                <Accordion items={[
                    {
                        title: "What is Systematic Withdrawal Plan (SWP)?",
                        content: "SWP allows an investor to withdraw a fixed amount of money from their mutual fund investment at regular intervals (usually monthly). The remaining balance continues to grow based on the fund's market performance."
                    },
                    {
                        title: "Is SWP better than a monthly income plan (MIP)?",
                        content: "Yes, SWP offers better control. In an MIP, the dividend amount is fixed by the AMC and is taxable. In SWP, you decide the withdrawal amount, and only the capital gains portion of the withdrawal is taxed, which is usually lower."
                    },
                    {
                        title: "What happens if my withdrawal is higher than the returns?",
                        content: "If you withdraw more than what the fund earns, your principal capital will start to deplete. Eventually, your corpus may reach zero. It is advisable to keep the withdrawal rate around 4-6% for long-term sustainability."
                    },
                    {
                        title: "Can I increase my monthly withdrawal amount?",
                        content: "Yes, you can specify an 'Annual Increment' in our calculator to see how your corpus holds up if you increase withdrawals every year to fight inflation."
                    },
                    {
                        title: "Is SWP available for all types of mutual funds?",
                        content: "Technically yes, but it is most commonly used in Hybrid or Debt funds because they are less volatile, providing a more stable income stream than pure Equity funds."
                    }
                ]} />
            </section>
        </>
    );
}

export default SWPContent;
