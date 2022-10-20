import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




  export async function getServerSideProps(context) {
    const caturl = context.params.Mresult;

    const res = await fetch(`https://assesmentresultc.herokuapp.com/api/whatwouldyoudoassessment/${caturl}`)
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

  return (
    <>
  
         <Head>
            <title>Get Access to the Best Psychometric Analysis by Everything DiSC<sup>®</sup></title>
            <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding."/> 
          </Head>

          <section class="about-section bootmline">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title">                        
                        <h1>What Would You Do Self-Assessment Results</h1>                                      
                      <h6>
                        <a class="submit" target="_blank" onClick={downloadAsPDF}> Download Result </a>
                          </h6>
                    </div>
                </div>
            </div>
        </section>

        <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>                   
                    <div className='col-md-12'>                       
                    {
            result.slice(0, 1).map((results) => {
                console.log(results)

                var px = '%'
                var q1a1 = results.q1a1
                if (q1a1 == 'undefined') {
                    q1a1 = 0;
                }

                var q2a1 = results.q2a1
                if (q2a1 == 'undefined') {
                    q2a1 = 0;
                }

                var q3a1 = results.q3a1
                if (q3a1 == 'undefined') {
                    q3a1 = 0;
                }

                var q4a1 = results.q4a1
                if (q4a1 == 'undefined') {
                    q4a1 = 0;
                }

                var q5a1 = results.q5a1
                if (q5a1 == 'undefined') {
                    q5a1 = 0;
                }

                var q6a1 = results.q6a1
                if (q6a1 == 'undefined') {
                    q6a1 = 0;
                }

                var q7a1 = results.q7a1
                if (q7a1 == 'undefined') {
                    q7a1 = 0;
                }

                var q8a1 = results.q8a1
                if (q8a1 == 'undefined') {
                    q8a1 = 0;
                }

                var q9a1 = results.q9a1
                if (q9a1 == 'undefined') {
                    q9a1 = 0;
                }

                var q10a1 = results.q10a1
                if (q10a1 == 'undefined') {
                    q10a1 = 0;
                }
                
                var motivationScore = parseInt(q1a1) + parseInt(q2a1) + parseInt(q3a1) + parseInt(q4a1) +
                parseInt(q5a1) + parseInt(q6a1) + parseInt(q7a1) + parseInt(q8a1) + parseInt(q9a1) + parseInt(q10a1)


                var q1b1 = results.q1b1
                if (q1b1 == 'undefined') {
                    q1b1 = 0;
                }

                var q2b1 = results.q2b1
                if (q2b1 == 'undefined') {
                    q2b1 = 0;
                }

                var q3b1 = results.q3b1
                if (q3b1 == 'undefined') {
                    q3b1 = 0;
                }

                var q4b1 = results.q4b1
                if (q4b1 == 'undefined') {
                    q4b1 = 0;
                }

                var q5b1 = results.q5b1
                if (q5b1 == 'undefined') {
                    q5b1 = 0;
                }

                var q6b1 = results.q6b1
                if (q6b1 == 'undefined') {
                    q6b1 = 0;
                }

                var q7b1 = results.q7b1
                if (q7b1 == 'undefined') {
                    q7b1 = 0;
                }

                var q8b1 = results.q8b1
                if (q8b1 == 'undefined') {
                    q8b1 = 0;
                }

                var q9b1 = results.q9b1
                if (q9b1 == 'undefined') {
                    q9b1 = 0;
                }

                var q10b1 = results.q10b1
                if (q10b1 == 'undefined') {
                    q10b1 = 0;
                }
                
                var abilityScore = parseInt(q1b1) + parseInt(q2b1) + parseInt(q3b1) + parseInt(q4b1) +
                parseInt(q5b1) + parseInt(q6b1) + parseInt(q7b1) + parseInt(q8b1) + parseInt(q9b1) + parseInt(q10b1)
                
                var Takeawayresult = 10*abilityScore+px
                var Takeawaybar = 10*abilityScore

            return (
                    <div className='' id='demo'>                       
                        <div class="assessment-result-block">
                        <h3 className='ptop'>Hi {results.name}</h3>
                            <h3>Your motivation score: {motivationScore}</h3>
                            <p>
                            This score indicates your tendency to focus on motivation when trying to hold someone accountable. While motivation contributes to behavior, if you overemphasize it when addressing performance problems, you risk discouraging and demeaning the other person rather than motivating them. If you can address ability first and make sure you focus on it as part of your overall approach, you will get better results when holding others accountable and helping them improve.
                            </p>
                        </div>

                        <div class="assessment-result-block">
                            <h3>Your ability score: {abilityScore}</h3>
                            <p>This score indicates your tendency to focus on ability when trying to hold someone accountable. If your score is high here and low on the motivation scale, it may mean you lack the confidence to be direct with someone when you need to be. Addressing factors that influence a person’s ability to do what’s expected is important when resolving performance problems. But you also need skills to directly address problems of motivation when they’re a factor.
                            </p>
                        </div>

                        <div class="assessment-result-block">
                            <div class="result-bar-wrapper">
                                <div class="result-bar" style={{width:Takeawayresult}}></div>
                            </div>
                            <div class="result-bar-labels">
                                <div class="label-left">You tend to focus on Motivation</div>
                                <div class="label-middle"></div>
                                <div class="label-right">You tend to focus on Ability</div>
                            </div>
                            <h3>Takeaway</h3>
                            <p>Effective leaders and managers address both motivation and ability to help others perform to expectations. You can improve your own ability by learning about the research, principles, and skills for better performance management. Download our free guide, <em>Mind the Gap: The Essential Guide to Workplace Accountability</em>.</p>
                        </div>
                    </div>            
            );
            })
            }

                    </div>
                </div>
            </div>
        </section>


  
    </>
  )
}


