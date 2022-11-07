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

          <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                        <button class="submit btnnewc" onClick={downloadAsPDF}> Download Result </button>
                        </div>
                        <div className='col-md-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var FocusandMeasure = parseInt(results.q1a) + parseInt(results.q1b) + parseInt(results.q1c) + parseInt(results.q1d)
                                    var FocusandMeasureresult = 5 * FocusandMeasure + px
                                    var FocusandMeasureresult1 = 5 * FocusandMeasure
                
                                    var FindVitalBehaviors = parseInt(results.q2a) + parseInt(results.q2b) + parseInt(results.q2c) + parseInt(results.q2d)
                                    var FindVitalBehaviorsresult = 5 * FindVitalBehaviors + px
                                    var FindVitalBehaviorsresult1 = 5 * FindVitalBehaviors

                                    var HelpThemLoveWhatTheyHate = parseInt(results.q3a) + parseInt(results.q3b) + parseInt(results.q3c) + parseInt(results.q3d)
                                    var HelpThemLoveWhatTheyHateresult = 5 * HelpThemLoveWhatTheyHate + px
                                    var HelpThemLoveWhatTheyHateresult1 = 5 * HelpThemLoveWhatTheyHate

                                    var HelpThemDoWhatTheyCan = parseInt(results.q4a) + parseInt(results.q4b) + parseInt(results.q4c) + parseInt(results.q4d)
                                    var HelpThemDoWhatTheyCanresult = 5 * HelpThemDoWhatTheyCan + px
                                    var HelpThemDoWhatTheyCanresult1 = 5 * HelpThemDoWhatTheyCan

                                    var ProvideEncouragement = parseInt(results.q5a) + parseInt(results.q5b) + parseInt(results.q5c) + parseInt(results.q5d)
                                    var ProvideEncouragementresult = 5 * ProvideEncouragement + px
                                    var ProvideEncouragementresult1 = 5 * ProvideEncouragement

                                    var ProvideAssistance = parseInt(results.q6a) + parseInt(results.q6b) + parseInt(results.q6c) + parseInt(results.q6d)
                                    var ProvideAssistanceresult = 5 * ProvideAssistance + px
                                    var ProvideAssistanceresult1 = 5 * ProvideAssistance

                                    var ChangeTheirEconomy = parseInt(results.q7a) + parseInt(results.q7b) + parseInt(results.q7c) + parseInt(results.q7d)
                                    var ChangeTheirEconomyresult = 5 * ChangeTheirEconomy + px
                                    var ChangeTheirEconomyresult1 = 5 * ChangeTheirEconomy

                                    var ChangeTheirSpace = parseInt(results.q8a) + parseInt(results.q8b) + parseInt(results.q8c) + parseInt(results.q8d)
                                    var ChangeTheirSpaceresult = 5 * ChangeTheirSpace + px
                                    var ChangeTheirSpaceresult1 = 5 * ChangeTheirSpace

                                    return (

                                        <div className='demodonload' id='demo'>
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            
                                                 
                                                <div className='row'>
                                                    <div className='col-sm-12 aalpading0'>
                                                    <div class="assessment-result-block">
                                                    <h3>Focus and Measure</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (FocusandMeasureresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:FocusandMeasureresult}}></div>
                                                            if (FocusandMeasureresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:FocusandMeasureresult}}></div>

                                                            if (FocusandMeasureresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:FocusandMeasureresult}}></div>
                                                            else (FocusandMeasureresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:FocusandMeasureresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Find Vital Behaviors</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (FindVitalBehaviorsresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:FindVitalBehaviorsresult}}></div>
                                                            if (FindVitalBehaviorsresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:FindVitalBehaviorsresult}}></div>

                                                            if (FindVitalBehaviorsresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:FindVitalBehaviorsresult}}></div>
                                                            else (FindVitalBehaviorsresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:FindVitalBehaviorsresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Help Them Love What They Hate</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (HelpThemLoveWhatTheyHateresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:HelpThemLoveWhatTheyHateresult}}></div>
                                                            if (HelpThemLoveWhatTheyHateresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:HelpThemLoveWhatTheyHateresult}}></div>

                                                            if (HelpThemLoveWhatTheyHateresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:HelpThemLoveWhatTheyHateresult}}></div>
                                                            else (HelpThemLoveWhatTheyHateresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:HelpThemLoveWhatTheyHateresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Help Them Do What They Can’t</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (HelpThemDoWhatTheyCanresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:HelpThemDoWhatTheyCanresult}}></div>
                                                            if (HelpThemDoWhatTheyCanresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:HelpThemDoWhatTheyCanresult}}></div>

                                                            if (HelpThemDoWhatTheyCanresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:HelpThemDoWhatTheyCanresult}}></div>
                                                            else (HelpThemDoWhatTheyCanresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:HelpThemDoWhatTheyCanresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Provide Encouragement</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (ProvideEncouragementresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:ProvideEncouragementresult}}></div>
                                                            if (ProvideEncouragementresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:ProvideEncouragementresult}}></div>

                                                            if (ProvideEncouragementresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:ProvideEncouragementresult}}></div>
                                                            else (ProvideEncouragementresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:ProvideEncouragementresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Provide Assistance</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (ProvideAssistanceresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:ProvideAssistanceresult}}></div>
                                                            if (ProvideAssistanceresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:ProvideAssistanceresult}}></div>

                                                            if (ProvideAssistanceresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:ProvideAssistanceresult}}></div>
                                                            else (ProvideAssistanceresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:ProvideAssistanceresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Change Their Economy</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (ChangeTheirEconomyresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:ChangeTheirEconomyresult}}></div>
                                                            if (ChangeTheirEconomyresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:ChangeTheirEconomyresult}}></div>

                                                            if (ChangeTheirEconomyresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:ChangeTheirEconomyresult}}></div>
                                                            else (ChangeTheirEconomyresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:ChangeTheirEconomyresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>

                                                    <div class="assessment-result-block">
                                                    <h3>Change Their Space</h3>
                                                    <div class="result-bar-wrapper">     

                                                    {
                                                        (() => {
                                                            if (ChangeTheirSpaceresult1 <= 30)
                                                                return <div class="result-bar bgred" style={{width:ChangeTheirSpaceresult}}></div>
                                                            if (ChangeTheirSpaceresult1 <= 55)
                                                                return <div class="result-bar yellobg" style={{width:ChangeTheirSpaceresult}}></div>

                                                            if (ChangeTheirSpaceresult1 <= 80)
                                                                return <div class="result-bar orangebg" style={{width:ChangeTheirSpaceresult}}></div>
                                                            else (ChangeTheirSpaceresult1 <= 100)
                                                                return <div class="result-bar greenbg" style={{width:ChangeTheirSpaceresult}}></div>
                                                        })()
                                                    }               

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )



                                })


                            }



                        </div>
                    </div>
                </div>
            </section>


            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>                        
                        <div className='col-md-12'>
                                        <div className='demodonload' id='demo'>                                                 
                                                <div className='row'>
                                                    <div className='col-sm-12 aalpading0'>
                                                    <div class="assessment-result-block">
                                                    <h3>UNDERSTANDING YOUR RESULTS</h3>
                                                    <p>
                                                    Your results are broken into eight sections. For each section your score determines your level of influence in that area. The Influencer levels are:
                                                    </p>

                                                    <ul>
                                                        <li>Master Influencer: Scores between 19-20.</li>
                                                        <li>Effective Influencer: Scores between 17-18.</li>
                                                        <li>Apprentice Influencer: Scores between 15-16.</li>
                                                        <li>Novice Influencer: Scores below 15.</li>
                                                    </ul>
                                                    <p>
                                                    Notice which areas you struggle with. Perhaps you're good at providing encouragement, for example, and not so good at helping others do what they can't. Whatever you scored, awareness is the first step toward improvement.
                                                    </p>
                                                    
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                </div>
                    </div>
                </div>
            </section>

         

        {/* <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                <div className='col-sm-12 text-center'>
                        <button class="submit btnnewc" onClick={downloadAsPDF}> Download Result </button>
                        </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>                       
                    {
            result.slice(0, 1).map((results) => {
         
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
        </section> */}


  
    </>
  )
}



