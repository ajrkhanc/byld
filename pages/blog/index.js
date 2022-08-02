import Head from 'next/head'

export default function Blog(){
    return(
        <>
        <Head>
            <title>Blog - BYLD Group</title>
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
                                            <a href="#"><img src="/assets/images/blog/inner/style1/1.jpg" alt=""/></a>
                                            <ul className="post-categories">
                                                <li><a href="#">Branding</a></li>
                                            </ul>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><a href="#">Customer onboarding there business classes</a></h3>
                                            <div className="blog-meta">
                                                <ul className="btm-cate">
                                                    <li>
                                                        <div className="blog-date">
                                                            <i className="fa fa-calendar-check-o"></i> Aug 7, 2021                                                        
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="author">
                                                            <i className="fa fa-user-o"></i> BYLD  
                                                        </div>
                                                    </li> 
                                                </ul>
                                            </div>
                                            <div className="blog-desc">   
                                                We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that...          
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
                                            <a href="#"><img src="/assets/images/blog/inner/style2/1.jpg" alt=""/></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="#"> Customer Onboarding Strategy: A Guide to Class </a>
                                            <span className="date-post"> <i className="fa fa-calendar"></i> Aug 8, 2021 </span>
                                        </div>
                                    </div>
                                    <div className="recent-post-widget">
                                        <div className="post-img">
                                            <a href="#"><img src="/assets/images/blog/inner/style2/2.jpg" alt=""/></a>
                                        </div>
                                        <div className="post-desc">
                                            <a href="#">  How investing in dependend increasing to business </a>
                                            <span className="date-post"> <i className="fa fa-calendar"></i> Aug 8, 2021 </span>
                                        </div>
                                    </div>
                                    <div className="recent-post-widget">
                                        <div className="post-img">
                                            <a href="#"><img src="/assets/images/blog/inner/style2/3.jpg" alt=""/></a>
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