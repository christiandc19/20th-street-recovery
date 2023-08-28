import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} alt="33rd Street Detox Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="col">
                        <h3>Company</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mission'>
                            <p>Our Mission</p>
                        </Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/team'><p>Our Team</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Testimonials</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>Insurance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/contact'><p>Contact</p></Link>
                        </LinkRoll>
                    </div>


                    <div className="col">
                        <h3>SERVICES</h3>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/method'><p>Programs</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse'><p>Substance Abuse Program</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/jobs'><p>Employment Assistance</p></Link>
                        </LinkRoll>
                    </div>

                </div>
                <p className='copyright'><p>&copy; 20th Street Detox. All rights reserved.</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
