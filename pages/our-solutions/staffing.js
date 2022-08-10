import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function Staffing(){

    return(
        <>
          <Head>
            <title>Staffing Services | Temporary Staffing</title>
            <meta name="description" content="We combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee lifecycle management through a single tool."/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/staffing.jpg"/>
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
                            <h4 className="countertoph2 text-left font30">Staffing & Search</h4>
                            <div className="heading-border-line left-style"></div>
                            <p className='mtt-30'>
                               With the advent of technology and automation, more and more companies are focusing on digitizing their processes. This is where we combine technology and staffing services to provide a one-stop solution to manage recruitment, training, payrolls, payments, and automate complete employee lifecycle management through a single tool.
                            </p>
                            <p className='solutionp'>
                               With a team of expert consultants having wide experience and expertise in the local labor market, and cutting-edge technology, we offer you excellent staffing and business operation solutions to take your business forward. Our two major verticals include:
                            </p>
                          </div>
                            <div className='row'>
                            <div class="col-sm-6">
                                <a class="productbox" target="_blank" href="https://yomamultinational.com/">
                                <div class="service-grid">
                                    <div class="service-icon">
                                    <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">YOMA Business Solutions</h4>                                
                                </div>
                                </a>
                            </div>

                            <div class="col-sm-6 d-none">
                                <a class="productbox" href="#">
                                <div class="service-grid">
                                    <div class="service-icon">
                                        <img src="/assets/img/icon/link.png" alt=""/>
                                    </div>
                                    <h4 class="title mb-18">YOMA Technologies</h4>                                                               
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