export interface OneUsers {
  name: string;
  email: string;
  profession: string;
  location: string;
}

// ProfileCard Component
function ProfileCard({ user }: { user: OneUsers }) {
  return (
    <div className="profile-card">
      <h3>Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Profession: {user.profession}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}

export default ProfileCard;