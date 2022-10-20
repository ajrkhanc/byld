import Head from 'next/head'

export default function Ebook(){

    const EbookForm = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/cruciallifechangingskills/wp-json/contact-form-7/v1/contact-forms/25/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details. Our subject matter experts will connect you within 24 working hours.";
                    document.getElementById("contactForm").reset();
                    document.getElementById("showlabel").style.display = "block";                   
                    setTimeout(function() {
                        window.open("/classets/pdf/accountability-is-missing-in-educational-performance-standards.pdf", "_blank")
                     }, 3000);
                    
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("yourname=" + event.target.name.value +
            "&youremail=" + event.target.email.value +
            "&phonenumber=" + event.target.phone.value +
            "&location=" + event.target.location.value +
            "&companyname=" + event.target.organization.value +
            "&designation=" + event.target.designation.value +
            "&referredby=" + event.target.referredby.value +
            "&acceptance=" + event.target.acceptance.value +
            "&ebookname=" + event.target.ebookname.value )

    }

    return(
        <>
        <Head>
            <title>Accountability is Missing in Educational Performance Standards - Crucial Life-Changing Skills</title>
            <meta name="description" content="Odds are high you’ve heard one or more of these phrases from a coworker. Odds are high you’ve heard one from yourself!"/> 
        </Head>
        <section class="about-section">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-12 left-about-area ptt-70 pbb-70 text-center">
                        <h1>Accountability is Missing in Educational Performance Standards</h1>
                        
                        <p className='colorb'>
                        If your school or district is not producing the results you want, it’s likely that accountability is missing in your culture. Learn to respectfully and honestly hold others accountable, and positive results will follow. A VitalSmarts survey of principals and administrators reveals a major disconnect between expectations and results within school districts.
                        </p>
                    </div>
            
                </div>
            </div>
        </section>

        <section className='ptt-40' id='registered'>
            <div className='container'>
              <div className='row workshop-form'>
             
                <div class="col-md-12 form-area ptt-10">
                    <form id="contactForm" class="row formb" onSubmit={EbookForm}>
                        <div class="col-lg-12 contact-title">                       
                        <h3 className='formh3 ptt-5'>
                           Fill in the form below and our subject matter expert will connect with you within 24 working hours.
                        </h3>
                        </div>
                        <div class="col-md-6 col-6">
                        <input type="text" name='name' placeholder="Your Name*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="email" name='email' placeholder="Your Email*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='location' placeholder="Location*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='organization' placeholder="Organization*" required/> 
                        </div>

                        <div class="col-md-6 col-6">
                        <input type="text" name='designation' placeholder="Designation"/> 
                        </div>

                        

                        <div class="col-md-12">
                        <select name='referredby' required>
                            <option value="">Referred By*</option>
                            <option value="Sales Representative">Sales Representative</option>
                            <option value="Email">Email</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Website">Website</option>
                            <option value="Reference">Reference</option>
                        </select>
                        </div>
                        <div className="col-sm-12 mb-12">
                                <div class="agree-label">
                                <input type="checkbox" name="acceptance" id="chb1" value="Subscribe to our newsletter to receive updates on our research, product news, and future webinars and workshops" required/>
                                <label for="chb1">*Subscribe to our newsletter to receive updates on our research, product news, and future webinars and workshops</label>
                            </div>
                        </div>
                        <div className="col-sm-12 mb-12 d-none">
                           <input type="checkbox" name="ebookname" value="Accountability is Missing in Educational Performance Standards"/> 
                        </div>   
                        
                        <div class="col-md-12">
                        <input id='submitbuttonform' class="formbtn" type="submit" value="Submit"/>
                        </div>
                        <p id="showlabel" style={{ display: "none" }}></p>
                    </form>
                </div>
              </div>
            </div>
            </section>
        
         
        </>
    )
}   