import React from "react";
import About from "../../components/About";
// import Blogs from '../../components/Blogs'
// import Contact from '../../components/Contact'
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Projects from "../../components/Projects";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Stats />
      {/* </Contact> */}
      <Footer />
    </div>
  );
};

export default Home;
