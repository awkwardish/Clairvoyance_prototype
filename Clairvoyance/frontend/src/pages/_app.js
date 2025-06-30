import '../styles/globals.css';
import Layout from '../components/Layout'; // New layout wrapper

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}




