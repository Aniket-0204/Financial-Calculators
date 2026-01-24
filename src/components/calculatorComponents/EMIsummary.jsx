function EMIsummary({
    emi,
    totalInterest,
    totalAmount
}) {
    return (
        <div className="mt-8 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                    <span className="text-slate-400">Monthly EMI</span>
                    <span className="text-2xl font-bold text-blue-400">
                        ₹ {emi.toLocaleString('en-IN')}
                    </span>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Total Interest Payable</span>
                        <span className="font-semibold text-slate-200">
                            ₹ {totalInterest.toLocaleString('en-IN')}
                        </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Total Payment (Principal + Interest)</span>
                        <span className="font-semibold text-slate-200">
                            ₹ {totalAmount.toLocaleString('en-IN')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EMIsummary;
