import React from 'react'

const Booking = () => {
  return (

<div className="booking_ocline">
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <div className="book_room">
          <h1>Book a Room Online</h1>
          <form className="book_now">
            <div className="row">
              <div className="col-md-12">
                <span>Arrival</span>
                {/* <img className="date_cua" src="images/date.png" /> */}
                <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
              </div>
              <div className="col-md-12">
                <span>Departure</span>
                {/* <img className="date_cua" src="images/date.png" /> */}
                <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
              </div>
              <div className="col-md-12">
                <button className="book_btn">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



//    <div className="booking_ocline">
//   <div className="container">
//     <div className="row">
//       <div className="col-md-5">
//         <div className="book_room">
//           <h1>Book a Room Online</h1>
//           <form className="book_now">
//             <div className="row">
//               <div className="col-md-12">
//                 <span>Arrival</span>
//                 <img className="date_cua" src="images/date.png" />
//                 <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
//               </div>
//               <div className="col-md-12">
//                 <span>Departure</span>
//                 <img className="date_cua" src="images/date.png" />
//                 <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
//               </div>
//               <div className="col-md-12">
//                 <button className="book_btn">Book Now</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


  )
}

export default Booking
