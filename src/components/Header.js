import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <>
            <header>
                <img src='/Logo.png' alt='' width={150} />
                <Nav />
            </header>
        </>
    )
}

export default Header