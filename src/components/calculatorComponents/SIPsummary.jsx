function SIPsummary({ invested, returns, total }) {
    return (
        <section className="mt-8 pt-8 border-t border-slate-800" aria-label="SIP Summary">
            <dl>
                <div className="flex justify-between mb-2">
                    <dt className="text-slate-400">Invested Amount</dt>
                    <dd className="font-semibold text-slate-300">₹ {(invested || 0).toLocaleString('en-IN')}</dd>
                </div>
                <div className="flex justify-between mb-2">
                    <dt className="text-slate-400">Est. Returns</dt>
                    <dd className="font-semibold text-green-300">₹ {(returns || 0).toLocaleString('en-IN')}</dd>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4">
                    <dt className="text-slate-300">Total Value</dt>
                    <dd className="text-slate-300">₹ {(total || 0).toLocaleString('en-IN')}</dd>
                </div>
            </dl>
        </section>
    )
}

export default SIPsummary