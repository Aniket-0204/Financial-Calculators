import { Card, CardTitle } from "../card";
import { ResponsiveContainer, Pie, PieChart, Tooltip, Cell, Legend } from "recharts"

function SIPchart({ invested, returns, total, years }) {

  const data = [
    { name: "Invested Amount", value: invested },
    { name: "Est. Returns", value: returns }
  ]

  const COLORS = ['#334155', '#3b82f6'];
  return (
    <Card as="figure" className="flex flex-col items-center justify-center min-h-100" aria-label="SIP Projections Chart">
      <CardTitle>Projections</CardTitle>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `₹ ${value.toLocaleString('en-IN')}`}
              contentStyle={{ backgroundColor: '#1e293b', borderRadius: '8px', border: '1px solid #334155' }}
              itemStyle={{ color: '#f1f5f9' }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              layout="horizontal"
              formatter={(value) => <span className="text-slate-300 ml-2">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <figcaption className="text-center mt-4">
        <p className="text-sm text-slate-400">Your investment after {years} {years <= 1 ? "year" : "years"} will be</p>
        <p className="text-2xl font-bold text-slate-300 mt-1">
          ₹ {total.toLocaleString('en-IN')}
        </p>
      </figcaption>
    </Card >

  )
}

export default SIPchart;