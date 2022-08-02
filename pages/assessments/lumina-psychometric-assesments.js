import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function LuminaPsychomentricAssesments(){

    return(
        <>
          <Head>
            <title>Lumina Psychometric Assesments - BYLD Group</title>
            <meta name="description" content="DOWNLOADS Brochure DOC Got any Questions? Call us today. 1800-102-1345 info@byldgroup.com It is a cutting-edge professional development tool that provides employees with an opportunity to analyze their personalities by giving clear and jargon-free insights. This psychometric tool aims at transforming organizations through transforming their people. Lumina Spark facilitates every individual with their special Lumina Mandala… Continue reading Lumina Psychometric Assesments"/> 
          </Head>
            <div className="rs-services">
            <div className="container-full">
                <div className="row y-middle">
                    <div className="col-lg-12">
                      <img className="img100" src="/assets/img/banner/lumina-psychometric-assesments.jpg"/>
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
                       <div className="sec-title3 mbb-35 text-left rs-estimate">                            
                            <p className='mtt-30'>
                            <i>It is a cutting-edge professional development tool that provides employees with an opportunity to analyze their personalities by giving clear and jargon-free insights. This psychometric tool aims at transforming organizations through transforming their people.</i>
                            </p>
                            <p><i>Lumina Spark facilitates every individual with their special Lumina Mandala which explains their key strengths and vulnerabilities in the simplest way possible.</i></p>
                            <h4 className="countertoph2 text-left">How does it help?</h4>                            
                            <ul className='estimate-info mtt-5'>
                                <li>Lumina Spark helps employees to identify and work upon their positive and negative traits</li>
                                <li>Learners unlock better business benefits</li>
                                <li>Employees become more influential with external clients, colleagues, and stakeholders</li>
                                <li>Better, more cordial work relationships which enhance the work culture</li>
                            </ul>
                        </div>                        
                       </div>                       
                    </div>                     
                </div>
            </div>
            
        </>
    )
}