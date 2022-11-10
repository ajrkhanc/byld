import Head from 'next/head'

export default function BrowseCourses(){

  const submitF = async (event) => {        
    event.preventDefault();
    document.getElementById("submitbuttonform").value = "Submitting form....";
    
    var q1a = event.target.q1a.value;
    var q1b = event.target.q1b.value;
    var q1c = event.target.q1c.value;
    var q1d = event.target.q1d.value;

    var q2a = event.target.q2a.value;
    var q2b = event.target.q2b.value;
    var q2c = event.target.q2c.value;
    var q2d = event.target.q2d.value;

    var q3a = event.target.q3a.value;
    var q3b = event.target.q3b.value;
    var q3c = event.target.q3c.value;
    var q3d = event.target.q3d.value;

    var q4a = event.target.q4a.value;
    var q4b = event.target.q4b.value;
    var q4c = event.target.q4c.value;
    var q4d = event.target.q4d.value;

    var q5a = event.target.q5a.value;
    var q5b = event.target.q5b.value;
    var q5c = event.target.q5c.value;
    var q5d = event.target.q5d.value;

    var q6a = event.target.q6a.value;
    var q6b = event.target.q6b.value;
    var q6c = event.target.q6c.value;
    var q6d = event.target.q6d.value;

    var q7a = event.target.q7a.value;
    var q7b = event.target.q7b.value;
    var q7c = event.target.q7c.value;
    var q7d = event.target.q7d.value;

    var q8a = event.target.q8a.value;
    var q8b = event.target.q8b.value;
    var q8c = event.target.q8c.value;
    var q8d = event.target.q8d.value;
   
    

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const organization = event.target.organization.value;
    var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
    nameurl = nameurl.toLowerCase();
    const newnameurl = nameurl.split(' ').join('-')

  

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://assesmentresultc.herokuapp.com/api/influencer-assessment');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('q1a=' + q1a +
        '&q1b=' + q1b +
        '&q1c=' + q1c +
        '&q1d=' + q1d +
        '&q2a=' + q2a +
        '&q2b=' + q2b +
        '&q2c=' + q2c +
        '&q2d=' + q2d +
        '&q3a=' + q3a +
        '&q3b=' + q3b +
        '&q3c=' + q3c +
        '&q3d=' + q3d +
        '&q4a=' + q4a +
        '&q4b=' + q4b +
        '&q4c=' + q4c +
        '&q4d=' + q4d +
        '&q5a=' + q5a +
        '&q5b=' + q5b +
        '&q5c=' + q5c +
        '&q5d=' + q5d +
        '&q6a=' + q6a +
        '&q6b=' + q6b +
        '&q6c=' + q6c +
        '&q6d=' + q6d +
        '&q7a=' + q7a +
        '&q7b=' + q7b +
        '&q7c=' + q7c +
        '&q7d=' + q7d +
        '&q8a=' + q8a +
        '&q8b=' + q8b +
        '&q8c=' + q8c +
        '&q8d=' + q8d +        
        '&name=' + name +
        '&email=' + email +
        '&phone=' + phone +
        '&organization=' + organization +
        '&newnameurl=' + newnameurl
        );

    xhr.onreadystatechange = function () {
      
            if(xhr.status ==200){
                // document.getElementById("formreset").reset()
                document.getElementById("response").innerHTML = "Assessment Result"                    
                
                window.setTimeout(function() {
                    window.location.href = `/cruciallifechangingskills/assessment/influencer-assessment/${newnameurl}`
                }, 1000);
                                   
            }
            else{
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

    return(
        <>
        <Head>
            <title>Influencer Assessment | Crucial Learning</title>
            <meta name="description" content="The Influencer Assessment is used to determine your influence skills. The questions examine methods you use to lead and help others change. Complete the quiz to see your level of influence."/> 
        </Head>
        
        <section className='assesmentbannnerbg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-12 text-center'>
                        <h2 className='cacoh'>Career Coaching Snapshot</h2>
                        <p>Circle the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p>
                        <div className='clearfix'></div>
                        <div className='mainlinec'>
                            
                            <div className='sboxp'>
                            <div className='sbox'>
                            <hr className='hrleft'></hr>
                                <span>1</span>
                                <p>Strongly Disagree</p>
                            </div>
                            <div className='sbox'>
                            <hr></hr>
                                <span>2</span>
                                <p>Disagree</p>
                            </div>
                            <div className='sbox'>
                            <hr></hr>
                                <span>3</span>
                                <p>Somewhat Disagree</p>
                            </div>
                            <div className='sbox'>
                            <hr></hr>
                                <span>4</span>
                                <p>Neither Agree nor Disagree</p>
                            </div>
                            <div className='sbox'>
                            <hr></hr>
                                <span>5</span>
                                <p>Somewhat Agree</p>
                            </div>
                            <div className='sbox'>
                            <hr></hr>
                                <span>6</span>
                                <p>Agree</p>
                            </div>
                            <div className='sbox'>
                            <hr className='hrright'></hr>
                                <span>7</span>
                                <p>Strongly Agree</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pbb-40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='fh3'>
                            <h3>TRUST</h3>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                     <div className='fcol1'>
                        <h2>
                        1. I create a safe environment for talking about sensitive or personal topics
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="1" id="trust1" required/>
                            <label for="trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="2" id="trust2" required/>
                            <label for="trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="3" id="trust3" required/>
                            <label for="trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="4" id="trust4" required/>
                            <label for="trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="5" id="trust5" required/>
                            <label for="trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="6" id="trust6" required/>
                            <label for="trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="7" id="trust7" required/>
                            <label for="trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        2. I keep the conversation focused on the agenda of the other person
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="1" id="2trust1" required/>
                            <label for="2trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="2" id="2trust2" required/>
                            <label for="2trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="3" id="2trust3" required/>
                            <label for="2trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="4" id="2trust4" required/>
                            <label for="2trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="5" id="2trust5" required/>
                            <label for="2trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="6" id="2trust6" required/>
                            <label for="2trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="7" id="2trust7" required/>
                            <label for="2trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        3. I communicate openly and honestly at all times
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="1" id="3trust1" required/>
                            <label for="3trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="2" id="3trust2" required/>
                            <label for="3trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="3" id="3trust3" required/>
                            <label for="3trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="4" id="3trust4" required/>
                            <label for="3trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="5" id="3trust5" required/>
                            <label for="3trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="6" id="3trust6" required/>
                            <label for="3trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="7" id="3trust7" required/>
                            <label for="3trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        4. My commitments relating to each coaching conversation are always made clear to the other person
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="1" id="4trust1" required/>
                            <label for="4trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="2" id="4trust2" required/>
                            <label for="4trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="3" id="4trust3" required/>
                            <label for="4trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="4" id="4trust4" required/>
                            <label for="4trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="5" id="4trust5" required/>
                            <label for="4trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="6" id="4trust6" required/>
                            <label for="4trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="7" id="4trust7" required/>
                            <label for="4trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        5. I consistently follow through on my commitments
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>
                    </div>

                    <div className='col-sm-12'>
                        <div className='fh3'>
                            <h3>EFFECTIVE COMMUNICATION</h3>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                     <div className='fcol1'>
                        <h2>
                        6. I make it clear when commitments can't be met
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="1" id="trust1" required/>
                            <label for="trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="2" id="trust2" required/>
                            <label for="trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="3" id="trust3" required/>
                            <label for="trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="4" id="trust4" required/>
                            <label for="trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="5" id="trust5" required/>
                            <label for="trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="6" id="trust6" required/>
                            <label for="trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="7" id="trust7" required/>
                            <label for="trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        7. I set a clear goal for every coaching conversation
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="1" id="2trust1" required/>
                            <label for="2trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="2" id="2trust2" required/>
                            <label for="2trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="3" id="2trust3" required/>
                            <label for="2trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="4" id="2trust4" required/>
                            <label for="2trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="5" id="2trust5" required/>
                            <label for="2trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="6" id="2trust6" required/>
                            <label for="2trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="7" id="2trust7" required/>
                            <label for="2trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        8. I keep every coaching conversation focused on achieving agreedupon goals
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="1" id="3trust1" required/>
                            <label for="3trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="2" id="3trust2" required/>
                            <label for="3trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="3" id="3trust3" required/>
                            <label for="3trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="4" id="3trust4" required/>
                            <label for="3trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="5" id="3trust5" required/>
                            <label for="3trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="6" id="3trust6" required/>
                            <label for="3trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="7" id="3trust7" required/>
                            <label for="3trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        9. I help others think of alternative ways to view a problem or solution
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="1" id="4trust1" required/>
                            <label for="4trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="2" id="4trust2" required/>
                            <label for="4trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="3" id="4trust3" required/>
                            <label for="4trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="4" id="4trust4" required/>
                            <label for="4trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="5" id="4trust5" required/>
                            <label for="4trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="6" id="4trust6" required/>
                            <label for="4trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="7" id="4trust7" required/>
                            <label for="4trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        10. I help others think of as many ideas or options as they can to solve a problem
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        11. I listen to new ideas without jumping in to judge or evaluate them too soon
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        12. I stay objective during coaching conversations
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        13. I communicate in a way that makes others want to share their ideas or perspective
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        14. I help others draw their own conclusions when considering different perspectives or approaches
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        15. I demonstrate understanding by reflecting back or summarizing what was said
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        16. My body language demonstrates a high level of engagement in each conversation 
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        17. I spend more time listening and less time talking
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        18. I ask helpful questions during conversations
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        19. I am willing to ask tough questions when needed
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>
                     
                    </div>


                    <div className='col-sm-12'>
                        <div className='fh3'>
                            <h3>PERFORMANCE FOCUS</h3>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                     <div className='fcol1'>
                        <h2>
                        20. I always end a coaching conversation by clarifying actions or commitments
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="1" id="trust1" required/>
                            <label for="trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="2" id="trust2" required/>
                            <label for="trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="3" id="trust3" required/>
                            <label for="trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="4" id="trust4" required/>
                            <label for="trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="5" id="trust5" required/>
                            <label for="trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="6" id="trust6" required/>
                            <label for="trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="7" id="trust7" required/>
                            <label for="trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        21. I support others in setting specific dates for follow-up actions and commitments
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="1" id="2trust1" required/>
                            <label for="2trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="2" id="2trust2" required/>
                            <label for="2trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="3" id="2trust3" required/>
                            <label for="2trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="4" id="2trust4" required/>
                            <label for="2trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="5" id="2trust5" required/>
                            <label for="2trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="6" id="2trust6" required/>
                            <label for="2trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="7" id="2trust7" required/>
                            <label for="2trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        22. I help others set priorities based on our organization’s needs
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="1" id="3trust1" required/>
                            <label for="3trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="2" id="3trust2" required/>
                            <label for="3trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="3" id="3trust3" required/>
                            <label for="3trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="4" id="3trust4" required/>
                            <label for="3trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="5" id="3trust5" required/>
                            <label for="3trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="6" id="3trust6" required/>
                            <label for="3trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="7" id="3trust7" required/>
                            <label for="3trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        23. I make a clear link between our coaching conversations and career priorities
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="1" id="4trust1" required/>
                            <label for="4trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="2" id="4trust2" required/>
                            <label for="4trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="3" id="4trust3" required/>
                            <label for="4trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="4" id="4trust4" required/>
                            <label for="4trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="5" id="4trust5" required/>
                            <label for="4trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="6" id="4trust6" required/>
                            <label for="4trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="7" id="4trust7" required/>
                            <label for="4trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        24. I provide the coaching others need to grow in their career 
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        25. Others achieve better results because of the coaching they get from me
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>                     
                    </div>


                    <div className='col-sm-12'>
                        <div className='fh3'>
                            <h3>COACHING ROUTINE</h3>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                     <div className='fcol1'>
                        <h2>
                        26. I regularly make time to help others explore career growth challenges
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="1" id="trust1" required/>
                            <label for="trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="2" id="trust2" required/>
                            <label for="trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="3" id="trust3" required/>
                            <label for="trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="4" id="trust4" required/>
                            <label for="trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="5" id="trust5" required/>
                            <label for="trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="6" id="trust6" required/>
                            <label for="trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust1" value="7" id="trust7" required/>
                            <label for="trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        27. I take time with others to check on their progress
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="1" id="2trust1" required/>
                            <label for="2trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="2" id="2trust2" required/>
                            <label for="2trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="3" id="2trust3" required/>
                            <label for="2trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="4" id="2trust4" required/>
                            <label for="2trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="5" id="2trust5" required/>
                            <label for="2trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="6" id="2trust6" required/>
                            <label for="2trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust2" value="7" id="2trust7" required/>
                            <label for="2trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        28. I provide the support others need to stay on track
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="1" id="3trust1" required/>
                            <label for="3trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="2" id="3trust2" required/>
                            <label for="3trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="3" id="3trust3" required/>
                            <label for="3trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="4" id="3trust4" required/>
                            <label for="3trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="5" id="3trust5" required/>
                            <label for="3trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="6" id="3trust6" required/>
                            <label for="3trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust3" value="7" id="3trust7" required/>
                            <label for="3trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        29. I remind others of the commitments they have made
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="1" id="4trust1" required/>
                            <label for="4trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="2" id="4trust2" required/>
                            <label for="4trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="3" id="4trust3" required/>
                            <label for="4trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="4" id="4trust4" required/>
                            <label for="4trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="5" id="4trust5" required/>
                            <label for="4trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="6" id="4trust6" required/>
                            <label for="4trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust4" value="7" id="4trust7" required/>
                            <label for="4trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        30. I encourage others to take responsibility for their own development
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>

                     <div className='fcol1'>
                        <h2>
                        25. Others achieve better results because of the coaching they get from me
                        </h2>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="1" id="5trust1" required/>
                            <label for="5trust1">Strongly Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="2" id="5trust2" required/>
                            <label for="5trust2">Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="3" id="5trust3" required/>
                            <label for="5trust3">Somewhat Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="4" id="5trust4" required/>
                            <label for="5trust4">Neither Agree nor Disagree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="5" id="5trust5" required/>
                            <label for="5trust5">Somewhat Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="6" id="5trust6" required/>
                            <label for="5trust6">Agree</label>
                        </div>
                        <div className='fcolmain'>
                            <input type="radio" name="trust5" value="7" id="5trust7" required/>
                            <label for="5trust7">Strongly Agree</label>
                        </div>
                     </div>                     
                    </div>
                </div>
            </div>
        </section>


        </>
    )
}