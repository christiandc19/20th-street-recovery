import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/nav-logo-wh.png'
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



    return (
        <div name='top' className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} alt="20th Street Rehab Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Addiction Treatment<FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/medication-assisted-treatment`}> Medication Assisted Treatment</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/individualize-treatment-alternatives`}> Individualize Treatment Alternatives</NavLink> </li>
                            {/* <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/alcohol`}> Alcohol Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/cocaine`}> Cocaine Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/fentanyl`}> Fentanyl Addiction</NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/heroin`}> Heroin Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/kratom`}> Kratom Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mdma`}> MDMA Addiction</NavLink> </li>
                           <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/meth`}> Meth Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/oxycodone`}> Oxycodone Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescription Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/xanax`}> Xanax Addiction</NavLink> </li> */}
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Detox Programs<FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-heroin`}> Heroin Detox </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-alcohol`}> Alcohol Detox </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-cocaine`}> Cocaine Detox </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-benzodiazepines`}> Benzodiazepines </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-methamphetamine`}> Methamphetamine </NavLink> </li>
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/detox-marijuana`}> Marijuana Detox </NavLink> </li>
                        </ul>
                    </li>


                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Substance Abuse<FiChevronDown /> </Link>
                    <ul className={boxClassSubMenu.join(' ')} id='submenu-item'> 
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/substance-abuse`}> Commonly Abused Drugs</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/prescriptions`}> Prescriptions Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opiate`}> Opiate Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/opioid`}> Opioid Addiction</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/benzodiazepines`}> Benzodiazepines</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/stimulant`}> Stimulant Drugs </NavLink> </li>
                        </ul>

                    </li>


                    {/* <li><Link to='/detox'>Detox</Link> </li> */}
                    <li><Link to='/about-us'>About Us</Link> </li>
                    {/* <li><Link to='/residence'>Residence</Link> </li> */}
                    <li><Link to='/jobs'>Jobs Program</Link> </li>
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
