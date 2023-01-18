import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy() {

  

  return (
    <>
      <Head>
        <title>Become a Coach - BYLD Group</title>
        <meta name="description" content="When you think of becoming a coach – Think BYLD" />
      </Head>

      <section className='icfmain'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='pagetitle text-center'>
                <h1>Become a Coach</h1>
                <p>When you think of becoming a coach – Think BYLD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rs-about style2 ptt-40 pbb-40">
        <div className="container">
          <div className="row">
            <div className='col-sm-6 icfbg'>
              <div className='sec-title3 icfbh4'>
                <h4 className="">Why ICF certification is imperative?</h4>
                <div className="heading-border-line left-style jencolor"></div>
              </div>
              <p className='text-justify ptt-20 icfpc'>
                If you are a professional wishing to strengthen your current profile and boost your future prospects or you are one of those looking for a second carrier option, then you should consider the ICF coach certification program. Anyone aspiring to become a professional coach can benefit from being an ICF credentialed coach.
              </p>
            </div>

            <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/icfleft.jpg' alt="dt-dr" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='ptt-40 pbb-30 jenson8section1'>
        <div className='container'>
          <div className='row'>
          <div className="col-sm-6">
              <div className="icfimglb">
                <img src='/assets/img/icfmg2.jpg' alt="dt-dr" />
              </div>
            </div>
            
            <div className='col-sm-6 boxshd letf5border text-left bgwhite patb0'>              
              <div className='ptt-10 pbb-10'>
              <h2 className='ifch2c'>Fact check -</h2>
              <p>
                About <span className='hispan'>85%</span> of clients want their coaches to be credentialed by ICF, because it’s the largest and globally accepted coach certification program.
              </p>
              <p>
                ICF is a non-profit organization that is the leading global organization dedicated to advancing the coaching profession by setting high standards, providing independent certification and building a worldwide network of trained coaching professionals.
              </p>
              <p>
                In association with Aster Coaching US, and being accredited with International Coach Federation (ICF), we take pride in sharing with you that, we certify and develop high-caliber coaches who meet global standards and are in tune with local, regional and global business practices.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
        <div class="container">
          <div class="row">


            <div class="col-sm-12 rightsides">             

              <div className='row'>
                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Who can consider the ICF accredited certification program?</h4>
                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>HR heads, HR managers, Training managers, Trainers, and Consultants</li>
                      <li>Business Heads, Directors, General Managers, Managers, and Entrepreneurs</li>
                      <li>CEOs, Senior leaders, Line Managers, Team Leaders, Supervisors, and all other C-suit executives.</li>                      
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Why signup with BYLD?</h4>
                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>As a learning and development organisation which has been in business for more than 2 decades, we bring immense experience of designing and running successful learning journeys.</li>
                      <li>9 years of experience running the coach certification program with 300 plus accredited coaches and 600 certified coaches.</li>
                      <li>100% Pass results for achieving ICF ACC Credentials</li>
                      <li>Seasoned International master coaches as facilitators</li>
                      <li>10 hours of mentor coaching is included in the program</li>
                      <li>Complete support at every step of the process by the dedicated relationship manager.</li>
                      <li>Guaranteed peer coaching assistance</li>
                      <li>Interest free EMI Option for fees</li>
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
                    <a className='hccs' href='/coaching/executive-coaching'>
                      <div class="number-image">
                        <span>Executive Coaching</span>
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