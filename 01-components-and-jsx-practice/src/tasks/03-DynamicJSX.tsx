export function DynamicInformation() {
  const name = "Aminul Islam Mahi"
  const age = 21
  const skill = "React"
  const isStudent = false
  return (
    <>
      <h2>Task 3</h2>
      <p>{`My name is ${name}.I'm ${age} years old.I'm currently learning ${skill}.I am a ${isStudent ? "student" : "developer"}`}</p>
    </>
  )
}