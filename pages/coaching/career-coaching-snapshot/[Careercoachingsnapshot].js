import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Careercoachingsnapshot;

    const res = await fetch(`https://coral-app-2-a333o.ondigitalocean.app/api/career-coaching-snapshot/${caturl}`)
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
                <meta name="description" content="Everything DiSC<sup>®</sup> assessment measures the personality and behavior of individuals. And, DiSC Analysis provides a detailed report for better understanding." />
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
                                    var trust1 = parseInt(results.trust1) + parseInt(results.trust2)
                                    var trust1reresultbar = 7.14 * trust1 + px
                                    var trust1reresult = 7.14 * trust1

                                    var trust2 = parseInt(results.trust3) + parseInt(results.trust4) + parseInt(results.trust5)
                                    var trust2reresultbar = 4.76 * trust2 + px
                                    var trust2reresult = 4.76 * trust2

                                    var ec1 = parseInt(results.ec1) + parseInt(results.ec2) + parseInt(results.ec3)
                                    var ec1reresultbar = 4.76 * ec1 + px
                                    var ec1reresult = 4.76 * ec1

                                    var ec2 = parseInt(results.ec4) + parseInt(results.ec5) + parseInt(results.ec6)
                                    var ec2reresultbar = 4.76 * ec2 + px
                                    var ec2reresult = 4.76 * ec2

                                    var ec3 = parseInt(results.ec7) + parseInt(results.ec8) + parseInt(results.ec9)
                                    var ec3reresultbar = 4.76 * ec3 + px
                                    var ec3reresult = 4.76 * ec3

                                    var ec4 = parseInt(results.ec10) + parseInt(results.ec11) + parseInt(results.ec12)
                                    var ec4reresultbar = 4.76 * ec4 + px
                                    var ec4reresult = 4.76 * ec4

                                    var ec5 = parseInt(results.ec13) + parseInt(results.ec14)
                                    var ec5reresultbar = 7.14 * ec5 + px
                                    var ec5reresult = 7.14 * ec5

                                    var pf1 = parseInt(results.pf1) + parseInt(results.pf2)
                                    var pf1reresultbar = 7.14 * pf1 + px
                                    var pf1reresult = 7.14 * pf1

                                    var pf2 = parseInt(results.pf3) + parseInt(results.pf4)
                                    var pf2reresultbar = 7.14 * pf2 + px
                                    var pf2reresult = 7.14 * pf2

                                    var pf3 = parseInt(results.pf5) + parseInt(results.pf6)
                                    var pf3reresultbar = 7.14 * pf3 + px
                                    var pf3reresult = 7.14 * pf3

                                    var cr1 = parseInt(results.cr1)
                                    var cr1reresultbar = 14.28 * cr1 + px
                                    var cr1reresult = 14.28 * cr1

                                    var cr2 = parseInt(results.cr2)
                                    var cr2reresultbar = 14.28 * cr2 + px
                                    var cr2reresult = 14.28 * cr2

                                    var cr3 = parseInt(results.cr3)
                                    var cr3reresultbar = 14.28 * cr3 + px
                                    var cr3reresult = 14.28 * cr3

                                    var cr4 = parseInt(results.cr4)
                                    var cr4reresultbar = 14.28 * cr4 + px
                                    var cr4reresult = 14.28 * cr4

                                    var cr5 = parseInt(results.cr5)
                                    var cr5reresultbar = 14.28 * cr5 + px
                                    var cr5reresult = 14.28 * cr5






                                    return (

                                        <div className='demodonload dresult' id='demo'>
                                            <div class="assessment-result-block">
                                                <h3 className='ptop text-center'>Hi {results.name}</h3>
                                            </div>
                                            <div className='cochingformat'>
                                                <h3>Abdelkader Benhamou</h3>
                                                <p>Your survey responses provide a snapshot, or data from a point in time, about how you and others perceive your coaching.
                                                    <br></br>This is a unique opportunity to gain insights into how you see your effectiveness as a coach.</p>

                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>Score</th>
                                                        <th>Interpretation</th>
                                                        <th>Action</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Less than 4.5(Red)</td>
                                                        <td>Area that needs attention</td>
                                                        <td>Prioritise to manage and learn the skills to minimize the negative impact on others.</td>
                                                    </tr>

                                                    <tr>
                                                        <td>4.6 to 6.0 (Yellow)</td>
                                                        <td>Area of strength</td>
                                                        <td>Build it further and focus on select behaviours to make them even better</td>
                                                    </tr>

                                                    <tr>
                                                        <td>6.1 + (Green)</td>
                                                        <td>Area of Commanding Excellence</td>
                                                        <td>Keep building on the strengths.</td>
                                                    </tr>
                                                </table>

                                                <h3>Understanding your ratings summary</h3>
                                                <p>Ratings on the current Coaching Snapshot are shown by the source of the rating:</p>
                                            </div>
                                            <div className='resultable'>
                                                <table>
                                                    <tr className='tablefbh'>
                                                        <th>Competency</th>
                                                        <th>Sub-Competency</th>
                                                        <th>Self</th>
                                                        <th>Result</th>
                                                    </tr>
                                                    <tr>
                                                        <td className='firsttd'>TRUST</td>
                                                        <td>
                                                            <span>Establishing trust and respect</span>
                                                            <span>Acting with integrity</span>
                                                        </td>
                                                        <td>
                                                            <span>{trust1}</span>
                                                            <span>{trust2}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (trust1reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: trust1reresultbar }}></div>
                                                                            if (trust1reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: trust1reresultbar }}></div>

                                                                            if (trust1reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: trust1reresultbar }}></div>
                                                                            else (trust1reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: trust1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (trust2reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: trust2reresultbar }}></div>
                                                                            if (trust2reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: trust2reresultbar }}></div>

                                                                            if (trust2reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: trust2reresultbar }}></div>
                                                                            else (trust2reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: trust2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>EFFECTIVE COMMUNICATION</td>
                                                        <td>
                                                            <span>Keeping conversation focused on a goal</span>
                                                            <span>Encouraging alternative ways to view and define problems</span>
                                                            <span>Valuing the individual’s perspective</span>
                                                            <span>Listening and being fully present</span>
                                                            <span>Asking good questions</span>
                                                        </td>
                                                        <td>
                                                            <span>{ec1}</span>
                                                            <span>{ec2}</span>
                                                            <span>{ec3}</span>
                                                            <span>{ec4}</span>
                                                            <span>{ec5}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec1reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: ec1reresultbar }}></div>
                                                                            if (ec1reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: ec1reresultbar }}></div>

                                                                            if (ec1reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: ec1reresultbar }}></div>
                                                                            else (ec1reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: ec1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec2reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: ec2reresultbar }}></div>
                                                                            if (ec2reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: ec2reresultbar }}></div>

                                                                            if (ec2reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: ec2reresultbar }}></div>
                                                                            else (ec2reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: ec2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec3reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: ec3reresultbar }}></div>
                                                                            if (ec3reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: ec3reresultbar }}></div>

                                                                            if (ec3reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: ec3reresultbar }}></div>
                                                                            else (ec3reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: ec3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec4reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: ec4reresultbar }}></div>
                                                                            if (ec4reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: ec4reresultbar }}></div>

                                                                            if (ec4reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: ec4reresultbar }}></div>
                                                                            else (ec4reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: ec4reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (ec5reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: ec5reresultbar }}></div>
                                                                            if (ec5reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: ec5reresultbar }}></div>

                                                                            if (ec5reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: ec5reresultbar }}></div>
                                                                            else (ec5reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: ec5reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>PERFORMANCE FOCUS</td>
                                                        <td>
                                                            <span>Focusing on action</span>
                                                            <span>Aligning with the business</span>
                                                            <span>Enhancing performance</span>
                                                        </td>
                                                        <td>
                                                            <span>{pf1}</span>
                                                            <span>{pf2}</span>
                                                            <span>{pf3}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf1reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: pf1reresultbar }}></div>
                                                                            if (pf1reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: pf1reresultbar }}></div>

                                                                            if (pf1reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: pf1reresultbar }}></div>
                                                                            else (pf1reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: pf1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf2reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: pf2reresultbar }}></div>
                                                                            if (pf2reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: pf2reresultbar }}></div>

                                                                            if (pf2reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: pf2reresultbar }}></div>
                                                                            else (pf2reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: pf2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (pf3reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: pf3reresultbar }}></div>
                                                                            if (pf3reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: pf3reresultbar }}></div>

                                                                            if (pf3reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: pf3reresultbar }}></div>
                                                                            else (pf3reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: pf3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className='firsttd'>COACHING ROUTINE</td>
                                                        <td>
                                                            <span>Following up on progress</span>
                                                            <span>Providing ongoing support</span>
                                                            <span>Reinforcing accountability</span>
                                                            <span>Structuring time for conversation</span>
                                                            <span>Promoting self-discovery</span>
                                                        </td>
                                                        <td>
                                                            <span>{cr1}</span>
                                                            <span>{cr2}</span>
                                                            <span>{cr3}</span>
                                                            <span>{cr4}</span>
                                                            <span>{cr5}</span>
                                                        </td>
                                                        <td>
                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr1reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: cr1reresultbar }}></div>
                                                                            if (cr1reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: cr1reresultbar }}></div>
                                                                            if (cr1reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: cr1reresultbar }}></div>
                                                                            else (cr1reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: cr1reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr2reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: cr2reresultbar }}></div>
                                                                            if (cr2reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: cr2reresultbar }}></div>
                                                                            if (cr2reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: cr2reresultbar }}></div>
                                                                            else (cr2reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: cr2reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr3reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: cr3reresultbar }}></div>
                                                                            if (cr3reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: cr3reresultbar }}></div>
                                                                            if (cr3reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: cr3reresultbar }}></div>
                                                                            else (cr3reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: cr3reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr4reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: cr4reresultbar }}></div>
                                                                            if (cr4reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: cr4reresultbar }}></div>
                                                                            if (cr4reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: cr4reresultbar }}></div>
                                                                            else (cr4reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: cr4reresultbar }}></div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>

                                                            <span>
                                                                <div className='result-bar-wrapper'>
                                                                    {
                                                                        (() => {
                                                                            if (cr5reresult <= 30)
                                                                                return <div class="result-bar bgred" style={{ width: cr5reresultbar }}>.</div>
                                                                            if (cr5reresult <= 55)
                                                                                return <div class="result-bar yellobg" style={{ width: cr5reresultbar }}>.</div>
                                                                            if (cr5reresult <= 80)
                                                                                return <div class="result-bar orangebg" style={{ width: cr5reresultbar }}>.</div>
                                                                            else (cr5reresult <= 100)
                                                                            return <div class="result-bar greenbg" style={{ width: cr5reresultbar }}>.</div>
                                                                        })()
                                                                    }
                                                                </div>
                                                            </span>
                                                        </td>
                                                    </tr>

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


