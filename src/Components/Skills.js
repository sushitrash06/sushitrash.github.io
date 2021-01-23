import React from 'react'
import '../Components/Skill.css'

function Skills() {
    const lightBg = true;
    return (
            <div className={lightBg ? 'home__profile':'home__profile darkBg'}
                style={{
                    marginBottom :'100px'
                }}
            >
                <h1 align='center' 
                style={{
                    fontSize:'3rem', 
                    marginTop:'25px',
                    alignItems:'center',
                    textShadow: '-4px 3px 0 #fc3535, -7px 6px 0 #29ffea',
                    letterSpacing:'1px'
                }}
                >PlayGround</h1>
                <div className='container'>
                <div 
                className='container'>
                <ul container class="flex-container">
                    <li class="flex-item">
                        <img src='images/tools/html.png' alt='react'></img>
                        <br/>
                            <h3>HTML</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/css.png' alt='react'></img>
                    <br/>
                        <h3>CSS</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/javascript.jpg' alt='react'></img>
                    <br/>
                        <h3>JavaScript</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/nodejs.png' alt='react'></img>
                    <br/>
                        <h3>Node js</h3>
                    </li>
                    <li class="flex-item">
                        <img src='images/tools/react.png' alt='react'></img>
                        <br/>
                        <h3>React js</h3></li>
                    <li class="flex-item">
                    <img src='images/tools/java.png' alt='react'></img>
                    <br/>
                        <h3>Java</h3>
                    </li>
                    <li class="flex-item">
                        <img src='images/tools/mysql.png' alt='react'></img>
                        <br/>
                            <h3>MySql</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/sqlserver.png' alt='react'></img>
                    <br/>
                        <h3>SQL&nbsp;Server</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/oracle.png' alt='react'></img>
                    <br/>
                        <h3>Oracle</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/git.png' alt='react'></img>
                    <br/>
                        <h3>git</h3>
                    </li>
                    <li class="flex-item">
                        <img src='images/tools/restapi.png' alt='react'></img>
                        <br/>
                        <h3>RestFul&nbsp;API</h3>
                    </li>
                    <li class="flex-item">
                    <img src='images/tools/postman.png' alt='react'></img>
                    <br/>
                        <h3>Postman</h3>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Skills
