import React from 'react'
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Contacts from './Contacts'
import { Toaster } from 'react-hot-toast'
import ScrollUpButton from '../components/ScrollUpButton'
import Projects from './projects'

function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Contacts />
            <Projects />
            <ScrollUpButton />
            <Toaster position="top-center" reverseOrder={false} toastOptions={{ style: { zIndex: 9999 } }} />
        </div>
    )
}

export default Home