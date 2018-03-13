export default (expenses) => (
    expenses.map(x => x.amount).reduce((acc, cur) => acc + cur,0)
);

