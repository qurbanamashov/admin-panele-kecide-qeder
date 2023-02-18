import React from 'react'
import { Link } from 'react-router-dom'
import "./ListCart.scss"
function ListCart({ item }) {
    return (
        <div className='property_box'>
            <div className='property_img_box'>
                <img src={item.photos[0]} alt="hotel" />
            </div>
            <div className='property_button_box'>
                <Link to={`/detail/${item._id}`}><button className='Detailbutton'>Detail</button> </Link>
                <button>{item.cheapestPrice}$</button>
            </div>
            <div className='property_title'>
                <h3>{item.name}</h3>
                <h4>City:  {item.city}</h4>
                <p>{item.title}</p>
            </div>
        </div>

    )
}

export default ListCart