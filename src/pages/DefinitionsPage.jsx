function DefinitionsPage() {
    const terms = [
        {
            term: "Systematic Investment Plan (SIP)",
            definition: "A method of investing in mutual funds where an investor contributes a fixed amount regularly (usually monthly) for a specific period."
        },
        {
            term: "Systematic Withdrawal Plan (SWP)",
            definition: "A facility that allows an investor to withdraw a fixed amount from an existing investment at regular intervals."
        },
        {
            term: "Corpus",
            definition: "The total amount of money invested or accumulated. In SWP, it refers to the initial lump sum investment."
        },
        {
            term: "Compound Interest",
            definition: "Interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods."
        },
        {
            term: "Rate of Return",
            definition: "The annual percentage growth expected from the investment. This is an assumption based on market performance."
        },
        {
            term: "Inflation",
            definition: "The rate at which the general level of prices for goods and services is rising, and strictly speaking, purchasing power is falling."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
            <h1 className="text-3xl font-bold text-slate-100">Financial Definitions</h1>
            <p className="text-slate-400">
                Understanding the key terms used in our financial calculators.
            </p>

            <dl className="space-y-8">
                {terms.map((item, index) => (
                    <div key={index} className="bg-slate-900/30 p-4 rounded-lg border border-slate-800">
                        <dt className="text-lg font-semibold text-primary-400 mb-2">
                            {item.term}
                        </dt>
                        <dd className="text-slate-300 leading-relaxed">
                            {item.definition}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

export default DefinitionsPage;
