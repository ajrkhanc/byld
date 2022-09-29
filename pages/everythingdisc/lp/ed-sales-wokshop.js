import Head from 'next/head'

export default function EDSalesWorkshop(){


    return(
        <>
          <Head>
            <title>ED Sales Wokshop - Everything DiSC</title>
            <meta name="description" content="Everything DiSC Sales is a personalized learning experience designed to help sales people successfully create customer-centric interactions that improve results."/> 
          </Head>

          <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/edassets/img/ed-sales-banner.jpg"/>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">
                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd pb-30'>                        
                        <p className='mall5 ptt-30'>
                        Everything DiSC<sup>®</sup> Sales is a personalized learning experience designed to help sales people successfully create customer-centric interactions that improve results.
                        </p>                        
                        <p className='mall5'>Attend the Everything DiSC<sup>®</sup> Sales training to learn how to stretch beyond the natural Sales style to more effectively adapt to customers’ preferences and expectations—regardless of the customer’s unique buying style.</p>
                        <p className='mall5'><span className='themecolor'>Key learnings:</span></p>
                        <div className='rs-estimate'>                        
                        <ul className="estimate-info mtt-5">
                            <li>Learn how to better connect with the customers.</li>
                            <li>Learn how to IncreaseSales effectiveness with power of DiSC<sup>®</sup>.</li>
                            <li>Learn to communicate better and improve sales relationships using the power of DiSC<sup>®</sup>.</li>
                            <li>Identify and understand customer’s DiSC<sup>®</sup> buying styles.</li>
                            <li>Learn to adapt the DiSC<sup>®</sup> sales to meet customer’s needs.</li>                            
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-5 text-left">                                
                                <h4 className="countertoph2 text-left font24">Reserve Your Seat</h4>                                
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
                                            <select name="slot" required>
                                                <option value="">Pick up any Slot*</option>
                                                <option value="June 18th 2021, The Everything DiSC Agile EQ">June 18th 2021, The Everything DiSC Agile EQ</option>
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
                                            <textarea className="from-control" name="leadsquared-Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>

                                        <div className="col-sm-6 mb-12 d-none">
                                            <input type="text" name=" Business_Entity" value="Everything DiSC" required />
                                        </div>

                                        <div className="col-lg-12 mb-12">
                                        <input className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
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