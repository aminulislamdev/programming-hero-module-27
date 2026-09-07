import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Profile from './components/Profile'
import Status from './components/Status'
import Student from './components/Student'
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

  return <>
    <User name="Aminul Islam" age={21} />
    <Student name="Aminul Islam" department='Computer Science & Technology' semester={5}/>
    <Status name="Aminul" isActive={true}/>
    <ProductCard name='i phone' price={15000} category='Phone' inStock= {true}></ProductCard>

    <UserList users={users}></UserList>

    <Header></Header>
    <Profile></Profile>
    <Footer></Footer>
  </>
}

export default App
