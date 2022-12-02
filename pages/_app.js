import Layout from '../components/Layout/Layout';
import CL from '../components/CL/Layout';
import ED from '../components/ED/Layout';
import FiveB from '../components/FiveB/Layout';
import Wiley from '../components/Wiley/Layout';
import Eaglesflightindia from '../components/Eaglesflightindia/Layout';
import Hhf from '../components/Hhf/Layout';
import COS from '../components/cos/Layout'
import COSR from '../components/cosresult/Layout'
import CoachingA from '../components/CoachingA/Layout'
import YogeshSood from '../components/YogeshSood/Layout'
import Leaderbehaviourassessment from '../components/leaderbehaviourassessment/Layout'

// import Hhf from '../components/Hhf/Layout';



import Head from 'next/head'
import Script from 'next/script'
import App from 'next/app'

export default function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/cruciallifechangingskills')) {

      return (
          <CL>
            <Head>
            <title>Home - Crucial Life-Changing Skills</title>
            <meta name="description" content="Learn Life-Transforming Skills Enroll in our award-winning trainings and learn how to handle the most crucial challenges of life and work. Browse Courses Get Started https://www.youtube.com/watch?v=OalK_lZuzYQ Based on 30+ years... Read more"/>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="/classets/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
            <script src="https://unpkg.com/phosphor-icons"></script>
            <link rel="stylesheet" href="/classets/css/style.css" />            
            <link rel="shortcut icon" href="/classets/favicon.png" type="image/x-icon"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-25012511-1"></script>
            <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-25012511-1');
                `,
                  }}
                />
            
        </Head>
              <Component {...pageProps} />
          </CL>
      )

  }


  else if (router.pathname.startsWith('/fivebehaviors')) {

    return (
        <FiveB>
            <Head>
              <meta charset="utf-8" />           
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <link rel="icon" href="/5bassets/favicon.png" />
              <link rel="shortcut icon" href="/5bassets/img/favicon.png" type="image/x-icon"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/bootstrap.min.css"/>
        
              <link rel="stylesheet" type="text/css" href="/5bassets/css/font-awesome.min.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/fonts/flaticon.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/animate.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/owl.carousel.css"/>
          
              <link rel="stylesheet" type="text/css" href="/5bassets/css/off-canvas.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/magnific-popup.css"/>
            
              <link rel="stylesheet" href="/5bassets/css/rsmenu-main.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/nivo-slider.css"/>
              <link rel="stylesheet" type="text/css" href="/5bassets/inc/custom-slider/css/preview.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/rs-spacing.css"/>
            
              <link rel="stylesheet" type="text/css" href="/5bassets/css/style.css"/>
              
              <link rel="stylesheet" type="text/css" href="/5bassets/css/responsive.css"/>
              <link rel="stylesheet" type="text/css" href="/5bassets/css/globals.css"/>
              <link rel="stylesheet" type="text/css" href="/5bassets/css/bg.css"/>

              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205275343-1"></script>
              <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205275343-1');
                `,
                  }}
                />
          </Head>
            <Component {...pageProps} />
        </FiveB>
    )

}

else if (router.pathname.startsWith('/everythingdisc')) {

  return (
      <ED>
          <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/edassets/favicon.png" />
            <link rel="shortcut icon" href="/edassets/img/favicon.png" type="image/x-icon"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/edassets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/edassets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/edassets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/edassets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/edassets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/edassets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/edassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/edassets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-P9GPQ8EC4C"></script>
            <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P9GPQ8EC4C');
                `,
                  }}
                />
      
        </Head>
          <Component {...pageProps} />
      </ED>
  )

}

else if (router.pathname.startsWith('/wiley')) {

  return (
      <Wiley>
          <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/wileyassets/favicon.png" />
            <link rel="shortcut icon" href="/wileyassets/img/favicon.png" type="image/x-icon"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/wileyassets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>

          <Component {...pageProps} />
      </Wiley>
  )

}

else if (router.pathname.startsWith('/eaglesflightindia/byomkesh-bakshi')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>

            
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/feluda')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>

            
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/jagga-jasoos')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>

            
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/karamchand')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>

            
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/kkw')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/> 
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/ms-marple')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/> 
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-4')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/> 
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/museum-caper-5')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/> 
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}

else if (router.pathname.startsWith('/eaglesflightindia/mcw')) {
  return(
    <Hhf>
      <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/> 
        </Head>
      <Component {...pageProps} />
    </Hhf>
  )
}



else if (router.pathname.startsWith('/eaglesflightindia')) {

  return (
      <Eaglesflightindia>
          <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/efassets/favicon.png" />
            <link rel="shortcut icon" href="/efassets/img/favicon.png" type="image/x-icon"/>
          
            <link rel="stylesheet" type="text/css" href="/wileyassets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/efassets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-205257587-1"></script>
            <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-205257587-1');
                `,
                  }}
                />
        </Head>

          <Component {...pageProps} />
      </Eaglesflightindia>
  )

}

else if (router.pathname.startsWith('/coaching/become-a-professional-coach')) {

  return (
      <CoachingA>
          <Head>
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
      
        </Head>

          <Component {...pageProps} />
      </CoachingA>
  )

}

else if (router.pathname.startsWith('/coaching/career-coaching-snapshot/')) {

  return (
      <COSR>
          <Head>
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
      
        </Head>

          <Component {...pageProps} />
      </COSR>
  )

}

else if (router.pathname.startsWith('/coaching/career-coaching-snapshot')) {

  return (
      <COS>
          <Head>
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
      
        </Head>

          <Component {...pageProps} />
      </COS>
  )

}







else if (router.pathname.startsWith('/yogesh-sood')) {

  return (
    <YogeshSood>
    <Head>
          <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/css/yogesh.css"/>
     
          <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
      
          <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
        
          <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
        
          <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
          
          <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
          <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-5PXTTR960E');
        `,
          }}
        />
    
      </Head>
    <Component {...pageProps} />
  </YogeshSood>
  )

}

else if (router.pathname.startsWith('/leader-behaviour-assessment/')) {

  return (
      <COSR>
          <Head>
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
      
        </Head>

          <Component {...pageProps} />
      </COSR>
  )

}

else if (router.pathname.startsWith('/leader-behaviour-assessment')) {

  return (
      <Leaderbehaviourassessment>
          <Head>
            <link rel="stylesheet" type="text/css" href="/efassets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/efassets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/efassets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/efassets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/efassets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/efassets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/efassets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          /> */}
      
        </Head>

          <Component {...pageProps} />
      </Leaderbehaviourassessment>
  )

}














else {

  return (
    <Layout>
      <Head>
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
       
            <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/fonts/flaticon.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/animate.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/owl.carousel.css"/>
        
            <link rel="stylesheet" type="text/css" href="/assets/css/off-canvas.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css"/>
          
            <link rel="stylesheet" href="/assets/css/rsmenu-main.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/nivo-slider.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/inc/custom-slider/css/preview.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/rs-spacing.css"/>
          
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"/>
            
            <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/globals.css"/>
            <link rel="stylesheet" type="text/css" href="/assets/css/bg.css"/>

            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5PXTTR960E"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5PXTTR960E');
          `,
            }}
          />
      
        </Head>
      <Component {...pageProps} />
    </Layout>
)

}
  
}
