import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
            <VerticalTimelineElement
              // visible={true}
              position={'left'}
              className="vertical-timeline-element--work"
              date={work.years}
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-code-branch experience-icon"></i>}
              key={i}
            >
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                {work.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
                {work.company}
              </h5>
              <div style={{ textAlign: "left", marginTop: "15px" }}>
                {tech}
              </div>
            </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-10 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto" style={{overflow: 'hidden', maxwidth: '100vw'}}>
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              // visible={true}
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start experience-icon"></i>}
            />
          </VerticalTimeline>
          <br></br><br></br>
        </div>
      </section>
    );
  }
}

export default Experience;