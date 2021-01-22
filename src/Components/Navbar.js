import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'
function Navbar() {
    const [click,setClick] =useState(false);
    const [button,setButton]=useState(true);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 980){
            setButton(false);
        }else{
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return (
          window.removeEventListener('resize', showButton)
        )
      }, []);
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}
                        style={{
                            fontFamily:'Anton, sans-serif'
                        }}
                    >
                        AZKAXISM
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/desain' className='nav-links'onClick={closeMobileMenu}>Design</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Projects' className='nav-links'onClick={closeMobileMenu}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
