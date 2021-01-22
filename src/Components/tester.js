import React from 'react'

function tester() {
    const lightBg = false;
    return (
        <div className={lightBg ? 'home__profile':'home__profile darkBg'}
            style={{marginTop:'50px'}}
        >
            <br/>
        </div>
    )
}

export default tester
