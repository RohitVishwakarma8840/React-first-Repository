import "./Product.css";

function Product({title,price}){
    // console.log(props);
    // console.log(props.title);
return (
<>
<div className="Product">
<h2>{title}</h2>
<h3>price : {price/2}</h3>

</div>
</>
);
}

export default Product;