interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserListProps = {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  return (
    <div>
      {
        users.map((user) =>
        (
          <div key={user.id} >
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Age : {user.age}</p>
          </div>
        ))
      }
    </div>
  )
}
