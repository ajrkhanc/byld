import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting form....";

        var trust1 = event.target.trust1.value;
        var trust2 = event.target.trust2.value;
        var trust3 = event.target.trust3.value;
        var trust4 = event.target.trust4.value;
        var trust5 = event.target.trust5.value;

        var ec1 = event.target.ec1.value;
        var ec2 = event.target.ec2.value;
        var ec3 = event.target.ec3.value;
        var ec4 = event.target.ec4.value;
        var ec5 = event.target.ec5.value;
        var ec6 = event.target.ec6.value;
        var ec7 = event.target.ec7.value;
        var ec8 = event.target.ec8.value;
        var ec9 = event.target.ec9.value;
        var ec10 = event.target.ec10.value;
        var ec11 = event.target.ec11.value;
        var ec12 = event.target.ec12.value;
        var ec13 = event.target.ec13.value;
        var ec14 = event.target.ec14.value;

        var pf1 = event.target.pf1.value;
        var pf2 = event.target.pf2.value;
        var pf3 = event.target.pf3.value;
        var pf4 = event.target.pf4.value;
        var pf5 = event.target.pf5.value;
        var pf6 = event.target.pf6.value;

        var cr1 = event.target.cr1.value;
        var cr2 = event.target.cr2.value;
        var cr3 = event.target.cr3.value;
        var cr4 = event.target.cr4.value;
        var cr5 = event.target.cr5.value;



        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://coral-app-2-a333o.ondigitalocean.app/api/career-coaching-snapshot');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('trust1=' + trust1 +
            '&trust2=' + trust2 +
            '&trust3=' + trust3 +
            '&trust4=' + trust4 +
            '&trust5=' + trust5 +
            '&ec1=' + ec1 +
            '&ec2=' + ec2 +
            '&ec3=' + ec3 +
            '&ec4=' + ec4 +
            '&ec5=' + ec5 +
            '&ec6=' + ec6 +
            '&ec7=' + ec7 +
            '&ec8=' + ec8 +
            '&ec9=' + ec9 +
            '&ec10=' + ec10 +
            '&ec11=' + ec11 +
            '&ec12=' + ec12 +
            '&ec13=' + ec13 +
            '&ec14=' + ec14 +
            '&pf1=' + pf1 +
            '&pf2=' + pf2 +
            '&pf3=' + pf3 +
            '&pf4=' + pf4 +
            '&pf5=' + pf5 +
            '&pf6=' + pf6 +
            '&cr1=' + cr1 +
            '&cr2=' + cr2 +
            '&cr3=' + cr3 +
            '&cr4=' + cr4 +
            '&cr5=' + cr5 +    
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl
        );

        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                // document.getElementById("formreset").reset()
                document.getElementById("response").innerHTML = "Assessment Result"

                window.setTimeout(function () {
                    window.location.href = `/coaching/career-coaching-snapshot/${newnameurl}`
                }, 1000);

            }
            else {
                document.getElementById("response").innerHTML = "You Have Submeted to go"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit JobForm";
                }, 3000);
            }



        }

        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>
            <Head>
                <title>Coaching | Career Coaching Snapshot</title>
                <meta name="description" content="The Influencer Assessment is used to determine your influence skills. The questions examine methods you use to lead and help others change. Complete the quiz to see your level of influence." />
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh'>Check your readiness for becoming a Professional Coach? - Part I</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
                <div className='container'>
                <form onSubmit={submitF}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='fh3'>
                                <h3>Behavioural Judgement questions</h3>
                            </div>
                        </div>
                        <div className='col-sm-12'>
                            <div className='fcol1 newassesment'>
                                <h2>
                                    1. You are appointed as a performance coach to a senior leader in the organization. After few coaching sessions, your Coachee spells out to you that he doesn’t see a future for himself in the current organization; he has offers from competition and is actually considering those options. What probable choice you will make:
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="1" id="q1a" required />
                                    <label for="q1a">In the best interest of the organization inform the HR about your coachees plan and how it is a waste of resource to coach him any further</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="2" id="q1b" required />
                                    <label for="q1b">Guide your Coachee to consider growing in the same organization and share the probable reasons why the organization is investing in coaching for him</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="3" id="q1c" required />
                                    <label for="q1c">Remain neutral and allow him to drive his agenda</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q1" value="4" id="q1d" required />
                                    <label for="q1d">You share your similar experience and guide your Coachee how to negotiate his terms within the organization and also with other potential employers.</label>
                                </div>
                                
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    2. You are the HR manager of an organization and you are coaching a young man who complaints of getting into conflicting situations with his team & they don’t collaborate with him – this leads him to take most work load on himself and causes stress. He also demonstrated aggression in his language and the examples of situations that he quotes. To you, this looks like
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="1" id="q2a" required />
                                    <label for="q2a">A counselling case and you would like to  pass the case to a counsellor</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="2" id="q2b" required />
                                    <label for="q2b">Share examples of people who having practiced anger management techniques have got success</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="3" id="q2c" required />
                                    <label for="q2c">Lack of ownership coming from serious blind spots and will like to use tools to raise self awareness.</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q2" value="4" id="q2d" required />
                                    <label for="q2d">You recommend him to do meditation and learn to control his mind.</label>
                                </div>
                                
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    3. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="1" id="q3a" required />
                                    <label for="q3a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="2" id="q3b" required />
                                    <label for="q3b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="3" id="q3c" required />
                                    <label for="q3c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q3" value="4" id="q3d" required />
                                    <label for="q3d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    4. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="1" id="q4a" required />
                                    <label for="q4a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="2" id="q4b" required />
                                    <label for="q4b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="3" id="q4c" required />
                                    <label for="q4c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q4" value="4" id="q4d" required />
                                    <label for="q4d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    5. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="1" id="q5a" required />
                                    <label for="q5a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="2" id="q5b" required />
                                    <label for="q5b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="3" id="q5c" required />
                                    <label for="q5c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q5" value="4" id="q5d" required />
                                    <label for="q5d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    6. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="1" id="q6a" required />
                                    <label for="q6a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="2" id="q6b" required />
                                    <label for="q6b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="3" id="q6c" required />
                                    <label for="q6c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q6" value="4" id="q6d" required />
                                    <label for="q6d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    7. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="1" id="q7a" required />
                                    <label for="q7a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="2" id="q7b" required />
                                    <label for="q7b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="3" id="q7c" required />
                                    <label for="q7c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q7" value="4" id="q7d" required />
                                    <label for="q7d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    8. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="1" id="q8a" required />
                                    <label for="q8a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="2" id="q8b" required />
                                    <label for="q8b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="3" id="q8c" required />
                                    <label for="q8c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q8" value="4" id="q8d" required />
                                    <label for="q8d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    9. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="1" id="q9a" required />
                                    <label for="q9a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="2" id="q9b" required />
                                    <label for="q9b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="3" id="q9c" required />
                                    <label for="q9c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q9" value="4" id="q9d" required />
                                    <label for="q9d">44444444444444</label>
                                </div>                               
                            </div>

                            <div className='fcol1 newassesment'>
                                <h2>
                                    10. qqqqqqqqqqqqqqqqqqqq
                                </h2>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="1" id="q10a" required />
                                    <label for="q10a">11111111</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="2" id="q10b" required />
                                    <label for="q10b">22222222222222</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="3" id="q10c" required />
                                    <label for="q10c">3333333333333</label>
                                </div>
                                <div className='fcolmain'>
                                    <input type="radio" name="q10" value="4" id="q10d" required />
                                    <label for="q10d">44444444444444</label>
                                </div>                               
                            </div>
                        </div>

                       
                    </div>
                 </form>
                </div>
            </section>


        </>
    )
}