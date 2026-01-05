export function Card({ children, className = "", as: Component = 'div' }) {
  return (
    <Component className={`bg-slate-900 rounded-xl shadow-lg border border-slate-800 p-6 ${className}`}>
      {children}
    </Component>
  )
}

export function CardTitle({ children }) {
  return (
    <h3 className="text-lg font-semibold text-slate-300 mb-4">{children}</h3>
  )
}


