import dynamic from 'next/dynamic';

const Header = dynamic(import('../Common/Header'));
const Footer = dynamic(import('../Common/Footer'));

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
