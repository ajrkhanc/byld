import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

    const HomeForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/5/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function () {
                        window.location.href = "/cruciallifechangingskills/thank-you"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-name=" + event.target.name.value +
            "&your-email=" + event.target.email.value +
            "&PhoneNumber=" + event.target.phone.value +
            "&your-subject=" + event.target.subject.value +
            "&your-message=" + event.target.message.value)

    }

    return (
        <>

            <section class="hero-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="d-md-block d-none col-lg-2 p-0">
                            <img class="left-image" src="/classets/img/circle-header-1.jpg" alt="" />
                        </div>

                        <div class="col-lg-6 middle-area">
                            <h1>Learn Life-Transforming Skills</h1>
                            <p>Enroll in our award-winning trainings and learn how to handle the most crucial challenges of life and work.</p><br />
                            <h6><a class="secondary-btn" href="/cruciallifechangingskills/browse-courses/">Browse Courses</a>
                                <a class="primary-btn" href="/cruciallifechangingskills/contact-us">Get Started</a></h6>
                        </div>
                        <div class="col-lg-4 right-image">
                            <img class="left-image img70" src="/classets/img/sitting-woman.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="video-section-main">
                <div class="container-fluid">
                    <div class="row video-section">
                        <div class="col-md-6 offset-md-3">
                            <div class="row video-area">
                                <img class="" src="/classets/img/maxresdefault.jpg" alt="" />
                                <div class="video-icon">
                                    <i class="ph-play-circle-bold"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <p className='colorb'>
                                Based on <strong>30+ years</strong> of social science research, our courses for managers have proven highly effective in strengthening relationships, achieving more with less stress, building habits for success,
                                and experience greater joy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why-us">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h2><span>Why Us?</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section class="features">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 feature-left">
                            <img src="/classets/img/bulb.svg" />
                        </div>
                        <div class="col-md-8">
                            <div class="row feature-right">
                                <div class="col-md-2 feature-icon">
                                    <img src="classets/img/Premier-1.svg" />
                                </div>
                                <div class="col-md-10 feature-content">
                                    <h4>Premier</h4>
                                    <p>We’ve ranked amongst the top 20 Leadership Training companies, for seven years and counting.</p>
                                </div>
                                <div class="col-md-2 feature-icon">
                                    <img src="classets/img/Proven.svg" />
                                </div>
                                <div class="col-md-10 feature-content">
                                    <h4>Proven</h4>
                                    <p>Our solutions are backed by 30 years of social science research and have proven highly effective in bringing about a real behavior change.</p>
                                </div>
                                <div class="col-md-2 feature-icon">
                                    <img src="classets/img/Flexible-1.svg" />
                                </div>
                                <div class="col-md-10 feature-content">
                                    <h4>Flexible</h4>
                                    <p>Our learnings and corporate training course are ﬂexible and available in various formats including in-person, virtual, and on-demand.</p>
                                </div>
                                <div class="col-md-2 feature-icon">
                                    <img src="classets/img/trusted.svg" />
                                </div>
                                <div class="col-md-10 feature-content">
                                    <h4>Trusted</h4>
                                    <p>More than 93% of our customers say that they would recommend us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why-us choose-path">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10 offset-md-1 text-center title">
                            <h2><span>CHOOSE YOUR PATH</span></h2>
                            <p>
                                To ensure you and your organization beneﬁts from our world-renowned training, we offer courses in ﬂexible formats including in person, virtually, or on-demand—or you can blend them for a unique and engaging learning experience to learn Effective Communication Skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="grey-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="row feature-content text-center feature-box">
                                        <img className='imgmauto img70 pbb-30' src="classets/img/icon-on-demand-1.svg" />
                                        <h4>On Demand</h4>
                                        <p>Learn at your own pace online.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="row feature-content text-center feature-box">
                                        <img className='imgmauto img70 pbb-30' src="classets/img/icon-virtual-1.svg" />
                                        <h4>Virtual</h4>
                                        <p>Join one of our instructors online.</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="row feature-content text-center feature-box">
                                        <img className='imgmauto img70 pbb-30' src="classets/img/icon-in-person.svg" />
                                        <h4>On Demand</h4>
                                        <p>Learn at your own pace online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="why-us crucial-learning">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center title">
                            <h2><span>WE ARE NOW CRUCIAL LEARNING</span></h2>
                            <p>This change is a new beginning of our efforts to serve you with more ﬂexible, accessible, and inclusive learning options.</p>
                            <a class="explore" href="/cruciallifechangingskills/browse-courses">Happy Exploring!</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="our-solutions">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center title">
                            <h2><span>OUR SOLUTIONS</span></h2>
                        </div>
                        <div className='clearfix'></div>
                    </div>
                    <div class="row">

                        <div class="col">
                            <div class="row solutions-box">
                                <img src="/classets/img/cc2-icon-ai.svg" />
                                <h3>Crucial Conversations for Mastering Dialogue</h3>
                                <a href="/cruciallifechangingskills/crucial-conversations-for-mastering-dialogue" >Read More»</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row solutions-box">
                                <img src="/classets/img/cc2-icon-ai.svg" />
                                <h3>Crucial Conversations for Accountability</h3>
                                <a href="/cruciallifechangingskills/crucial-conversations-for-accountability" >Read More»</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row solutions-box">
                                <img src="/classets/img/poh-icon-ai.svg" />
                                <h3>Power of Habit</h3>
                                <a href="/cruciallifechangingskills/the-power-of-habit" >Read More»</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row solutions-box">
                                <img src="/classets/img/inf-icon-ai.svg" />
                                <h3>Inﬂuencer</h3>
                                <a href="/cruciallifechangingskills/influencer" >Read More»</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row solutions-box">
                                <img src="/classets/img/gtd-icon-ai-svg.svg" />
                                <h3>Getting Things Done</h3>
                                <a href="/cruciallifechangingskills/getting-things-done" >Read More»</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-7 form-area">
                                    <form id='contactForm' class="row" onSubmit={HomeForm}>
                                        <div class="col-md-6">
                                            <input type="text" name='name' class="form-control" placeholder="Your Name*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" name="email" class="form-control" placeholder="Your Email*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" name="phone" class="form-control" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" name='subject' class="form-control" placeholder="Subject*" required />
                                        </div>
                                        <div class="col-md-12">
                                            <textarea name='message' placeholder="Your Message" rows="5"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button id="submitbuttonform" class="primary-btn submit" type='submit'>Submit</button>
                                        </div>
                                        <p id="showlabel" style={{ display: "none" }}></p>
                                    </form>
                                </div>
                                <div class="col-md-5 contact-image">
                                    <img src="/classets/img/contact-1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
