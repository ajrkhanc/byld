import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

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


            <div class="rs-achievement style1 relative ptt-50">
                <div class="container">
                    <div class="row rs-vertical-middle">
                        <div class="col-lg-6">
                            <div class=""><img src="/efassets/img/employees-giving-hands-helping.jpg" alt="" /></div>
                        </div>
                        <div class="col-lg-6 pr-0">
                            <div class="fivemodelshd">
                                <h4 class="countertoph2 text-left font34">Get Access to the Best Corporate Team Building Games</h4>

                                <p class="justify mbb-5">
                                    Experiential learning programs help participants gain competence in areas such as leading teams or making quick decisions so as to improve processes, serve customers better, work with teams, improve processes, and manage time through virtual team games. At work, or in the office, developing good relationships is essential for a great organizational culture. Virtual fun activities for employees are a great way to enhance an inclusive work culture for your organization. Explore our offerings or connect with us to know more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rs-project style2 efhbg mtt-40 ptt-30 pbb-60">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">OUR OFFERINGS</h4>
                                <div className="heading-border-line center-style mbb-50"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/mus01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/museum-caper"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/museum-caper">Museum Caper™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/king01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/king-kahufu"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/king-kahufu">King Kahufu™ (Virtual Immersive Learning)</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/gold01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/gold-of-the-desert-kings">Gold Of Desert Kings™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/consil01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/council-of-the-marble-star"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/council-of-the-marble-star">Council Of Marble Star™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/promise01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/promises-promises"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/promises-promises">Promises! Promises!™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/rat01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/rattlesnake-canyon"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/outback.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/expedition-outback"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/expedition-outback">Expedition Outback™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/win01.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/windjammer"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/windjammer">Windjammer™</a></h3>
                                    </div>
                                </div>
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

                            <div className="sec-title3 mbb-35 text-center rs-estimate">
                                <p>
                                    BYLD Group is the largest group in the South Asian region, offering value-added services in Strategic and Operational HR, Business Operations, Manpower Staffing, Technology, Executive Coaching, Leadership, and Organizational Development. The first company of BYLD Group, Door Training, and Consulting India Pvt. Ltd. was founded in the year 1998, and since then we have served 5,00,000+ individuals, more than 50% of the Fortune 500 Companies and over 60% of the Business World Top 1000 Companies. Our key international alliances include The Ken Blanchard<sup>®</sup> Companies, Crucial Learning (formerly VitalSmarts™), Eagle’s Flight™, Everything DiSC<sup>®</sup> and The Five Behaviors<sup>®</sup> (Wiley Brands), Lumina Spark<sup>®</sup>, Business Today Simulations, InsideOut Development™, Persona Global<sup>®</sup>, Trapologist at Work™, Aster Coaching. Our India headquartered businesses comprise – Door Training and Consulting India Pvt. Ltd. (DTCI) and YOMA Business Solutions. With an annual turnover of over USD 32 Million (INR 230 crores approx.), more than 250 employees, our operational domain is spread across national and international boundaries. Backed by nearly 1000+ years of professional experience, our consultants support clients across industries to manage, develop and align the talent needs in line with their business objectives and strategies.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-testimonial style4 homebgcontactus ptt-30 pbb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">
                                <h4 className="countertoph2 text-center font30 colorw">Reach Out to Us</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-sm-7">
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
                                            <input id='submitbuttonform' className="clientcornnerbtn" type="submit" value="Submit" />
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <img src='/wileyassets/img/cside.png' alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
