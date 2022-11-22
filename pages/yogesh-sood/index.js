import Head from 'next/head'


export async function getStaticProps() {
    const res = await fetch('https://byld.in/yogesh-sood/wp-json/wp/v2/posts?_embed&per_page=30')
    const posts = await res.json()
    console.log(posts)

    return {
        props: {
            posts
        },
    }
}

export default function Books({ posts }) {
    return (
        <>
            <Head>
                <title>Books - Crucial Life-Changing Skills</title>
            </Head>
            <section class="about-section workshop-hero">
                <div class="">
                    <img class="yimg100" src="/assets/img/yogesh-sood/ys-sood.jpg" alt="books" />
                </div>
            </section>

            <section className='ysbg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <p><i>“The new norms of life are emerging at personal, team, organizational, and country levels. Darwin’s law will play out again. Only the ones able to adapt will survive. The race is on. Let us participate in the same.”
                                – Yogesh Sood (CMD, BYLD Group)</i></p>
                        </div>
                        <div className='col-sm-3'>
                            <div className='lbt'>
                                <a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/?originalSubdomain=in"><i className="fa fa-linkedin"></i> Follow CMD Yogesh Sood</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ptt-50 pbb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='ysirl'>
                                <img class="yimg100" src="/assets/img/yogesh-sood/yhsir.jpg" alt="yhsir" />
                                <p><a href='#'>Yogesh Sood</a></p>
                                <p>(CMD, BYLD Group)</p>
                                <p><a href='mailto:yogeshs@byldgroup.com'>yogeshs@byldgroup.com</a></p>
                            </div>

                        </div>
                        <div className='col-md-9'>
                            <div className='ysirr'>
                                <h3>Latest from the CEO</h3>

                                {
                                    posts.map((getpost) => {
                                        return (
                                            <div className='blocr'>
                                                <div className='bl1'>
                                                    <h4><a href={getpost.slug}>{getpost.title.rendered}</a></h4>
                                                    <p>Dear Yogesh,Do you feel swamped with work at the workplace? Or have your managers given you new tasks every other day? I experienced a similar instance when one of my counterparts resigned a few days back. He wasn't bothersome to work even in his notice period. This led to me ...</p>
                                                    <a href={`/yogesh-sood/${getpost.slug}`} className='ybtnc'>Read More</a>
                                                </div>
                                                <div className='bl2'>
                                                  <img class="yimg100" src={getpost._embedded['wp:featuredmedia']['0'].source_url} alt="Images"/>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}