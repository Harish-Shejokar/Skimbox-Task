import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Layout from '@/Components/Layout1';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  // const getLayout = Component.getLayout ?? ((page)=> page)

  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}
