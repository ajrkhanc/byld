import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer id="rs-footer" className="rs-footer style1">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                    <div className="col-md-2 col-sm-6 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">QUICK LINKS</h3>
                            <ul className="site-map">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="#">Sitemap</a></li>                                
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 md-mb-10 pl-55 md-pl-15">
                            <h3 className="footer-title">OUR SOLUTIONS</h3>
                            <ul className="site-map">
                                <li><a href="/our-solutions/experiential-learning">Experiential Learning</a></li>
                                <li><a href="/our-solutions/leadership-and-talent-development">Leadership & Performance</a></li>
                                <li><a href="/our-solutions/assessments">Assessments</a></li>
                                <li><a href="#">BeSpoke</a></li>
                                <li><a href="/our-solutions/staffing">Staffing & Search</a></li>
                                <li><a href="/our-solutions/coaching">Coaching</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-sm-6 md-mb-10">
                            <h3 className="footer-title">CONTACT US</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Gurgaon – 122018, Haryana (India) </div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                       <a href="tel:1800-102-1345">1800-102-1345</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:info@byldgroup.com">info@byldgroup.com</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock-1"></i>
                                    <div className="desc">
                                        Office Hours: 09AM - 06PM  
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3 className="footer-title">SOCIAL LINKS</h3>
                            <ul className="footer-social md-mb-30">  
                                  <li> 
                                      <a href="#" target="_blank"><span><i className="fa fa-facebook"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i className="fa fa-twitter"></i></span></a> 
                                  </li>

                                  <li> 
                                      <a href="# " target="_blank"><span><i className="fa fa-pinterest-p"></i></span></a> 
                                  </li>
                                  <li> 
                                      <a href="# " target="_blank"><span><i className="fa fa-instagram"></i></span></a> 
                                  </li>
                                                                           
                              </ul>
                            <p className="widget-desc white-color mtt-25">Subscribe to our newsletter</p>
                            <p className='mtt-5'>
                                <input type="email" name="EMAIL" placeholder="Your email address" required=""/>
                                <input type="submit" value="Subscribe Now"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">                    
                    <div className="row y-middle">                       
                        <div className="col-lg-12">
                            <div className="copyright text-lg-start text-center ">
                                <p className='text-center'>© 2022 BYLD Group. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
