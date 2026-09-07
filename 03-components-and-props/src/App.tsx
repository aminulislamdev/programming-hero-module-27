import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Profile from './components/Profile'
import Status from './components/Status'
import Student from './components/Student'
import User from './components/User'

function App() {
  return <>
    <User name="Aminul Islam" age={21} />
    <Student name="Aminul Islam" department='Computer Science & Technology' semester={5}/>
    <Status name="Aminul" isActive={true}/>
    <ProductCard name='i phone' price={15000} category='Phone' inStock= {true}></ProductCard>

    <Header></Header>
    <Profile></Profile>
    <Footer></Footer>
  </>
}

export default App
