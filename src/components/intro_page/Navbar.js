import React from "react";

import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
           <li><h3>Developers_Adda</h3>

           {/* <span><i class="fab fa-adn"></i></span> */}

  
           
           </li>
          <li className="nav__corner">
            <p>Signup</p>
          </li>

          <li className="nav__corner">
            <p>Login</p>
          </li>
        </ul>
      </nav>

      
    </div>
  );
}

export default Navbar;
