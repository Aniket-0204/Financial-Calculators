import Input from "../input";
import { IndianRupee } from "lucide-react";

function EMIform({
    loanAmount, setLoanAmount,
    rate, setRate,
    tenure, setTenure
}) {
    return (
        <div className="space-y-6">
            <Input
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                isIndianFormatting={true}
                prefix={<IndianRupee className="w-4 h-4" />}
                max={1000000000} // 100 Cr max
                limitMsg="Maximum limit: ₹100 Cr"
                allowDecimals={false}
            />

            <Input
                label="Interest Rate (% p.a.)"
                value={rate}
                onChange={setRate}
                suffix="%"
                max={50}
                limitMsg="Maximum limit: 50%"
                allowDecimals={true}
            />

            <Input
                label="Loan Tenure (Years)"
                value={tenure}
                onChange={setTenure}
                suffix=" Yr"
                max={50}
                limitMsg="Maximum limit: 50 Years"
                allowDecimals={true}
            />
        </div>
    );
}

export default EMIform;
