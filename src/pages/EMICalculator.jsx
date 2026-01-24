import { useMemo, useState } from 'react';
import { calculateEMI } from '../utils/calculateEMI';
import EMIform from '../components/calculatorComponents/EMIform';
import EMIsummary from '../components/calculatorComponents/EMIsummary';
import EMIchart from '../components/calculatorComponents/EMIchart';
import { Card, CardTitle } from '../components/card';
import EMIContent from '../components/calculatorComponents/EMIContent';

function EMICalculator() {
    const [loanAmount, setLoanAmount] = useState(1000000);
    const [rate, setRate] = useState(9);
    const [tenure, setTenure] = useState(10);

    const result = useMemo(() =>
        calculateEMI(loanAmount, rate, tenure)
        , [loanAmount, rate, tenure]);

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8 text-slate-300">EMI Calculator</h1>
            <section className="grid gap-8 md:grid-cols-2" aria-label="EMI Calculator Interface">
                <Card as="section">
                    <CardTitle>EMI Details</CardTitle>

                    <EMIform
                        loanAmount={loanAmount}
                        setLoanAmount={setLoanAmount}
                        rate={rate}
                        setRate={setRate}
                        tenure={tenure}
                        setTenure={setTenure}
                    />

                    <EMIsummary
                        {...result}
                    />
                </Card>

                <EMIchart
                    principal={loanAmount}
                    totalInterest={result.totalInterest}
                />
            </section>

            <EMIContent />
        </main>
    );
}

export default EMICalculator;
