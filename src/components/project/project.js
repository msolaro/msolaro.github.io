import React from "react";
import "./project.css";
import "../../App.css";
import { Grid, Button } from "@material-ui/core/";

function Project(props) {
  return (
    <div className="projectCard card">
      <h2 className="projectCard__Title">{props.projectObj.title}</h2>
      <Grid container direction="row" justify="left" alignItems="center">
        <Grid xs={12} sm={4}>
          <img
            className="card-img-top"
            src={props.projectObj.image}
            alt="Card cap"
          />
        </Grid>
        <Grid xs={12} sm={8}>
          <div className="projectCard__Details">
            <p className="">{props.projectObj.description}</p>
            <p>
              Project Type: {props.projectObj.type}
            </p>
            <p>
              My Contribution: {props.projectObj.contribution}
            </p>
            <p>
              Technology Used: {props.projectObj.technologyUsed}
            </p>
            <Grid container spacing={0} justify="center" alignItems="center">
              <Grid item xs={6} align="center">
                <Button
                  style={{width:"100px",height:"50px"}}
                  variant="contained"
                  color="secondary"
                  href={props.projectObj.repo}
                  target="_blank"
                  className="portfolioBtn"
                >
                  More Info
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;