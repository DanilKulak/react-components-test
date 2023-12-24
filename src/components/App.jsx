import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import FriendList from './Friends/FriendListContainer';
import friends from '../data/friends.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../data/transaction.json';

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
      <Statistics title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;




