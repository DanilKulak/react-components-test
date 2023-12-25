import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionHistory.styled';

const Transaction = ({ type, amount, currency }) => (
  <TransactionRow>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </TransactionRow>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
