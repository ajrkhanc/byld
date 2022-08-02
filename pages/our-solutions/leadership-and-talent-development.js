import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function leadersShipAndTalentDevelopment(){

    return(
        <>
          <Head>
            <title>Leadership Development | Leadership Training | BYLD Group</title>
            <meta name="description" content="For leadership development, organizations need to educate their people. For this, various leadership trainings can be helpful. Connecting the subject matter experts can be productive in knowing perks of opting for the training."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/leadership-and-talent-development.jpg"/>
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
                            <h4 className="countertoph2 text-left font30">Leadership Development and Performance Enhancement</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                              Ever since the COVID 19 pandemic has hit the world, leaders across the globe have been striving hard to maintain peace within their teams while improving their productivity. Give your leaders the right skills, support, and methods that successful leaders around the world are using.
                            </p>
                            <p className='solutionp'>
                            We bring you a plethora of world-renowned, training brands that have been at the top list of 500 fortune companies. These include:
                            </p>
                        </div>

                          <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" href="/the-ken-blanchard-group-of-companies-blanchard-india">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/b1.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Blanchard India</h4>                                                               
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                                <a class="productbox" href="/tirian">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b5.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Tirian</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                                <a class="productbox" href="/cruciallifechangingskills/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b2.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Crucial Life Changing Skills</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6">
                            <a class="productbox" href="/leadership-and-performance/trapologist">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/b5.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">Trapologist at Work™</h4>                                
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