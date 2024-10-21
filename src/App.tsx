// import { useState, useEffect } from 'react';

import { About } from "./components/About"
import { Banner } from "./components/Banner"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Formation } from "./components/Formation"
import { Header } from "./components/Header"
// import { Projects } from "./components/Projects"
import { ProjectsNew } from './components/ProjectsNew';
import { Skills } from "./components/Skills"

import AOS from 'aos';
import 'aos/dist/aos.css';
// import loadingImage from './assets/images/loading.gif';

function App() {
  AOS.init();

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, [])

  return (
    <>
        {/* {loading ? <div className='loading'><img src={loadingImage} alt="loading-image" /></div> : */}
          <div className="overflow-hidden">   
              <Header />
              <Banner />
              <About />
              <Formation />
              <Skills />
              {/* <Services /> */}
              {/* <Projects /> */}
              <ProjectsNew />
              <Contact />
              <Footer />
          </div>
        {/* } */}
    </>
  )
}

export default App
