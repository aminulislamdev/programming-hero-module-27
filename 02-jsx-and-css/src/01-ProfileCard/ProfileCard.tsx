import "./ProfileCard.css";

export function Profile() {
  return (
    <div className="card">
      <div className="left">
        <h2>Name: Aminul Islam</h2>

        <p><strong>Profession:</strong> Future Full Stack Developer</p>

        <p>
          <strong>Short bio:</strong> Future Full Stack Developer <br /> React & TypeScript
          Enthusiast
        </p>

        <button>Follow</button>
      </div>

      <p className="right">Image</p>
    </div>
  );
}