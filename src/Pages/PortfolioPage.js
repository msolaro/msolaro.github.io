import React from "react";
import Project from "../components/project/project";
import projectsArr from "../utils/projects.json";
import "../App.css";
import Grid from "@material-ui/core/Grid";

function PortfolioPage() {
  return (
     <section id="PortfolioPage" className="s-PortfolioPage target-section">
    <div>

      <h2 style={{color:"gray"}}>Recent Works</h2>

      {/* <div className=" portfolio__container"> */}
      {/* <div className="card mt-5 mb-5"> */}
      <Grid container direction="row" justify="left" alignItems="center">
        {projectsArr.map((project, index) => (
          <Grid item xs={12} sm={12} align="">
            <Project
              key={project.id}
              projectObj={project}
              index={index}
            ></Project>
          </Grid>
        ))}
      </Grid>
      {/* </div> */}
      {/* </div> */}
    </div>
    </section>
  );
}

export default PortfolioPage;