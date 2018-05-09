import React from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div>
            <NavBar/>
            <Search/>
            <Results/>
            <Footer/>
        </div>
    )
}