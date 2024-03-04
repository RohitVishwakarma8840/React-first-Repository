import "./App.css"
import Title from "./Title.jsx"
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"
import MsgBox from "./MsgBox.jsx"
import ProductAmazon from "./ProductAmazon.jsx"
import Button from "./Button.jsx"

function Description(){

  return <h3>I am the description here </h3>

}

function App() {
 
  return (
  <>
  {/* <Title/> */}
  {/* <Description/> this description is made up above  */}
<Button/>
  <ProductAmazon heading="Logitech MX Master" idx={0}/>
  <ProductAmazon heading="Apple pencil (2nd Gen)" idx={1}/>
  <ProductAmazon heading="Zebronics Zeb-transformer" idx={2}/>
  <ProductAmazon heading="Petronics Toad 23" idx={3}/>

  <ProductTab/>
 <MsgBox name="Rohit" textcolor="green" />
 <MsgBox name="Enterpreneur" textcolor="pink" />


  {/* <Title/>
  <Description/>
  <h1>Hello  world !</h1>
  <button>Hello world !</button> */}
  </>
  )
}

export default App
