import React, { Component } from "react";
import Top10Bar from "./Top10Bar";
import defaultProfile from "../images/placeholder-square.png";
import { ComparisonModal } from "./ComparisonModal";
import ButterflyClass from "./ButterflyClass";

export class ComparisonPage extends Component {
  constructor(props) {
    super(props);

    //default state
    this.state = {
      show: false,
    };
  }

  repsCallback = (details, side) => {
    if (side === "left") {
      this.setState({ repOne: details });
    } else {
      this.setState({ repTwo: details });
    }
    this.setState({ show: false });
  };

  colorCodeParty = (party) => {
    if (party === "Republican Party") {
      return "red";
    } else if (party === "Democratic Party") {
      return "blue";
    } else {
      return "black";
    }
  };

  phoneToString = (phone) => {
    if (phone == undefined) {
      return;
    }
    const regex = /\d+/;
    let arr = phone[0].match(regex);
    return "" + arr;
  };

  makeSidePanel = (details) => {
    return (
      <div>
        <div className="details-side-header">
          <h2>{details.name}</h2>
          <h3 className="position-text mb-3">{details.office}</h3>
          <div className="image-box">
            <div>
              <img
                src={details.photoUrl}
                alt="candidate headshot"
                className={
                  "headshot image-details-cropper " +
                  this.colorCodeBackground(details.party)
                }
                onError={(event) => {
                  event.target.src = defaultProfile;
                  event.onerror = null;
                }}
              />
            </div>
          </div>

          <h4
            className="mt-3"
            style={{ color: this.colorCodeParty(details.party) }}
          >
            {details.party}
          </h4>
        </div>

        <h5 className="mt-4">DC Office Number:</h5>
        <a
          className="phone-for-mobile"
          href={`tel:${this.phoneToString(details.phones)}`}
        >
          {details.phones}
        </a>
        <p className="phone-for-desktop">{details.phones}</p>

        <h5 className="mt-3">Congressperson Websites:</h5>
        {details.urls}

        <h5 className="mt-3">Office Mailing Address:</h5>
        {details.address}
      </div>
    );
  };

  showModal = (side) => {
    this.setState({ show: true, side: side });
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  makeBarChart = (details) => {
    return (
      <div>
        <Top10Bar repsName={details.name} />
      </div>
    );
  };

  makeButterflyChart = (details1, details2) => {
    console.log("bf function");
    console.log(`${details2.name} + ${details1.name}`);
    return (
      <div>
        <ButterflyClass repsName1={details1.name} repsName2={details2.name} />
      </div>
    );
  };

  colorCodeBackground = (party) => {
    if (party === "Republican Party") {
      return "republican-background";
    } else {
      return "democrat-background";
    }
  };

  render() {
    let sidePanelOne;
    if (this.state.repOne) {
      sidePanelOne = this.makeSidePanel(this.state.repOne);
    }

    let sidePanelTwo;
    if (this.state.repTwo) {
      sidePanelTwo = this.makeSidePanel(this.state.repTwo);
    }

    let ButterflyChart;
    if (this.state.repOne && this.state.repTwo) {
      console.log("here");
      ButterflyChart = this.makeButterflyChart(
        this.state.repTwo,
        this.state.repOne
      );
    }

    let candidateChosen = false;
    if (this.state.repOne && this.state.repTwo) {
      candidateChosen = true;
    }

    let candidates;
    if (candidateChosen) {
      candidates = this.state.repOne.name + " and " + this.state.repTwo.name;
    } else {
      candidates = "";
    }

    return (
      <div className="white-container">
        <div className="comparison-header">
          <h1>Campaign Comparison</h1>
          <h2>{candidates}</h2>
        </div>

        <div className="mobile-comparison card info-card m-4">
          <h2> Please go to the desktop site to use this feature.</h2>
        </div>

        <div className="vertical-stretch">
          <div className="comparison-tool-all">
            {/* Side panel one */}
            <div className="comp-side-left">
              {sidePanelOne}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.showModal("left");
                }}
                className="btn landing-button learn-more select-candidate"
              >
                Select Congressperson
              </button>
            </div>

            {/* Visualizations */}
            <div className="comp-viz-container">{ButterflyChart}</div>

            {/* Side panel two */}
            <div className="details-side-panel comp-side-right">
              {sidePanelTwo}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.showModal("right");
                }}
                className="btn landing-button learn-more select-candidate btn-right"
              >
                Select Congressperson
              </button>
            </div>
          </div>
          <ComparisonModal
            show={this.state.show}
            toggle={this.toggle}
            repsCallback={this.repsCallback}
            side={this.state.side}
          />
        </div>
      </div>
    );
  }
}

export default ComparisonPage;
