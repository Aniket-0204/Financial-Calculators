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
                type="number"
                label="Initial Investment"
                value={initialInvestment}
                onChange={setInitialInvestment}
                isIndianFormatting={true}
                prefix={<IndianRupee className="w-4 h-4"></IndianRupee>}
            >
            </Input>
            <Input
                type="number"
                label="SWP Duration (Years)"
                value={years}
                onChange={setYears}
                suffix={"YR"}
            ></Input>
            <Input
                type="number"
                label="Annual Expected Return(%)"
                value={annualReturn}
                onChange={setAnnualReturn}
                suffix="%"
            ></Input>
            <Input
                type="number"
                label="Initial Monthly Withdrawal"
                value={initialMonthlyWithdrawal}
                onChange={setInitialMonthlyWithdrawal}
                prefix={<IndianRupee className="w-4 h-4"></IndianRupee>}
                isIndianFormatting={true}
            ></Input>
            <Input
                type="number"
                label="Annual Withdrawal Increment (%) "
                value={annualIncrement}
                onChange={setAnnualIncrement}
                suffix="%"
            ></Input>
        </form>
    )
}

export default SWPform