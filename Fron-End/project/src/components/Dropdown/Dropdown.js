import React from 'react'
import './Dropdown.css';

const Dropdown = () => {
  return (

    <div class="dropdown">
  <button class="dropbtn">Admin Only</button>
  <div class="dropdown-content">
    <a href="/rooms">Rooms</a>
    <a href="/payment">Payment</a>
    <a href="/customer">Customer</a>
    <a href="/employee">Employee</a>
    <a href="/hotel">Hotel</a>

    {/* <a href="#">Link 3</a> */}
  </div>
</div>

  )
    
}

export default Dropdown
