import './App.css'
import {Welcome} from './component/welcome'
import { Information } from './component/UserCard'
import { DynamicInformation } from './tasks/03-DynamicJSX'
import { Product } from './component/ProductCard'
import { JSXRules } from './tasks/JSXRules'

function App() {

  return (
    <>
      <Welcome ></Welcome>
      <Information></Information>
      <DynamicInformation></DynamicInformation>
      <Product></Product>
      <JSXRules></JSXRules>
    </>
  )
}

export default App
