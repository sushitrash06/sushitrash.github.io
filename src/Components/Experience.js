import React from 'react'
import '../Components/Profil.css'
function Experience() {
    const lightBg = false;
    const lightText = true;
    const lightTextDesc = true;
    const imgStart = '';
    return (
        <div>
            <div className={lightBg ? 'home__experience':'home__experience darkBg'}
            style={{
                marginTop:'10px',
            }}
        >
            <br/>
            <div className='container'>
                <div
                    className='row home__experience-row'
                    style={{
                        display:'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' :'row'
                    }}
                >
                    <div className='col'>
                        <div className='home__experience-textwrapper'>
                            <h1 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                marginTop :'10px',
                                letterSpacing:'1px',
                                }}>
                                {/* {headline} */} Education
                            </h1>
                            <br/>
                            <br/>
                            <div className='lulusan'>
                            <h4>Gunadarma University</h4>
                                <h4>Faculty of Computer Science | 2016 - 2021</h4>
                            <br/>
                            </div>
                            <p 
                                className={
                                    lightTextDesc ? 'home__experience-subtitle'
                                    : 'home__experience-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                color : '#dbd7d7',
                                fontFamily : 'Fira Sans Condensed, sans-serif'
                            }}
                            >
                                Bachelor's Degree of Information System
                                <br/>
                                Thesis :
                                <br/>
                                Associate Degree : 
                                <br/>
                                Menstrual Period Prediction Application Android Based
                                <br/>
                                Bachelor's Degree :
                                <br/>
                                Marketplace application specifically for groceries "Sembako-go!" web based using MERN stack technology with waterfall method
                                {/* {description} */}
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__experience-textwrapper'>
                        <h1 className={lightText ? 'heading':'heading dark'} 
                            style={{
                                alignItems:'center',
                                letterSpacing:'1px',
                                }}> 
                                {/* {headline} */} Experience
                            </h1>
                            <br/>
                            <br/>
                            <div className='lulusan'>
                            <h4>Lembaga Pengembangan Komputer (LePkom) mandiri berbasis virtual Universitas Gunadarma</h4>
                                <h4>Labotary Asistant</h4>
                                <h4>August 2017 - January 2021</h4>
                            <br/>
                            </div>
                            <p 
                                className={
                                    lightTextDesc ? 'home__experience-subtitle'
                                    : 'home__experience-subtile dark'
                                }
                            style={{
                                fontSize :'1.2rem',
                                color : '#dbd7d7',
                                fontFamily : 'Fira Sans Condensed, sans-serif'
                            }}
                            >
                                as a laboratory assistant as an assistant, helping the practitioner do assignments in the lab, helping the tutor to attend, correcting practical assignments, answering difficult practical questions. and  as tutor to teach some materials, such as web programming fundamentals, DBMS fundamentals, J2EE, Oracle, SQL Server and Java
                                {/* {description} */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Experience
