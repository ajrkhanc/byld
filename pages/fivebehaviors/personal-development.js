import Head from 'next/head'
import Link from 'next/link'
import Slider from "react-slick";


export default function PersonalDevelopment(){

    return(
        <>
          <Head>
            <title>Personal Development - Five Behaviors</title>
            <meta name="description" content="Connect With Us Personal Development Becoming an Effective Team Member Build and Fortify Individual Skills that Transcend Teams This new product was created to harness the power of The Five Behaviors™ across the entire organization. The Five Behaviors Personal Development solution teaches individuals to become better teammates by integrating Patrick Lencioni’s model at the organizational […]"/> 
          </Head>

  <div className="personal-developmentbg ptt-50 pbb-50">
   <div className="container custom">
      <div className="row y-middle">
         <div className="col-md-7 col-sm-12">
            <div className="content-wrap">                                
            </div>
         </div>
         <div className="col-md-5 col-sm-12">
            <div className="bannerform">
               <h2 className="formtitle">Connect With Us</h2>
               <form id="contact-form" className='clientcornner'>
                  <div className="row">
                     <div className="col-lg-12 mb-12">
                        <input type="text" name="name" placeholder="Enter Name*" required />
                     </div>
                     <div className="col-lg-12 mb-12">
                        <input type="email" name="name" placeholder="Enter Email*" required />
                     </div>
                     <div className="col-lg-12 mb-12">
                        <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                     </div>
                     <div className="col-lg-12 mb-12">
                        <select name="referredby" required>
                           <option value="">Referred By*</option>
                           <option value="Sales Representative">Sales Representative</option>
                           <option value="Email">Email</option>
                           <option value="Social Media">Social Media</option>
                           <option value="Google Search">Google Search</option>
                           <option value="Website">Website</option>
                           <option value="Reference">Reference</option>
                           <option value="SMS">SMS</option>
                        </select>
                     </div>
                     <div className="col-lg-12 mb-12 d-none">
                        <input type="text" name="leadsquared_mx_Business_Entity" placeholder="BYLD Group" value="BYLD Group" required />
                     </div>
                     <div className="col-lg-12 mb-12">
                        <textarea className="from-control" name="leadsquared-Notes" placeholder="Let us know what you are looking for."></textarea>
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
<div className="rs-about style4 bg21 pt-100 pb-100 md-pt-70 md-pb-70">
   <div className="container">
      <div className="row y-middle">
         <div className="col-lg-7">
            <div className="sec-title3 onlyshd">
               <span className="sub-text">Becoming an Effective Team Member</span>
               <h2 className="title countertoph2 paddingme">
                  Personal Development
               </h2>
               <h4 className="countertoph2 text-left">Build and Fortify Individual Skills that Transcend Teams</h4>
               <div className="desc pb-17">
                  This new product was created to harness the power of The Five Behaviors™ across the entire organization. The Five Behaviors Personal Development solution teaches individuals to become better teammates by integrating Patrick Lencioni’s model at the organizational level. The goal is to completely redefine teamwork and collaboration.
               </div>
               <p className="margin-0">
                  Personal Development was designed specifically to work for individuals; participants do not all need to be part of the same team. Rather, participants can carry the takeaways of this program from one team to the next, enabling a culture of teamwork. Learners at all levels of an organization can benefit from this program and adopt its powerful principles, shape behaviors, and create a common language that empowers people to rewrite what it means to work together.
               </p>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="about-img">
               <img src="/5bassets/img/person-development1.png" alt="images"/>
               <div className="animations one">
                  <img className="dance2" src="/5bassets/img/1.png" alt="About"/>
               </div>
               <div className="animations two">
                  <img className="scale" src="/5bassets/img/2.png" alt="About"/>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="rs-achievement style1 relative">
   <div className="container">
      <div className="row rs-vertical-middle">
         <div className="col-lg-6 pr-0">
            <h4 className="countertoph2 text-left font30">The Need for the Solution</h4>
            <p className='justify mbb-5'>Today’s organizations are working beyond a single team. Advances in technology are disrupting the market, globalization is forcing a new approach of working, and the teams of the future have never seen this level of diversity. In essence, organizations need to equip their employees to quickly create cohesive teams that enable results. The idea was to create a model that harnesses the power of Patrick Lencioni’s The Five Dysfunctions of a Team and adjust it to benefit the individual, who can then disperse the key takeaways throughout their organization.</p>
            <div className="sec-title3 mbb-35 text-left rs-estimate">
               <h4 className="countertoph2 text-left pbb-5">What does this program do?</h4>
               <p className="mbb-5">
               This is a tool to help individuals better understand, internalize, and apply the principles of The Five Behaviors model and to foster communication that can be used throughout an organization.
               </p>
               <p>
               It’s designed to be delivered in a classroom setting of up to 30 participants, regardless of how well they know one another.
               </p>
               <h4 className="countertoph2 text-left">The Program Includes:</h4>
               <ul className="estimate-info mtt-5">
                  <li>A computer-adaptive, psychological assessment</li>
                  <li>Personal Development Profile and one-on-one Comparison Reports</li>                  
                  <li>Half-day facilitation that includes activities, video, and a handout, plus two optional activities</li>
               </ul>
            </div>
         </div>
         <div className="col-lg-6 md-pt-50">
            <div className="img-part">
               <img src="/5bassets/img/achievement.jpg" alt=""/>
            </div>
         </div>
      </div>
      <img className="pattern-img" src="/5bassets/img/pattern4.png" alt=""/>
   </div>
</div>
  
        </>
    )
}