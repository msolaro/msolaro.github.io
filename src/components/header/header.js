import React from "react";

  function header(){
    return (
      <header className="s-header">
        <div className="row s-header__nav-wrap">
          <nav className="s-header__nav">
            <ul>
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#PortfolioPage">Works</a></li>
            </ul>
          </nav>
        </div> {/* end row */}
        <a className="s-header__menu-toggle" href="#0" title="Menu">
          <span className="s-header__menu-icon" />
        </a>
      </header>
    );
  }

export default header;