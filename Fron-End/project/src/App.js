import './components/Style.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './Responsive.css';


import Rooms from './components/Rooms/Rooms.js';
import RoomList from './components/Room/RoomList/RoomList.js';
import RoomForm from './components/Room/RoomForm/RoomForm.js';


import Payment from './components/Payments/Payment.js';
import PaymentForm from './components/Payment/PaymentForm/PaymentForm.js';
import PaymentList from './components/Payment/PaymentList/PaymentList.js';


import Customer from './components/Customers/Customers.js';
import CustomerForm from './components/Customer/CustomerForm/CustomerForm.js';
import CustomerList from './components/Customer/CustomerList/CustomerList.js';


import Employees from './components/Employees/Employees.js';
import EmployeeFrom from './components/Employee/EmployeeForm/EmployeeForm.js';
import EmployeeList from './components/Employee/EmployeeList/EmployeeList.js';


import Hotels from './components/Hotels/Hotels.js';
import HotelForm from './components/Hotel/HotelForm/HotelForm.js';
import HotelList from './components/Hotel/HotelList/HotelList.js';
import SignIn from './components/signin/signin.js';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          {/* ----------Room------------- */}
          <Route path="/rooms" element={<Rooms/>}/>
          <Route exact path="/rooms" element={<RoomList />} />
          <Route exact path="/rooms/add" element={<RoomForm />} />
          <Route exact path="/roomslist" element={<RoomList/>}/>
        <Route exact path="/rooms/edit/:id" element={<RoomForm />} />

        {/* -----------Payment--------------- */}
          <Route path="/payment" element={<Payment />} />
          <Route exact path="/payments/add" element={<PaymentForm />} />
          <Route exact path="/paymentlist" element={<PaymentList />} />
          <Route exact path="/payments/edit/:id" element={<PaymentForm/>}/>

          {/* ----------Customer------------- */}
          <Route path='/customer' element={<Customer/>}/>
          <Route exact path='/customer/add' element={<CustomerForm/>}/>
          <Route exact path='/customerlist' element={<CustomerList/>}/>
          <Route exact path="/customer/edit/:id" element={<CustomerForm/>}/>
          
          {/* ---------------Employee----------------- */}
          <Route path='/employee' element={<Employees/>}/>
          <Route exact path='/employee/add' element={<EmployeeFrom/>}/>
          <Route exact path='/employeelist' element={<EmployeeList/>}/>
          <Route exact path='/employee/edit/:id' element={<EmployeeFrom/>}/>

          {/* ------------------Hotel----------------- */}
          <Route path='/hotel' element={<Hotels/>}/>
          <Route exact path='/hotel/add' element={<HotelForm/>}/>
          <Route exact path='/hotellist' element={<HotelList/>}/>
          <Route exact path='/hotel/edit/:id' element={<HotelForm/>}/>

          {/* ---------------------SignIn----------------------- */}
          <Route exact path="/signin" element={<SignIn />} />

        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
