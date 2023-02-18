import React from 'react'
import UseFetch from '../../../Usefetch/UseFetch'
import "./HomeFeaturedProperty.scss"
function HomeFeaturedProperty() {
    const { data, loading } = UseFetch("/hotels?featured=true&limit=3")
    return (
        <section className='homeFeaturedProperty'>
            <div className='HomeFeaturedProperty_width'>
                {loading ? "loading" : <>
                    {data.map((item) => (
                        <div className='property_box' key={item._id}>
                            <div className='property_img_box'>
                                <img src={item.photos[0]} alt="hotel"/>
                            </div>
                            <div className='property_button_box'>
                                    <button>{item.cheapestPrice}$</button>
                                <button className='Detailbutton'>Detail</button>
                            </div>
                            <div className='property_title'>
                                <h3>{item.name}</h3>
                                <h4>City:  {item.city}</h4>
                                <p>{item.title}</p>
                            </div>
                        </div>
                        ))}
                </>}
            </div>
        </section>
    )
}

export default HomeFeaturedProperty