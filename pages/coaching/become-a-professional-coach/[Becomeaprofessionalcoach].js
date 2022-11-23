import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Becomeaprofessionalcoach;

    const res = await fetch(`https://coral-app-5w4lr.ondigitalocean.app/api/become-a-professional-coach/${caturl}`)
    const result = await res.json()
    return {
        props: {
            result
        },
    }
}

export default function result({ result }) {

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    if (!Object.keys(result).length) {
        return <div className='container'>
            <div className='row'>
                <div class="col-lg-12 contact-title">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/coaching/become-a-professional-coac'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>
       

            <Head>
                <title>Become a Professional Coach Result</title>
                <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding." />
            </Head>


            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        {/* <div className='col-sm-12 text-center'>
                            <button class="submit btnnewc"> Download Result </button>
                        </div> */}
                        <div className='col-md-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var resultc = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)
                                   

                                    


                                    return (

                                        <div className='demodonload dresult' id='demo'>                                           
                                            
                                            <div class="assessment-result-block ptt-90">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat pbb-70'>                                               
                                                <div className='dlw'>
                                                <h4 className='yresultc'><span>Y</span>OUR <span>R</span>ESULT IS: <span className='thmecc'>{resultc}/100</span></h4>
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


        </>
    )
}



