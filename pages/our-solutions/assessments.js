import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Assessments(){

    return(
        <>
          <Head>
            <title>Psychometric Assessment | Assessment for learning| BYLD Group</title>
            <meta name="description" content="Willing to know about our Psychometric assessment services? Get in touch with our subject matter experts and get to know about the wide range of fruitful services. For more info, click on the link."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/assesments.jpg"/>
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
                            <h4 className="countertoph2 text-left font30">Assessments</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                            A company is as strong as its people. Organizations of all sizes prefer psychometric assessments for hiring and managing people, and fostering the right culture across all the levels of an organizational hierarchy.
                            </p>
                            <p className='solutionp'>Explore our best-in-class assessment brands that have been revolutionizing people development across the globe:</p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" href="https://byldgroup.com/everythingdisc">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/disc.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">DiSC®</h4>                                                               
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="/assessments/lumina-psychometric-assesments">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/lumina-spark.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Lumina Spark</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="/assessments/talentsmart-eq-assesments">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/talentsmart-eq.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">TalentSmart EQ Assessments</h4>                                
                                </div>
                                </a>
                            </div>
                            <div class="col-sm-6">
                            <a class="productbox" href="/assessments/assessments-and-development-centers">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/assessments-and-development.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Assessments and Development Centers</h4>                                
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