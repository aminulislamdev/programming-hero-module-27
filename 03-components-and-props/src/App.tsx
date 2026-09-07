import './App.css'
import Status from './components/Status'
import Student from './components/Student'
import User from './components/User'

function App() {
  return <>
    <User name="Aminul Islam" age={21} />
    <Student name="Aminul Islam" department='Computer Science & Technology' semester={5}/>
    <Status name="Aminul" isActive={true}/>
  </>
}

export default App
