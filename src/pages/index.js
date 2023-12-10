import Main from '../components/Main';
import USP from '../components/USP';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

import PageScrollTop from '../components/common/PageScrollTop';

const index = () => {
  return (
    <>
      <Main />
      <USP />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <PageScrollTop />
    </>
  );
};

export default index;
