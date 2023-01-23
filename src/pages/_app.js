import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/scss/_main.scss';
import dynamic from 'next/dynamic';

const Layout = dynamic(import('../components/Layouts/Layout'));

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
