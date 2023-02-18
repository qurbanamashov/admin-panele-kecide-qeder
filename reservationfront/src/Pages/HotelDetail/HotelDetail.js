import { differenceInDays, set } from 'date-fns'
import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { SearchContext } from '../../Context/SearchContext'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import UseFetch from '../../Usefetch/UseFetch'
import "./HotelDetail.scss"
import Reserve from './Reserve/Reserve'
function HotelDetail() {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const { user } = useContext(AuthContext)
    const { data, loading, error, reFetch } = UseFetch(`/hotels/find/${id}`)
    const [sliderNamber, setSliderNamber] = useState(0)
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const { date, option } = useContext(SearchContext)
    console.log(option.room);

    const date1 = new Date(date[0].endDate); // the later date
    const date2 = new Date(date[0].startDate); // the earlier date

    const days = differenceInDays(date1, date2);


    const hendleOpen = (i) => {
        setSliderNamber(i)
        setOpen(true)
    }
    const handleMove = (deyer) => {
        let newsliderNamber;
        if (deyer === "l") {
            newsliderNamber = sliderNamber === 0 ? 4 : sliderNamber - 1
        } else {
            newsliderNamber = sliderNamber === 4 ? 0 : sliderNamber + 1
        }
        setSliderNamber(newsliderNamber)
    }
    const hendleclick = ()=>{
        if(user){
            setOpenModal(true)
        }else{
            navigate("/login")
        }
    }
    return (
        <>
            <Navbar />
            {loading ? "loading" : <>
                {open &&
                    <div className='Detail_slider'>
                        <i className="fa-solid fa-xmark" onClick={() => setOpen(false)}></i>
                        <div className='Silder_flex'>
                            <i className="fa-solid fa-circle-arrow-left" onClick={() => handleMove("L")}></i>
                            <img src={data.photos[sliderNamber]} />
                            <i className="fa-solid fa-circle-arrow-right" onClick={() => handleMove("R")}></i>
                        </div>
                    </div>
                }
                <section className='DetailPage'>
                    <div className='dateil_width'>
                        <div className='detail_title'>
                            <div className='detail_title_flex'>
                            <h1>{data.name}</h1>
                            <button onClick={hendleclick}>Rserve</button>
                            </div>
                            
                            <div className='detail_address'>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>{data.address}</span>
                            </div>
                            <h2>${data.copyWithin}</h2>
                            <div className='Detail_img'>
                                {data.photos?.map((photo, i) => (
                                    <div className='HotelImage_detail'>
                                        <img onClick={() => hendleOpen(i)} src={photo} alt="image" />
                                    </div>
                                ))
                                }
                            </div>
                            <div className='detail_desc'>
                                <div className='detail_desc_title'>
                                    <h3>{data.title}</h3>
                                    <p>{data.decs}</p>
                                </div>
                                <div className='detail_desc_price'>
                                    <h2>Perfect for a {days}-night stay!</h2>
                                    <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
                                    <h3><b>${days * data.cheapestPrice * option.room}</b>  "{days} nights"</h3>
                                    <button onClick={hendleclick}> reservation or book now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>}
            <Footer />
            {openModal &&<Reserve setOpen={setOpenModal} HotelId ={id}/>}
        </>
    )
}

export default HotelDetail