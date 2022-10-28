import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




  export async function getServerSideProps(context) {
    const caturl = context.params.InfluecerResult;

    const res = await fetch(`https://assesmentresultc.herokuapp.com/api/influencer-assessment/${caturl}`)
    const result = await res.json()
    return {
      props: {
        result  
      },
    }
  }

export default function result({result}) {  
     
function downloadAsPDF() {
    var element = document.getElementById('demo');
    html2pdf(element);
  }

  if(!Object.keys(result).length){
    return<div className='container'>
        <div className='row'>
            <div class="col-lg-12 contact-title">
                
                <h1>Nothing Found</h1>
                <p>
                Please Submit You Asessement Before.
                </p>
                <h6>
                <a class="submit" href='/cruciallifechangingskills/assessment/influencer-assessment'> Go Back </a>
                </h6>
            </div>
        </div>
    </div>
  }

  return (
    <>
  
         <Head>
            <title>Get Access to the Best Psychometric Analysis by Everything DiSC<sup>®</sup></title>
            <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding."/> 
          </Head>

          <section class="about-section bootmline bcck">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title">                        
                        <h1>What Would You Do Self-Assessment Results</h1>                                      
                      <h6>
                        <button class="submit" onClick={downloadAsPDF}> Download Result </button>
                          </h6>
                    </div>
                </div>
            </div>
        </section>

        <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>                       
                    {
            result.map((results) => {
         
                var FocusandMeasure = parseInt(results.q1a) + parseInt(results.q1b) + parseInt(results.q1c) + parseInt(results.q1d)
                
                var FindVitalBehaviors = parseInt(results.q2a) + parseInt(results.q2b) + parseInt(results.q2c) + parseInt(results.q2d)

                var HelpThemLoveWhatTheyHate = parseInt(results.q3a) + parseInt(results.q3b) + parseInt(results.q3c) + parseInt(results.q3d)

                var HelpThemDoWhatTheyCan = parseInt(results.q4a) + parseInt(results.q4b) + parseInt(results.q4c) + parseInt(results.q4d)

                var ProvideEncouragement = parseInt(results.q5a) + parseInt(results.q5b) + parseInt(results.q5c) + parseInt(results.q5d)

                var ProvideAssistance = parseInt(results.q6a) + parseInt(results.q6b) + parseInt(results.q6c) + parseInt(results.q6d)

                var ChangeTheirEconomy = parseInt(results.q7a) + parseInt(results.q7b) + parseInt(results.q7c) + parseInt(results.q7d)

                var ChangeTheirSpace = parseInt(results.q8a) + parseInt(results.q8b) + parseInt(results.q8c) + parseInt(results.q8d)

            return (
                    <div className='' id='demo'>  

                    <div class="assessment-result-block">
                    <h3 className='ptop'>Hi {results.name}</h3>
                            <h3>Focus and Measure</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{FocusandMeasure}</td>
                                        <td>Novice Influencer</td>
                                        <td>1-34</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Find Vital Behaviors</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{FindVitalBehaviors}</td>
                                        <td>Apprentice Influencer</td>
                                        <td>35-64</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Help Them Love What They Hate</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{HelpThemLoveWhatTheyHate}</td>
                                        <td>Master Influencer</td>
                                        <td>77-112</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Help Them Do What They Can’t</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td >{HelpThemDoWhatTheyCan}</td>
                                        <td>Apprentice Influencer</td>
                                        <td>113-144</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Provide Encouragement</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ProvideEncouragement}</td>
                                        <td>Novice Influencer</td>
                                        <td>145-184</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Provide Assistance</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ProvideAssistance}</td>
                                        <td>Novice Influencer</td>
                                        <td>185-216</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Change Their Economy</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ChangeTheirEconomy}</td>
                                        <td>Novice Influencer</td>
                                        <td>217-246</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Change Their Space</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong>Score</strong></td>
                                        <td><strong>Influencer Level</strong></td>
                                        <td><strong>Pages</strong></td>
                                    </tr>
                                    <tr>
                                        <td>{ChangeTheirSpace}</td>
                                        <td>Master Influencer</td>
                                        <td>247-286</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>            
            )

            

            })

           
            }

           

                    </div>
                </div>
            </div>
        </section>


  
    </>
  )
}



