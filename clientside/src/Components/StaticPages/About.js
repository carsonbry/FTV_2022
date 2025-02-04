/* eslint-disable react/no-unescaped-entities */
/* ****************************************************
      
    This file is responsible for creating the About page with Information about our project

*****************************************************/

import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import imgGrady from "../../images/Grady.jpg";
import imgJay from "../../images/Jay.jpg";
import imgHaykal from "../../images/Haykal.jpg";
import imgReyan from "../../images/Reyan.png";
import imgiSchool from "../../images/iSchoolPrimary_RGB_Black.svg";
import imgHailey from "../../images/hailey.jpeg";
import imgCarson from "../../images/carson.jpg";
import imgLiv from "../../images/liv.jpg";
import imgThomas from "../../images/thomas.jpeg";

export class About extends Component {
  render() {
    return (
      <div className="static-page page-container mb-2">
        <div className="static-header">
          <h1>About</h1>
        </div>

        <div className="static-container">
          <div className="card info-card">
            <h3>Funds to Vote</h3>
            <h4 className="second-header">
              <em>
                Informing curious voters on their congresspeoples' campaign
                finances
              </em>
            </h4>

            <p>
              According to AP-NORC, 53% of Americans know nothing or very little
              about how money works in politics. After the Citizens United
              ruling allowed more money in politics, understanding campaign
              finance became more important than ever. Funds to Votes helps by
              displaying this data in a user friendly and beginner researcher
              friendly manner, allowing voters to make more informed decisions.
              Finally, in addition to helping ordinary citizens decide who to
              vote for, our product is designed to aid endorsement groups in
              their research. This helps them decide who to endorse, which
              enables voters to select candidates according to their values.
            </p>
          </div>

          <div className="card info-card">
            <h3>Context</h3>
            <ul>
              <li>
                In 2020, a total of <strong>$14 billion</strong> was spent on
                political campaigns. (That's the the entire GDP of Madagascar!)
              </li>
              <li>
                Existing websites that show campaign finance data are{" "}
                <strong>too complex</strong> for a beginner user.
              </li>
              <li>
                Voters want and need to know more about their representatives in
                an easy-to-understand way so they can make{" "}
                <strong>informed decisions</strong>.
              </li>
            </ul>
          </div>

          <div className="card info-card">
            <h3>Key Features</h3>
            <ul>
              <li>
                Learn what top industries are donating to your congresspeople in
                the U.S. Congress.
              </li>
              <li>
                Identify the bills your congresspeople voted on and their
                positions.
              </li>
              <li>
                See how your congresspeople voted on bills that correlate with a
                top industry they are funded by.
              </li>
              <li>Get an overview of the campaign finance system.</li>
              <li>
                Take action, such as by registering to vote or contacting your
                congresspeople.
              </li>
            </ul>
          </div>

          <div className="card info-card">
            <h3>Team Members 2022</h3>
            <MDBContainer>
              <MDBRow className="about-img-card">
                <div>
                  <MDBCol>
                    <img
                      src={imgHailey}
                      alt="Hailey"
                      className="about-photos"
                    />
                    <p className="mt-1">Hailey Meister</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img
                      src={imgCarson}
                      alt="Carson"
                      className="about-photos"
                    />
                    <p className="mt-1">Carson Bryant</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img
                      src={imgThomas}
                      alt="Thomas"
                      className="about-photos"
                    />
                    <p className="mt-1">Thomas Serrano</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img src={imgLiv} alt="Liv" className="about-photos" />
                    <p className="mt-1">Liv Victorino</p>
                  </MDBCol>
                </div>
              </MDBRow>
            </MDBContainer>
          </div>

          <div className="card info-card">
            <h3>Team Members 2021</h3>
            <MDBContainer>
              <MDBRow className="about-img-card">
                <div>
                  {" "}
                  <MDBCol>
                    <img src={imgGrady} alt="Grady" />
                    <p className="mt-1">Grady Thompson</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img src={imgJay} alt="Jay" />
                    <p className="mt-1">Jay Houppermans</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img src={imgHaykal} alt="Haykal" />
                    <p className="mt-1">Haykal Mubin</p>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol>
                    <img src={imgReyan} alt="Reyan" />
                    <p className="mt-1">Reyan Haji</p>
                  </MDBCol>
                </div>
              </MDBRow>
            </MDBContainer>
          </div>

          <div className="project-info">
            <div className="card info-card status-card">
              <h3>Project Status</h3>
              <p>
                This project was developed by students at the University of
                Washington Information School as part of the Informatics
                program's 2021 Capstone. In 2022, the current team took over the
                project to continue its work. We hope this project continues to
                be passed down from team to team. Development for the 2022
                capstone cycle will be complete on June 1st, 2022 and updates
                will no longer be made.
              </p>
            </div>
            <div className="card info-card">
              <p>
                Email the project team at{" "}
                <a href="mailto:hello@fundstovotes.info">
                  hello@fundstovotes.info
                </a>
                .
              </p>
              <p>
                The project is now open sourced. Source code and documentation
                are available on{" "}
                <a href="https://github.com/FundsToVotes/FTV_2022">GitHub</a>.
                Contributions are welcome.
              </p>
            </div>
          </div>

          <div className="card info-card">
            <h3>Privacy Policy</h3>
            <ul>
              <li>
                Funds to Vote is an open source project created by students at
                the{" "}
                <a href="https://ischool.uw.edu">
                  University of Washington Information School
                </a>{" "}
                during capstone 2021 and continued by a new team in 2022.
              </li>
              <li>Funds To Vote does not collect nor store any user data</li>
              <li>
                This app utilizes the Google Civic Information API. When using
                our app, we use this service to determine your elected officials
                based on the address you enter. The use is bound by the{" "}
                <a href="https://developers.google.com/civic-information/docs/terms">
                  Google APIs Terms of Service
                </a>
                .
              </li>
              <li>
                This app utilizes the ProPublica Congress and Campaign Finance
                APIs. We use these services to obtain data about bills, votes,
                and some campaign finance information. The use is bound by the{" "}
                <a href="https://projects.propublica.org/api-docs/campaign-finance/">
                  Terms of Service
                </a>
                .
              </li>
              <li>
                This app utilizes the OpenSecrets.org API. We use this service
                to obtain certain campaign finance data. The use is bound by the{" "}
                <a href="https://www.opensecrets.org/open-data/api-terms-of-service">
                  Terms of Service
                </a>
                .
              </li>
              <li>This app is hosted entirely on DigitalOcean</li>
            </ul>
          </div>

          <img
            src={imgiSchool}
            role="img"
            alt="University of Washington Information School logo"
            width="300px"
            className="mb-2"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
      </div>
    );
  }
}
export default About;
