import { useId, useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";

const Input = ({
    label, max, limitMsg, value, id: customid, onChange,
    prefix, suffix, helperText,
    isIndianFormatting = false,
    allowDecimals
}) => {
    const reactId = useId();
    const id = customid || reactId;
    const [isExceeding, setIsExceeding] = useState(false);

    useEffect(() => {
        if (isExceeding) {
            const timer = setTimeout(() => setIsExceeding(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isExceeding]);

    const baseInputStyles = `w-full rounded-lg border bg-slate-800 px-3 py-2 text-slate-100 focus:outline-none focus:ring-1 sm:text-sm transition-all ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`;
    const errorStyles = isExceeding
        ? "border-red-500 focus:ring-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
        : "border-slate-700 focus:border-primary-500 focus:ring-primary-500";

    const commonProps = {
        id,
        value,
        onValueChange: (values) => {
            const { floatValue, value: stringValue } = values;
            onChange(stringValue === "" ? "" : floatValue);
        },
        isAllowed: (values) => {
            const { floatValue, value: strValue } = values;
            // HARD BLOCK the dot for non-decimal fields
            if (!allowDecimals && strValue.includes(".")) return false;
            if (strValue === "") return true;

            const isBelowMax = floatValue <= max;
            if (!isBelowMax) setIsExceeding(true);
            return isBelowMax;
        },
        decimalScale: allowDecimals ? 2 : 0,
        allowNegative: false,
        className: `${baseInputStyles} ${errorStyles}`
    };

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between items-center">
                <label htmlFor={id} className="text-sm font-medium text-slate-300">{label}</label>
                {isExceeding && <span className="text-[10px] font-bold text-red-400 animate-pulse uppercase">{limitMsg}</span>}
            </div>

            <div className="relative flex items-center">
                {prefix && <span className="absolute left-3 text-slate-400 text-sm z-10">{prefix}</span>}

                {isIndianFormatting ? (
                    /* For Investment & Withdrawal: Commas, No Arrows, No Dots */
                    <NumericFormat
                        {...commonProps}
                        type="text"
                        inputMode="numeric"
                        thousandSeparator=","
                        thousandsGroupStyle="lakh"
                    />
                ) : (
                    /* For Years & Percentages: No Commas, Native Arrows */
                    <NumericFormat
                        {...commonProps}
                        type="number"
                        inputMode={allowDecimals ? "decimal" : "numeric"}
                        thousandSeparator={false}
                        step={allowDecimals ? "0.1" : "1"}
                    />
                )}

                {suffix && <span className="absolute right-3 text-slate-400 text-sm z-10">{suffix}</span>}
            </div>
            {helperText && !isExceeding && <p className="text-xs text-slate-500">{helperText}</p>}
        </div>
    );
};

export default Input;