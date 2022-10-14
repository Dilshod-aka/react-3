import React from "react";
import RightElements from "./RightElement";

const index = () => {
    return (
        <>
           {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}  
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}
    {/* <!-- Right elements --> */}  
    <RightElements/>
    {/* <!-- Right elements --> */}

  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
        </>
    );
};

export default index;  