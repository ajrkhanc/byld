import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../../components/Layout/sidebar'

export default function DTCICoachingAcademy() {
  return (
    <>
      <Head>
        <title>Executive Coaching - BYLD Group</title>
        <meta name="description" content="BYLD is a pioneering name in leadership development, corporate training, assessment, and staffing. Founded in 1998, the company is the largest group in South Asia offering HR and business productivity solutions for individuals, teams, and organizations. It has also served 300 of 500 Fortune companies." />
      </Head>

      <section className='icfmain executivecoaching'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='pagetitle text-left'>
                <h1>Hire professional coaches to develop key contributors, leaders/managers in transition</h1>
                <p>Individuals and teams both benefit from Executive Coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <div class="shape-bg ptt-50 pbb-50 solutionsboxarea">
        <div class="container">
          <div class="row">


            <div class="col-sm-12 rightsides">
              <div className="sec-title3 text-left">
                <p className='mtt-'>
                Coaching helps <b>unlock people's potential to maximize their performance.</b>
                </p>
                <p>
                An experienced coach helps unlock the maximum potential of individuals and ensure they reach their defined goals in the shortest time with tailor made solutions customised to the learner’s needs.
                </p>
              </div>

              <div className='row'>
                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Why use Executive coaching ?</h4>
                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>Improved business performance.</li>
                      <li>Enhanced individual development.</li>
                      <li>Increased retention of key people.</li>
                      <li>Greater productivity and customer service</li>
                    </ul>
                  </div>
                </div>

                <div class="col-sm-12">
                  <h4 className="countertoph2 text-left">Benefits of Executive Coaching by BYLD -</h4>                  
                  <div className='rs-estimate'>
                    <ul className='estimate-info mtt-5'>
                      <li>In line with the highest standards set by ICF</li>
                      <li>Experienced panel of coaches</li>
                      <li>Professional project management</li>
                      <li>Tangible outcomes</li>
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
                    <a className='hccs' href='/coaching/become-a-coach'>
                      <div class="number-image">
                        <span>Become A Coach (ICF)</span>
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

              <div class="col">
                <div class="rs-addon-number">
                  <div class="number-part">
                    <a className='hccs' href='/coaching/breakthroughs'>
                      <div class="number-image">
                        <span>Breakthrough</span>
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