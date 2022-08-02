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
            <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon"/>      
        </Head>
        <body>
          <Main />
          <NextScript /> 
         
            <script src="/assets/js/jquery.min.js"></script>            
            <script src="/assets/js/owl.carousel.min.js"></script>        
            <script src="/assets/js/wow.min.js"></script>             
            <script src="/assets/js/main.js"></script>
            <script src="/classets/js/script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument