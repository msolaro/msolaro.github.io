import React from "react";
import headshot from "../../images/headshot.jpg";
import resume from "../../Documents/resume.pdf" ;

function about(){
    return (

      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={headshot} alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              After finishing my B.S. in Cyber Security Engineering, I continued my studies in the form of CTFs, virtual labs, and certificate programs.
              I have also been working on several IT projects in order to further my understanding of networking and TCP/IP protocols.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Max Solaro <br />
                  <a href="mailto:#0">msolaro@iastate.edu</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href={resume} className="btn btn--download">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
export default about;