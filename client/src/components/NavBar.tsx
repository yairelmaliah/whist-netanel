import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{width : "100%" , display: "flex" ,  justifyContent: "space-around" , backgroundColor: "black"}}>
      <div>
        <Link to='/admin'>admin</Link>
      </div>

      <div>
        <Link to='/home'>home</Link>
      </div>

      <div>
        <Link to='/stats'>stats</Link>
      </div>
    </nav>
  );
};

export default NavBar;
