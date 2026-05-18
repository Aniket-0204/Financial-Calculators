import { IndianRupee } from 'lucide-react';
import Input from '../input';

function LumpsumForm({ investment, setInvestment, rate, setRate, years, setYears }) {
    return (
        <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
            <Input
                label="Total Investment"
                type="number"
                value={investment}
                onChange={setInvestment}
                prefix={<IndianRupee className="w-4 h-4" />}
                isIndianFormatting={true}
                limitMsg={"Maximum limit: ₹10 Crores"}
                max={100000000}
            ></Input>
            <Input
                type="number"
                label="Expected Annual Retrun (%)"
                value={rate}
                onChange={setRate}
                suffix="%"
                max={30}
                limitMsg={"Maximum limit: 30%"}
                allowDecimals={true}
            ></Input>
            <Input
                type="number"
                label="Time Period"
                value={years}
                onChange={setYears}
                suffix="YR"
                max={30}
                limitMsg={"Maximum limit: 30 years"}
            ></Input>
        </form>
    )
}

export default LumpsumForm;
