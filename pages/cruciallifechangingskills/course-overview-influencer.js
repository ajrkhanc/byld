import Head from 'next/head'

export default function Courseoverviewcrucialconversationsformasteringdialogue(){
    return(
        <>
        <Head>
            <title>Course Overview - Crucial Conversations for Mastering Dialogue - Crucial Life-Changing Skills</title>
            <meta name="description" content=""/> 
        </Head>
        <section class="about-section workshop-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>FILL-IN YOUR DETAILS TO DOWNLOAD OR ACCESS THE FILE</h1>                       
                     </div>

                     <div class="col-md-12 form-area workshop-form">
                                <form class="row">                                     
                                    <div class="col-md-6 col-6">
                                        <input type="text" class="form-control" placeholder="Your Name*" required/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="email" class="form-control" placeholder="Your Email*" required/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="number" class="form-control" placeholder="Phone No.*" required/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <input type="text" class="form-control" placeholder="Organization*" required/> 
                                    </div>
                                    <div class="col-md-12">
                                        <input type="text" class="form-control" placeholder="Designation"/> 
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <label>Location</label>
                                        <select name='location' required>
                                        <option value="">—</option>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Srilanka">Srilanka</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-6">
                                        <label>Referred By</label>
                                        <select name='referredby' required>
                                            <option value="">-Please select-</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Reference">Reference</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12">                                         
                                       <textarea placeholder="Your Message" rows="5"></textarea> 
                                    </div>
                                    <div class="col-md-12">
                                       <button class="primary-btn submit">Submit</button> 
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </section>

        
        </>
    )
}