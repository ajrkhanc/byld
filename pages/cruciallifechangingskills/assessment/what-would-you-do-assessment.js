import Head from 'next/head'

export default function BrowseCourses(){
    return(
        <>
        <Head>
            <title>What Would You Do Assessment | Crucial Learning</title>
            <meta name="description" content="The What Would You Do assessment reveals your natural tendencies when confronted with a gap in expectation or performance. See where you stand by taking this assessment."/> 
        </Head>
        
        <section className='assesmentbannnerbg'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <h2>WHAT WOULD YOU DO?</h2>
                        <p>When others perform poorly, fail to keep their word, or behave badly, what we say and do can mean the difference between solving the problem and making matters worse. Take the assessment and discover how well you respond when others fail to meet expectations or violate trust.</p>
                        <p>Read each situation and select the answer that best reflects what you would MOST LIKELY DO. Your results will show on the next page.</p>
                    </div>
                    <div className='col-md-6'>
                        <div className='assesmentimgbanner'>
                            <img src="/classets/img/accountability-convo.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='assesmentpart2'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-12'>
                        <div className='dfdfdf'>
                      <form className='mlicss'>
                                                   
                                <div className='odd1 mform'>
                                <p>1. You have been in a new role at work and want to make sure your first appraisal goes well. You have been informally asking your manager for feedback. However, all he says is “You’re doing well.” You:</p>
                                <span><input type="radio" name="q1" value="a" id="q1a" tabindex="2" required=""/><label for="q1a">Meet with him so that you can formally explain why the feedback is so important to you.</label></span>
                                <span><input type="radio" name="q1" value="b" id="q1b" tabindex="3"/><label for="q1b">Offer to send him a specific questionnaire that asks him to rate your strengths and weaknesses.</label></span>
                                </div>

                                <div className='even1 mform'>
                                <p>2. Your direct report is a great tactical executor but not a good strategic thinker. She desperately wants a promotion for which you don’t think she is qualified. You:</p>
                                <span><input type="radio" name="q2" value="a" id="q2a" tabindex="4" required=""/><label for="q2a">Let her know that in order to get promoted in the organization, she is going to need to be more strategic.</label></span>
                                <span><input type="radio" name="q2" value="b" id="q2b" tabindex="5"/><label for="q2b">Offer to connect her with a mentor in the organization who is a good strategic thinker.</label></span>
                                </div>

                                <div className='odd1 mform'>
                                <p>3. The IT department still hasn’t delivered the new computer you were expecting… last week. You:</p>
                                <span><input type="radio" name="q3" value="a" id="q3a" tabindex="6" required=""/><label for="q3a">Call the IT department and let them know that if the computer doesn’t get to you by the end of the week, you will need to call the IT manager to let her know about your concern.</label></span>
                                <span><input type="radio" name="q3" value="b" id="q3b" tabindex="7"/><label for="q3b">Call the IT department and ask what you can do to help them get you the computer you need.</label></span>
                                </div>

                                <div className='even1 mform'>
                                <p>4. A direct report delivers most projects a few days late. You describe the gap and:</p>
                                <span><input type="radio" name="q4" value="a" id="q4a" tabindex="8" required=""/><label for="q4a">Speak to him about the way this is damaging his credibility with others on the project team.</label></span>
                                <span><input type="radio" name="q4" value="b" id="q4b" tabindex="9"/><label for="q4b">Share some tips that would help him manage his schedule more effectively.</label></span>
                                </div>

                                <div className='odd1 mform'>
                                <p>5. You need a report from the marketing product manager in order to complete a product proposal. He hasn’t gotten it to you, despite promising that he would. You:</p>
                                <span><input type="radio" name="q5" value="a" id="q5a" tabindex="10" required=""/><label for="q5a">Let him know that if you don’t get his insights into the proposal, your manager won’t be happy with you or with him.</label></span>
                                <span><input type="radio" name="q5" value="b" id="q5b" tabindex="11"/><label for="q5b">Ask if it would be helpful for you to send an intern from your team over to help him out by crunching the data for him.</label></span>
                                </div>

                                <div className='even1 mform'>
                                <p>6. Your manager is AWOL. She has been canceling meetings, missing one-on-one meetings, failing to dial in for conference calls, etc. You need her executive sponsorship on an important project. You:</p>
                                <span><input type="radio" name="q6" value="a" id="q6a" tabindex="12" required=""/><label for="q6a">E-mail her your concerns that the project will fail without her engagement.</label></span>
                                <span><input type="radio" name="q6" value="b" id="q6b" tabindex="13"/><label for="q6b">Approach her assistant and ask her to help coordinate and reschedule meetings with your manager.</label></span>
                                </div>

                                <div className='odd1 mform'>
                                <p>7. Your teenage daughter comes home past curfew… for the fourth time this month. You:</p>
                                <span><input type="radio" name="q7" value="a" id="q7a" tabindex="14" required=""/><label for="q7a">Explain your concerns and let her know this is a violation of trust.</label></span>
                                <span><input type="radio" name="q7" value="b" id="q7b" tabindex="15"/><label for="q7b">Tell her that going forward you will text her thirty minutes before curfew to remind her to be home on time.</label></span>
                                </div>

                                <div className='even1 mform'>
                                <p>8. Your manager keeps adding new requirements to an important project but doesn’t give your team more time or resources. You:</p>
                                <span><input type="radio" name="q8" value="a" id="q8a" tabindex="16" required=""/><label for="q8a">Express your concerns that quality will likely suffer because of her additions.</label></span>
                                <span><input type="radio" name="q8" value="b" id="q8b" tabindex="17"/><label for="q8b">Create and share a visual dashboard that helps clarify the trade-offs between cost, quality, and time each time a new requirement is added.</label></span>
                                </div>

                                <div className='odd1 mform'>
                                <p>9. Your spouse isn’t pulling his/her weight at home—leaving you with the bulk of the household chores while he/she does other, more enjoyable things. You:</p>
                                <span><input type="radio" name="q9" value="a" id="q9a" tabindex="18" required=""/><label for="q9a">Help your spouse see that his/her negligence is making your life harder.</label></span>
                                <span><input type="radio" name="q9" value="b" id="q9b" tabindex="19"/><label for="q9b">Ask your spouse how you could make it easier for him or her to do the chores he or she committed to do.</label></span>
                                </div>

                                <div className='even1 mform'>
                                <p>10. Your best friend has been going through a hard time in her personal life. You want to support her, but she is so negative that it is hard to be around her. You want to help her be more positive, so you:</p>
                                <span><input type="radio" name="q10" value="a" id="q10a" tabindex="20" required=""/><label for="q10a">Give her a pep talk to help her see the positive aspects of her life.</label></span>
                                <span><input type="radio" name="q10" value="b" id="q10b" tabindex="21"/><label for="q10b">Give her the contact information for a therapist another friend highly recommends.</label></span>
                                </div>
                                
                            <input type="submit" value="Submit" tabindex="22" class="assesmetmain"/>
                         
                        
                      </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}