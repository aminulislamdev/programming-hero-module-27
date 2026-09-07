export default function Status(props: { name: string, isActive: boolean }) {
  return (
    <div>
      {props.name} is {props.isActive ? "Active" : "Offline"}
    </div>
  )
}
