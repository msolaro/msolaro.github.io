import React, { Component } from 'react';
import Header from './components/header/header'
import About from './components/about/about';
import Resume from './components/resume/resume';
import Home from './components/home/home';
import PortfolioPage from './Pages/PortfolioPage'
import Footer from './components/footer/footer'
import Project from "./components/project/project";

import Grid from "@material-ui/core/Grid";
import projectsArr from "./utils/projects.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Resume />
        <PortfolioPage>
  
        </PortfolioPage>
        <Footer />
      </div>
    );
  }
}
export default App;