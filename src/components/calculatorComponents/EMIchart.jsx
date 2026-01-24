import { Card, CardTitle } from "../../components/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function EMIchart({ principal, totalInterest }) {

    const data = [
        { name: 'Principal Amount', value: principal },
        { name: 'Total Interest', value: totalInterest },
    ];

    const COLORS = ['#94a3b8', '#3b82f6']; // Blue for Principal, Red for Interest

    // Convert to readable Indian currency format
    const formatCurrency = (val) =>
        `₹ ${Math.round(val).toLocaleString('en-IN')}`;

    return (
        <Card as="figure" className="flex flex-col min-h-120" aria-label="EMI Breakdown Chart">
            <CardTitle>Break-up of Total Payment</CardTitle>
            <div className="w-full h-80 flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => formatCurrency(value)}
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                borderRadius: '8px',
                                border: '1px solid #334155',
                                color: '#f1f5f9'
                            }}
                            itemStyle={{ color: '#f1f5f9' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            formatter={(value, entry) => (
                                <span className="text-slate-300 ml-2">{value}</span>
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <figcaption className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800">
                <div>
                    <p className="text-xs text-slate-300 uppercase font-semibold">Principal</p>
                    <p className="text-lg font-bold text-slate-300">{formatCurrency(principal)}</p>
                </div>
                <div>
                    <p className="text-xs text-primary-500 uppercase font-semibold">Interest</p>
                    <p className="text-lg font-bold text-primary-500">{formatCurrency(totalInterest)}</p>
                </div>
            </figcaption>
        </Card>
    );
}

export default EMIchart;
