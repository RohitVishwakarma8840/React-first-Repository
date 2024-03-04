import React from 'react'

const Price = ({oldprice,newprice}) => {
  return (
    <>
    <div>
      <span>{oldprice}</span>
      &nbsp;&nbsp;&nbsp;
      <span>{newprice}</span>

    </div>
    </>
  )
}

export default Price
