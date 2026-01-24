import Accordion from "../Accordion";

function EMIContent() {
    return (
        <article className="mt-16 prose prose-invert prose-lg max-w-none text-slate-300 pb-20">
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight border-b border-slate-800 pb-4">Comprehensive Guide to Loan EMI</h2>

            <section className="mb-12">
                <p className="text-xl leading-relaxed text-slate-400 mb-6">
                    An Equated Monthly Installment (EMI) is the cornerstone of modern retail lending. It represents a fixed payment made by a borrower to a lender at a specific date each month. This structured approach ensures that over a predetermined tenure, both the principal amount and the accrued interest are liquidated simultaneously.
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                    Understanding the mechanics of EMIs is crucial for anyone planning to take a home loan, personal loan, or car loan, as it dictates your monthly cash flow and long-term financial health.
                </p>
            </section>

            <section className="mb-12 space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Internal Anatomy of an EMI</h3>
                <p className="text-lg leading-relaxed text-slate-400">
                    <strong>Principal Component:</strong> The actual loan amount repayment. Initially small, this grows as the loan matures, effectively building your equity in the asset.
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                    <strong>Interest Component:</strong> The cost of borrowing paid to the bank. It is front-loaded, meaning you pay more interest in the early years of the loan.
                </p>

                <div className="border-t border-slate-800 pt-12 mt-12">
                    <h3 className="text-3xl font-bold text-white mb-6">The Three Variables</h3>
                    <p className="text-lg leading-relaxed text-slate-400 mb-6">
                        When you take a loan, you are juggling three interconnected factors. If you move one, the others react:
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="text-slate-300"><strong>1. The Interest Rate:</strong> Usually fixed by the bank (the "environment").</li>
                        <li className="text-slate-300"><strong>2. The Tenure (Time):</strong> How long you take to pay it back.</li>
                        <li className="text-slate-300"><strong>3. The EMI (Monthly Cost):</strong> How much disappears from your bank account each month.</li>
                    </ul>

                    <h4 className="text-xl font-bold text-primary-400 mb-4"> The "Too Cold" Scenario (High EMI, Short Tenure)</h4>
                    <p className="text-lg leading-relaxed text-slate-400 mb-4">
                        You decide to pay off a ₹80,00,000 loan in just 2 years.
                    </p>
                    <ul className="space-y-2 mb-8 list-disc pl-6">
                        <li className="text-slate-400"><strong>The Good:</strong> You pay very little total interest and become debt-free quickly.</li>
                        <li className="text-slate-400"><strong>The Bad:</strong> Your monthly payment is massive. One unexpected medical bill or car repair could cause you to default because your cash flow is "frozen."</li>
                    </ul>

                    <h4 className="text-xl font-bold text-rose-400 mb-4">The "Too Hot" Scenario (Low EMI, Long Tenure)</h4>
                    <p className="text-lg leading-relaxed text-slate-400 mb-4">
                        You stretch that same loan over 30 years to keep the monthly payment tiny.
                    </p>
                    <ul className="space-y-2 mb-8 list-disc pl-6">
                        <li className="text-slate-400"><strong>The Good:</strong> You have plenty of pocket money every month.</li>
                        <li className="text-slate-400"><strong>The Bad:</strong> You end up paying back double or triple what you borrowed due to compounding interest. The loan "burns" through your long-term savings.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 mb-16">
                <h3 className="text-2xl font-bold text-white mb-6">The Mathematical Engine</h3>
                <p className="mb-8 text-slate-400">Standardized across global banking, the formula below governs your amortization schedule:</p>
                <div className="bg-slate-900 py-8 px-4 rounded-2xl border border-slate-800/50 font-mono text-center text-2xl text-primary-500 mb-10 overflow-x-auto shadow-inner">
                    E = P × r × (1 + r)ⁿ / ((1 + r)ⁿ - 1)
                </div>
                <div className="grid sm:grid-cols-2 gap-6 text-slate-400 text-base">
                    <div className="flex items-center gap-3"><span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white italic">E</span> Equated Monthly Installment</div>
                    <div className="flex items-center gap-3"><span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white italic">P</span> Principal (Initial Borrowing)</div>
                    <div className="flex items-center gap-3"><span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white italic">r</span> Periodic Interest (Annual / 12 / 100)</div>
                    <div className="flex items-center gap-3"><span className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center font-bold text-white italic">n</span> Periodic Count (Years × 12)</div>
                </div>
            </section>

            <div className="space-y-16 border-t border-slate-800 pt-12">
                <section>
                    <h3 className="text-3xl font-bold text-white mb-8">Methodologies of Calculation</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Fixed (Flat Rate) Method</h4>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                Interest is charged on the original loan amount throughout the duration. Even if you've paid back 90% of the loan, you pay interest on 100%.
                            </p>
                            <span className="text-rose-500 font-semibold text-sm">WARNING: Effective rate is much higher than nominal rate.</span>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-4">Reducing Balance Method</h4>
                            <p className="text-slate-400 leading-relaxed mb-4">
                                The standard for most modern credit products. Interest is calculated on the outstanding balance. As you pay, the principal shrinks, and so does the interest burden.
                            </p>
                            <span className="text-emerald-500 font-semibold text-sm">BEST FOR: Home Loans, Personal Loans, Car Loans.</span>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 pt-12">
                    <h3 className="text-2xl font-bold text-white mb-6">Tax Shield & Benefits</h3>
                    <div className="text-slate-400 space-y-6">
                        <p>In many jurisdictions, EMIs for specific loan types offer significant tax advantages:</p>
                        <div className="space-y-4">
                            <p>
                                <strong className="text-white block mb-2 underline decoration-primary-500/50">Housing Loans</strong>
                                Both principal and interest components are often deductible under various tax codes, potentially saving you 20-30% of your outflow in tax credits.
                            </p>
                            <p>
                                <strong className="text-white block mb-2 underline decoration-primary-500/50">Education Loans</strong>
                                Interest paid on higher education loans is frequently tax-deductible for a specified period, reducing the effective interest rate of learning.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-slate-800 pt-12">
                    <h3 className="text-3xl font-bold text-white mb-8">Strategic Optimization</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 underline decoration-blue-500/30 underline-offset-4">The Power of Prepayment</h4>
                            <p className="text-slate-400 leading-relaxed">Making just one extra EMI payment toward the principal every year can reduce a 20-year loan by nearly 3 years. Focus on prepaying in the first 5 years for maximum impact.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2 underline decoration-amber-500/30 underline-offset-4">Credit Score Sensitivity</h4>
                            <p className="text-slate-400 leading-relaxed">A score variance of 50 points (e.g., 700 vs 750) can mean the difference between getting a loan at 8.5% and 10%. Always check your score 6 months before applying.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-16 max-w-3xl mx-auto border-t border-slate-800 pt-12">
                    <h3 className="text-3xl font-bold text-white mb-10 text-center underline decoration-primary-500/30 underline-offset-8">Frequently Asked Questions</h3>
                    <Accordion items={[
                        {
                            q: "Should I choose a floating or fixed interest rate?",
                            a: "Floating rates are usually lower but fluctuate with market conditions. Fixed rates offer certainty but come with a premium. If you expect market rates to drop, floating is better."
                        },
                        {
                            q: "What is 'EMI-in-advance' vs 'EMI-in-arrears'?",
                            a: "In-advance means you pay the first EMI at the time of disbursement. In-arrears is the standard where you pay at the end of the first month."
                        },
                        {
                            q: "What happens if I miss an EMI?",
                            a: "Besides late fees, it significantly damages your credit score (CIBIL/FICO). Repeat defaults can lead to asset repossession."
                        },
                        {
                            q: "Can I switch my loan to another bank?",
                            a: "Yes, this is called a 'Balance Transfer'. If another bank offers a significantly lower rate, you can move your outstanding principal there."
                        },
                        {
                            q: "Is total interest paid more important than monthly EMI?",
                            a: "Yes. While a low EMI is easy on the pocket, a very long tenure can lead to you paying back 3x the original loan amount in total interest."
                        },
                        {
                            q: "Does processing fee affect the EMI?",
                            a: "No, the processing fee is usually a one-time upfront cost. However, some lenders 'capitalize' it by adding it to the loan amount, which slightly increases the EMI."
                        }
                    ].map(faq => ({ title: faq.q, content: faq.a }))} />
                </section>
            </div>
        </article>
    );
}

export default EMIContent;
