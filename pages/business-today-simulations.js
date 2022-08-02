import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Layout/sidebar'

export default function BusinessTodaySimulations(){
    return(
        <>
          <Head>
            <title>Business Today Simulations - BYLD Group</title>
            <meta name="description" content="DOWNLOADS Brochure DOC Got any Questions? Call us today. 1800-102-1345 info@byldgroup.com Do your leaders understand the impact of their decisions on the financial health of your organization? Business Acumen Today utilises discovery learning technologies to significantly improve the performance of people and organizations. In partnership with Business Today, we present our wide range of 170+… Continue reading Business Today Simulations"/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/business-today-simulations.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                    <div className='col-sm-4 leftsides'>
                          <div className='rightsidebar'>
                            <Sidebar></Sidebar>
                          </div>
                       </div>

                       <div class="col-sm-8 rightsides">
                       <div className="sec-title3 text-left">
                            <h4 className="countertoph2 text-left font30">Do your leaders understand the impact of their decisions on the financial health of your organization?</h4>
                            <p className='mtt-5'>
                            Business Acumen Today utilises discovery learning technologies to significantly improve the performance of people and organizations.
                            </p>
                            <p>
                            In partnership with Business Today, we present our wide range of 170+ customizable, globally known, industry-specific simulations that are created in accordance to the client’s business needs and goals.
                            </p>
                            <p>
                            People in our simulation workshops learn by doing and not by just listening, reading, or watching. Because they have personally experienced the results (both successes and failures) that come with applying their existing skills and developing new behaviors, participants retain more information and are more likely to enthusiastically apply their new knowledge in their real world back on the job.
                            </p>
                            <h4 className="countertoph2 text-left font30">About BYLD Group</h4>
                            <p>
                            BYLD is the largest group in the South Asian region, offering value-added services in Strategic and Operational HR, Business Operations, Manpower Staffing, Technology, Executive Coaching, Leadership, and Organizational Development. The first company of BYLD Group, Door Training, and Consulting India Pvt. Ltd. was founded in the year 1998, and since then we have served 4,00,000+ individuals, more than 50% of the Fortune 500 Companies and over 60% of the Business World Top 1000 Companies.
                            </p>
                            <p>
                            Our key international alliances include The Ken Blanchard<sup>®</sup> Companies, VitalSmarts<sup>®</sup>, Eagle’s FlightTM, Everything DiSC<sup>®</sup> and The Five Behaviors<sup>®</sup> (Wiley Brands), Lumina Learning<sup>®</sup>, Business Today Simulations, InsideOut DevelopmentTM, Persona Global<sup>®</sup>, Trapologist at Work™, Aster Coaching. Our India headquartered businesses comprise – Door Training and Consulting India Pvt. Ltd. (DTCI) and YOMA Business Solutions. With an annual turnover of over USD 32 Million (INR 230 crores approx.), more than 250 employees, our operational domain is spread across national and international boundaries. Backed by nearly 1000+ years of professional experience, our consultants support clients across industries to manage, develop and align the talent needs in line with their business objectives and strategies.
                            </p>
                        </div>
                       </div>
                       
                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}