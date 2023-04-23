import React from "react";
import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

import Link from 'next/link'

function Nav() {
    return (
        <>

            <div className="navbar-area formobile">
                <div className="mobile-nav">
                    <a href="/blanchardinternational" className="logo">
                        <img src="/kbassets/img/kblogo.png" alt="Logo" />
                    </a>
                    <ResponsiveNavbar

                        styles={{
                            navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
                            navigationBarSmall: {
                                backgroundColor: 'aliceblue',
                            },
                            navigationCardSmall: {
                                backgroundColor: 'aliceblue',
                            },
                        }}
                    >
                        <nav class="mean-nav dblock">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active">PRODUCTS &amp; SERVICES <i class="bx bx-chevron-down"></i></a>

                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/slii-experience" class="nav-link">The SLII Experience™</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/blanchardinternationalproducts-services/blanchard-management-essentials" class="nav-link">Blanchard Management Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/self-leadership" class="nav-link">Self Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/coaching-essentials" class="nav-link">Coaching Essentials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/building-trust" class="nav-link">Building Trust</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/leading-people-through-change" class="nav-link">Leading People Through Change</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/team-leadership" class="nav-link">Team Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/customer-service-training" class="nav-link">Legendary Service</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/online-learning-training" class="nav-link">Online Learning</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/coaching-services" class="nav-link">Coaching Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/products-services/conversational-capacity" class="nav-link">Conversational Capacity</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>
                                <li class="nav-item">
                                    <a href="/blanchardinternational/how-we-work-with-you" class="nav-link">HOW WE WORK WITH YOU</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">EVENTS &amp; WORKSHOP
                                        <i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item d-none">
                                            <a href="/blanchardinternational/events-workshops/program-experience-webinar" class="nav-link">Program Experience &amp; Webinars</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/events-workshops/virtual-public-workshop" class="nav-link">Virtual Public Workshops</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="/blanchardinternational/about-us" class="nav-link">ABOUT US<i class="bx bx-chevron-down"></i></a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/about-us/meet-the-team" class="nav-link">Meet The Team</a>
                                        </li>
                                    </ul>
                                    <a class="mean-expand" href="#" style={{ "font-size": "18px" }}>+</a></li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link">RESOURCES</a>
                                    <ul class="dropdown-menu" style={{ display: "none" }}>
                                        <li class="nav-item">
                                            <a href="/blanchardinternational/blog" class="nav-link">BLOG</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/blanchardinternational/podcast">Podcast</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/blanchardinternational/ebooks">Ebooks</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/blanchardinternational/white-paper">White Paper</a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item mean-last">
                                    <a href="/blanchardinternational/get-started" class="nav-link">GET STARTED</a>
                                </li>


                            </ul>
                        </nav>
                    </ResponsiveNavbar>
                </div>
                <div className="main-nav nav-two">
                    <div className="container-fluid">
                        <div className="container-max">
                            <nav className="navbar navbar-expand-md navbar-light ">
                                <Link href="/blanchardinternational/"><a className="navbar-brand"><img src="/kbassets/img/kblogo.png" alt="Logo" /></a></Link>
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link active">PRODUCTS & SERVICES <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/slii-experience"><a className="nav-link">The SLII Experience™</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/blanchard-management-essentials"><a className="nav-link">Blanchard Management Essentials</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/self-leadership"><a className="nav-link">Self Leadership</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/coaching-essentials"><a className="nav-link">Coaching Essentials</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/building-trust"><a className="nav-link">Building Trust</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/leading-people-through-change"><a className="nav-link">Leading People Through Change</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/team-leadership"><a className="nav-link">Team Leadership</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/customer-service-training"><a className="nav-link">Legendary Service</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/online-learning-training"><a className="nav-link">Online Learning</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/coaching-services"><a className="nav-link">Coaching Services</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/products-services/conversational-capacity"><a className="nav-link">Conversational Capacity</a></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/blanchardinternational/how-we-work-with-you"><a className="nav-link">HOW WE WORK WITH YOU</a></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/blanchardinternational/events-workshops">
                                                <a className="nav-link">EVENTS & WORKSHOP
                                                    <i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item d-none"><Link href="/blanchardinternational/events-workshops/program-experience-webinar"><a className="nav-link">Program Experience & Webinars</a></Link></li>
                                                <li className="nav-item"><Link href="/blanchardinternational/events-workshops/virtual-public-workshop"><a className="nav-link">Virtual Public Workshop</a></Link></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blanchardinternational/about-us">
                                                <a className="nav-link">ABOUT US<i className='bx bx-chevron-down'></i></a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><Link href="/blanchardinternational/about-us/meet-the-team"><a className="nav-link">Meet The Team</a></Link></li>
                                            </ul>
                                        </li>
                                     

                                        <li className="nav-item">
                                            <a href="#" className="nav-link">RESOURCES<i className='bx bx-chevron-down'></i></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a className="nav-link" href="/blanchardinternational/blog">Blog</a></li>
                                                <li className="nav-item"><a className="nav-link" href="/blanchardinternational/podcast">Podcast</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/blanchardinternational/ebooks">Ebooks</a></li>
                                                <li class="nav-item"><a class="nav-link" href="/blanchardinternational/white-paper">White Paper</a></li>
                                            </ul>
                                        </li>


                                    </ul>
                                    <div className="nav-btn">
                                        <Link href="/blanchardinternational/get-started"><a className="default-btn btn-bg1 border-radius-5">GET STARTED</a></Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
