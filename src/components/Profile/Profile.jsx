import { ProfileContainer } from "./Profile.styled";
const Profile = ({username, tag, location, avatar}) => {
return (
  <ProfileContainer>
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
</ProfileContainer>
)
}

export default Profile;