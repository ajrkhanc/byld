import Head from 'next/head'

export default function Workshops(){
    return(
        <>
        <Head>
            <title>Event Calendar - Wiley</title>
            <meta name="description" content="Reserve Your Spot for Our Upcoming Virtual and Live Events Webinar: Everything DiSC Work of Leader June 4th, 2021 Webinar Learn More & Register Virtual Public Workshop: Everything DiSC Agile EQ June 18th, 2021 Workshop Learn More & Register Virtual Public Workshop: DISC® TTT June 23rd – 26th, 2021 Workshop Learn More & Register Our […]"/> 
        </Head>

        <section className='ptt-20 pbb-20'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                    <div className="sec-title3 mbb-35">
                        <h4 className="countertoph2 text-center font30">Reserve Your Spot for Our Upcoming Virtual and Live Events</h4>
                        <div className="heading-border-line center-style"></div>
                    </div>
                    </div>
                    <div className='clearfix'></div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/wileyassets/img/events.jpg" alt="" />
                                <span>Webinar: June 4th, 2021</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Everything DiSC Work of Leader</h3>
                                <a className="eventbtn" href='#'>Learn More & Register</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/wileyassets/img/events.jpg" alt="" />
                                <span>Workshop: June 18th, 2021</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>Everything DiSC Agile EQ</h3>
                                <a className="eventbtn" href='#'>Learn More & Register</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4'>
                        <div className='eventsbox'>
                            <div className='eventmiddle'>
                                <img src="/wileyassets/img/events.jpg" alt="" />
                                <span>Workshop: June 23rd – 26th, 2021</span>
                            </div>
                            <div className='eventbottom'>
                                <h3>DISC<sup>®</sup> TTT</h3>
                                <a className="eventbtn" href='#'>Learn More & Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="rs-about style4 bg21 pt-70 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div>
                       <h4 className="countertoph2 text-center font28">Our offerings in different modalities:</h4>
                    </div>
                    <div className="col-sm-4">
                        <div className="sec-title3 rs-estimate">                        
                        <ul className='estimate-info mtt-5'>
                            <li>Public Workshops</li>
                            <li>In house programs</li>
                            <li>Release of Assessments</li>                            
                        </ul>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="sec-title3 rs-estimate">                        
                        <ul className='estimate-info mtt-5'>
                            <li>Assessments and De brief sessions</li>
                            <li>Learning journeys</li>                            
                        </ul>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="sec-title3 rs-estimate">                        
                        <ul className='estimate-info mtt-5'>
                            <li>Everything DiSC Certification</li>
                            <li>Five Behaviour Certification</li>                            
                        </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>

        <div className="rs-testimonial style4 bg16 ptt-50 pbb-70">
                <div className="container">                   
                    <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                         <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-center">                                
                                <h4 className="countertoph2 text-left font34">Reserve Your Seat</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20'>                                         
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
                                    
                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="June 4th, 2021 Everything DiSC Work of Leader">June 4th, 2021 Everything DiSC Work of Leader</option>
                                                <option value="June 18th, 2021 Everything DiSC TTT Agile Workshop">June 18th, 2021 Everything DiSC TTT Agile Workshop</option>
                                                <option value="June 23rd-26th, 2021 Everything DiSC TTT Virtual Public Workshop">June 23rd-26th, 2021 Everything DiSC TTT Virtual Public Workshop</option>
                                            </select>
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By*</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared-Notes" placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="col-sm-6 mb-12 d-none">
                                            <input type="text" name="The Five Behaviors" placeholder="" value="The Five Behaviors" required />
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-2">
                         
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}