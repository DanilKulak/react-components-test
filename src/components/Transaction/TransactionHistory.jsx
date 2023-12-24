import Transaction from './Transaction';

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, ...transaction }) => (
        <Transaction key={id} {...transaction} />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
