import dynamic from "next/dynamic";

const About = dynamic(import('../components/AboutUs/About'));
const Breadcrumb = dynamic(import('../components/Common/Breadcrumb'));

export default function AboutUs() {
  return (
    <>
      <Breadcrumb />
      <About />
    </>
  );
}