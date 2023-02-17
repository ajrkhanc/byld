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
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Walchand PLUS</h2>
                  </div>
                  <div className='col-sm-9'>
                     <p class="mb-0 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">
                        Walchand Plus is an initiative of Walchand PeopleFirst Limited – a 100-year legacy in an exclusive partnership with Dale Carnegie Training, the global leader in behavioral skills. At Walchand Plus, over the years, the mission has expanded from essential and behavioral skills for the corporate sector to HR consultancy and Skilling for employability, entrepreneurship, and empowerment.
                     </p>
                  </div>
               </div>
               <div className='row zindx'>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-9 zindx'>
                     <div className='row'>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>Experiential Learning</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>Leadership & Performance</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>Assessments</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>BeSpoke</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>Coaching</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>Staffing & Search</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
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
            <img src='/assets/img/homeb/handb.jpg' />
            <div className='container'>
               <div className='row'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8 text-center'>
                     <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">Partnership with a global leader</h2>
                     <p class="mb-0 pall pbb-20 ptt-10 wow fadeInUp delay-0-2s animated animateUP text-center">
                        Our vision remains true to Dale Carnegie’s original dream; to impact as many lives as possible through transformational and self-improvement experiences, that only we offer. At Walchand Plus, we would like to be a strategic partner for the government in its skilling mission. Our goal is to make Dale Carnegie a brand of choice for corporations and individuals for their training and talent development needs
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
