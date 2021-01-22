import React from 'react'
import './Profil.css'


function Profile(){
    const lightBg = true;
    const lightText = false;
    const lightTextDesc = false;
    const imgStart = 'start';
    
       return (
        <div className={lightBg ? 'home__profile':'home__profile darkBg'}
            style={{
                marginTop:'25px'
            }}
        >
            <div className='container'>
                <div
                    className='row home__profile-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__profile-textwrapper'>
                            <h1 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                textShadow: '-4px 3px 0 #fc3535, -7px 6px 0 #29ffea',
                                letterSpacing:'1px'
                                }}>
                                {/* {headline} */} About Me
                            </h1>
                            <p 
                                className={
                                    lightTextDesc ? 'home__profile-subtitle'
                                    : 'home__profile-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                fontFamily:'Montserrat, sans-serif, Anton, sans-serif'
                            }}
                            >
                                I'm a bachelor of Computer Science from Gunadarma University which one of the reputable universities in Indonesia who eager to learn new things and Enthusiast about the whole technology which exists since I was in elementary school. I am also interested in web technology, graphic design, and databases. Currently, I love playing around with HTML, CSS, JS, and Databases like SQL, Oracle and sometimes I take side projects for increasing my experience and learn new various things.
                                {/* {description} */}
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='hero__profile-img-wrapper'>
                            <img src='images/azka.png' alt='Vault' className='home__profile-img' style={{marginTop:'50px', marginLeft:'60px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
