import React from "react";
import Grid from "@material-ui/core/Grid";
import headshot from "../../images/headshot.jpg";

function about(){
    return (

      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src={headshot} />
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
                <a href="#0" className="btn btn--download">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
export default about;