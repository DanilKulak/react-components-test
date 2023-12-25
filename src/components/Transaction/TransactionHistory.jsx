import PropTypes from 'prop-types';
import Transaction from './Transaction';
import { TransactionTable } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => (
  <TransactionTable className="transaction-history">
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
  </TransactionTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
