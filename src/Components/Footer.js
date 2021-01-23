import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './Profil.css'
import {Link} from 'react-router-dom'

function Footer() {
    // const lightBg = false;
    return ( 
        <footer className='footer-bawah'>
            <br/>
            <br/>
            <div className='judul-footer'>
                <h2 align='center'>Contact</h2>
            <br/>
            </div>
            <div>
                <ul className='contact-flex'>
                    <li className='contact-flex-item'><Link to={'//github.com/sushitrash06'} target='_blank' className='footer-link'><GitHubIcon fontSize='large'/></Link></li>
                    <li className='contact-flex-item'><Link to={'//www.linkedin.com/in/azka-andya-safira-972206b7/'} target='_blank' className='footer-link'><LinkedInIcon fontSize='large'/></Link></li>
                    <li className='contact-flex-item'><a href={'mailto:azkaandyaaa@gmail.com'} target='_blank' className='footer-link'><EmailIcon fontSize='large'/></a></li>
                </ul>
            </div>
            <br/>
            <br/>
            <div align= 'center' className='copy-right-footer'>
                <h4 fontSize='medium'>Copyright © by Azka Andya Safira 2021</h4>
            </div>
            <br/>
        </footer>
    )
}

export default Footer;
