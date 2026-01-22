import Input from "../input"
import { IndianRupee } from "lucide-react"

function SWPform({
    initialInvestment,
    setInitialInvestment,
    years,
    setYears,
    annualReturn,
    setAnnualReturn,
    annualIncrement,
    setAnnualIncrement,
    initialMonthlyWithdrawal,
    setInitialMonthlyWithdrawal }) {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input
                label="Initial Investment"
                value={initialInvestment}
                onChange={setInitialInvestment}
                isIndianFormatting={true}
                prefix={<IndianRupee className="w-4 h-4"></IndianRupee>}
                max={100000000}
                limitMsg={"Maximum limit: ₹10 Cr"}
                allowDecimals={false}
            >
            </Input>
            <Input
                label="SWP Duration (Years)"
                value={years}
                onChange={setYears}
                suffix={"YR"}
                max={40}
                limitMsg={"Maximum limit: 40 years"}
                allowDecimals={false}
            ></Input>
            <Input
                label="Annual Expected Return(%)"
                value={annualReturn}
                onChange={setAnnualReturn}
                suffix="%"
                max={30}
                limitMsg={"Maximum limit: 30%"}
                allowDecimals={true}
            ></Input>
            <Input
                label="Initial Monthly Withdrawal"
                value={initialMonthlyWithdrawal}
                onChange={setInitialMonthlyWithdrawal}
                prefix={<IndianRupee className="w-4 h-4"></IndianRupee>}
                isIndianFormatting={true}
                max={1000000}
                limitMsg={"Maximum limit: ₹10 Lakhs"}
                allowDecimals={false}
            ></Input>
            <Input
                label="Annual Step-Up (%)"
                value={annualIncrement}
                onChange={setAnnualIncrement}
                suffix="%"
                helperText="Withdrawal increases by this % every year"
                max={20}
                limitMsg={"Maximum limit: 20%"}
                allowDecimals={true}
            ></Input>
        </form>
    )
}

export default SWPform