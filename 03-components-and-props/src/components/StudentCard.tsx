interface Student {
  name: string ,
  roll: number ,
  department: string ,
  semester: number ,
  isPresent: boolean
}

type StudentData = {
  Student : Student[]
}

export default function StudentCard({Student}:StudentData) {
  return (
    <div>
       {
        Student.map((Students => <div key = {Students.roll}>
          <h2>Name : {Students.name}</h2>
          <p>Roll : {Students.roll}</p>
          <p>Department : {Students.department}</p>
          <p>Semester : {Students.semester}</p>
          <p>Status : {Students.isPresent? "Present" : "Absent"}</p>
        </div> ))
       }
    </div>
  )
}
