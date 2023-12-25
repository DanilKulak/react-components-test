import PropTypes from 'prop-types';
import { StatisticItemContainer } from './Statistics.styled';

const StatisticItem = ({ label, percentage, color }) => {
  return (
    <StatisticItemContainer style={{ backgroundColor: color }}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </StatisticItemContainer>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatisticItem;