import React from 'react'
import Hero from '../Sections/Hero/hero'
import Specials from '../Sections/Specials/specials'
import Testimonials from '../Sections/Testimonials/testimonials'
import AboutSection from "../Sections/About/aboutSection"

function Home() {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <AboutSection />
        </main>
    )
}

export default Home