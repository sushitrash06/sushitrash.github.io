import React from 'react'
import './Project.css'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub';

function Project(){
    const lightBg = true;
    const lightText = false;
    const lightTextDesc = false;
    const imgStart = 'start';
    
       return (
        <div className={lightBg ? 'home__Project':'home__Project darkBg'}
            style={{
                marginTop:'25px'
            }}
        >
            <h1 align='center'
                style={{
                    alignItems:'center',
                    textShadow: '-4px 3px 0 #fc3535, -7px 6px 0 #29ffea',
                    letterSpacing:'1px',
                    fontSize:'70px'
                    }}
            >Projects</h1>
            <br></br>
            <br></br>
            <br></br>
            <div className='container'>
                <div
                    className='row home__Project-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__Project-textwrapper'>
                        <Link to={'//sembako-go.surge.sh'} target='__blank' className='project-links'>
                            <h4 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                fontSize:'30px'
                                }}>
                                    Sembako Go!
                                {/* {headline} */}
                            </h4>
                        </Link>
                            <p 
                                className={
                                    lightTextDesc ? 'home__Project-subtitle'
                                    : 'home__Project-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                fontFamily:'Montserrat, sans-serif, Anton, sans-serif',
                                marginBottom:'25px'
                            }}
                            >
                                "Sembako Go!" is a special food and beverage container
                                web-based whose target users are big grocery traders for
                                selling his groceries, small groceries traders to buy supplies of goods
                                selling in their stalls and people who don't have much time
                                to shop.
                                <br/>
                                This website is built with the MERN stack, namely, MySql, Express.js, React.js, Node.js
                            </p>
                           <h3 className='github-link'><Link to={'//github.com/sushitrash06/sembako-go-backend'} className='icon-github' target='__blank'><GitHubIcon fontSize='large'/></Link></h3> 
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__Project-img-wrapper'>
                            <img src='images/sembako2.png' alt='Vault' className='home__Project-img' style={{marginTop:'50px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div
                    className='row home__Project-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__Project-textwrapper'>
                        <Link to={'//the-reptiles.surge.sh'} target='__blank' className='project-links'>
                            <h4 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                fontSize:'30px'
                                }}>
                                    The Reptiles
                                {/* {headline} */}
                            </h4>
                        </Link>
                            <p 
                                className={
                                    lightTextDesc ? 'home__Project-subtitle'
                                    : 'home__Project-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                fontFamily:'Montserrat, sans-serif, Anton, sans-serif',
                                marginBottom:'25px'
                            }}
                            >
                                the reptiles, is a buying and selling website or web-based marketplace for reptile lovers looking for pets and looking for accessories, tools, and necessities for their pets.
                                <br/>
                                This website is built with the MERN stack, namely, MySql, Express.js, React.js, Node.js
                            </p>
                        </div>
                        <h3 className='github-link'><Link to={'//github.com/sushitrash06/the-reptiles-backend-nodejs'} className='icon-github' target='__blank'><GitHubIcon fontSize='large'/></Link></h3> 
                    </div>
                    <div className='col'>
                        <div className='home__Project-img-wrapper'>
                            <img src='images/thereptil.png' alt='Vault' className='home__Project-img' style={{marginTop:'50px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div
                    className='row home__Project-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__Project-textwrapper'>
                            <h4 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                fontSize:'30px'
                                }}>
                                    Nee-Chan Periode
                                {/* {headline} */}
                            </h4>
                            <p 
                                className={
                                    lightTextDesc ? 'home__Project-subtitle'
                                    : 'home__Project-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                fontFamily:'Montserrat, sans-serif, Anton, sans-serif',
                                marginBottom:'25px'
                            }}
                            >
                                "Nee-chan Period" is an application for calculating the menstrual cycle for women, which later on women can predict when their period will come. This application helps record women's menstruation so that it can be more controlled
                                <br/>
                                This Application is built with the Android Studio, Java and Firebase
                            </p>
                        </div>
                        <h3 className='github-link'><Link to={'//github.com/sushitrash06/nee-chan-periode'} className='icon-github' target='__blank'><GitHubIcon fontSize='large'/></Link></h3> 
                    </div>
                    <div className='col'>
                        <div className='home__Project-img-wrapper'>
                            <img src='images/mens.jpeg' alt='Vault' className='home__Project-img' style={{marginTop:'50px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
