import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import Info from '../components/Info/Info';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />
                <Info />
                <Work />
                <Footer />
            </div>
        );
    }
}

export default Home;
