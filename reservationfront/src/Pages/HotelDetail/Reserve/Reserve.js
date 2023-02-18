import React from 'react'

           
function Reserve({setOpen, hotelId}) {
  return (
    <section className='reserve'>
        <div className='reserve_width'>
        <i class="fa-solid fa-x" onClick={()=>setOpen(false)}></i>
        </div>
    </section>
  )
}

export default Reserve