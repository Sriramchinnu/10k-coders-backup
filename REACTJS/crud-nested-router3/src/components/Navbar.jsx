import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-lg bg-body-tertiary bg-info">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <Link to={'/'} class="navbar-brand">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to='Create' class="nav-link active">Create</Link>
        </li>       
      </ul>
    </div>
  </div>
</nav>  
        </div>
    );
}

export default Navbar;