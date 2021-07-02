import React from "react";
import "./ProjectCard.css";
import { Grid, Button } from "@material-ui/core/";

function portfolio(props) {
    return (
 <div className="ProjectCard__Card">
      <img
        className="ProjectCard__Image"
        src={props.projectObj.image}
        alt="Card cap"
      />

      <div className="ProjectCard__Details">
        <h4 style={{ fontWeight: "bold" }}>{props.projectObj.title}</h4>
        <p className="">{props.projectObj.description}</p>
        <p>
          <strong>Project Type: </strong>
          {props.projectObj.type}
        </p>
        <p>
          <strong>My Contribution: </strong>
          {props.projectObj.contribution}
        </p>
        <p>
          <strong>Technology Used: </strong>
          {props.projectObj.technologyUsed}
        </p>
      </div>

      <div className="ProjectCard__Buttons">
        <Grid container spacing={0} justify="center" alignItems="flex-end">
          <Grid item xs={6} align="center">
            <Button
              variant="contained"
              color="primary"
              href={props.projectObj.repo}
              target="_blank"
              className="portfolioBtn"
            >
              Github Repo
            </Button>
          </Grid>
          <Grid item xs={6} align="center">
            <Button
              variant="contained"
              color="secondary"
              href={props.projectObj.deployed}
              target="_blank"
              className="portfolioBtn"
            >
              Deployed
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>


    );
  }
export default portfolio;