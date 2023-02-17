import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
		<header>
  <div class="logo">
    <Link to="/">
    <h3>Anonymous.mis</h3>
    </Link>
   
  </div>
  <nav>
    <ul>
    <Link to="/about"> <li>About</li> </Link> 
    <Link to="/new"> <li>New Message</li> </Link> 
    <Link> <li>Logout</li> </Link> 
    </ul>
  </nav>
</header>
    </div>
  );
}

export default Header;
