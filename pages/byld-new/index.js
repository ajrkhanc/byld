import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

   const registerUser = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonform").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/11/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";

               document.getElementById("showlabel").style.display = "block";
               window.setTimeout(function () {
                  window.location.href = "/thank-you"
               }, 3000);

            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("name=" + event.target.name.value +
         "&email=" + event.target.email.value +
         "&tel=" + event.target.phone.value +
         "&location=" + event.target.Location.value +
         "&Company=" + event.target.organization.value +
         "&Designation=" + event.target.designation.value +
         "&Product=" + event.target.product.value +
         "&referredby=" + event.target.referredby.value +
         "&textarea=" + event.target.leadsquared_Notes.value)

   }

   const PopupRegisterd = async event => {
      event.preventDefault()
      document.getElementById("submitbuttonformpopup").value = "Submitting form...."
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
         console.log(this.responseText);
      }
      xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
      xhttp.onreadystatechange = function () {
         if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
               document.getElementById("showlabel1popup").innerHTML = "Thank you for your details. Check your inbox for more details.";

               document.getElementById("showlabel1popup").style.display = "block";
               setTimeout(function () {
                  document.getElementById("popuphidec").style.display = "none";
               }, 3000);


            } else {
               alert('There was a problem with the request.');
            }
         }
      };
      xhttp.send("your-email=" + event.target.fmail.value)

   }

   var homeslider = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 2
            }
         }
      ]
   };

   var settings1 = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <Head>
            <title>HR and Business Productivity Solutions | BYLD Group</title>
            <meta name="description" content="Largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies." />
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(30000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
               }}
            />
         </Head>

         <section className='bannersection'>
            <Slider {...homeslider}>
               <div className='slide1c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-5'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>Leading you towards success</h1>
                              <p>Everything we do has the potential to ignite your inner spark and transform the world around you.</p>
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='slide2c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-5'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>Equipping you with customised solutions</h1>
                              <p>Our courses for individuals, professionals, organisations, and institutions and thoughtfully curated to drive success.</p>
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='slide3c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-5'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>Empowering you with the greatest goals</h1>
                              <p>We impact knowledge in various fields to build a sustainable future.</p>
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='slide4c'>
                  <div className='container'>
                     <div className='row align-items-center'>
                        <div className='col-sm-5'>
                           <div className='siderco wow fadeInUp delay-0-2s animated animateUP'>
                              <h1>Paving way for global recognition</h1>
                              <p>
                                 Our exclusive partnership with Dale Carnegie enables you to learn from the best trainers.
                              </p>
                              <div className="btn-part ptt-10 pbb-30">
                                 <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Slider>
         </section>

         <section className='ptt-50 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-6'>
                     <div class="sub-text supperh wow fadeInUp delay-0-2s animated animateUP">What We Offer</div>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Shaping your abilities with curated solutions</h2>
                  </div>
                  <div className='col-sm-6'>
                     <p class="mb-0 mtt-40 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">As a one-stop destination for building extraordinary talent, we create sustainable growth for individuals and organizations by empowering them through our expertise in learning and people solutions.</p>
                     <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                        <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='ptt-0 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <div class="rs-videos choose-video wow fadeInUp delay-0-2s animated animateUP">
                        <div class="images-video">
                           <img src="/assets/img/homeb/newbyldb.jpg" alt="images" />
                        </div>
                        <div class="animate-border">
                           <a class="popup-border" target="_blank" href="https://www.youtube.com/watch?v=LXd9OtxQQQA&t=16s">
                              <i class="fa fa-play"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='solutionrow ptt-60 pbb-60'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-3'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">BYLD Solutions</h2>
                  </div>
                  <div className='col-sm-9'>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                        BYLD Plus is an initiative of BYLD PeopleFirst Limited – a 100-year legacy in an exclusive partnership with Dale Carnegie Training, the global leader in behavioral skills. At BYLD Plus, over the years, the mission has expanded from essential and behavioral skills for the corporate sector to HR consultancy and Skilling for employability, entrepreneurship, and empowerment.
                     </p>
                  </div>
               </div>
               <div className='row zindx'>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-9 zindx'>
                     <div className='row'>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>E</span>xperiential Learning</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/experiential-learning.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/experiential-learningw.png" alt="images" />
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>L</span>eadership & Performance</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/leadership-performance.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/leadership-performancew.png" alt="images" />
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>A</span>ssessments</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/assessments.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/assessmentsw.png" alt="images" />
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>B</span>eSpoke</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/bespoke.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/bespokew.png" alt="images" />
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>C</span>oaching</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/coaching.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/coachingw.png" alt="images" />
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4><span>S</span>taffing & Search</h4>
                              <div className='cicon'>
                                 <img className='active' src="/assets/img/homeb/icon/staffing-search.png" alt="images" />
                                 <img className='hover' src="/assets/img/homeb/icon/staffing-searchw.png" alt="images" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='clearfix'></div>
               <div className='solutionarrowbox1'>
                  <img src="/assets/img/homeb/orangearrow.png" />
               </div>
               <div className='solutionarrowbox2'>
                  <img src="/assets/img/homeb/bluearrow1.png" />
               </div>

            </div>
         </section>

         <section className='ptt-60 pbb-50 ccl'>
            <div className='container'>
               <div className='row rs-testimonial style2 rs-blog style1'>
                  <div className='col-sm-4'>
                     <div className='mst wow fadeInUp delay-0-2s animated animateUP'>
                        <div className='sec-title3 mbb-35'>
                           <h4 className="countertoph2">CLIENTS SPEAK</h4>
                           <div className="heading-border-line left-style"></div>
                        </div>
                     </div>
                     <Slider {...settings1}>
                        <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                           <div class="item-content">
                              <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                              <p>
                                 The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                              </p>
                           </div>
                           <div class="testi-content">
                              <div class="image-wrap">
                                 <img src="/assets/img/av.png" alt="Testimonial" />
                              </div>
                              <div class="testi-information">
                                 <div class="testi-name">Namita Shah</div>
                                 <span class="testi-title">(HSBC India)</span>
                                 <div class="ratting-img">
                                    <img src="/assets/img/ratting.png" alt="Testimonial" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                           <div class="item-content">
                              <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                              <p>
                                 We engaged their services for facilitating a session on SLII<sup>®</sup> for our 26 employees, who were members of the regional and local country leadership team spread across APAC, in Nov 2019. The objective of the learning program being enabling the leaders to drive change in the organization and have constructive & difficult conversations with their teams, ensuring the organizational goals are at the focal point of discussions.
                              </p>
                           </div>
                           <div class="testi-content">
                              <div class="image-wrap">
                                 <img src="/assets/img/av.png" alt="Testimonial" />
                              </div>
                              <div class="testi-information">
                                 <div class="testi-name">Rangkynsai Nongbet</div>
                                 <span class="testi-title">(Ortho Clinical Diagnostics)</span>
                                 <div class="ratting-img">
                                    <img src="/assets/img/ratting.png" alt="Testimonial" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="testi-wrap wow fadeInUp delay-0-2s animated animateUP">
                           <div class="item-content">
                              <span><img src="/assets/img/quote.png" alt="Testimonial" /></span>
                              <p>
                                 Thankful to the team at Crucial Life Changing Skills for conducting a power packed session on the topic of “Influencer” for our leaders at CK Birla Group. The simple (and powerful) 6 sources of influence model will guide us to to drive change in our personal and professional space!
                              </p>
                           </div>
                           <div class="testi-content">
                              <div class="image-wrap">
                                 <img src="/assets/img/av.png" alt="Testimonial" />
                              </div>
                              <div class="testi-information">
                                 <div class="testi-name">Prerna S</div>
                                 <span class="testi-title">(Birla Fertility and IVF)</span>
                                 <div class="ratting-img">
                                    <img src="/assets/img/ratting.png" alt="Testimonial" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Slider>
                  </div>
                  <div className='col-sm-8'>
                     <div className='sec-title3 mbb-35 wow fadeInUp delay-0-2s animated animateUP'>
                        <h4 className="countertoph2">WHY OUR CLIENTS TRUST US?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>
                     <div className='mycounter'>
                        <div className='counterbox countb1 wow fadeInUp delay-0-2s animated animateUP'>
                           <span className="rs-count">500,000 +</span>
                           <h3>PEOPLE TRAINED</h3>
                        </div>
                        <div className='counterbox countb2 wow fadeInUp delay-0-2s animated animateUP'>
                           <span className="rs-count">1,000 +</span>
                           <h3>YEARS OF ACCUMULATED CONSULTING EXPERIENCE</h3>
                        </div>
                        <div className='counterbox countb3 wow fadeInUp delay-0-2s animated animateUP'>
                           <span className="rs-count">10 +</span>
                           <h3>GLOBAL PARTNERSHIPS</h3>
                        </div>
                        <div className='counterbox countb4 wow fadeInUp delay-0-2s animated animateUP'>
                           <span className="rs-count">100,000 +</span>
                           <h3>ACCESS TO PROFILES</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <img className='wow fadeInUp delay-0-2s animated animateUP' src='/assets/img/homeb/handb.jpg' />
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8 text-center'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Partnership with a global leader</h2>
                     <p class="mb-0 pall pbb-20 ptt-10 wow fadeInUp delay-0-2s animated animateUP text-center">
                        Our vision remains true to Dale Carnegie’s original dream; to impact as many lives as possible through transformational and self-improvement experiences, that only we offer. At BYLD Plus, we would like to be a strategic partner for the government in its skilling mission. Our goal is to make Dale Carnegie a brand of choice for corporations and individuals for their training and talent development needs
                     </p>
                     <div className="btn-part ptt-10 pbb-30 wow fadeInUp delay-0-2s animated animateUP">
                        <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='jointeam ptt-50'>
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-12 text-center pbb-30'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Join the BYLD family</h2>
                  </div>
               </div>
            </div>
            <img src='/assets/img/homeb/byldteam.jpg' />
            <div className='clearfix'></div>
            <div className='solutionarrowbox1'>
               <img src="/assets/img/homeb/orangearrow.png" />
            </div>
            <div className='solutionarrowbox2'>
               <img src="/assets/img/homeb/bluearrow.png" />
            </div>
         </section>


         <div class="homecon ptt-60">
            <div class="container">
               <div className='row'>
                  <div className='col-sm-3'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Get in touch</h2>
                  </div>
                  <div className='col-sm-9'>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                        Avail the development stream that is essential for your professional requirement. For more information, feel free to fill the form and we will get back to you
                     </p>
                  </div>
               </div>

               <div class="row y-middle">
                  <div class="col-lg-5 md-mb-50">
                     <div class="contact-img wow fadeInUp delay-0-2s animated animateUP">
                        <img src="/assets/img/homeb/contactl.png" alt="Contact" />
                     </div>
                  </div>
                  <div class="col-lg-7">
                     <div class="contact-wrap">
                        <div className="bannerform wow fadeInUp delay-0-2s animated animateUP">
                           <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={registerUser}>
                              <div className="row">
                                 <div className="col-sm-6 mb-12">
                                    <input type="text" name="name" placeholder="Enter Name*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input type="email" name="email" placeholder="Enter Email*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input type="text" name="Location" placeholder="Location" />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input type="text" name="organization" placeholder="Organization*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <input type="text" name="designation" placeholder="Designation*" required />
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <select name="product" required>
                                       <option value="">Product / Services</option>
                                       <option value="Sales and Services">Sales and Services</option>
                                       <option value="Coaching">Coaching</option>
                                       <option value="Assessments">Assessments</option>
                                       <option value="Leadership and Performance">Leadership and Performance</option>
                                       <option value="Experiential Learning">Experiential Learning</option>
                                    </select>
                                 </div>
                                 <div className="col-sm-6 mb-12">
                                    <select name="referredby" required>
                                       <option value="">Referred By</option>
                                       <option value="Email">Email</option>
                                       <option value="Social Media">Social Media</option>
                                       <option value="Google Search">Google Search</option>
                                       <option value="Website">Website</option>
                                       <option value="Reference">Reference</option>
                                       <option value="Sales Representative">Sales Representative</option>
                                    </select>
                                 </div>
                                 <div className="col-lg-12 mb-12">
                                    <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                 </div>
                                 <div className="col-lg-12 mb-12">
                                    <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Submit" />
                                 </div>
                                 <p id="showlabel" style={{ display: "none" }}></p>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>



















      </>
   )
}
