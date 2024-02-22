import About from "../components/About";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import React from 'react';
import Project from "../components/Project";
// import Certificate from "../components/Certificate";

const Home = () =>{
  return (
    <section>
        <Header/>
        <About />
        <Project />
      {/* <Contact />
      <Footer />
      
      <Certificate /> */}
    </section>
  );
}

export default Home;