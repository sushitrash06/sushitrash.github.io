import React from 'react'
import './Banner.css'
function Banner({   
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart
}){

    return (
        <div className={lightBg ? 'home__banner':'home__banner darkBg'}>
            <div className='container'>
                <div
                    className='row home__banner-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__banner-textwrapper'>
                            <div className='top-line' style={{fontFamily:'Roboto Mono, monospace', fontSize:'25px'}}>{topLine}</div>
                            <h1 className={lightText ? 'heading':'heading dark'} style={{fontFamily:'Roboto Mono, monospace'}}>
                                {headline}
                            </h1>
                            <p 
                                className={
                                    lightTextDesc ? 'home__banner-subtitle'
                                    : 'home__banner-subtile dark'
                                }
                                style={{color:"#ff9ea1"}}
                            >
                                {description
                                }
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='hero__banner-img-wrapper'>
                            <img src={img} alt={alt} className='home__banner-img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
