import React from 'react';
import './member.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, ImageUrl} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={ImageUrl} alt="" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - ${price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards