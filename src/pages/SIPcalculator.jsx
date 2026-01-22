import { useMemo, useState } from 'react'
import { calculateSIP } from '../utils/calculateSIP';
import SIPform from '../components/calculatorComponents/SIPform';
import SIPsummary from '../components/calculatorComponents/SIPsummary';
import SIPchart from '../components/calculatorComponents/SIPchart';
import { Card, CardTitle } from '../components/card';
import SIPContent from '../components/calculatorComponents/SIPContent';

function SIPcalculator() {
  const [investment, setInvestment] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [stepUp, setStepUp] = useState(0);

  const result = useMemo(() =>
    calculateSIP(investment, rate, years, stepUp)
    , [investment, rate, years, stepUp])

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-slate-300">SIP Calculator</h1>
      <section className="grid gap-8 md:grid-cols-2" aria-label="SIP Calculator Interface">
        <Card as="section">
          <CardTitle>SIP Details</CardTitle>

          <SIPform
            investment={investment}
            setInvestment={setInvestment}
            rate={rate}
            setRate={setRate}
            years={years}
            setYears={setYears}
            stepUp={stepUp}
            setStepUp={setStepUp}
          />

          <SIPsummary
            {...result}
          />
        </Card>

        <SIPchart
          {...result}
          years={years}
        />
      </section>

      <SIPContent />
    </main>
  )
}

export default SIPcalculator
