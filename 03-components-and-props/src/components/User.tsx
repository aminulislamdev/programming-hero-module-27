function User({ name, age }: { name: string; age: number }) {
  return <>
    <h3>Name : {name} </h3>
    <p>Age : {age} </p> 
  </>
}

export default User;