import React from 'react'
import "./HomePeart.scss"
function HomePeart() {
    return (
        <section className='homepeart'>
            <div className='homepeart_width'>
                <div className='homepeart_img'>
                    <img src='https://mediacity.co.in/riorelax/static/media/feature.19e9aa21add79eabff7d.png' />
                </div>
                <div className='homepeart_text'>
                    <div className='homepeart_title'>
                        <p>Luxury Hotel & Resort</p>
                        <h2>Pearl Of The Adriatic.</h2>
                    </div>
                    <div className='homepeart_title_info'>
                        <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus,
                            ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor.
                            Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                        <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at,
                            egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis.
                            In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                        <button>Diskover More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePeart