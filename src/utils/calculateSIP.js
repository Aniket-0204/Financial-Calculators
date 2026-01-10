export function calculateSIP(investment, rate, years) {
    // Parse inputs
    const inv = Number(investment) || 0;
    const rat = Number(rate) || 0;
    const yrs = Number(years) || 0;

    // Validate inputs
    if (yrs <= 0 || inv <= 0) {
        return {
            invested: 0,
            returns: 0,
            total: 0
        };
    }
    const monthlyRate = Math.pow((1 + rate / 100), 1 / 12) - 1;
    const months = years * 12;
    const invested = investment * months;

    let futureValue = 0;
    if(rate > 0){
         futureValue = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)* (1 + monthlyRate)
    }else{
        futureValue = invested;
    }

    return {
        invested: Math.round(invested),
        returns: Math.round(futureValue - invested),
        total : Math.round(futureValue)
    };
};