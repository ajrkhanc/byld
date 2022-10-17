import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy(){
    return(
        <>
          <Head>
            <title>Executive Coaching - BYLD Group</title>
            <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/executive-coaching.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">
 

                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 text-left">                            
                            <p className='mtt-'>
                            Executive coaching is far beyond the basics of overcoming poor performance. The aim is to develop a strategy for high performance that can help leaders and high potential talent. Coaching is considered an indispensable part of an increasing number of organizations. But the key to success is getting a targeted coaching service. Leading organizations recognize one-on-one coaching as the most significant form. Executive coaching has great benefits and is known to help professionals. It speaks the language that leaders understand and makes them competent in their fields.
                            </p>
                            <p>
                            We have a dedicated team of commendable executive coaches who bring with themselves excellent track records, years of experience, and industry expertise. Over the years they have worked in various organizations of different domains to prove their potential and leadership transitions. The team offers a complete range of executive and senior management experience serving as facilitators, motivators, and the sound-boards to help you achieve your business goals, interpersonal relationships, and self-improvement issues.
                            </p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-12">                                
                              <h4 className="countertoph2 text-left">Benefits of Executive Coaching</h4>
                              <h5 className='pinkh'>On successful completion of executive coaching, professionals would be able to help in–</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>Improving business performance</li>
                                  <li>Enhancing individual development</li>
                                  <li>Increasing retention of key people</li>
                                  <li>Greater productivity and customer service</li>
                                </ul>
                              </div>                              
                            </div>

                            <div class="col-sm-12">
                              <h4 className="countertoph2 text-left">DTCI Strengths</h4>
                              <h5 className='pinkh'>Once the employees are committed to this coaching module, they’ll be able to gain a lot of benefits.</h5>
                              <div className='rs-estimate'>
                                <ul className='estimate-info mtt-5'>
                                  <li>We are one of the few companies in the world that offer executive coaching at local, regional, and global levels.</li>
                                  <li>All the coaches follow standard frameworks, structures, and reporting to maintain consistency throughout the module and regardless of the size of the project.</li>
                                  <li>The coaching focuses on both individual results as well as organizational results.</li>
                                  <li>The team is experienced enough to seamlessly amalgamate executive coaching with talent management, learning organization, strategic alignment, change management, and other major organizational initiatives.</li>
                                </ul>
                              </div>                            
                            </div>
                        
                            
                          </div>
                       </div>
                       
                       
                    </div>                     
                </div>
            </div>


            <div class="rs-process style1 pt-100 pb-100 md-pt-70 md-pb-70">                
                <div class="container">
                    <div class="row y-middle">
                    </div>
                </div>
                <div class="container custom2">
                    <div class="process-effects-layer">
                        <div class="row">
                          <div className='col'></div>
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='#'>
                                        <div class="number-image">
                                            <span>ICF Certification</span>
                                        </div>
                                         
                                        </a>                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/coaching/insideout-coaching'>
                                        <div class="number-image">
                                            <span>Inside Out Coaching</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col'></div>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}