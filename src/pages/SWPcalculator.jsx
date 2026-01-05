import { useMemo, useState } from "react"
import { calculateSWP } from "../utils/calculateSWP";
import { Card, CardTitle } from "../components/card";
import SWPform from "../components/calculatorComponents/SWPform";
import SWPsummary from "../components/calculatorComponents/SWPsummary";
import SWPcharts from "../components/calculatorComponents/SWPcharts";

function SWPcalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000000);
  const [years, setYears] = useState(20);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [initialMonthlyWithdrawal, setInitialMonthlyWithdrawal] = useState(50000);
  const [annualIncrement, setAnnualIncrement] = useState(6);

  const result = useMemo(() => calculateSWP(
    initialInvestment,
    years,
    annualReturn,
    initialMonthlyWithdrawal,
    annualIncrement
  ),
    [initialInvestment, years, annualReturn, initialMonthlyWithdrawal, annualIncrement]
  )
 
  const chartData = useMemo(() => {
    if (!result.schedule) return [];
    return result.schedule.map((item) => {
      
      const date = new Date();
      
      date.setDate(1) // Reset to start of month to avoid "31st day" overflow bugs

       date.setMonth(date.getMonth() + item.month)

        const dateForToolkit = date.toLocaleString('en-IN', { 
            month: 'short', 
            year: 'numeric' 
        });
      return {

        monthIndex: item.month,
        hoverLabel : `${dateForToolkit}`,
        Balance: Math.max(0, Math.round(item.currentValue)),
        Withdrawal: Math.round(item.withdrawal),
        withdrawal: Math.round(item.withdrawal)
      }
    })

  }, [result])

  const totalWithdrawn = result.schedule?.reduce((acc, curr) => acc + curr.withdrawal, 0) || 0;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-slate-100">SWP Calculator</h1>
      <section className="grid gap-8 md:grid-cols-2" aria-label="SWP Calculator Interface">
        <Card as="section">
          <CardTitle> SWP Details</CardTitle>
          <SWPform
            initialInvestment={initialInvestment}
            setInitialInvestment={setInitialInvestment}
            years={years}
            setYears={setYears}
            annualReturn={annualReturn}
            setAnnualReturn={setAnnualReturn}
            annualIncrement={annualIncrement}
            setAnnualIncrement={setAnnualIncrement}
            initialMonthlyWithdrawal={initialMonthlyWithdrawal}
            setInitialMonthlyWithdrawal={setInitialMonthlyWithdrawal}
          ></SWPform>
          <SWPsummary
            initialInvestment={initialInvestment}
            totalWithdrawn={totalWithdrawn}
            lastMonthlyWithdrawal={result.lastMonthlyWithdrawal}
            finalValue={result.finalValue}
            depMonth={result.isDepleted ? result.depletionMonth : null}
          ></SWPsummary>
        </Card>
        <SWPcharts
          data={chartData}
          years={years}
          isDepleted={result.isDepleted}
          finalValue={result.finalValue}
        ></SWPcharts>
      </section>
    </main>
  )
}

export default SWPcalculator