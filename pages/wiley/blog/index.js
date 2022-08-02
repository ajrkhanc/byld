import Head from 'next/head'

export default function Blog(){
    return(
        <>
        <Head>
            <title>Blog - Wiley</title>
            <meta name="description" content=""/> 
        </Head>
        <div className="rs-inner-blog ptt-40 pbb-50">
                <div className="container custom">
                    <div className="row">                        
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-12 mbb-20">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <a href="#"><img src="/wileyassets/img/blog1.jpg" alt=""/></a>
                                            <ul className="post-categories">
                                                <li><a href="#">Team Development</a></li>
                                            </ul>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><a href="#">5 Behavior of Cohesive Team Helps in Exponential Growth</a></h3>
                                            <div className="blog-meta">
                                                <ul className="btm-cate">
                                                    <li>
                                                        <div className="blog-date">
                                                            <i className="fa fa-calendar-check-o"></i> Aug 7, 2021                                                        
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="author">
                                                            <i className="fa fa-user-o"></i> Fivebehaviors  
                                                        </div>
                                                    </li> 
                                                </ul>
                                            </div>
                                            <div className="blog-desc">   
                                            In the 5 Behavior of a Cohesive Team model, dominating practical struggle becomes easier to address when a group underpins weakness-based trust. Instead of keeping away from something, this model advises us that contention is a sound practice that drives development and makes a pledge…
                                            </div>
                                            <div className="blog-button">
                                                <a className="blog-btn" href="#">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="pagination-area">
                                        <div className="nav-link">
                                            <span className="page-number white-color">1</span>
                                            <a className="page-number" href="#">2</a>
                                            <a className="page-number border-none" href="#">Next</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="widget-area">                                
                                <div className="recent-posts mbb-20">
                                    <div className="widget-title">
                                        <h3 className="title">Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-widget no-border">
                                        <div className="post-img">
                                            <a href="#"><img src="/wileyassets/img/blog1.jpg" alt=""/></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="#"> Customer Onboarding Strategy: A Guide to Class </a>
                                            <span className="date-post"> <i className="fa fa-calendar"></i> Aug 8, 2021 </span>
                                        </div>
                                    </div>
                                    <div className="recent-post-widget">
                                        <div className="post-img">
                                            <a href="#"><img src="/wileyassets/img/blog1.jpg" alt=""/></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="#">  How investing in dependend increasing to business </a>
                                            <span className="date-post"> <i className="fa fa-calendar"></i> Aug 8, 2021 </span>
                                        </div>
                                    </div>
                                    <div className="recent-post-widget">
                                        <div className="post-img">
                                            <a href="#"><img src="/wileyassets/img/blog1.jpg" alt=""/></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="#">7 Productivity tips to avoid burnout when working</a>
                                            <span className="date-post"> <i className="fa fa-calendar"></i> Aug 8, 2021 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="categories">
                                    <div className="widget-title">
                                        <h3 className="title">Categories</h3>
                                    </div>
                                    <ul>
                                        <li><a href="branding.html">Branding</a></li>
                                        <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                        <li><a href="e-commerce.html">E-commerce</a></li>
                                        <li><a href="graphic-design.html">Graphic Design</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        </>
    )
}