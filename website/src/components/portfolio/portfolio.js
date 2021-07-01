import React from "react";
import pihole from "../../images/pihole.png"; 
import retro from "../../images/retropi.jpg";
import dwolla from "../../images/dwolla.png";

function portfolio() {
    return (

      <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
          <div className="column large-12">
            <h3>Projects</h3>
          </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-2 block-tab-1-2 block-500-stack folio-list">
          <div className="column folio-item">
            <a href="#modal-01" className="folio-item__thumb">
              <img src={pihole}/>
            </a>
          </div> {/* end folio-item */}
        

          <div className="column folio-item">
            <a href="#modal-02" className="folio-item__thumb">
              <img src={retro}/>
            </a>
          </div> {/* end folio-item */}
        

                  <div className="column folio-item">
            <a href="www.maxsolaro.tk" className="folio-item__thumb">
              <img src={dwolla}/>
            </a>
          </div> {/* end folio-item */}
        </div>

      </section>
    );
  }
export default portfolio;