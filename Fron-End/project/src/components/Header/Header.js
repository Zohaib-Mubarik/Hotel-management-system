import DropDown from '../Dropdown/Dropdown.js';
import { eraseCookie, getCookie } from '../../APIs/UserServices.js';
import React, { useEffect, useState } from 'react';

export default function Header()     {

    
  const [showSignout, setShowSignout] = useState(false);


  useEffect(() => {
    const c = getCookie("token");
    if (c) {
      setShowSignout(true);
    }
  }, [])

  return (


    <header>
    <nav>
        <div class="logo">
            <h1>
                <a href="/">
                    <img src="images/logo.png" height="40px" alt="Urducation" />
                </a>
            </h1>
        </div>
        <div class="h_right">
            <ul class="menu">
                <li class="active1">
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
                <li>
                    <a href="#">Rooms</a>
                </li>
                <li>
                    <a href="#">blog</a>
                </li>
                <li>
                    <a href="#">contact us</a>
                </li>

                {showSignout &&
                <li> <DropDown></DropDown> </li>
                }
                
               


               


                 {!showSignout &&
                <div class="login-signup">
                    <button><li>
                        <a href="/signin">Signin</a>
                        </li></button>
                        <button><li>
                        <a href="">SignUp</a>
                        </li></button>
                </div>
                    } 




                {showSignout &&
                <div class="login-signup">
                    <button><li>
                        <a href="/" onClick={ ()=> {
eraseCookie("token");
console.log("I am erasing cookies");
}}  >Sign Out</a>
                        </li></button>
                </div>
                }




                
            </ul>
        </div>
    
        
    </nav>
</header>
  )
}
