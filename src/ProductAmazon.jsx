import React from 'react'
import Price from './Price';

const ProductAmazon = ({heading,idx}) => {

  let stylesAmazon = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems:'center',
  };
let oldprices=["12,495","11,900","1,599" , "599"];
let newprices=["8,999","9,199","899","278"];
let description=["8,000 DPI","intuitive surface","designed for Ipad pro","wireless"];

  return (

    <div style={stylesAmazon} className="ProductAmazon">
        <h3>{heading}</h3>
        <p>{description[idx]}</p>
        <Price oldprice={oldprices[idx]} newprice={newprices[idx]}/>
      
    </div>
    
  );
}

export default ProductAmazon;
