import "./Product.css";

function Product({title,price,features}){
    // console.log(features);
    // console.log(props);
    // console.log(props.title);
 
//  let isDiscount= price > 30000 ? "Discount is 5% " :"";
const list=features.map((feature)=><li>{feature}</li>);
 
let styles = { backgroundColor: price > 30000 ? "blue" : "white" };



return (
<>
<div className="Product" style={styles}>
<h2>{title}</h2>
<h3>price : {(price/2)*2}</h3>
<p>{list}</p>
{/* <p>{isDiscount}</p> */}
{price > 30000 ? <p>"Discount of 5%"</p> : <a href="/">Get Discount </a> }

{/* <p>{features}</p> */}
{/* <p>{features2.a}</p> */}
{/* <p>{features2.b}</p> */}

</div>
</>
);
}

export default Product;