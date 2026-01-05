import { useId } from "react";
import { NumericFormat } from "react-number-format";

const Input = ({ label, value, id: customid, onChange, type = "number", prefix, suffix, helperText, isIndianFormatting = false }) => {
    const reactId = useId();
    const id = customid || reactId;

    
    const inputType = isIndianFormatting ? "text" : type;

    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className="text-sm font-medium text-slate-300 cursor-pointer">
                {label}
            </label>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-3 text-slate-400 text-sm font-medium">
                        {prefix}
                    </span>
                )}

                {isIndianFormatting ? (
                    <NumericFormat
                        id={id}
                        value={value}
                        onValueChange={(values) => {
                            // .value is the string version (e.g., "00000")
                            // .floatValue is the number version (e.g., 0)
                            // We use .value to preserve leading zeros like ",00,000"
                            onChange(values.value);
                        }}
                        thousandSeparator=","
                        thousandsGroupStyle="lakh" 
                        allowNegative={false}
                        className={`w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
                    />
                ) : (
                    <input
                        type={inputType}
                        id={id}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className={`w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
                    />
                )}

                {suffix && (
                    <span className="absolute right-3 text-slate-400 text-sm font-medium">
                        {suffix}
                    </span>
                )}
            </div>
            {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
        </div>
    );
};

export default Input;