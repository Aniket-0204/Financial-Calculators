import { useId } from "react";


const Input = ({ label, value, id: customid ,onChange, type = "number", prefix, suffix, helperText, isIndianFormatting = false }) => {

    const reactId = useId();

    const id = customid || reactId;
    // Determine input type: force "text" if using custom formatting, otherwise use provided type
    const inputType = isIndianFormatting ? "text" : type;

    // Handle change: strip commas if formatting is used
    const handleChange = (e) => {
        let rawVal = e.target.value;
        if (isIndianFormatting) {
            // Remove commas to get raw number string
            rawVal = rawVal.replace(/,/g, '');
            // Only allow digits (and optionally one decimal point if needed, currently assuming integers/floats are valid)
            if (!/^\d*\.?\d*$/.test(rawVal)) {
                return; // Ignore invalid char input
            }
        }
        onChange(rawVal);
    };

    // Format display value
    let displayValue = value;
    if (isIndianFormatting && value !== undefined && value !== null && value !== '') {
        
        // to prevent typing "5." (dangling dot) easily as it reformats to "5" immediately.
        
        const numVal = Number(value);
        if (!isNaN(numVal)) {
            
            displayValue = numVal.toLocaleString('en-IN');
        }
    }

    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className="text-sm font-medium text-slate-300 cursor-pointer hover:text-slate-200">{label}</label>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-3 text-slate-400 text-sm font-medium">
                        {prefix}
                    </span>
                )}
                <input
                    type={inputType}
                    id = {id}
                    value={displayValue}    
                    onChange={handleChange}
                    className={`w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm ${prefix ? 'pl-8' : ''
                        } ${suffix ? 'pr-8' : ''}`}
                />
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