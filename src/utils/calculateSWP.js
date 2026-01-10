export const calculateSWP = (
    initialInvestment,
    years,
    annualReturnPct,
    initialMonthlyWithdrawal,
    annualIncrementPct) => {

    // 1. Convert and validate in one step using logical OR/Default values
    const initialInv = Number(initialInvestment) || 0;
    const durYears = Number(years) || 0;
    const annReturn = Number(annualReturnPct) || 0;
    const initWithdrawal = Number(initialMonthlyWithdrawal) || 0;
    const annIncrement = Number(annualIncrementPct) || 0;

    // 2. Early exit if core values are invalid or negative
    if (durYears <= 0 || initialInv <= 0) {
        return { finalValue: 0, lastMonthlyWithdrawal: 0, isDepleted: false, schedule: [] };
    }

    let annualReturn = annReturn / 100;
    let annualIncrement = annIncrement / 100;

    const monthlyReturn = Math.pow(1 + annualReturn, 1 / 12) - 1; // r = [(1 + R)^(1/12)] - 1
    const schedule = [];

    let lastMonthlyWithdrawal = 0
    let portfolioValue = initialInv;

    for (let year = 1; year <= durYears; year++) {

        let currentMonthlyWithdrawal = initWithdrawal * Math.pow(1 + annualIncrement, year - 1);
        lastMonthlyWithdrawal = currentMonthlyWithdrawal;

        for (let month = 1; month <= 12; month++) {
            let monthIdx = (year - 1) * 12 + month;

            const initialValue = portfolioValue;
            const valueAfterWithdrawal = portfolioValue - currentMonthlyWithdrawal;
            let currentValue = valueAfterWithdrawal * (1 + monthlyReturn);
            portfolioValue = currentValue;

            schedule.push({
                year: year,
                month: monthIdx,
                initialValue: initialValue,
                withdrawal: currentMonthlyWithdrawal,
                valueAfterWithdrawal: valueAfterWithdrawal,
                currentValue: currentValue
            })
            if (portfolioValue < 0) {
                return ({
                    year: year,
                    depletionMonth: monthIdx,
                    finalValue: 0,
                    isDepleted: true,
                    schedule: schedule,
                    lastMonthlyWithdrawal: lastMonthlyWithdrawal || 0
                })
            }

        }
    }
    return {
        finalValue: portfolioValue,
        lastMonthlyWithdrawal: lastMonthlyWithdrawal,
        schedule: schedule,
        isDepleted: false,
    }

}