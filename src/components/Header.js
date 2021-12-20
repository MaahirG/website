import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    // const HeaderTitleTypeAnimation = React.memo( () => {
    //   return <Typical className="title-styles" steps={this.titles} loop={50} />
    // }, (props, prevProp) => true);

    return (
      <header id="home" style={{display: 'inline'}}>
          <div className="col-md-12">
            <div>
              {/* <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span> */}
              <br/>
              <br/>
              <h1 className="mb-0">
                {name}
                {/* <Typical steps={[name]} wrapper="p" /> */}
              </h1>
              <br/>
              <h4 className="mb-0">
                {"Software Engineering @University of Waterloo"}
                {/* <Typical steps={["Backend | ML | Autonomous | Robotics"]} wrapper="p" /> */}
              </h4>
              <br/>
              <h4 className="mb-0">
                {"SWE | Backend | ML/DL/AI | Autonomous | Robotics"}
                {/* <Typical steps={["Backend | ML | Autonomous | Robotics"]} wrapper="p" /> */}
              </h4>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;
