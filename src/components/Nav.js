import React, { Component } from 'react';
import { BookIcon, ChartIcon, HelpIcon, HomeIcon } from '../icons';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render(){
    const iconSize = 23;
    return(
      <nav>
        <Link to="/log" className="nav-item">
          <HomeIcon
            width={iconSize}
            height={iconSize}
            color="#FFF"
          />
          <p>Home</p>
        </Link>
        <Link to="/logs" className="nav-item">
          <BookIcon
            width={iconSize}
            height={iconSize}
            color="#FFF"
          />
          <p>Logs</p>
        </Link>
        <Link to="/charts" className="nav-item">
          <ChartIcon
            width={iconSize}
            height={iconSize}
            color="#FFF"
          />
          <p>Charts</p>
        </Link>
        <Link to="/help" className="nav-item">
          <HelpIcon
            width={iconSize}
            height={iconSize}
            color="#FFF"
          />
          <p>Help</p>
        </Link>
      </nav>
    )
  }
}

export default Nav;
