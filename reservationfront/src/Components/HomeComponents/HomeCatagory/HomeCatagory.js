import React from 'react'
import UseFetch from '../../../Usefetch/UseFetch'
import "./HomeCatagory.scss"
function HomeCatagory() {
    const { data, loading } = UseFetch("/hotels/countByType")
    const image = [
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
        "https://noagent.ge/wp-content/uploads/2022/09/apartment-scaled.jpeg",
        "https://www.travelandleisure.com/thmb/Pl8imCC0MoTISdRg3C6FRaPMwRA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cala-de-mar-resort-05-MXRESWB22-18727ee8648a4f248e78697f718d3702.jpg",
        "https://www.hepsivilla.com/upload/catalog/2385/1280/1-villa-star-776.webp",
        "https://media.cabin-rentals-of-georgia.com/sites/default/files/cabin_images/11.23.2019.30_0_0_0.jpg"
    ]
    return (
        <section className='home_catagory'>
            <div className='home_catagory_text'>
                <h2>The Hotel</h2>
                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
            </div>
            <div className='home_catagory_width'>
                {loading ? ("loading") : (<>
                    {data && image.map((img, i) =>
                            <div className='catagory_box' key={i}>
                                <div className='catagory_img_box'>
                                    <img src={img} alt="catagory" />
                                </div>
                                <div className='catagory_box_text'>
                                    <h3>{data[i]?.type}</h3>
                                    <p>{data[i]?.count} {data[i]?.type}</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                    )}
                </>)}
            </div>
        </section>
    )
}

export default HomeCatagory