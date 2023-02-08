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

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__lo_site_id = 308922;

          (function() {
          var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
          wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
          })();
          `,
            }}
          />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/favicon.png" />
          <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
          <meta name="google-site-verification" content="OM6hSC8XO4ylFInFKwcHaWp5gFMt0Nn6aQ6A-eV7SWc" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/wow.min.js"></script>
          <script src="/assets/js/main.js"></script>
          <script src="/classets/js/script.js"></script>
          <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument