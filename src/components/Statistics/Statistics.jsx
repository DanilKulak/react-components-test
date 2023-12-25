import StatisticItem from "./StatisticsItem";
import PropTypes from 'prop-types';
import {StatisticContainer, getColorByIndex} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
    return (
      <StatisticContainer>
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }, index) => (
            <StatisticItem
              key={id}
              label={label}
              percentage={percentage}
              color={getColorByIndex(index)}
            />
          ))}
        </ul>
      </StatisticContainer>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Statistics;
