import './App.css'
import Student from './components/Student'
import User from './components/User'

function App() {
  return <>
    <User name="Aminul Islam" age={21} />
    <Student name="Aminul Islam" department='Computer Science & Technology' semester={5}/>
  </>
}

export default App
