import Head from 'next/head'

export default function BrowseCourses(){
    return(
        <>
        <Head>
            <title>Influencer Assessment | Crucial Learning</title>
            <meta name="description" content="The Influencer Assessment is used to determine your influence skills. The questions examine methods you use to lead and help others change. Complete the quiz to see your level of influence."/> 
        </Head>
        
        <section className='assesmentbannnerbg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h2>ARE YOU AN INFLUENTIAL LEADER?</h2>
                        <p>The greatest capacity we possess is the ability to influence behavior—our own and others’. And yet our ability to influence often evades us when we need it most. Never mind charisma or charm, discover whether you have the skills of influence with this short assessment.</p>
                    </div>
                    <div className='col-md-6'>
                        <div className='assesmentimgbanner'>
                            <img src="/classets/img/influencer-assessment.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div>
                            <h2>ASSESSMENT</h2>
                            <h5>INSTRUCTION</h5>
                            <p>Think of an influence challenge you've faced or now face and answer the questions with that in mind. Need an example?</p>
                            <h5>Someone resistant to your suggestions.</h5>
                            <p>"My son is living in my basement and refuses to do something with his life."</p>
                            <h5>A group that won't change.</h5>
                            <p>"My teammates lose track of leads after tradeshows and won't adopt the new process for tracking them."</p>
                            <h5>An organization in a rut.</h5>
                            <p>"Our company does not share information and resources across teams. We act as though we are in silos."</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form>
                        <div className='formsbarassesment'>                            
                        <h4>1. Focus and Measure</h4>
   <ol>
      <li>When I try to influence change, I make sure everyone understands the results we're trying to achieve and is committed to achieving them.</li>
      <span>
      <input type="radio" name="1a" value="strongly disagree" id="sdisagree1" required/>
      <label for="sdisagree1">Strongly Disagree</label>
      </span>
      <span>
      <input type="radio" name="1a" value="disagree" id="disagree1"/>
      <label for="disagree1">Somewhat Disagree</label>
      </span>
      <span>
      <input type="radio" name="1a" value="neutral" id="neutral1"/>
      <label for="neutral1">Neutral</label>
      </span>
      <span>
      <input type="radio" name="1a" value="agree" id="agree1" tabindex="4"/>
      <label for="agree1">Somewhat Agree</label>
      </span>
      <span>
      <input type="radio" name="1a" value="strongly agree" id="sagree1" tabindex="5"/>
      <label for="sagree1">Strongly Agree</label>
      </span>
      <li>To help others stay focused and committed, I frequently share measures that demonstrate our progress.</li>
      <span>
      <input type="radio" name="1b" value="strongly disagree" id="sdisagree2" required/>
      <label for="sdisagree2">Strongly Disagree</label>
      </span>
      <span>
      <input type="radio" name="1b" value="disagree" id="disagree2"/>
      <label for="disagree2">Somewhat Disagree</label>
      </span>
      <span>
        <input type="radio" name="1b" value="neutral" id="neutral2" tabindex="8"/>
        <label for="neutral2">Neutral</label>
    </span>
      <span>
        <input type="radio" name="1b" value="agree" id="agree2" tabindex="9"/>
      <label for="agree2">Somewhat Agree</label>
      </span>
      <span>
        <input type="radio" name="1b" value="strongly agree" id="sagree2" tabindex="10"/>
      <label for="sagree2">Strongly Agree</label>
      </span>
      <li>To prevent people from falling into old, unhealthy routines, I remove or modify measures that encourage the wrong behaviors.</li>
      <span>
        <input type="radio" name="1c" value="strongly disagree" id="sdisagree3" tabindex="11" required/>
        <label for="sdisagree3">Strongly Disagree</label>
        </span>
      <span>
        <input type="radio" name="1c" value="disagree" id="disagree3" tabindex="12"/>
        <label for="disagree3">Somewhat Disagree</label>
        </span>
      <span>
        <input type="radio" name="1c" value="neutral" id="neutral3" tabindex="13"/>
            <label for="neutral3">Neutral</label>
     </span>
      <span>
        <input type="radio" name="1c" value="agree" id="agree3" tabindex="14"/>
            <label for="agree3">Somewhat Agree</label>
            </span>
      <span>
        <input type="radio" name="1c" value="strongly agree" id="sagree3" tabindex="15"/>
            <label for="sagree3">Strongly Agree</label>
            </span>
      <li>To achieve challenging goals, I help others break long-term goals into daily or weekly milestones that encourage steady progress.</li>
      <span>
        <input type="radio" name="1d" value="strongly disagree" id="sdisagree4"/>
        <label for="sdisagree4">Strongly Disagree</label>
        </span>
      <span>
        <input type="radio" name="1d" value="disagree" id="disagree4" tabindex="17"/>
            <label for="disagree4">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="1d" value="neutral" id="neutral4" tabindex="18"/>
            <label for="neutral4">Neutral</label>
            </span>
      <span>
        <input type="radio" name="1d" value="agree" id="agree4" tabindex="19"/>
            <label for="agree4">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="1d" value="strongly agree" id="sagree4" tabindex="20"/>
        <label for="sagree4">Strongly Agree</label>
        </span>
   </ol>
   <h4>2. Find Vital Behaviors</h4>
   <ol>
      <li>When trying to influence others, I specify the behaviors people need to adopt or change rather than emphasizing vague values or generic qualities I hope they'll adopt.</li>
      <span>
        <input type="radio" name="2a" value="strongly disagree" id="sdisagree6" required/>
        <label for="sdisagree6">Strongly Disagree</label>
        </span>
      <span>
        <input type="radio" name="2a" value="disagree" id="disagree6" tabindex="27"/>
            <label for="disagree6">Somewhat Disagree</label>
            </span>
      <span>
        <input type="radio" name="2a" value="neutral" id="neutral6" tabindex="28"/>
            <label for="neutral6">Neutral</label>
            </span>
      <span>
        <input type="radio" name="2a" value="agree" id="agree6" tabindex="29"/>
            <label for="agree6">Somewhat Agree</label>
            </span>
      <span>
        <input type="radio" name="2a" value="strongly agree" id="sagree6" tabindex="30"/>
            <label for="sagree6">Strongly Agree</label>
            </span>
      <li>I make sure we focus on the two or three behaviors that will have the greatest impact on results.</li>
      <span>
        <input type="radio" name="2b" value="strongly disagree" id="sdisagree7" tabindex="31" required/>
            <label for="sdisagree7">Strongly Disagree</label>
            </span>
      <span>
        <input type="radio" name="2b" value="disagree" id="disagree7" tabindex="32"/>
            <label for="disagree7">Somewhat Disagree</label>
            </span>
      <span>
        <input type="radio" name="2b" value="neutral" id="neutral7" tabindex="33"/>
            <label for="neutral7">Neutral</label>
            </span>
      <span>
        <input type="radio" name="2b" value="agree" id="agree7" tabindex="34"/>
        <label for="agree7">Somewhat Agree</label>
        </span>
      <span>
        <input type="radio" name="2b" value="strongly agree" id="sagree7" tabindex="35"/>
        <label for="sagree7">Strongly Agree</label>
        </span>
      <li>I check to ensure everyone agrees to adopt the two or three behaviors that will help us achieve the results we want.</li>
      <span>
        <input type="radio" name="2c" value="strongly disagree" id="sdisagree8" tabindex="36" required="required"/>
        <label for="sdisagree8">Strongly Disagree</label>
        </span>
      <span>
        <input type="radio" name="2c" value="disagree" id="disagree8" tabindex="37"/>
            <label for="disagree8">Somewhat Disagree</label>
            </span>
      <span>
        <input type="radio" name="2c" value="neutral" id="neutral8" tabindex="38"/>
            <label for="neutral8">Neutral</label>
            </span>
      <span>
        <input type="radio" name="2c" value="agree" id="agree8" tabindex="39"/>
            <label for="agree8">Somewhat Agree</label>
            </span>
      <span>
        <input type="radio" name="2c" value="strongly agree" id="sagree8" tabindex="40"/>
            <label for="sagree8">Strongly Agree</label>
            </span>
      <li>I frequently track how well we're adopting these key behaviors, as well as results, to see if my influence efforts are working.</li>
      <span><input type="radio" name="2d" value="strongly disagree" id="sdisagree9" tabindex="41" required="required"/>
      <label for="sdisagree9">Strongly Disagree</label>
      </span>
      <span>
        <input type="radio" name="2d" value="disagree" id="disagree9" tabindex="42"/><label for="disagree9">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="2d" value="neutral" id="neutral9" tabindex="43"/><label for="neutral9">Neutral</label></span>
      <span>
        <input type="radio" name="2d" value="agree" id="agree9" tabindex="44"/><label for="agree9">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="2d" value="strongly agree" id="sagree9" tabindex="45"/><label for="sagree9">Strongly Agree</label></span>
   </ol>
   <h4>3. Help Them Love What They Hate</h4>
   <ol>
      <li>Whenever possible, I invite people to try out and test new things rather than use authority or pressure to compel them.</li>
      <span>
        <input type="radio" name="3a" value="strongly disagree" id="sdisagree11" tabindex="51" required="required"/>
            <label for="sdisagree11">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="3a" value="disagree" id="disagree11" tabindex="52"/><label for="disagree11">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="3a" value="neutral" id="neutral11" tabindex="53"/><label for="neutral11">Neutral</label></span>
      <span>
        <input type="radio" name="3a" value="agree" id="agree11" tabindex="54"/><label for="agree11">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="3a" value="strongly agree" id="sagree11" tabindex="55"/><label for="sagree11">Strongly Agree</label></span>
      <li>I go beyond business and economic arguments to help people see the moral and ethical imperatives that call for change.</li>
      <span><input type="radio" name="3b" value="strongly disagree" id="sdisagree12" tabindex="56" required="required" title="Please choose one of these answers."/>
        <label for="sdisagree12">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="3b" value="disagree" id="disagree12" tabindex="57"/><label for="disagree12">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="3b" value="neutral" id="neutral12" tabindex="58"/><label for="neutral12">Neutral</label></span>
      <span>
        <input type="radio" name="3b" value="agree" id="agree12" tabindex="59"/><label for="agree12">Somewhat Agree</label></span>
      <span><input type="radio" name="3b" value="strongly agree" id="sagree12" tabindex="60"/><label for="sagree12">Strongly Agree</label></span>
      <li>I avoid giving lectures or logical arguments for why others should change and instead tell compelling stories that illustrate the human and moral reasons that call for change.</li>
      <span>
        <input type="radio" name="3c" value="strongly disagree" id="sdisagree13" tabindex="61" required="required" title="Please choose one of these answers."/><label for="sdisagree13">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="3c" value="disagree" id="disagree13" tabindex="62"/><label for="disagree13">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="3c" value="neutral" id="neutral13" tabindex="63"/><label for="neutral13">Neutral</label></span>
      <span>
        <input type="radio" name="3c" value="agree" id="agree13" tabindex="64"/><label for="agree13">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="3c" value="strongly agree" id="sagree13" tabindex="65"/><label for="sagree13">Strongly Agree</label></span>
      <li>I find creative ways to engage people in direct experiences (field trips, pilot programs, simulations, etc.) that will help them feel differently about the need for change.</li>
      <span>
        <input type="radio" name="3d" value="strongly disagree" id="sdisagree14" tabindex="66" required="required" title="Please choose one of these answers."/><label for="sdisagree14">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="3d" value="disagree" id="disagree14" tabindex="67"/><label for="disagree14">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="3d" value="neutral" id="neutral14" tabindex="68"/><label for="neutral14">Neutral</label></span>
      <span>
        <input type="radio" name="3d" value="agree" id="agree14" tabindex="69"/><label for="agree14">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="3d" value="strongly agree" id="sagree14" tabindex="70"/><label for="sagree14">Strongly Agree</label></span>
   </ol>
   <h4>4. Help Them Do What They Can't</h4>
   <ol>
      <li>I share hints, tips, practice opportunities, and take time to coach those I am trying to help change.</li>
      <span>
        <input type="radio" name="4a" value="strongly disagree" id="sdisagree16" tabindex="76" required="required" title="Please choose one of these answers."/><label for="sdisagree16">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="4a" value="disagree" id="disagree16" tabindex="77"/><label for="disagree16">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="4a" value="neutral" id="neutral16" tabindex="78"/><label for="neutral16">Neutral</label></span>
      <span>
        <input type="radio" name="4a" value="agree" id="agree16" tabindex="79"/><label for="agree16">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="4a" value="strongly agree" id="sagree16" tabindex="80"/><label for="sagree16">Strongly Agree</label></span>
      <li>I invest as much time and effort in helping people develop the skills and abilities they need to succeed as I do in trying to motivate them to change.</li>
      <span>
        <input type="radio" name="4b" value="strongly disagree" id="sdisagree17" tabindex="81" required="required" title="Please choose one of these answers."/><label for="sdisagree17">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="4b" value="disagree" id="disagree17" tabindex="82"/><label for="disagree17">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="4b" value="neutral" id="neutral17" tabindex="83"/><label for="neutral17">Neutral</label></span>
      <span>
        <input type="radio" name="4b" value="agree" id="agree17" tabindex="84"/><label for="agree17">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="4b" value="strongly agree" id="sagree17" tabindex="85"/><label for="sagree17">Strongly Agree</label></span>
      <li>I help others develop skills in ALL the areas that may be required, including the social, emotional, and interpersonal skills and not just the technical or physical skills they need.</li>
      <span>
        <input type="radio" name="4c" value="strongly disagree" id="sdisagree18" tabindex="86" required="required" title="Please choose one of these answers."/><label for="sdisagree18">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="4c" value="disagree" id="disagree18" tabindex="87"/><label for="disagree18">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="4c" value="neutral" id="neutral18" tabindex="88"/><label for="neutral18">Neutral</label></span>
      <span>
        <input type="radio" name="4c" value="agree" id="agree18" tabindex="89"/><label for="agree18">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="4c" value="strongly agree" id="sagree18" tabindex="90"/><label for="sagree18">Strongly Agree</label></span>
      <li>I create lots of opportunities to help people practice new skills in challenging but safe conditions.</li>
      <span>
        <input type="radio" name="4d" value="strongly disagree" id="sdisagree19" tabindex="91" required="required" title="Please choose one of these answers."/><label for="sdisagree19">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="4d" value="disagree" id="disagree19" tabindex="92"/><label for="disagree19">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="4d" value="neutral" id="neutral19" tabindex="93"/><label for="neutral19">Neutral</label></span>
      <span>
        <input type="radio" name="4d" value="agree" id="agree19" tabindex="94"/><label for="agree19">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="4d" value="strongly agree" id="sagree19" tabindex="95"/><label for="sagree19">Strongly Agree</label></span>
   </ol>
   <h4>5. Provide Encouragement</h4>
   <ol>
      <li>I make sure others can see I am willing to sacrifice a great deal (ego, time, money, or other priorities) to achieve change.</li>
      <span>
        <input type="radio" name="5a" value="strongly disagree" id="sdisagree21" tabindex="101" required="required" title="Please choose one of these answers."/><label for="sdisagree21">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="5a" value="disagree" id="disagree21" tabindex="102"/><label for="disagree21">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="5a" value="neutral" id="neutral21" tabindex="103"/><label for="neutral21">Neutral</label></span>
      <span>
        <input type="radio" name="5a" value="agree" id="agree21" tabindex="104"/><label for="agree21">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="5a" value="strongly agree" id="sagree21" tabindex="105"/><label for="sagree21">Strongly Agree</label></span>
      <li>I carefully identify opinion leaders and get them involved in encouraging others to change.</li>
      <span>
        <input type="radio" name="5b" value="strongly disagree" id="sdisagree22" tabindex="106" required="required" title="Please choose one of these answers."/><label for="sdisagree22">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="5b" value="disagree" id="disagree22" tabindex="107"/><label for="disagree22">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="5b" value="neutral" id="neutral22" tabindex="108"/><label for="neutral22">Neutral</label></span>
      <span>
        <input type="radio" name="5b" value="agree" id="agree22" tabindex="109"/><label for="agree22">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="5b" value="strongly agree" id="sagree22" tabindex="110"/><label for="sagree22">Strongly Agree</label></span>
      <li>I make sure formal leaders teach, model, praise, and coach others toward the new behaviors.</li>
      <span>
        <input type="radio" name="5c" value="strongly disagree" id="sdisagree23" tabindex="111" required="required" title="Please choose one of these answers."/><label for="sdisagree23">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="5c" value="disagree" id="disagree23" tabindex="112"/><label for="disagree23">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="5c" value="neutral" id="neutral23" tabindex="113"/><label for="neutral23">Neutral</label></span>
      <span>
        <input type="radio" name="5c" value="agree" id="agree23" tabindex="114"/><label for="agree23">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="5c" value="strongly agree" id="sagree23" tabindex="115"/><label for="sagree23">Strongly Agree</label></span>
      <li>I encourage and teach everyone how to hold everyone else accountable for the new behaviors (including me), irrespective of level or position.</li>
      <span>
        <input type="radio" name="5d" value="strongly disagree" id="sdisagree24" tabindex="116" required="required" title="Please choose one of these answers."/><label for="sdisagree24">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="5d" value="disagree" id="disagree24" tabindex="117"/><label for="disagree24">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="5d" value="neutral" id="neutral24" tabindex="118"/><label for="neutral24">Neutral</label></span>
      <span>
        <input type="radio" name="5d" value="agree" id="agree24" tabindex="119"/><label for="agree24">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="5d" value="strongly agree" id="sagree24" tabindex="120"/><label for="sagree24">Strongly Agree</label></span>
   </ol>
   <h4>6. Provide Help</h4>
   <ol>
      <li>I make sure others can get timely assistance whenever they are struggling with the new behaviors.</li>
      <span>
        <input type="radio" name="6a" value="strongly disagree" id="sdisagree26" tabindex="126" required="required" title="Please choose one of these answers."/><label for="sdisagree26">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="6a" value="disagree" id="disagree26" tabindex="127"/><label for="disagree26">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="6a" value="neutral" id="neutral26" tabindex="128"/><label for="neutral26">Neutral</label></span>
      <span>
        <input type="radio" name="6a" value="agree" id="agree26" tabindex="129"/><label for="agree26">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="6a" value="strongly agree" id="sagree26" tabindex="130"/><label for="sagree26">Strongly Agree</label></span>
      <li>I identify obstacles to change and make sure people have others around them that can help overcome these obstacles.</li>
      <span>
        <input type="radio" name="6b" value="strongly disagree" id="sdisagree27" tabindex="131" required="required" title="Please choose one of these answers."/><label for="sdisagree27">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="6b" value="disagree" id="disagree27" tabindex="132"/><label for="disagree27">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="6b" value="neutral" id="neutral27" tabindex="133"/><label for="neutral27">Neutral</label></span>
      <span>
        <input type="radio" name="6b" value="agree" id="agree27" tabindex="134"/><label for="agree27">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="6b" value="strongly agree" id="sagree27" tabindex="135"/><label for="sagree27">Strongly Agree</label></span>
      <li>I go to great lengths to ensure people feel safe to ask for help without feeling embarrassed or put on the spot.</li>
      <span>
        <input type="radio" name="6c" value="strongly disagree" id="sdisagree28" tabindex="136" required="required" title="Please choose one of these answers."/><label for="sdisagree28">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="6c" value="disagree" id="disagree28" tabindex="137"/><label for="disagree28">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="6c" value="neutral" id="neutral28" tabindex="138"/><label for="neutral28">Neutral</label></span>
      <span>
        <input type="radio" name="6c" value="agree" id="agree28" tabindex="139"/><label for="agree28">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="6c" value="strongly agree" id="sagree28" tabindex="140"/><label for="sagree28">Strongly Agree</label></span>
      <li>I ensure everyone knows they have the authority to step up to the new behaviors.</li>
      <span>
        <input type="radio" name="6d" value="strongly disagree" id="sdisagree29" tabindex="141" required="required" title="Please choose one of these answers."/><label for="sdisagree29">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="6d" value="disagree" id="disagree29" tabindex="142"/><label for="disagree29">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="6d" value="neutral" id="neutral29" tabindex="143"/><label for="neutral29">Neutral</label></span>
      <span>
        <input type="radio" name="6d" value="agree" id="agree29" tabindex="144"/><label for="agree29">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="6d" value="strongly agree" id="sagree29" tabindex="145"/><label for="sagree29">Strongly Agree</label></span>
   </ol>
   <h4>7. Change Their Economy</h4>
   <ol>
      <li>I put more effort into sharing the moral, ethical, and business reasons for change than into rewarding or punishing people toward the change.</li>
      <span>
        <input type="radio" name="7a" value="strongly disagree" id="sdisagree31" tabindex="151" required="required" title="Please choose one of these answers."/><label for="sdisagree31">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="7a" value="disagree" id="disagree31" tabindex="152"/><label for="disagree31">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="7a" value="neutral" id="neutral31" tabindex="153"/><label for="neutral31">Neutral</label></span>
      <span>
        <input type="radio" name="7a" value="agree" id="agree31" tabindex="154"/><label for="agree31">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="7a" value="strongly agree" id="sagree31" tabindex="155"/><label for="sagree31">Strongly Agree</label></span>
      <li>I ensure that our formal reward and discipline systems encourage the desired behavior more than discourage the undesired behavior.</li>
      <span>
        <input type="radio" name="7b" value="strongly disagree" id="sdisagree32" tabindex="156" required="required" title="Please choose one of these answers."/><label for="sdisagree32">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="7b" value="disagree" id="disagree32" tabindex="157"/><label for="disagree32">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="7b" value="neutral" id="neutral32" tabindex="158"/><label for="neutral32">Neutral</label></span>
      <span>
        <input type="radio" name="7b" value="agree" id="agree32" tabindex="159"/><label for="agree32">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="7b" value="strongly agree" id="sagree32" tabindex="160"/><label for="sagree32">Strongly Agree</label></span>
      <li>I make careful use of small yet thoughtful rewards to encourage people who make early attempts to change.</li>
      <span>
        <input type="radio" name="7c" value="strongly disagree" id="sdisagree33" tabindex="161" required="required" title="Please choose one of these answers."/><label for="sdisagree33">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="7c" value="disagree" id="disagree33" tabindex="162"/><label for="disagree33">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="7c" value="neutral" id="neutral33" tabindex="163"/><label for="neutral33">Neutral</label></span>
      <span>
        <input type="radio" name="7c" value="agree" id="agree33" tabindex="164"/><label for="agree33">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="7c" value="strongly agree" id="sagree33" tabindex="165"/><label for="sagree33">Strongly Agree</label></span>
      <li>I use formal rewards to encourage not just the right results, but also the right behaviors that will lead to those results.</li>
      <span>
        <input type="radio" name="7d" value="strongly disagree" id="sdisagree34" tabindex="166" required="required" title="Please choose one of these answers."/><label for="sdisagree34">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="7d" value="disagree" id="disagree34" tabindex="167"/><label for="disagree34">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="7d" value="neutral" id="neutral34" tabindex="168"/><label for="neutral34">Neutral</label></span>
      <span>
        <input type="radio" name="7d" value="agree" id="agree34" tabindex="169"/><label for="agree34">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="7d" value="strongly agree" id="sagree34" tabindex="170"/><label for="sagree34">Strongly Agree</label></span>
   </ol>
   <h4>8. Change Their Space</h4>
   <ol>
      <li>I use visual reminders, regular communications, and metrics to keep the new behaviors and need for change visible and "top of mind."</li>
      <span>
        <input type="radio" name="8a" value="strongly disagree" id="sdisagree36" tabindex="176" required="required" title="Please choose one of these answers."/><label for="sdisagree36">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="8a" value="disagree" id="disagree36" tabindex="177"/><label for="disagree36">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="8a" value="neutral" id="neutral36" tabindex="178"/><label for="neutral36">Neutral</label></span>
      <span>
        <input type="radio" name="8a" value="agree" id="agree36" tabindex="179"/><label for="agree36">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="8a" value="strongly agree" id="sagree36" tabindex="180"/><label for="sagree36">Strongly Agree</label></span>
      <li>I make sure people have access to the tools, information, and resources they need to adopt new behaviors.</li>
      <span>
        <input type="radio" name="8b" value="strongly disagree" id="sdisagree37" tabindex="181" required="required" title="Please choose one of these answers."/><label for="sdisagree37">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="8b" value="disagree" id="disagree37" tabindex="182"/><label for="disagree37">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="8b" value="neutral" id="neutral37" tabindex="183"/><label for="neutral37">Neutral</label></span>
      <span>
        <input type="radio" name="8b" value="agree" id="agree37" tabindex="184"/><label for="agree37">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="8b" value="strongly agree" id="sagree37" tabindex="185"/><label for="sagree37">Strongly Agree</label></span>
      <li>Where possible, I redesign the physical space of those I’m trying to influence to make the new behavior easy to do and the bad behavior hard to do.</li>
      <span>
        <input type="radio" name="8c" value="strongly disagree" id="sdisagree38" tabindex="186" required="required" title="Please choose one of these answers."/><label for="sdisagree38">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="8c" value="disagree" id="disagree38" tabindex="187"/><label for="disagree38">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="8c" value="neutral" id="neutral38" tabindex="188"/><label for="neutral38">Neutral</label></span>
      <span>
        <input type="radio" name="8c" value="agree" id="agree38" tabindex="189"/><label for="agree38">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="8c" value="strongly agree" id="sagree38" tabindex="190"/><label for="sagree38">Strongly Agree</label></span>
      <li>Where possible, I change the physical environment so the new behavior becomes an automatic part of our workflow and people can act without having to think about it.</li>
      <span>
        <input type="radio" name="8d" value="strongly disagree" id="sdisagree39" tabindex="191" required="required" title="Please choose one of these answers."/><label for="sdisagree39">Strongly Disagree</label></span>
      <span>
        <input type="radio" name="8d" value="disagree" id="disagree39" tabindex="192"/><label for="disagree39">Somewhat Disagree</label></span>
      <span>
        <input type="radio" name="8d" value="neutral" id="neutral39" tabindex="193"/><label for="neutral39">Neutral</label></span>
      <span>
        <input type="radio" name="8d" value="agree" id="agree39" tabindex="194"/><label for="agree39">Somewhat Agree</label></span>
      <span>
        <input type="radio" name="8d" value="strongly agree" id="sagree39" tabindex="195"/><label for="sagree39">Strongly Agree</label></span>
   </ol>
                        </div>
                        <input type="submit" value="Submit" class="assesmetmain" tabindex="201"/></form>
                    </div>
                </div>
            </div>
        </section>

        

        </>
    )
}