export function calculateSIP(investment, rate, years, stepUp = 0) {
    // Parse inputs
    const initialInvestment = Number(investment) || 0;
    const annualRate = Number(rate) || 0;
    const annualStepUp = Number(stepUp) || 0;
    const durationYears = Number(years) || 0;

    // Validate inputs
    if (durationYears <= 0 || initialInvestment <= 0) {
        return {
            invested: 0,
            returns: 0,
            total: 0
        };
    }

    const months = durationYears * 12;
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1; // Effective monthly rate

    let currentMonthlyInv = initialInvestment;
    let totalInvested = 0;
    let portfolioValue = 0;

    for (let m = 0; m < months; m++) {
        // Investment happens at start of month 'm'

        // Add investment to portfolio
        portfolioValue += currentMonthlyInv;
        totalInvested += currentMonthlyInv;

        // Apply interest for this month
        portfolioValue *= (1 + monthlyRate);

        // Annual Step-up check: Increase investment amount after every 12 months
        if ((m + 1) % 12 === 0) {
            currentMonthlyInv = currentMonthlyInv * (1 + annualStepUp / 100);
        }
    }

    return {
        invested: Math.round(totalInvested),
        returns: Math.round(portfolioValue - totalInvested),
        total: Math.round(portfolioValue)
    }
};
