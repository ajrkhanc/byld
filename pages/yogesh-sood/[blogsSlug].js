import Link from "next/link"
import Head from "next/head"
import moment from 'moment'


export async function getServerSideProps(context) {
    const slug = context.params.blogsSlug;
    const post5 = await fetch(`https://yogeshsood.onrender.com/api/post/${slug}`)
    const posts = await post5.json()   




    return {
        props: {            
            posts,            
        },
    }
}



export default function singleblog({posts }) {


    return (
        <>
            <Head>
            <title>{posts.Title}</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.png" />

                {/* Twitter */}
      {/* <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@blanchard_india" />
      <meta name="twitter:creator" content="@blanchard_india" />
      <meta name="twitter:title" content={postdetail.title.rendered} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={postdetail.yoast_head_json['og_image']['0'].url} />
      <meta property="twitter:url" content={postdetail.slug} /> */}
    
      {/* Open Graph / Facebook */}
      {/* <meta property="og:locale" content="en-in" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blanchard International" />
      <meta property="og:title" content={postdetail.title.rendered} />
      <meta property="og:description" content="" />
      <meta property="og:image" name="image" content={postdetail.yoast_head_json['og_image']['0'].url} />
      <meta property="og:url" content={postdetail.slug} /> */}

                

            </Head>
            
            <div class="rs-inner-blog pt-50 pb-50 md-pt-70 md-pb-70">
                <div class="container custom">
                    <div class="row">
                        <div className="col-lg-2"></div>
                        <div class="col-lg-8 pr-35 md-pr-15 md-mt-50">

                            
                        <div class="blog-details">
                                    <div class="bs-img">
                                        <a><img src={posts.ImageURL} alt={posts.ImageAlt} /></a>
                                        <h3 className="wwwcc">{posts.Title}</h3>
                                    </div>
                                    <div class="blog-full">
                                        <ul class="single-post-meta">
                                        <li>
                                            <span class="p-date"><i class="fa fa-calendar-check-o"></i> {moment(posts.ModifiedDate).format('DD MMMM Y')}</span>
                                        </li>
                                        <li>
                                            <span class="p-date"> <i class="fa fa-user-o"></i> {posts.AuthorFullname}</span>
                                        </li>
                                        </ul>
                                        <div className="bloglinkh" dangerouslySetInnerHTML={{ __html: posts.Content }}></div>
                                  
                                    </div>
                                </div>



                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
