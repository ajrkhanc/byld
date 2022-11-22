import Link from "next/link"
import Head from "next/head"
import moment from 'moment'


export async function getServerSideProps(context) {
    const slug = context.params.blogsSlug;
    const post5 = await fetch(`https://byld.in/yogesh-sood/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const posts = await post5.json()   




    return {
        props: {            
            posts,            
        },
    }
}



export default function singleblog({posts }) {
    const postdetail = posts['0'];

    const PopupRegisterd = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonformpopup").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel1popup").innerHTML = "Thank you for your details. Check your inbox for more details.";
  
                    document.getElementById("showlabel1popup").style.display = "block";
                    setTimeout(function () {
                    document.getElementById("popuphidec").style.display = "none";
                }, 3000);
  
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)
  
    }

    return (
        <>
            <Head>
            <title>{postdetail.title.rendered}</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.png" />

                {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@blanchard_india" />
      <meta name="twitter:creator" content="@blanchard_india" />
      <meta name="twitter:title" content={postdetail.title.rendered} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={postdetail.yoast_head_json['og_image']['0'].url} />
      <meta property="twitter:url" content={postdetail.slug} />
    
      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en-in" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blanchard International" />
      <meta property="og:title" content={postdetail.title.rendered} />
      <meta property="og:description" content="" />
      <meta property="og:image" name="image" content={postdetail.yoast_head_json['og_image']['0'].url} />
      <meta property="og:url" content={postdetail.slug} />

                

            </Head>
            
            <div class="rs-inner-blog pt-50 pb-50 md-pt-70 md-pb-70">
                <div class="container custom">
                    <div class="row">
                        <div className="col-lg-2"></div>
                        <div class="col-lg-8 pr-35 md-pr-15 md-mt-50">
                        <div class="blog-details">
                                    <div class="bs-img">
                                        <a><img src={postdetail.yoast_head_json['og_image']['0'].url} alt="Blog Standard"/></a>
                                        <h3 className="wwwcc">{postdetail.title.rendered}</h3>
                                    </div>
                                    <div class="blog-full">
                                        <ul class="single-post-meta">
                                        <li>
                                            <span class="p-date"><i class="fa fa-calendar-check-o"></i> {moment(posts.ModifiedDate).format('DD MMMM Y')}</span>
                                        </li>
                                        <li>
                                            <span class="p-date"> <i class="fa fa-user-o"></i> {postdetail._embedded.author[0].name}</span>
                                        </li>
                                        </ul>
                                        <div className="bloglinkh" dangerouslySetInnerHTML={{__html:postdetail.content.rendered}}></div>
                                  
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
