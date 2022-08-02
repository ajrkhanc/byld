import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />           
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <link rel="icon" href="/favicon.png" />
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
        <body>
          <Main />
          <NextScript /> 
         
            <script src="/wileyassets/js/jquery.min.js"></script>            
            <script src="/wileyassets/js/owl.carousel.min.js"></script>        
            <script src="/wileyassets/js/wow.min.js"></script>             
            <script src="/wileyassets/js/main.js"></script>     

        </body>
      </Html>
    )
  }
}

export default MyDocument