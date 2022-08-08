import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function ExperientialLearning(){

    return(
        <>
          <Head>
            <title>Experiential Learning | BYLD Group</title>
            <meta name="description" content="DOWNLOADS Brochure DOC Got any Questions? Call us today. 1800-102-1345 info@byldgroup.com Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to… Continue reading Experiential Learning"/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/experiential-learning.jpg"/>
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
                          <div className="sec-title3 mbb-35 text-left">
                            <h4 className="countertoph2 text-left font30">Experiential Learning</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            Today’s stressful and distracted workplace environments are taking a toll on people’s learning and development efforts. Let’s face it; working smarter is the only choice you have and this is where our experiential learning programs help you learn quickly and learn essential skills to keep delivering consistently.
                            </p>
                            <p className='solutionp'>
                            For companies of all sizes, and all kinds of people and organizational needs, we bring you a plethora of experiential learning trainings that are unique, highly effective and available in virtual, and offline formats:
                            </p>
                          </div>
                            <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" target="_blank" href="/eaglesflightindia">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Eagle’s Flight™</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                                <a class="productbox" href="/business-today-simulations">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Business Today Simulations</h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                            <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Gaminar</h4>                                
                                </div>
                                </a>
                            </div>
                            
                            <div class="col-sm-6">
                            <a class="productbox" href="/jenson-8">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Jenson8</h4>                                
                                </div>
                                </a>
                            </div> 

                            </div>                         
                       </div>
                       
                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}