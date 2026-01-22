export function calculateLumpsum(investment, rate, years) {
    const inv = Number(investment) || 0;
    const r = Number(rate) || 0;
    const t = Number(years) || 0;

    if (t <= 0 || inv <= 0) {
        return {
            invested: 0,
            returns: 0,
            total: 0
        };
    }

    const total = inv * Math.pow(1 + r / 100, t);

    return {
        invested: Math.round(inv),
        returns: Math.round(total - inv),
        total: Math.round(total)
    };
}
