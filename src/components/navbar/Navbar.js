import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
// import logo from '../../assets/nav-logo.png'
import {FiChevronDown } from "react-icons/fi";

import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }




    const [isMenu2, setisMenu2] = useState(false);


    const toggleClass2 = () => {
        setisMenu2(isMenu === false ? true : false);
    };

    let boxClass2 = ["main-menu menu-right menuq1"];
    if(isMenu2) {
        boxClass2.push('menuq2');
    }else{
        boxClass2.push('');
    }

    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
      
    const toggleSubmenu2 = () => {
      setMenuSubMenu2(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }










    return (
        <div name='top' className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                        <h1>20TH STREET RECOVERY</h1>
                    {/* <img src={logo} width="100px" height="90px" alt="Palm Springs Rehab Logo" loading="lazy"/> */}
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Addiction <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine </NavLink> </li>
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/substance-abuse-op`}> Fentanyl </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/mental-health-php`}> Heroin</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-iop`}> Kratom </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-op`}> MDMA </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-op`}> Meth </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Jobs`}> Opiate </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Jobs`}> Opioide </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Jobs`}> Oxydone </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Jobs`}> Prescription </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mental-health-op`}> Xanax </NavLink> </li> */}
                        </ul>
                    </li>



                    <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Mental Health <FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass2} activeClassName='is-active'  to={`/acute-stress-disorder`}> Acute Stress Disorder </NavLink> </li>
                            {/* <li> <NavLink onClick={toggleClass2} activeClassName='is-active'  to={`/substance-abuse-php`}> ADHD</NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/substance-abuse-iop`}> Anger Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/substance-abuse-op`}> Anxiety Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass2} activeClassName='is-active'  to={`/mental-health`}> Bipolar Disorder </NavLink> </li>
                            <li> <NavLink onClick={toggleClass2} activeClassName='is-active'  to={`/mental-health-php`}> Depression </NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/mental-health-iop`}> Panic Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/mental-health-op`}> PTSD </NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/mental-health-op`}> Schizoaffective Disorder </NavLink> </li>
                            <li><NavLink onClick={toggleClass2} activeClassName='is-active' to={`/mental-health-op`}> Schizophrenia </NavLink> </li> */}
                        </ul>
                    </li>



                    <li><Link to='/treatment'>Treatment</Link> </li>
                    <li><Link to='/mission'>Our Mission</Link> </li>
                    {/* <li><Link to='/about-us'>About Us</Link> </li> */}
                    <li><Link to='/insurance'>Insurance</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar