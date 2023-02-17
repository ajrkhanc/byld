import Head from 'next/head'
import Slider from "react-slick";

export default function JoinOurPartnerNetworkLP() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
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

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/75/feedback');
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
        xhttp.send("fname=" + event.target.fname.value +
            "&email=" + event.target.email.value +
            "&phone=" + event.target.phone.value +
            "&Occupation=" + event.target.occupation.value +
            "&wheredidyoucome=" + event.target.howdidyouknowaboutus.value)

    }

    return (
        <>
            <Head>
                <title>CP LP - BYLD Group</title>
                <meta name="description" content="Welcome to BYLD Group! Join the BYLD Group Partner network, and become our business partner to maximize your growth opportunities. We are the largest group in South Asia offering HR and business productivity solutions for individuals, teams and organizations. Served 300 of 500 Fortune companies. Founded in 1998, backed by 1000+ years of accumulated professional… Continue reading Join our Partner network LP Ab Testing" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet"></link>
            </Head>

            <section className='cplps1 ptt-50 pbb-50'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-6'>
                            <div>
                                <h1>We Diagnose Your Problems, Curate an Action Plan, and Offer Bespoke Solutions for Actionable Results</h1>
                                <p>BYLD Group, a leading multinational organization, is working closely with various Fortune 500 and Business World Top 1000 companies through its technology-enabled HR, leadership, assessment, and business productivity solutions.</p>
                                <a href='#GetinTouch'>Explore our whitepapers</a>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div>
                                <img src="https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/image-3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='cplps2 ptt-50 pbb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Know Our Consulting Practitioners (CPs):</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-4'>
                            <div className='teamf'>
                                <div className='teamimgc'>
                                    <img src="/assets/img/team/amar1.jpg" alt="image" />
                                </div>
                                <div className='teamfro'>
                                    <h3>Amarvijayy Taandur</h3>
                                    <h4>Principal Advisor - Service Industry</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='teamf'>
                                <div className='teamimgc'>
                                    <img src="/assets/img/team/ronald1.jpg" alt="image" />
                                </div>
                                <div className='teamfro'>
                                    <h3>Ronald Soans</h3>
                                    <h4>Service Industry</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='jopn1 ptt-50 pbb-50 cplps3'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Stuck with your business? Ask our seasoned industry experts</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='boxshd borderr mtt-30'>
                                <div className="bannerform">
                                    <p className='cplpf'>Fill out the form below, and we will reach out to you within 24 hours.</p>
                                    <form id="contact-form" className='clientcornner' onSubmit={registerUser}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-12">
                                                <input type="text" name="fname" placeholder="First Name*" required />
                                            </div>
                                            <div className="col-lg-6 mb-12">
                                                <input type="email" name="email" placeholder="E-mail*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                            </div>
                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="company" placeholder="Company Name*" required />
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input type="text" name="designation" placeholder="Designation*" required />
                                            </div>



                                            <div className="col-lg-12 mb-12">
                                                <select name="howdidyouknowaboutus" required>
                                                    <option value="">Referred By</option>
                                                    <option value="Email">Email</option>
                                                    <option value="LinkedIn">LinkedIn</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Twitter">Twitter</option>
                                                </select>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <textarea className="from-control" name="leadsquared_Notes" placeholder="Questions/Comments:"></textarea>
                                            </div>

                                            <div className="col-lg-12 mb-12">
                                                <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Get help now" />
                                            </div>
                                            <p id="showlabel" style={{ display: "none" }}></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='pll-50'>
                                <img src="/assets/img/co/c1.png" alt="image" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='GetinTouch' className='ptt-50 pbb-70 cplps4'>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12'>
                            <div class="sec-title3 text-center mb-30">
                                <h2 class="title color2 font345">Let Us Explore Our Professional Journey Together</h2>
                                <div class="heading-border-line center-style"></div>
                            </div>
                        </div>


                        <div className='col-sm-8 cld'>
                            <Slider {...settings}>
                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src="/assets/pdf/pdfi/challenges-and-recommendations-for-auto-industry.jpg" />
                                        <a href='/assets/pdf/challenges-and-recommendations-for-auto-industry.pdf' download>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src="/assets/pdf/pdfi/auto-industry-white-paper.jpg" />
                                        <a href='/assets/pdf/auto-industry-white-paper.pdf' download>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src="/assets/pdf/pdfi/roadblocks-in-the-growth-path-for-BFSI-Industry.jpg" />
                                        <a href='/assets/pdf/roadblocks-in-the-growth-path-for-BFSI-Industry.pdf' download>Download White Paper</a>
                                    </div>
                                </div>

                                <div className='logoslider'>
                                    <div className='impdf'>
                                        <img src="/assets/pdf/pdfi/what-will-spur-BFSI-industry-to-its-next-peak.jpg" />
                                        <a href='/assets/pdf/what-will-spur-BFSI-industry-to-its-next-peak.pdf' download>Download White Paper</a>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                        <div className='col-sm-4'>
                            <div className='aass'>
                                <a target="_blank" href='https://byldgroup.com/cruciallifechangingskills/assessment/gtd-assessment-marketing'>
                                    <img src="/assets/img/assessing.jpg" />                                   
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
















            {/* <section className='ptt-20 pbb-20'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className="sec-title3 mbb-35">
                                <h4 className="countertoph2 text-center font30">To get more insights, register for any of the upcoming sessions below:</h4>
                            </div>
                        </div>
                        <div className='clearfix'></div>



                        <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/assets/img/events.jpg" alt="" />
                                <span>Webinar 18th January 2023</span>
                            </div>
                            
                            <div className='eventbottom'>
                                <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                <h5>Time: 11:00 PM - 12:00 PM</h5>
                                <a className="eventbtn" href='#'>REGISTER NOW</a>
                            </div>
                        </div>
                    </div>

                        <div className='col-sm-4'>
                            <div className='eventsbox'>
                                <div className='eventmiddle'>
                                    <img src="/assets/img/events.jpg" alt="" />
                                    <span>Webinar 15th February 2023</span>
                                </div>

                                <div className='eventbottom'>
                                    <h3 className='hhd'>BYLD Partner Network Briefing</h3>
                                    <h5>Time: 11:00 PM - 12:00 PM</h5>
                                    <a className="eventbtn" href='#'>REGISTER NOW</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}


        </>
    )
}


