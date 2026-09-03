import './App.css'
import {Welcome} from './component/welcome'
import { Information } from './component/UserCard'
import { DynamicInformation } from './tasks/03-DynamicJSX'

function App() {

  return (
    <>
      <Welcome ></Welcome>
      <Information></Information>
      <DynamicInformation></DynamicInformation>
    </>
  )
}

export default App
