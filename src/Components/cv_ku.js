import React from 'react'
import '../Components/Button.css'

function cv_ku() {
    const lightBg = false;
    return (
        <div className={lightBg ? 'home__resume':'home__profile darkBg'}>
        <div className='container'
            style={{
                height: 'auto',
                position:'relative',
            }}
        >
            <br/>
            <br/>
            <h1 align='center'
                style={{
                    fontSize:'3rem', 
                    marginTop:'25px',
                    alignItems:'center',
                    textShadow: '-4px 3px 0 #fc3535, -7px 6px 0 #29ffea',
                    letterSpacing:'1px',
                    color:'#f0e4e4'
                }}
            >Wanna know about me?</h1>
            <div className='center'>
            <button className='button-download' align='center'>Click Here for see my resume!</button>
            </div>
        </div>
    </div>
    )
}

export default cv_ku
