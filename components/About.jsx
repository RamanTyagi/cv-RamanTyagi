import React from "react";
import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { grey } from "@material-ui/core/colors";
function About() {
  return (
    <div className="Carousel">
      <h1 className="about">
        ABOUT{" "}
        <AssignmentIndIcon fontSize="large" style={{ color: grey[500] }} />
      </h1>
      <hr />
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <div className="icon">
              <h1 className="aboutHeadings">
                Fast <SpeedIcon fontSize="large" style={{ color: grey[700] }} />
              </h1>
              <p className="aboutpara">
                {" "}
                Fast load times and log free interaction,my highest priority.{" "}
              </p>
            </div>
          </div>

          <div class="item">
            <div className="icon">
              <h1 className="aboutHeadings">
                Responsive{" "}
                <DevicesIcon fontSize="large" style={{ color: grey[700] }} />
              </h1>
              <p className="aboutpara">
                My layouts will work on any device,big or small.{" "}
              </p>
            </div>
          </div>

          <div class="item">
            <div className="icon">
              <h1 className="aboutHeadings">
                Intuitive{" "}
                <HowToRegIcon fontSize="large" style={{ color: grey[700] }} />
              </h1>
              <p className="aboutpara">Strong preference for easy to use.</p>
            </div>
          </div>
          <div class="item">
            <div className="icon">
              <h1 className="aboutHeadings">
                Dynamic{" "}
                <SportsEsportsIcon
                  fontSize="large"
                  style={{ color: grey[700] }}
                />
              </h1>
              <p className="aboutpara">
                Websites don't have to be static,I love making pages come to
                life{" "}
              </p>
            </div>
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" />
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default About;
