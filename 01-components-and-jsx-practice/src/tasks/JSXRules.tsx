export function JSXRules() {
  const name = "Aminul Islam";
  const age = 21;
  const skill = "React";

  return (
    
    <div className="profile-card">
      <h3>Task 6</h3>
      <h2>JSX Rules Practice</h2>

      <p>My name is {name}</p>

      <p>My age is {age}</p>

      <p>I am learning {skill}</p>

      <p>{age >= 18 ? "I am an adult" : "I am a minor"}</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
  );
}