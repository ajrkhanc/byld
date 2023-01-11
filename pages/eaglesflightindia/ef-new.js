import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

    const Eaglesflightindia = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/eaglesflightindia/wp-json/contact-form-7/v1/contact-forms/18/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 48 working hours.";
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/eaglesflightindia/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-mx_States=" + event.target.Location.value +
            "&leadsquared-Company=" + event.target.organization.value +
            "&leadsquared-JobTitle=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&leadsquared-Notes=" + event.target.leadsquared_Notes.value +
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value)

    }

    return (
        <>
            <Head>
                <title>Best Team Building Exercises for Organizational Development</title>
                <meta name="description" content="Experiential Learning is a revelation for those who learn, experience, apply, and practice. But their implementation is done in the form of business team-building activities." />
            </Head>

            <div className="rs-services">
                <div className="container-full">
                    <div className="row y-middle">
                        <div className="col-sm-5">
                            <div className='efnlp'>
                                <h1>Do you want your team to be prepared for the future?</h1>
                                <h2>MINDSET IS EVERYTHING</h2>
                                <a href='#our-solutions'>Explore our Experiential Learning Solutions!</a>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <img className="img100" src="/efassets/img/ef-br.jpg" />
                        </div>
                    </div>
                </div>
            </div>

            <section className='eflp2box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h2>We're More Than Just a Training Company</h2>
                            <p>
                                We're a company that fosters change, teamwork, innovation, and forward momentum in businesses. We specialize in helping people to unlearn bad habits and mindsets that are holding them back so they can develop into their best selves. We don't just teach skills - we change lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div id='our-solutions' class="rs-project style2 efhbg ptt-30 pbb-60">
                <div class="container">
                    <div class="row">
                        <div className='col-sm-12'>
                            <div className="text-center">
                                <h4 className="oversl">Our Solutions</h4>                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/eagles-flight-museum-caper.jpg" alt="images" />
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
                                    <img src="/efassets/img/king-kahufu.jpg" alt="images" />
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
                                    <img src="/efassets/img/gold-of-the-desert-kings.jpg" alt="images" />
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
                                    <img src="/efassets/img/council-of-the-marble-star.jpg" alt="images" />
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
                                    <img src="/efassets/img/promises-promises.jpg" alt="images" />
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
                                    <img src="/efassets/img/rattlesnake-canyon.jpg" alt="images" />
                                </div>
                                <div class="project-content">
                                    <a class="p-icon" href="/eaglesflightindia/our-offerings/rattlesnake-canyon"><i class="custom-icon"></i></a>
                                    <div class="project-inner">
                                        <h3 class="title"><a href="/eaglesflightindia/our-offerings/rattlesnake-canyon">Rattlesnake Canyon™</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                        <div class="col-lg-4 col-md-6 mb-30">
                            <div class="project-item">
                                <div class="project-img">
                                    <img src="/efassets/img/expedition-outback.jpg" alt="images" />
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
                                    <img src="/efassets/img/windjammer.jpg" alt="images" />
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

            <div class="rs-about style4 bg21 mtt-60">
                <div class="container-full">
                    <div class="row y-middle">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-6">
                            <div class="sec-title3 mbb-35 text-left efmd">
                                <h2 class="">Gold Of The Desert Kings</h2>
                                <h3>Facing difficulty in optimizing productivity with limited time and resources</h3>

                                <div class="workshop-date">
                                    <h6><i class="fa fa-calendar" aria-hidden="true"></i> May 13th, 2022</h6>
                                    <h6><i class="fa fa-clock-o" aria-hidden="true"></i> 10.00 AM to 4.30 PM</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-img"><img src="/efassets/img/efc2.jpg" alt="images" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center connetc'>
                        <a href='#connect-now'>Connect Now</a>
                    </div>
                </div>
            </div>

            <div className="efclientbg ptt-50 pbb-40 solutionsboxarea">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center rs-estimate">
                            <h2>Satisfied Clients</h2>
                                <p>
                                My real estate agent was with me and my wife every step of the way. <br></br>She kept us updated throughout the process.
                                </p>
                                <h4>Jonah Granger</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="connect-now" className="rs-testimonial style4 homebgcontactus ptt-30 pbb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">
                                <h4 className="countertoph2 text-center font30 colorw">Reach Out to Us</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className='col-sm-2'></div>
                        <div className="col-sm-8">
                            <div className="bannerform">
                                <form id="contact-form" className='clientcornner ptt-40 pbb-20' onSubmit={Eaglesflightindia}>
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
                        

                    </div>
                </div>
            </div>

        </>
    )
}
