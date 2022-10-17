import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Coaching(){

    return(
        <>
          <Head>
            <title>Coaching and Mentoring | Coaching Certification | BYLD Group</title>
            <meta name="description" content="Coaching in the workplace is one of the most important aspects to ponder upon. For keeping the employees motivated and engaged, coaching and mentoring help employees to work with interest and positivity."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/coaching.jpg"/>
                    </div>         
                </div>
            </div>
            </div>

            <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
                <div class="container">                    
                    <div class="row">

                   

                       <div class="col-sm-12 rightsides">
                       <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">Coaching</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            Managing the complexities of VUCA business environment, disengaged employees, lowering morale and elevating ROI expectations has never been so challenging the way it has become now. To deal with these complexities and frequently changing business environment, organizations today need to invest in coaching and development of their leaders, that helps them navigate successfully through these tough times.
                            </p>
                            <p className='solutionp'>Our time-tested approach and renowned brands have been creating successful coaches and leaders around the world. Our key partnerships include:</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-4">
                                <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/coaching-academy.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">ICF Certification</h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                            <a class="productbox" href="/coaching/insideout-coaching">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/talentsmart-eq.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Inside Out Coaching</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6 d-none">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Breakthrough</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-4">
                            <a class="productbox" href="/coaching/executive-coaching">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Executive Coaching</h4>                                
                                </div>
                                </a>
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
                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                        <a className='hccs' href='/our-solutions/experiential-learning'>
                                        <div class="number-image">
                                            <span>Experiential Learning</span>
                                        </div>
                                         
                                        </a>                                        
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/leadership-and-talent-development'>
                                        <div class="number-image">
                                            <span>Leadership & Performance</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/assessments'>
                                        <div class="number-image">
                                            <span>Assessments</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/bespoke'>
                                        <div class="number-image">
                                            <span>BeSpoke</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="rs-addon-number">
                                    <div class="number-part">
                                    <a className='hccs' href='/our-solutions/staffing'>
                                        <div class="number-image">
                                        <span>Staffing & Search</span>
                                        </div>
                                        
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
            
        </>
    )
}