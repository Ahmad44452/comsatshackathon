import { useState } from 'react';
import { NavHashLink } from "react-router-hash-link";
import useScrollPosition from "../../hooks/useScrollPosition";
import '../../styles/navbar.scss';


const Navbar = () => {

  const scrollPosition = useScrollPosition();

  const [isNavbarShowing, setNavbarShowing] = useState(false);

  return (
    <nav className={`navbar ${scrollPosition > 0 ? 'navbar__scrolled' : ''}`}>
      <div className="navbar__left">
        <NavHashLink smooth replace className="navbar__left--link" to={'/#header'}>
          <img className="navbar__left--img" src='./images/dsclogo.png' alt='Navbar Logo' />
        </NavHashLink>
      </div>
      <div className="navbar__right">
        <div className={`navbar__links ${isNavbarShowing ? 'navbar__links--show' : ''}`}>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#about'} onClick={() => setNavbarShowing(false)}>
            <span>About</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#team'} onClick={() => setNavbarShowing(false)}>
            <span>Team</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#events'} onClick={() => setNavbarShowing(false)}>
            <span>Events</span>
          </NavHashLink>
          <NavHashLink smooth replace className="navbar__right--link" to={'/#sponsors'} onClick={() => setNavbarShowing(false)}>
            <span>Sponsors</span>
          </NavHashLink>
        </div>

        <div className={`navbar__ham ${isNavbarShowing ? 'navbar__ham--show' : ''}`} onClick={() => setNavbarShowing(prev => !prev)}>
          <div className='navbar__ham--icon'>&nbsp;</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;