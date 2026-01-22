
function SWPsummary({ initialInvestment, totalWithdrawn, lastMonthlyWithdrawal, finalValue, depMonth }) {
    const isDepleted = depMonth !== undefined && depMonth !== null;
    const date = new Date();

    date.setDate(1) // Reset to start of month to avoid "31st day" overflow bugs

    date.setMonth(date.getMonth() + depMonth)

    const depletionMonth = date.toLocaleString('en-IN', {
        month: 'short',
        year: 'numeric'
    });
    return (
        <section className="mt-8 pt-8 border-t border-slate-800" aria-label="SWP Summary">
            {isDepleted && (
                <div className="mb-4 p-3 bg-red-900/20 text-red-300 rounded-md text-sm border border-red-800" role="alert">
                    Corpus depleted in {depletionMonth}
                </div>
            )}
            <dl>
                <div className="flex justify-between mb-2">
                    <dt className="text-slate-400">Total Investment</dt>
                    <dd className="font-semibold text-slate-300">₹ {(Number(initialInvestment) || 0).toLocaleString('en-IN')}</dd>
                </div>
                <div className="flex justify-between mb-2">
                    <dt className="text-slate-400">Total Withdrawn</dt>
                    <dd className="font-semibold text-blue-500">₹ {(Math.round(totalWithdrawn) || 0).toLocaleString('en-IN')}</dd>
                </div>
                <div className="flex justify-between mb-2">
                    <dt className="text-slate-400">Last Monthly Withdrawal</dt>
                    <dd className="font-semibold text-orange-400">₹ {(Math.round(lastMonthlyWithdrawal) || 0).toLocaleString('en-IN')}</dd>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4">
                    <dt className="text-slate-300">Final Value</dt>
                    <dd className="text-slate-300">₹ {(Math.round(finalValue) || 0).toLocaleString('en-IN')}</dd>
                </div>
            </dl>
        </section>
    );
};

export default SWPsummary;