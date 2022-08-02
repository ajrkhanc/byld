import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer>
   <div class="container">
        <div class="row">
            <div class="col-md-3 footer-links menu-links">
                <h5>QUICK LINKS</h5>
                <ul>
                    <li>
                        <a href="#"> Home</a>
                    </li>
                    <li>
                        <a href="#"> Blog</a>
                    </li>
                    <li>
                        <a href="#"> Books</a>
                    </li>
                    <li>
                        <a href="#"> Cancellation and Refund Policy</a>
                    </li>
                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='#'>Terms and Conditions</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-md-3 footer-links menu-links">
                <h5>OUR SOLUTIONS</h5>
                <ul>
                    <li>
                        <a href=""> Browse Courses</a>
                    </li>
                    <li>
                        <a href=""> Crucial Conversations for Mastering Dialogue</a>
                    </li>
                    <li>
                        <a href=""> Crucial Conversations for Accountability</a>
                    </li>
                    <li>
                        <a href=""> The Power of Habit</a>
                    </li>
                    <li>
                        <a href=""> Influencer</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 footer-links address-area">
                <h5>CONTACT US</h5>
                <ul>
                    <li>
                        <i class="fa fa-map-marker"></i> <span>Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, <br/>Gurgaon – 122018, Haryana (India)</span>
                    </li>
                     <li>
                        <i class="fa fa-phone"></i> <a href='tel:1800 102 1345'><span>1800 102 1345</span></a>
                    </li>
                     <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i> <a href='mailto:cruciallearning.info@byldgroup.com'><span>cruciallearning.info@byldgroup.com</span></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 footer-links social-links ">
                <h5>SOCIAL LINKS</h5>
                <ul>
                    <li>
                        <a href=""> <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href=""> <i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href=""> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href=""> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <p>Subscribe to our monthly newsletter and learn how to handle the most crucial challenges of life and work.</p>
                <input type="text"/>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>        
</footer>

        <section class="footer-copyright-text">
            <div class="container-fluid">
                <div class=" row">                
                    <div class="footer-copyright col-md-12">© 2022 BYLD Group. All Rights Reserved.</div>            
                </div>           
            </div>
        </section>

    </>
  )
}
