import Profile from './Profile/Profile';
import user from '../data/user.json';
import Stats from './Stats/Stats';

export const App = () => {
  <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
/>
<Stats
  stats={user.stats}
/>
  </>
}