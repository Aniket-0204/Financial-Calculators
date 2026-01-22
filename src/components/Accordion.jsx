import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionItem({ title, children, isOpen, onClick }) {
    return (
        <div className="border-b border-slate-800 last:border-b-0">
            <button
                className="w-full py-4 flex items-center justify-between text-left hover:text-primary-500 transition-colors focus:outline-none group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-sm md:text-base font-semibold text-slate-300 group-hover:text-primary-400 transition-colors">
                    {title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300  ${isOpen ? 'rotate-180 text-primary-500' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] mb-4' : 'max-h-0'}`}
            >
                <div className="text-sm text-slate-400 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}

function Accordion({ items, allowMultiple = false }) {
    const [openIndices, setOpenIndices] = useState(allowMultiple ? [] : [0]);

    const handleToggle = (index) => {
        if (allowMultiple) {
            setOpenIndices((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
        }
    };

    return (
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 divide-y divide-slate-800 pl-3 pr-2">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndices.includes(index)}
                    onClick={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}

export default Accordion;
