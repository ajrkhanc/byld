import Head from 'next/head'

export default function Ebookpage(){

    const EbookSubmit = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/everythingdisc/wp-json/contact-form-7/v1/contact-forms/5/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    setTimeout(function() {
                        window.open("/edassets/pdf/ed-wiley-ebook-keepyourpeople-partner.pdf", "_blank")
                     }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("leadsquared-FirstName=" + event.target.name.value +
            "&leadsquared-EmailAddress=" + event.target.email.value +
            "&leadsquared-Mobile=" + event.target.phone.value +
            "&leadsquared-Company=" + event.target.organization.value +          
            "&leadsquared-mx_Business_Entity=" + event.target.Business_Entity.value +
            "&formname=" + event.target.formname.value )

    }

    return(
        <>
          <Head>
            <title>How to Navigate The Great Resignation - Everything DiSC</title>
            <meta name="description" content="The more volatile, uncertain, complex, and ambiguous our working environments become, the more critical a truly agile workforce is to success. "/> 
          </Head>

          <div className="rs-services">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <div className='sec-title3 ptt-30'>
                      <h4 className="countertoph2 text-center font30">Keep Your People:</h4>
                      <div className="heading-border-line left-center"></div>
                      </div>
                    </div>         
                </div>
            </div>
            </div>


            <div className="rs-achievement style1 relative ptt-50 pbb-40">
            <div className="container">
                <div className="row rs-vertical-middle">                    
                    <div className="col-lg-6 pr-0">
                        <div className='onlyshd'>
                        <h4 className="countertoph2 text-left font24">How to Navigate The Great Resignation</h4>
                        <h5 className='font18'>Work is very different than it was at the optimistic onset of 2020.</h5>
                        <p className='mall5'>
                        Our lives turned upside down and for many of us, our workday went from cubicles and commutes to pajama pants, homeschooling, and trying to meet deadlines with the constant background noise of home life. For those who were not able to stay home, work suddenly included masks, sanitizer, and social distancing – giving “work stress” a whole new meaning. From a talent perspective, some businesses weathered the pandemic storm better than others, adapting quickly to respond to the needs of their people.
                        </p>                        
                        <p className='mall5'>
                        Conversely, coming out of the pandemic, others have lost top talent because they didn’t emphasize a people-centered approach, which leverages the unique needs, insights, and capabilities of your people and weaves them into the fabric of your organization to build a foundation of trust, openness, and resilience.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 md-pt-50">
                        <div className="borderall">
                        <div className="bannerform formshd">
                            <div className="sec-title3 mbb-35 text-left">                                
                                <h4 className="countertoph2 text-left font24">Download now</h4>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <form id="contact-form" className='clientcornner pbb-20' onSubmit={EbookSubmit}>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Your Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No. (Optional)" />
                                        </div> 
                                        
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization (Optional)" />
                                        </div>                                       
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="formname" value="How to Navigate The Great Resignation"/>
                                        </div>
                                        <div className="col-sm-12 mb-12 d-none">
                                            <input type="text" name="Business_Entity" value="Everything DiSC"/>
                                        </div>                                        
                                        <div className="col-lg-12 mb-12">
                                        <input id="submitbuttonform" className="clientcornnerbtn" type="submit" value="Download"/>
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