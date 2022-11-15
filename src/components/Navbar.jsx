import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Group.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ showModal }) => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <span className="nav-links">
                    <li className='nav-item'> <Link to="/">Home</Link></li>
                    <li className='nav-item'> <Link to="places">place to stay</Link></li>
                    <li className='nav-item'> <Link to="/">NFTs</Link></li>
                    <li className='nav-item'> <Link to="/">Community</Link></li>
                </span>

                <button onClick={showModal} className="walletbtn">Connect Wallet</button>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#fff' }} />) : (<FaBars size={30} style={{ color: '#000' }} />)}
            </div>


        </div>
    )
}

export default Navbar