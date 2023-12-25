import PropTypes from 'prop-types';
import {StatsContainer} from './Stats.styled';
import {StatItem} from './Stats.styled';

const Stats = ({ stats }) => {
    const { followers, views, likes } = stats;

    return (
      <StatsContainer>
        <ul className="stats">
        <StatItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatItem>
      </ul>
      </StatsContainer>
    );
};

Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Stats;