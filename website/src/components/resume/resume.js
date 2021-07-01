import React from "react";

function resume() {
    return (
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Career</h3>
        </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Hy-Vee</h4>
                <p className="resume-block__header-meta">
                  <span>IT Security Engineering Intern</span> 
                  <span className="resume-block__header-date">
                    May 2020 - October 2020
                  </span>
                </p>
              </div>
              <p>
                Utilized SOC tools such as Splunk, FireEye, and Rapid7 to monitor for threats
                Triaged flagged endpoints, investigated issues, and deployed fixes remotely
                Worked to maintain security operations within Hy-Vee
                Reviewed internal firewall ACLs for PCI compliance
                Established and maintained internal simulated phishing attacks
                Maintained email and firewall security rules and regulations

              </p>
            </div> {/* end resume-block */}
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Iowa State University</h4>
                <p className="resume-block__header-meta">
                  <span>Teaching Assistant</span> 
                  <span className="resume-block__header-date">
                    August 2019 - may 2021
                  </span>
                </p>
              </div>
              <p>
                Assisted in the process of creating and deploying labs for Cyber Security Engineering 331 - Application of Cryptographic Concepts to Cyber Security
                Independently ran lab sections and office hours
              </p>
            </div>




            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">iD Tech Coding and AI Academy</h4>
                <p className="resume-block__header-meta">
                  <span>Instructor</span> 
                  <span className="resume-block__header-date">
                    August 2019 - May 2021
                  </span>
                </p>
              </div>
              <p>
                Working through iD Tech, I had an amazing experience teaching tech camps at MIT. The title of the course I taught was 
                Cyber Security Lab: Encryption and Steganography. I got to run the course a total of 4 times, each course lasting 2 weeks. 
                We covered both classical and modern ciphers as well as python and linux.
                              </p>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}


        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Iowa State University</h4>
                <p className="resume-block__header-meta">
                  <span>B.S. Degree in Cyber Security Engineering</span> 
                  <span className="resume-block__header-date">
                    May 2021
                  </span>
                </p>
              </div>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}

    
       <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                  My degree and past work experiences have left me with a wide variety of skills and 
                </p>
                <ul className="skill-bars-fat">
                  <li>
                    <strong>PKI, Encryption, TCP/IP, UDP, TLS, HTTP/S, Linux, Windows, Python, PowerShell, Exploitation Methodology, 
                    Penetration Testing and Ethical Hacking Methodology, Enterprise Security Threat Assesment, Log Analysis (Splunk), 
                    Fundamental Programming Practices, Algorithm Runtime Analysis </strong>
                  </li>

                </ul>
              </div> {/* end resume-block */}
            </div>
       </div> {/* s-resume__section */}
    </section>
    );
  
}
export default resume;