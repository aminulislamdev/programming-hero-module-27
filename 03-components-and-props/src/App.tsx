import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Profile from './components/Profile'
import ProfileCard from './components/ProfileCard'
import Status from './components/Status'
import Student from './components/Student'
import StudentCard from './components/StudentCard'
import User from './components/User'
import UserList from './components/UserList'

function App() {

  const users = [
    {
      id: 1,
      name: 'Aminul Islam',
      email: 'aminul@example.com',
      age: 21
    },
    {
      id: 2,
      name: 'Rakib Hasan',
      email: 'rakib@example.com',
      age: 25
    },
    {
      id: 3,
      name: 'Sadia Rahman',
      email: 'sadia@example.com',
      age: 23
    }
  ];

  const UserData = {
    name: 'Aminul Islam',
    email: 'aminul.islam@example.com',
    profession: 'Software Engineer',
    location: 'Dhaka, Bangladesh'
  };

  const students = [
    {
      name: "Aminul Islam",
      roll: 101,
      department: "Computer",
      semester: 5,
      isPresent: true,
    },
    {
      name: "Rakib Hasan",
      roll: 102,
      department: "Computer",
      semester: 5,
      isPresent: false,
    },
    {
      name: "Sakib Ahmed",
      roll: 103,
      department: "Computer",
      semester: 5,
      isPresent: true,
    },
  ];

  return <>
    <User name="Aminul Islam" age={21} />
    <Student name="Aminul Islam" department='Computer Science & Technology' semester={5} />
    <Status name="Aminul" isActive={true} />
    <ProductCard name='i phone' price={15000} category='Phone' inStock={true}></ProductCard>

    <UserList users={users}></UserList>
    <ProfileCard user={UserData} />

    <StudentCard Student={students} />


    <Header></Header>
    <Profile></Profile>
    <Footer></Footer>
  </>
}

export default App
