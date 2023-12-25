import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListContainer, FriendListSeparator } from './FriendListContainer.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <ul className="friend-list">
        {friends.map(({ id, ...friend }) => (
          <div key={id}>
            <FriendListItem {...friend} />
            <FriendListSeparator />
          </div>
        ))}
      </ul>
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;