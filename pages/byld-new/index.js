import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CountUp from 'react-countup';
import React from 'react';




export default function Home() {

   


if (typeof window !== "undefined") {
   const el = document.querySelector(".mst")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);
observer.observe(el);
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
         <script src='https://unpkg.com/react-visibility-sensor@5.0.1/dist/visibility-sensor.min.js'></script>
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
                              <h4>People</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>People</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>People</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>People</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>People</h4>
                              <svg xmlns="http://www.w3.org/2000/svg" width="102.657" height="44.324" viewBox="0 0 102.657 44.324"><g transform="translate(-1560.343 -2464.75)"><path d="M-897.81,201.72a15.064,15.064,0,0,1-15.036-15.05,15.086,15.086,0,0,1,15.089-15.082h.211a15.092,15.092,0,0,1,14.89,15.206A15.045,15.045,0,0,1-897.81,201.72Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-873.864,215.879c-.619,0-1.088,0-1.522-.005a2.744,2.744,0,0,1-.394-.044,21.9,21.9,0,0,0-8.884-17.081,21.47,21.47,0,0,0-13.259-4.355c-.294,0-.594.005-.892.015a22.192,22.192,0,0,0-20.953,21.367h-3.306a26.775,26.775,0,0,1,2.7-10.943A25.266,25.266,0,0,1-912.847,196a25.139,25.139,0,0,1,7.237-3.792,25.1,25.1,0,0,1,7.9-1.274,24.739,24.739,0,0,1,12.856,3.59,25.419,25.419,0,0,1,9.1,9.125,27.654,27.654,0,0,1,3.367,12.232Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-917.325,190.908a11.109,11.109,0,0,1-11.144,11.075h-.079A11.105,11.105,0,0,1-939.6,190.828v-.087a11.137,11.137,0,0,1,11.183-11.09h.039a11.135,11.135,0,0,1,11.056,11.213Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-877.923,190.185a11.06,11.06,0,0,1,11.075-11.047h.055a11.068,11.068,0,0,1,11.015,11.12v.047a11.034,11.034,0,0,1-11.039,11.028h-.095a11.041,11.041,0,0,1-11.012-11.07Z" transform="translate(2509.184 2293.162)" fill="#f4961e"></path><path d="M-846.97,215.912a2.256,2.256,0,0,1-.247-.013c-.336-.033-.7-.049-1.13-.049-.294,0-.594.007-.883.014l-.422.009a17.1,17.1,0,0,0-4.055-13.384,16.849,16.849,0,0,0-12.71-5.819,17.742,17.742,0,0,0-6.49,1.252l-2.217-2.6a18.143,18.143,0,0,1,8.609-2.049h.4a20.139,20.139,0,0,1,14.581,6.461,20.246,20.246,0,0,1,5.3,15.132C-846.292,215.818-846.493,215.912-846.97,215.912Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path><path d="M-948.751,215.758a22.239,22.239,0,0,1,1.814-11.006,20.475,20.475,0,0,1,7.63-8.439,19.524,19.524,0,0,1,10.631-3.047,18.028,18.028,0,0,1,8.709,2.11l-2.188,2.583a19.231,19.231,0,0,0-6.762-1.319,16.053,16.053,0,0,0-9.969,3.548c-4.9,3.783-7.074,9.02-6.459,15.569Z" transform="translate(2509.184 2293.162)" fill="#166232" class=""></path></g></svg>
                           </div>
                        </div>
                        <div className='col-sm-4'>
                           <div className='solutionbox wow fadeInUp delay-0-2s animated animateUP'>
                              <h4>People</h4>
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
               <div className='row'>
                  <div className='col-sm-4'>
                     <div className='mst'>
                        <h2 class="title mb-0 md-pb-20 h2call wow fadeInUp delay-0-2s animated animateUP">New-age solutions backed by a century-long legacy</h2>
                        <p class="mb-0 mtt-40 pall pbb-20 wow fadeInUp delay-0-2s animated animateUP">As a one-stop destination for building extraordinary talent, we create sustainable growth for individuals and organizations by empowering them through our expertise in learning and people solutions.</p>
                        <div className="btn-part ptt-10 pbb-30">
                           <Link href="#"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                        </div>
                     </div>
                  </div>
                  <div className='col-sm-8'>
                     <div className='mycounter'>
                        <div className='counterbox countb1'>
                           <span className="rs-count">500,000 +</span>
                           <h3>PEOPLE TRAINED</h3>
                        </div>
                        <div className='counterbox countb2'>
                           <span className="rs-count">1,000 +</span>
                           <h3>YEARS OF ACCUMULATED CONSULTING EXPERIENCE</h3>
                        </div>
                        <div className='counterbox countb3'>
                           <span className="rs-count">10 +</span>
                           <h3>GLOBAL PARTNERSHIPS</h3>
                        </div>
                        <div className='counterbox countb4'>
                           <span className="rs-count">100,000 +</span>
                           <h3>ACCESS TO PROFILES</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="rs-services style8 dnone767px">
            <div className="container-fluid">
               <div className="row y-middle">
                  <div className="col-lg-5">
                     <div className="sec-title3 ptt-70 pbb-40">
                        <h3 className="sliderh3">WELCOME TO</h3>
                        <h2 className="sliderh2">BYLD Group</h2>
                        <p className="sliderp">Founded in 1998, backed by 1000+ years of accumulated professional
                           experience, and having served 5,00,000+ individuals around the globe, we are
                           dedicated to enabling individuals and organizations to achieve
                           EXCELLENCE.</p>
                     </div>
                  </div>
                  <div className="col-lg-7 pl-30 md-pl-15">
                     <img src="/assets/img/profasnalteam.jpg" alt="ba" />
                  </div>
               </div>
            </div>
         </div>

         <div className="rs-services style8 mblock">
            <div className="container-full">
               <div className="row y-middle">
                  <div className="col-lg-7 pl-30 md-pl-15">
                     <img src="/assets/img/banner/tabbanner-mobile.jpg" alt="ba" />
                  </div>

                  <div className="col-lg-5">
                     <div className="sec-title3 pll-30 ptt-20 pbb-10">
                        <h3 className="sliderh3">WELCOME TO</h3>
                        <h2 className="sliderh2">BYLD Group</h2>
                        <p className="sliderp">Founded in 1998, backed by 1000+ years of accumulated professional
                           experience, and having served 5,00,000+ individuals around the globe, we are
                           dedicated to enabling individuals and organizations to achieve
                           EXCELLENCE.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className="tabsbg ptt-30 pll-30 pbb-30 prr-30 mtt-50">
            <div className="container-full">
               <Tabs>
                  <div className='row'>
                     <div className='col-sm-12'>
                        <div className="sec-title3 text-center mbb-35">
                           <h2 className="title primary-color pbb-10 colorw">OUR SOLUTIONS</h2>
                           <div className="heading-border-line center-style"></div>
                        </div>
                     </div>
                     <div className='col-sm-4 mresa'>
                        <TabList className="lefttab">
                           <Tab><i className='fa fa-folder-o'></i> Experiential Learning</Tab>
                           <Tab><i className='fa fa-users'></i> Leadership & Performance</Tab>
                           <Tab><i className='fa fa-newspaper-o'></i> Assessments</Tab>
                           <Tab><i className='fa fa-newspaper-o'></i> BeSpoke</Tab>
                           <Tab><i className='fa fa-object-group'></i> Staffing & Search</Tab>
                           <Tab><i className='fa fa-cogs'></i> Coaching</Tab>
                        </TabList>
                     </div>
                     <div className='col-sm-8 bgwhite'>
                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Experiential Learning</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to keep delivering consistently. For companies of all sizes, and all kinds of people and organizational needs, we bring you a plethora of experiential learning trainings that are unique, highly effective and available in virtual, and offline formats:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><a target="_blank" href="/eaglesflightindia/"><i className='fa fa-angle-double-right'></i> Eagle's Flight</a></li>
                                    <li><a href="/business-today-simulations"><i className='fa fa-angle-double-right'></i> Business Today Simulations</a></li>
                                    <li className='d-none'><a href="#"><i className='fa fa-angle-double-right'></i> Gaminar</a></li>
                                    <li><a href="/jenson-8"><i className='fa fa-angle-double-right'></i> Jenson 8 (Virtual Reality Trainings)</a></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/experiential-learning"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Leadership and Talent Development</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Ever since the COVID 19 pandemic has hit the world, leaders across the globe have been striving hard to maintain peace within their teams while improving their productivity. Give your leaders the right skills, support, and methods that successful leaders around the world are using.</p>
                              <p className='mbb-5'>We bring you a plethora of world-renowned training brands that are at the top list of Fortune 500 companies. These include:</p>
                           </div>
                           <div className='row'>
                              <div className='col-sm-12'>
                                 <ul className='solutionslist'>
                                    <li><Link href="https://blanchardinternational.co.in/"><a target="_blank"><i className='fa fa-angle-double-right'></i> Blanchard India</a></Link></li>
                                    <li><Link href="/tirian"><a><i className='fa fa-angle-double-right'></i> Tirian</a></Link></li>
                                    <li><Link href="/cruciallifechangingskills/"><a target="_blank"><i className='fa fa-angle-double-right'></i> Crucial Life Changing Skills</a></Link></li>
                                    <li><Link href="/leadership-and-performance/trapologist"><a><i className='fa fa-angle-double-right'></i> Trapologist at Work™</a></Link></li>
                                 </ul>
                              </div>
                              <div className='col-sm-12'>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/leadership-and-talent-development"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Assessments</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>A company is as strong as its people. Organizations of all sizes prefer psychometric assessments for hiring and managing people and fostering the right culture across all the levels of an organizational hierarchy. Explore our best-in-class assessment brands that have been revolutionizing people development across the globe:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="/everythingdisc"><a target="_blank"><i className='fa fa-angle-double-right'></i> DiSC<sup>®</sup></a></Link></li>
                                    <li><Link href="/assessments/lumina-psychometric-assesments"><a><i className='fa fa-angle-double-right'></i> Lumina Spark</a></Link></li>
                                    <li><Link href="/assessments/talentsmart-eq-assesments"><a><i className='fa fa-angle-double-right'></i> TalentSmart EQ Assessments</a></Link></li>
                                    <li className='d-none'><Link href="/assessments/assessments-and-development-centers"><a><i className='fa fa-angle-double-right'></i> Assessments and Development Centers</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/assessments"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">BeSpoke</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="/bespoke/persona-global"><a><i className='fa fa-angle-double-right'></i> Persona Global</a></Link></li>
                                    {/* <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> SLI</a></Link></li>
                        <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> Large Projects</a></Link></li> */}
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/bespoke"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Staffing</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>With the advent of technology and automation, more and more companies are focusing on digitizing their processes. This is where we combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee lifecycle management through a single tool.</p>
                              <p className='ptt-20 mbb-5'>With a team of expert consultants having wide experience and expertise in the local labor market, and cutting-edge technology, we offer you excellent staffing and business operation solutions to take your business forward. Our two major verticals include:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="https://yomamultinational.com/"><a target="_blank"><i className='fa fa-angle-double-right'></i> YOMA Business Solutions</a></Link></li>
                                    <li className='d-none'><Link href="#"><a><i className='fa fa-angle-double-right'></i> YOMA Technologies</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/staffing"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                        <TabPanel className="tabdetails">
                           <div className='sec-title3'>
                              <h4 className="solutionh"><a href="#">Coaching</a></h4>
                              <div className="heading-border-line left-style"></div>
                              <p className='ptt-20 mbb-5'>Managing the complexities of the VUCA business environment, disengaged employees, lowering morale and elevating ROI expectations has never been so challenging the way it has become now. To deal with these complexities and the frequently changing business environment, organizations today need to invest in coaching and development of their leaders, which helps them navigate successfully through these tough times. Our time-tested approach and renowned brands have been creating successful coaches and leaders around the world. Our key partnerships include:</p>
                           </div>
                           <div className=''>
                              <div>
                                 <ul className='solutionslist'>
                                    <li><Link href="#"><a><i className='fa fa-angle-double-right'></i> ICF Certification</a></Link></li>
                                    <li><Link href="/coaching/insideout-coaching"><a><i className='fa fa-angle-double-right'></i> InsideOut CoachingTM</a></Link></li>
                                    <li className='d-none'><Link href="#"><a><i className='fa fa-angle-double-right'></i> Breakthrough</a></Link></li>
                                    <li><Link href="/coaching/executive-coaching"><a><i className='fa fa-angle-double-right'></i> Executive Coaching</a></Link></li>
                                 </ul>
                                 <div className="btn-part ptt-10 pbb-30">
                                    <Link href="/our-solutions/coaching"><a className="readon2">Learn More <div className="btn-arrow"></div></a></Link>
                                 </div>
                              </div>
                           </div>
                        </TabPanel>

                     </div>
                  </div>
               </Tabs>
            </div>
         </div>

         <section className='countersetion ptt-50 pbb-50'>
            <div className='container'>
               <div className='row'>

                  <div className='col-md-8'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph">WHY OUR CLIENTS TRUST US?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>

                     <div className='row'>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">500,000 +</span>
                                 </div>
                                 <p className="title">PEOPLE TRAINED</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">1,000 +</span>
                                 </div>
                                 <p className="title">YEARS OF ACCUMULATED CONSULTING EXPERIENCE</p>
                              </div>
                           </div>
                        </div>

                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">10 +</span>
                                 </div>
                                 <p className="title">GLOBAL PARTNERSHIPS</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">100,000 +</span>
                                 </div>
                                 <p className="title">ACCESS TO PROFILES</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className='col-md-4'>
                     <div className='row rs-testimonial style2 rs-blog style1 pbb-15'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">CLIENTS SPEAK</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <Slider {...settings1}>
                           <div class="testi-wrap">
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

                           <div class="testi-wrap">
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

                           <div class="testi-wrap">
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
                  </div>

               </div>
            </div>
         </section>

         <div className='container ptt-40 d-none'>
            <div className='row'>
               <div className='col-md-12'>
                  <div className='sec-title3 mbb-35'>
                     <h4 className="countertoph2 text-center">WHAT MAKES US DIFFERENT?</h4>
                     <div className="heading-border-line left-center"></div>
                  </div>
                  <div className='row'>
                     <div className='col-sm-6'>
                        <div className="counter-right mbb-15">
                           <div className="counter-list-right mb-20 homeboxp">
                              <div className="counter-icon-right">
                                 <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                              </div>
                              <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                           </div>
                        </div>
                     </div>
                     <div className='col-sm-6'>
                        <div className="counter-right">
                           <div className="counter-list-right mb-20 homeboxp">
                              <div className="counter-icon-right">
                                 <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                              </div>
                              <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <section className='countersetion ptt-50 pbb-50 d-none'>
            <div className='container'>
               <div className='row'>
                  <div className='col-md-8'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph">WHY OUR CLIENTS TRUST US?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>

                     <div className='row'>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">500,000 +</span>
                                 </div>
                                 <p className="title">PEOPLE TRAINED</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">1,000 +</span>
                                 </div>
                                 <p className="title">YEARS OF ACCUMULATED CONSULTING EXPERIENCE</p>
                              </div>
                           </div>
                        </div>

                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">10 +</span>
                                 </div>
                                 <p className="title">GLOBAL PARTNERSHIPS</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-6 counterarea'>
                           <div className="counter-area">
                              <div className="counter-list mb-20">
                                 <div className="counter-number">
                                    <span className="rs-count">100,000 +</span>
                                 </div>
                                 <p className="title">ACCESS TO PROFILES</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='sec-title3 mbb-35'>
                        <h4 className="countertoph2">WHAT MAKES US DIFFERENT?</h4>
                        <div className="heading-border-line left-style"></div>
                     </div>
                     <div className='row'>
                        <div className='col-sm-12'>
                           <div className="counter-right mbb-15">
                              <div className="counter-list-right mb-20 homeboxp">
                                 <div className="counter-icon-right">
                                    <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                 </div>
                                 <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-sm-12'>
                           <div className="counter-right">
                              <div className="counter-list-right mb-20 homeboxp">
                                 <div className="counter-icon-right">
                                    <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                 </div>
                                 <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <div className="rs-services style1 modify shape-bg ptt-40 pbb-40">
            <div className="container-full">
               <div className="sec-title3 text-center mb-30">
                  <h2 className="title color2">INDUSTRIES SERVED SO FAR</h2>
                  <div className="heading-border-line center-style"></div>
               </div>
               <div className="row service-wrap mr-0 ml-0">
                  <Slider {...settings}>
                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Automobile</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Tata Motors </li>
                              <li><i className="fa fa-angle-double-right"></i> Mahindra & Mahindra </li>
                              <li><i className="fa fa-angle-double-right"></i> Eicher Motors</li>
                              <li><i className="fa fa-angle-double-right"></i> Renault India</li>
                              <li><i className="fa fa-angle-double-right"></i> Nissan Motors</li>
                              <li><i className="fa fa-angle-double-right"></i> Hyundai India</li>
                              <li><i className="fa fa-angle-double-right"></i> BMW India Private limited</li>
                              <li><i className="fa fa-angle-double-right"></i> FANUC India Private Limited</li>
                              <li><i className="fa fa-angle-double-right"></i> Hero MotoCorp Ltd.</li>
                              <li><i className="fa fa-angle-double-right"></i> Tenneco Automotive India Pvt Ltd</li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Manufacturing</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> JSW Steel</li>
                              <li><i className="fa fa-angle-double-right"></i> Jindal Saw </li>
                              <li><i className="fa fa-angle-double-right"></i> Mahindra Tractors </li>
                              <li><i className="fa fa-angle-double-right"></i> Eicher Tractors </li>
                              <li><i className="fa fa-angle-double-right"></i> Applied Materials </li>
                              <li><i className="fa fa-angle-double-right"></i> Statkraft </li>
                              <li><i className="fa fa-angle-double-right"></i> ABB India Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Adani Enterprises Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Asian Paints Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Autoliv India Pvt. Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">IT/ITES</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Cyient </li>
                              <li><i className="fa fa-angle-double-right"></i> HCL Tech </li>
                              <li><i className="fa fa-angle-double-right"></i> Hexaware Tech</li>
                              <li><i className="fa fa-angle-double-right"></i> Infosys </li>
                              <li><i className="fa fa-angle-double-right"></i> GE Appliances </li>
                              <li><i className="fa fa-angle-double-right"></i> Scientific Games </li>
                              <li><i className="fa fa-angle-double-right"></i> Tata Communications </li>
                              <li><i className="fa fa-angle-double-right"></i> Allianz Services Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Fujitsu Consulting India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Gap IT Services India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Hospitality</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Tata Motors </li>
                              <li><i className="fa fa-angle-double-right"></i> EIH </li>
                              <li><i className="fa fa-angle-double-right"></i> Ibibo Group</li>
                              <li><i className="fa fa-angle-double-right"></i> Thomas Cook (India) Ltd</li>
                              <li><i className="fa fa-angle-double-right"></i> Make my Trip </li>
                              <li><i className="fa fa-angle-double-right"></i> Go Ibibo</li>
                              <li><i className="fa fa-angle-double-right"></i> Netherland Embassy</li>
                              <li><i className="fa fa-angle-double-right"></i> Newzealand Embassy </li>
                              <li><i className="fa fa-angle-double-right"></i> Indigo </li>
                              <li><i className="fa fa-angle-double-right"></i> Airseva India Pvt. Ltd</li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">BFSI</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> SBI Mutual Fund </li>
                              <li><i className="fa fa-angle-double-right"></i> Max Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> Bajaj Allianz Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> SBI Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> AEGON Life Insurance Company </li>
                              <li><i className="fa fa-angle-double-right"></i> Aditya Birla Finance Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Sequoia Capital </li>
                              <li><i className="fa fa-angle-double-right"></i> DESHAW </li>
                              <li><i className="fa fa-angle-double-right"></i> DBS </li>
                              <li><i className="fa fa-angle-double-right"></i> ANZ </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">FMCG/FMCD</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Johnson</li>
                              <li><i className="fa fa-angle-double-right"></i> GlaxoSmith </li>
                              <li><i className="fa fa-angle-double-right"></i> Procter &amp; Gamble </li>
                              <li><i className="fa fa-angle-double-right"></i> Hitachi </li>
                              <li><i className="fa fa-angle-double-right"></i> Kline Consumer Healthcare Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Dabur </li>
                              <li><i className="fa fa-angle-double-right"></i> Marico </li>
                              <li><i className="fa fa-angle-double-right"></i> Future Retail Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Hennes &amp; Mauritz India Pvt. Ltd</li>
                              <li><i className="fa fa-angle-double-right"></i> TNS India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Health Care and Life Sciences</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Novozymes South Asia Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Apollo Hospital </li>
                              <li><i className="fa fa-angle-double-right"></i> Johnson &amp; Johnson </li>
                              <li><i className="fa fa-angle-double-right"></i> Sun Pharma </li>
                              <li><i className="fa fa-angle-double-right"></i> Torrent Pharma </li>
                              <li><i className="fa fa-angle-double-right"></i> Mylan Laboratories </li>
                              <li><i className="fa fa-angle-double-right"></i> Procter &amp; Gamble </li>
                              <li><i className="fa fa-angle-double-right"></i> Sun Pharma Adv </li>
                              <li><i className="fa fa-angle-double-right"></i> Stryker </li>
                              <li><i className="fa fa-angle-double-right"></i> Abbott Healthcare Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Software and Internet</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Addteq Software India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Agilent Technologies Private Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> KLA -TENCOR SOFTWARE INDIA </li>
                              <li><i className="fa fa-angle-double-right"></i> Kronos Solutions India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Nelito Systems Pvt Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Netmagic IT Services Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> OnceHub Technologies Pvt. Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Samsung SDS India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Smart Chip Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> TD Williamson India Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Professional Services</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Deloitte </li>
                              <li><i className="fa fa-angle-double-right"></i> Price Waterhouse Coopers(PwC) </li>
                              <li><i className="fa fa-angle-double-right"></i> Grant Thornton LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> People scout </li>
                              <li><i className="fa fa-angle-double-right"></i> Accenture </li>
                              <li><i className="fa fa-angle-double-right"></i> Aranca (Mumbia) Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Eaton Management Services LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> EY Global Delivery Services India LLP </li>
                              <li><i className="fa fa-angle-double-right"></i> Mckinsey Knowledge Centre India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Price Waterhouse Coopers Pvt Ltd </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Electronics and Electrical</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Finolex Cables </li>
                              <li><i className="fa fa-angle-double-right"></i> Blue Star </li>
                              <li><i className="fa fa-angle-double-right"></i> Siemens </li>
                              <li><i className="fa fa-angle-double-right"></i> ABB India </li>
                              <li><i className="fa fa-angle-double-right"></i> LG Soft India Private Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Infiniti Retail Ltd. - Croma </li>
                              <li><i className="fa fa-angle-double-right"></i> Crompton Greaves Consumer Electrical </li>
                              <li><i className="fa fa-angle-double-right"></i> Eaton Corporation </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Chemical</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Asian Paints </li>
                              <li><i className="fa fa-angle-double-right"></i> Akzo Nobel </li>
                              <li><i className="fa fa-angle-double-right"></i> UPL Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Nalco water (An Ecolab company) </li>
                              <li><i className="fa fa-angle-double-right"></i> Rhodia Speciality Chemicals </li>
                              <li><i className="fa fa-angle-double-right"></i> Bayer Crop Science </li>
                              <li><i className="fa fa-angle-double-right"></i> Boston Scientific India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> QUAKER CHEMICAL INDIA PRIVATE LIMITED </li>
                              <li><i className="fa fa-angle-double-right"></i> Solvay Group </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Fashion and Lifestyle</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Jindal Worldwide</li>
                              <li><i className="fa fa-angle-double-right"></i> Indo Count </li>
                              <li><i className="fa fa-angle-double-right"></i> Aquarelle India </li>
                              <li><i className="fa fa-angle-double-right"></i> Jockey India </li>
                              <li><i className="fa fa-angle-double-right"></i> Shoppers Stop Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> House of Anita Dongre </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Engineering</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> Keller </li>
                              <li><i className="fa fa-angle-double-right"></i> Angelique </li>
                              <li><i className="fa fa-angle-double-right"></i> Angelique International Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> Arcadis Consulting India Pvt Ltd </li>
                              <li><i className="fa fa-angle-double-right"></i> Keller Ground Engineering India Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Konecranes and Demag Pvt. Ltd. </li>
                              <li><i className="fa fa-angle-double-right"></i> Larsen &amp; Toubro Limited </li>
                              <li><i className="fa fa-angle-double-right"></i> UltraTech Cement Ltd </li>


                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-4 padding-0 indusbg1">
                        <div className="service-grid sec-title3">
                           <h4 className="title mb-18 industitle"><a href="#">Government</a></h4>
                           <div className="heading-border-line left-style"></div>
                           <ul className="socialhm">
                              <li><i className="fa fa-angle-double-right"></i> NTPC</li>
                              <li><i className="fa fa-angle-double-right"></i> Embassy of Netherlands </li>
                              <li><i className="fa fa-angle-double-right"></i> Reserve Bank of India </li>
                              <li><i className="fa fa-angle-double-right"></i> National Stock Exchange </li>
                           </ul>
                        </div>
                     </div>


                  </Slider>

               </div>

            </div>
         </div>

         <section className='ptt-50 pbb-50'>
            <div className='container'>
               <div className='row'>
                  <div className='col-md-8'>
                     <div className='row bgorwhite boderb5'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">RESOURCE CENTER</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <div className='col-sm-6 homeblogs'>
                           <a href="/books"><img src='/assets/img/home-book-1.jpg' alt='' /></a>
                           <a href="/books">Our book recommendations for your excellence</a>
                        </div>
                        <div className='col-sm-6 homeblogs'>
                           <a href="/videos"><img src='/assets/img/home-video.jpg' alt='' /></a>
                           <a href="/videos">Checkout the recent videos from our hub</a>
                        </div>

                     </div>
                  </div>
                  <div className='col-md-4'>
                     <div className='newsc'>
                        <div className='sec-title3 mbb-35'>
                           <h4 className="countertoph2">WHAT MAKES US DIFFERENT?</h4>
                           <div className="heading-border-line left-style"></div>
                        </div>
                        <div className='row'>
                           <div className='col-sm-12'>
                              <div className="counter-right mbb-15">
                                 <div className="counter-list-right mb-20 homeboxp">
                                    <div className="counter-icon-right">
                                       <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                    </div>
                                    <p className="title">Globally/Nationally researched and benchmarked, culturally neutral, and customizable products and services.</p>
                                 </div>
                              </div>
                           </div>
                           <div className='col-sm-12'>
                              <div className="counter-right">
                                 <div className="counter-list-right mb-20 homeboxp">
                                    <div className="counter-icon-right">
                                       <img src="/assets/img/icon/what-us-make1.png" alt="Counter" />
                                    </div>
                                    <p className="title">Solutions across organizational hierarchies ‘ranging’ from the board room to front-end staff.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-md-4 d-none'>
                     <div className='row rs-testimonial style2 bgorwhite rs-blog style1 pbb-15'>
                        <div className='col-sm-12'>
                           <div className='sec-title3 mbb-35'>
                              <h4 className="countertoph2">CLIENTS SPEAK</h4>
                              <div className="heading-border-line left-style"></div>
                           </div>
                        </div>
                        <Slider {...settings1}>
                           <div class="testi-wrap">
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

                           <div class="testi-wrap">
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

                           <div class="testi-wrap">
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
                  </div>
               </div>
            </div>
         </section>

         {/* <div id='popuphidec' class='popup wow fadeInUp delay-0-2s animated animateUP'>
            <div class='cnt223'>
               <a href='' class='close popupclose'>X</a>
               <div className='popupinner'>
                  <div className='popupimg text-center'>
                     <img src="/assets/img/popupimg.png" />
                     <h3>YOU CAN’T LEARN ANYTHING FROM A POP-UP.</h3>
                     <p>But you can learn a lot from insightful matters by our experts by getting those delivered to your inbox every month.</p>
                  </div>
                  <div className='popupform'>
                     <form id="contactForm" onSubmit={PopupRegisterd}>
                        <div className="row clearfix justify-content-center">
                           <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input type="email" id="EmailAddress" name="fmail" className="form-control popupsus" placeholder="Enter Your Email" required />
                              </div>
                           </div>

                           <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input id="submitbuttonformpopup" type="submit" className="theme-btn btnwidth fullbtn" value="SEND ME INSIGHTS" />
                              </div>
                              <div className="clearfix"></div>
                              <p id="showlabel1popup" className="submitpopup" style={{ display: "none" }}></p>
                           </div>

                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div> */}






      </>
   )
}
