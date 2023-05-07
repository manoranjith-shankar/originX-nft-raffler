import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <a className="navbar-brand" href="/">
                        <img className="navbar" src="img/originx-text-transparent.png" alt=""/>
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Explore <i className="fas fa-angle-down ml-1" /></a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a href="/explore-1" className="nav-link">Open Raffles</a></li>
                                <li className="nav-item"><a href="/explore-1" className="nav-link">Unlisted Raffles</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/activity" className="nav-link">Activity</a>
                            <a href="/activity" className="nav-link">Mint NFT</a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <ConnectButton />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;