type Tprops = {
  name: string,
  department: string,
  semester: number
}

export default function Student(props: Tprops) {
  return (
    <div >
      <p>Name : {props.name}</p>
      <p>Department : {props.department}</p>
      <p>Semester : {props.semester}th</p>
    </div>
  )
}
