import { IndianRupee } from "lucide-react"
import Input from '../input'

function SIPform({ investment, setInvestment, rate, setRate, years, setYears }) {
  return (
    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
      <Input
        label="Monthly Investment"
        type="number"
        value={investment}
        onChange={setInvestment}
        prefix={<IndianRupee className="w-4 h-4" />}
        isIndianFormatting={true}
        max = {1000000}
        limitMsg= {"Maximum limit: ₹10 Lakhs"}
       
      ></Input>
      <Input
        type="number"
        label="Expected rate of return (%)"
        value={rate}
        onChange={setRate}
        suffix="%"
      ></Input>
      <Input
        type="number"
        label="Time Period"
        value={years}
        onChange={setYears}
        suffix="YR"
      ></Input>
    </form>
  )
}

export default SIPform