export default function MiniProfile() {
  const name = "Aminul Islam";
  const profileTitle = "Frontend Developer";
  const age = 21;
  const location = "Rajshahi, Bangladesh";
  const skills = "HTML, CSS, JavaScript, React";
  const studentStatus = true;
  const currentLearning = "React & TypeScript";

  return (
    <div className="profile-card">
      <h3>Task 7</h3>
      <h2>Developer Profile</h2>

      <h3>Name: {name}</h3>

      <p>
        <strong>Profile:</strong> {profileTitle}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <p>
        <strong>Skills:</strong> {skills}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {studentStatus ? "Student" : "Not a Student"}
      </p>

      <p>
        <strong>Currently Learning:</strong> {currentLearning}
      </p>
    </div>
  );
}

