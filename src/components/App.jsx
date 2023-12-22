import user from './user.json'
import Profile from "./Profile/Profile";
import ReactDOM from 'react-dom'

export const App = () => {

  ReactDOM.render(
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />,
    document.getElementById('root')
  );
}
