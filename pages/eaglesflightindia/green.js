import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";


export default function Home() {

    var settings = {
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
                <title>Eagle’s Flight | Experiential Learning | BYLD Group</title>
                <meta name="description" content="Eagle’s Flight offers corporate team building games in a virtual immersive learning environment for effective self-learning. To know more, check out the page." />
                <link rel="stylesheet" type="text/css" href="/efassets/css/new.css" />
            </Head>

            <section className='videosection'>
                <div class="videowrapper">
                    <video src="/efassets/img/video/video.mp4" autoPlay muted loop type="video/mp4"></video>
                </div>

                <div className='container ggt'>
                    <div className='row'>
                        <div className='col-sm-8'></div>
                        <div className='col-sm-4'>
                            <div>
                                <h1>ARE YOU ASPIRING TO BE A CERTIFIED COACH?</h1>
                                <a className='efnebtn' href='#'>Take Assessment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div class="rs-about style4 bg21 mtt-60">
                <div class="container">
                    <div class="row y-middle">
                        <div class="col-lg-7">
                            <div class="sec-title3 mbb-35 text-left onlyshd">
                                <h4 class="countertoph2 text-left font36">ABOUT OUR FIRM</h4>
                                <div class="heading-border-line left-style"></div>
                                <p class="mtt-40 font-20">
                                    Largest Training & Consulting company that helps certify leaders as Coaches based on <b>ICF approved</b> Curriculum licensed by Aster Coaching LLC (USA).
                                </p>
                                <div className='rs-estimate'>
                                    <ul className="estimate-info mtt-5 font-20 listhight">
                                        <li>Competitively priced program with the highest return on investment.</li>
                                        <li>Helped <b>600+</b> professionals from various industries</li>
                                    </ul>
                                </div>
                                <a className='dbro' href='#'>Download Brochure</a>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-img"><img src="/efassets/img/business-team-building.svg" alt="images" /></div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="rs-project style2 efhbg mtt-40 ptt-30 pbb-60">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">Reasons To Choose BYLD</h4>
                                <div className="heading-border-line center-style mbb-50"></div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="rcbyldbox rcby1">
                                <h3><span>100%</span> Online (ViLT)</h3>
                            </div>
                            <div class="rcbyldbox  rcby2">
                                <h3>Guaranteed Peer coaching assistance</h3>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby3">
                                <h3>Coaches Trained</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby4">
                                <h3><span>9+</span> Years of Experience</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby5">
                                <h3><span>10 hours</span> of mentor Coaching included</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby6">
                                <h3><span>100%</span> Pass Results for CKA</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="rcbyldbox  rcby7">
                                <h3>ICF Accredited Coaches</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                            <div class="rcbyldbox  rcby8">
                                <h3>Unlimited access Online Mock assessments</h3>
                                <a class="p-icon" href="#"><i class="fa fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="shape-bg ptt-50 pbb-40 solutionsboxarea">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">About BYLD Group</h4>
                                <div className="heading-border-line center-style mbb-30"></div>
                            </div>

                            <div className='testmm'>
                                <Slider {...settings}>
                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Why ICF certification is imperative?</h3>
                                            </div>
                                            <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="innertest">
                                        <div class="item-content">
                                            <div className='testmicon1'>
                                                <img src="/efassets/img/t1.png" alt="Testimonial" />
                                            </div>
                                            <div className='testmh'>
                                                <h3>Who can consider the ICF accredited certification program?</h3>
                                            </div>
                                            {/* <div className='testmp'>
                                                <p>
                                                    The online program was complete with several videos, real life examples and activities / note taking facility post each leg of the module which helped reflect on the learnings and its application. While a classroom training is best suited for this kind of a learning, the online module was well designed and engaging keeping the current constraints in perspective
                                                </p>
                                            </div> */}
                                            <div className='rs-estimate'>
                                                <ul className="estimate-info mtt-5 font-20 listhight">
                                                    <li>HR heads, HR managers, Training managers, Trainers, and Consultants</li>
                                                    <li>Business Heads, Directors, General Managers, Managers, and Entrepreneurs</li>
                                                    <li>CEOs, Senior leaders, Line Managers, Team Leaders, Supervisors, and all other C-suit executives.</li>
                                                </ul>
                                            </div>
                                            <div className='testmicon2'>
                                                <img src="/efassets/img/t2.png" alt="Testimonial" />
                                            </div>
                                        </div>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-testimonial style4 homebgcontactus">
                <div className="container-fluid pa0">
                    <div className="row">
                        <div className="clearfix"></div>
                        <div className="col-sm-5 brodbg">
                            <h2>Passionate About Coaching?</h2>
                            <h3>Enroll for our upcoming 39th Batch!</h3>
                            <h4>STARTING  22ND APRIL <br></br>10:00 AM TO 4:00 PM</h4>
                        </div>
                        <div className="col-sm-7 brod2bg">
                            <div className="bannerform">
                                <form id="contact-form" className='clientcornner ptt-40 pbb-20'>
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
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Reference">Reference</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared_Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-sm-12 d-none">
                                            <input type="text" name="Business_Entity" value="Eagles Flight" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Registered" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/teststar.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Rajat Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Suresh Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                        <div className='col-sm-4 nntestb'>
                            <div className='newtest'>
                                <h3>Rahul Sharma</h3>
                                <p>It’s been a true inspiration for me to attend the coach certification program. It has been a very exhilarating journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="rs-faq" class="rs-faq ptt-60 pbb-50">
                <div className="container">
                    <div className="row ">
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4 text-center'>
                            <img src="/efassets/img/faqs.png" alt="Testimonial" />
                        </div>
                    </div>

                    <div className="row ptt-40">
                        <div className='col-sm-12'>
                            <div class="faq-content">
                                <div id="accordion" class="accordion">
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="card-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">What is included in the fees of the course?</a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="card-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">In Addition to the coaching sessions, what else is included in the program?</a>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <a class="card-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">Are there easy finance options available?</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="ptt-60 pbb-50 lastcc">
                <div className="container">
                    <div className="row ">                        
                        <div className='col-sm-12 text-center'>
                            <h2>Still have a doubt about coaching ?</h2>
                            <a href='#'>TALK TO US</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
