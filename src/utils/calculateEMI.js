export const calculateEMI = (loanAmount, interestRate, tenureYears) => {
    // 1. Parse and Validate Inputs
    const P = Number(loanAmount) || 0;
    const R_annual = Number(interestRate) || 0;
    const N_years = Number(tenureYears) || 0;

    if (P <= 0 || R_annual <= 0 || N_years <= 0) {
        return {
            emi: 0,
            totalInterest: 0,
            totalAmount: 0,
            schedule: []
        };
    }

    // 2. Calculate EMI
    const r = R_annual / 12 / 100; // Monthly interest rate
    const n = N_years * 12; // Tenure in months

    // Formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // 3. Generate Schedule
    let outstandingBalance = P;
    let totalInterest = 0;
    const schedule = [];

    // Starting point (Month 0)
    schedule.push({
        month: 0,
        year: 0,
        balance: Math.round(P),
        interestPaid: 0,
        principalPaid: 0
    });

    for (let month = 1; month <= n; month++) {
        const interestComponent = outstandingBalance * r;
        const principalComponent = emi - interestComponent;

        outstandingBalance -= principalComponent;

        // Handle floating point precision issues near zero
        if (outstandingBalance < 0) outstandingBalance = 0;

        totalInterest += interestComponent;

        schedule.push({
            month: month,
            year: Math.ceil(month / 12),
            balance: Math.round(outstandingBalance),
            interestPaid: Math.round(interestComponent),
            principalPaid: Math.round(principalComponent),
            emi: Math.round(emi)
        });
    }

    return {
        emi: Math.round(emi),
        totalInterest: Math.round(totalInterest),
        totalAmount: Math.round(P + totalInterest),
        schedule: schedule
    };
};
