import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import Script from 'next/script'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <Layout>
    <Head>           
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        </Head>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
