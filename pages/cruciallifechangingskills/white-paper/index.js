import Head from 'next/head'

export default function Books(){
    return(
        <>
        <Head>
            <title>White Paper - Crucial Life-Changing Skills</title>            
        </Head>
        <section class="about-section workshop-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>Welcome to Crucial Life-Changing Skills Learning Hub!</h1>                       
                     </div>


                   

                  

                    <div class="col-md-4 workshop-col"> 
                       <div class="bookshd text-center">                            
                            <img class="center-image mbb-15" src="/classets/img/el5.jpg" alt="books" />          
                            <h6 className='bookprice elerningf'>3 Skills to Manage Difficult Conversations with Parents</h6>                           
                            <a class="booksbtn" href='/cruciallifechangingskills/white-paper/3-skills-to-manage-difficult-conversations-with-parents'>Read White Paper</a>
                       </div>
                    </div>

                   

                    <div class="col-md-4 workshop-col"> 
                       <div class="bookshd text-center">                            
                            <img class="center-image mbb-15" src="/classets/img/el1.jpg" alt="books" />
                            <h6 className='bookprice elerningf'>Five Tips For Mastering <br></br>Crucial Conversations</h6>                           
                            <a class="booksbtn" href='/cruciallifechangingskills/white-paper/five-tips-for-mastering-crucial-conversations'>Read White Paper</a>
                       </div>
                    </div>

                </div>
            </div>
        </section>

        
   
    
        </>
    )
}