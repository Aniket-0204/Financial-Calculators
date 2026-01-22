import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardTitle } from '../card';

function LumpsumChart({ invested, returns, total }) {
    const data = [
        { name: 'Invested', value: invested },
        { name: 'Returns', value: returns },
    ];

    const COLORS = ['#94a3b8', '#3b82f6']; // slate-400, emerald-500

    if (!total) return null;

    return (
        <Card className="flex flex-col items-center justify-center min-h-100" aria-label="Lumpsum Investment Projections Chart">
            <CardTitle>Result Visualization</CardTitle>
            <div className="h-[300px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            stroke="none"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `₹ ${value.toLocaleString('en-IN')}`}
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center text-sm text-slate-400 mt-4">
                Invested vs Returns
            </div>
        </Card>
    );
}

export default LumpsumChart;
