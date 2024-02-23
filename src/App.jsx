import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"

function Description(){

  return <h3>I am the description here </h3>

}

function App() {

  return (
  <>
  <Title/>
  <Description/>
  <ProductTab/>
 

  {/* <Title/>
  <Description/>
  <h1>Hello  world !</h1>
  <button>Hello world !</button> */}
  </>
  )
}

export default App
