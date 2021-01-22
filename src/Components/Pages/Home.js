import React from 'react'
import tester from '../tester'
import Banner from '../Banner'
import {homeObject} from '../Pages/source/source_home'
import Profil from '../Profil'
import Skills from '../Skills'
import Experience from '../Experience'
import Resume from '../cv_ku';
function Home() {
    return (
        <div>
            <Banner {...homeObject}/>
            <Profil/>
            <Experience/>
            <Skills/>
            <Resume/>
        </div>
    )
}

export default Home
