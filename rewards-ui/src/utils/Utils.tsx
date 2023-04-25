export const MONTHS = [{ key: 0, value: "All" },
{ key: 1, value: "Feb" },
{ key: 2, value: "Mar" },
{ key: 3, value: "Apr" }
]

export const getRewardPoints = (amount: number) => {
    let points = 0;
    let over100 = amount - 100;

    if (over100 > 0) {
        points = 50 + (over100 * 2);
    }
    if (amount >= 50 && amount <= 100) {
        points = amount - 50;
    }
    return points
}
export const pointsPerTransaction = (transactions) => {
    return transactions.map(transaction => {
        let points = getRewardPoints(transaction.price)
        const month = new Date(transaction.dateTime).getMonth();
        return { ...transaction, points, month };
    })
}