import Product from "./Product";

function ProductTab(){

    let options=["high-tech","durable","fast"];
    // let options2={a:"high-tech",b:"durable",c:"fast"};

return (
<>
<Product title="phone" price={30000} features={options} />
<Product title="laptop" price={40000} features={options}/>
<Product title="pen" price={10} features={options}/>


</>
);

}

export default ProductTab;