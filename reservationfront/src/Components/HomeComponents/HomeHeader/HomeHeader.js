import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import "./HomeHeader.scss"
function HomeHeader() {
    const { user } = useContext(AuthContext)

    return (
            <header className='homeHeader'>
                <div className="homeHeader_width">
                    <div className='homeHeader_info'>
                        <div className='homeHeader_info_text'>
                            <h1>A lifetime of discounts? It's Genius.</h1>
                            <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
                            {! user && <button>Register</button>}
                        </div>
                    </div>
                </div>
            </header>
    )
}
export default HomeHeader