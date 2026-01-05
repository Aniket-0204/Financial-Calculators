import { Card, CardTitle } from "../card";
import { ResponsiveContainer, Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

function SWPcharts({ data, years, isDepleted, finalValue }) {
    // specific ticks for Month 12, Month 24, etc.
const yearTicks = Array.from({ length: years }, (_, i) => (i + 1) * 12);

const currentYear = new Date().getFullYear()
    return (
        <Card as="figure" className="flex flex-col min-h-100" aria-label="SWP Balance Projection Chart">
            <CardTitle> Balance Projection</CardTitle>
            <div className="w-full h-64 flex-1">
                <ResponsiveContainer width="100%" height="100%" >
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="5 3" vertical={false} stroke="#334155" />

                        
                        <XAxis
                            dataKey="monthIndex"
                            ticks={yearTicks}
                            tickFormatter={(value) =>{
                                    let nthYear = value/12;
                                    return currentYear + nthYear;
                                }
                            }
                            
                            axisLine={true}
                            tickLine={true}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />

                        <YAxis 
                            width={60} 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#94a3b8', fontSize: 12 }} 
                            tickFormatter={(value) => 
                                new Intl.NumberFormat('en-IN', { 
                                    notation: "compact", 
                                    maximumFractionDigits: 1 
                                }).format(value)
                            }
                        />

                        <Tooltip
                            // We use the payload's 'hoverLabel' instead of the XAxis 'year' label
                            labelFormatter={(label, payload) => {
                                if (payload && payload.length > 0) {
                                    return payload[0].payload.hoverLabel;
                                }
                                return label;
                            }}
                            formatter={(value) => `₹ ${value.toLocaleString('en-IN')}`}
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                borderRadius: '8px',
                                border: '1px solid #334155',
                                color: '#f1f5f9'
                            }}
                            itemStyle={{ color: '#f1f5f9' }}
                            labelStyle={{ color: '#94a3b8' }}
                        />

                        <Area
                            type="monotone"
                            dataKey="Balance"
                            stroke="#3b82f6"
                            fillOpacity={1}
                            fill="url(#colorBalance)"

                        />
                        <Area
                            type="monotone"
                            dataKey="Withdrawal"
                            stroke="red"
                            fill="red"
                            legendType="none"
                        />
                    </AreaChart>

                </ResponsiveContainer>
            </div>

            <figcaption>
                <p className="text-sm text-slate-400">
                    {isDepleted ? "Corpus Depleted" : `Your corpus balance after ${years} ${years === 1 ? "year" : "years"} is`}
                </p>
                <p className="text-2xl font-bold text-slate-300 mt-1">
                    ₹ {Math.round(finalValue).toLocaleString("en-IN")}
                </p>
            </figcaption>
        </Card>

    )
}

export default SWPcharts