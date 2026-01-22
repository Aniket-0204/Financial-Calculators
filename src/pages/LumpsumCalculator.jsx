import { useMemo, useState } from 'react'
import { calculateLumpsum } from '../utils/calculateLumpsum';
import LumpsumForm from '../components/calculatorComponents/LumpsumForm';
import LumpsumSummary from '../components/calculatorComponents/LumpsumSummary';
import LumpsumChart from '../components/calculatorComponents/LumpsumChart';
import { Card, CardTitle } from '../components/card';
import LumpsumContent from '../components/calculatorComponents/LumpsumContent';

function LumpsumCalculator() {
    const [investment, setInvestment] = useState(100000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);

    const result = useMemo(() =>
        calculateLumpsum(investment, rate, years)
        , [investment, rate, years])

    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-8 text-slate-300">Lumpsum Calculator</h1>
            <section className="grid gap-8 md:grid-cols-2" aria-label="Lumpsum Calculator Interface">
                <Card as="section">
                    <CardTitle>Investment Details</CardTitle>

                    <LumpsumForm
                        investment={investment}
                        setInvestment={setInvestment}
                        rate={rate}
                        setRate={setRate}
                        years={years}
                        setYears={setYears}
                    />

                    <LumpsumSummary
                        {...result}
                    />
                </Card>

                <LumpsumChart
                    {...result}
                />
            </section>

            <LumpsumContent />
        </main>
    )
}

export default LumpsumCalculator;
