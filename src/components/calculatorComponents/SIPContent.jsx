import Accordion from "../Accordion";

function SIPContent() {
    return (
        <>
            <section className="mt-16 space-y-12 text-slate-300">
                {/* How to Use */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">How to Use the SIP Calculator</h2>
                    <p className="text-slate-400 leading-relaxed">
                        A Systematic Investment Plan (SIP) Calculator is a powerful tool designed to help you estimate the potential returns on your mutual fund investments over time. By entering just a few key details, you can visualize how small, regular contributions can grow into a significant corpus.
                    </p>
                    <div className="space-y-4 text-slate-400">
                        <div>
                            <strong className="text-slate-200 block mb-1">1. Monthly Investment</strong>
                            <p>Enter the amount you wish to invest each month. This should be a comfortable figure that you can consistently set aside from your income, like ₹5,000 or ₹10,000.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">2. Expected Annual Return</strong>
                            <p>Input the annual interest rate you expect to earn. For equity mutual funds, long-term returns usually range between 10% to 15%. Conservative debt funds might offer 6% to 8%.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">3. Time Period</strong>
                            <p>Choose the duration of your investment in years. The longer you stay invested, the more you benefit from the power of compounding.</p>
                        </div>
                        <div>
                            <strong className="text-slate-200 block mb-1">4. Annual Step-up (Optional)</strong>
                            <p>This unique feature allows you to account for future income growth. Usually, as your salary increases, so should your savings. Entering a 10% step-up means you will increase your SIP amount by 10% every year.</p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">Why Choose SIP Investing?</h2>
                    <div className="space-y-6 text-slate-400 leading-relaxed">
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Rupee Cost Averaging</h3>
                            <p>
                                One of the biggest challenges in investing is "timing the market"—trying to buy low and sell high. SIPs eliminate this problem. When the market is down, your fixed investment buys more units (because prices are lower). When the market is high, you buy fewer units. Over time, this averages out your purchase cost, reducing the risk of market volatility.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">Disciplined Savings</h3>
                            <p>
                                SIPs enforce financial discipline. Because the amount is auto-deducted from your bank account on a fixed date, you prioritize saving before spending. This "pay yourself first" approach is the golden rule of wealth creation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-primary-400 mb-2">The Power of Compounding</h3>
                            <p>
                                Compounding is often called the eighth wonder of the world. In an SIP, your returns earn further returns. For example, if you invest ₹100 and earn ₹10, next year you earn interest on ₹110. Over 10-20 years, this snowball effect can turn small monthly savings into crores.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Impact of Step Up */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">The Impact of Step-up SIP</h2>
                    <p className="text-slate-400 leading-relaxed">
                        Most investors mistakenly stick to the same SIP amount for decades, even as their income doubles or triples. The <strong>Step-up</strong> feature is the secret weapon of smart investors.
                    </p>
                    <div className="p-6 bg-slate-900/30 border-l-4 border-primary-500 rounded-r-xl">
                        <p className="text-slate-300 italic">
                            "If you invest ₹10,000 monthly for 20 years at 12%, you get approx <strong>₹92 Lakhs</strong> on ₹24 Lakhs of investment. <br />
                            But if you just increase that SIP by 10% every year, your corpus jumps to <strong>₹1.86 Crores</strong> on ₹68 Lakhs of investment.
                        </p>
                    </div>
                    <p className="text-slate-400">
                        This simple habit of increasing your investment with your annual appraisal can cut years off your retirement timeline.
                    </p>
                </div>

                {/* Formula */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-100">How is SIP Calculated?</h2>
                    <p className="text-slate-400 leading-relaxed">
                        While online calculators make it easy, it's good to know the math behind your money. For a fixed monthly investment, the formula is:
                    </p>
                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                        <p className="text-primary-500 font-mono text-xl md:text-2xl font-bold tracking-wide">
                            M = P × [ &#123;(1 + i)<sup>n</sup> - 1&#125; / i ] × (1 + i)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                            <strong className="text-slate-200">M</strong> = Maturity Amount (Final Value)
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                            <strong className="text-slate-200">P</strong> = Monthly Investment Amount
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                            <strong className="text-slate-200">i</strong> = Monthly Interest Rate [ (1 + Annual Rate / 100)<sup>1/12</sup> - 1 ]
                        </div>
                        <div className="p-3 bg-slate-900/50 rounded-lg">
                            <strong className="text-slate-200">n</strong> = Total number of payments (Years × 12)
                        </div>
                    </div>
                    <p className="text-sm text-slate-500 italic">
                        *Note: When you choose the 'Step-up' option, the calculation becomes more complex as the 'P' (Investment) changes every 12 months. Our calculator handles this dynamic iteration instantly.
                    </p>
                </div>
            </section>

            <section className="mt-16 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-300 mb-8 text-center underline decoration-primary-500/30 underline-offset-8">Frequently Asked Questions</h2>
                <Accordion items={[
                    {
                        title: "What is a Systematic Investment Plan (SIP)?",
                        content: "SIP is a method of investing in mutual funds where you invest a fixed amount regularly (weekly, monthly, quarterly) instead of a one-time lump sum. This builds discipline and averages the purchase cost over time."
                    },
                    {
                        title: "How does Rupee Cost Averaging work?",
                        content: "When markets are down, your fixed monthly investment buys more units because the price (NAV) is lower. When markets are up, it buys fewer units. Over time, you end up with a lower average cost per unit compared to trying to time the market."
                    },
                    {
                        title: "Can I increase or decrease my SIP amount?",
                        content: "Yes, SIPs are highly flexible. You can use the 'Step-up' feature to automatically increase it annually, or manually change the mandate with your fund house anytime."
                    },
                    {
                        title: "What is the best date for an SIP?",
                        content: "Historically, there is no 'best date' for an SIP. The most important thing is that the investment happen consistently. Many people choose a date shortly after their salary is credited for better budgeting."
                    },
                    {
                        title: "Is there any penalty for missing an SIP installment?",
                        content: "Mutual fund companies (AMCs) do not charge a penalty for missing an SIP installment. However, your bank might charge a 'technical bounce' fee if there aren't enough funds in your account for the auto-debit mandate."
                    }
                ]} />
            </section>
        </>
    );
}

export default SIPContent;
