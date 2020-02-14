import React, { Component } from 'react';
// import Icon from './assets/svg/outline-date_range-24px.svg';
import '../experience.scss';

class Experience extends Component {
  render() {

    const { startDate, endDate, jobTitle, agency, location, shortDescription, longDescription, projects = [], skillsTags = [], logoUrl } = this.props.experience; 
    return (
      <li class="experience--row">
          <div className="line--wrapper">
            <div className="line--wrapper__circle">
              <img src={logoUrl} />
            </div>
            <div className="line--wrapper__line"/>
          </div>

          <div className="content--wrapper">  
            <p className="content--wrapper__job">{jobTitle} - {agency}</p>
            <p className="content--wrapper__period">
                <i class="material-icons">date_range</i>
                <span className="experience--startDate">{startDate} - {endDate}</span>
            </p>
            <p className="content--wrapper__place">
                <i class="material-icons">place</i>
                <span className="experience--place">{location}</span>
            </p>
            {shortDescription && <p className="content--wrapper__description">
                <i class="material-icons">description</i>
                <span className="experience--place">{shortDescription}</span>
            </p>}
            {longDescription && <p className="content--wrapper__description">
                <i class="material-icons">description</i>
                <span className="experience--place">{longDescription}</span>
            </p>}
            {skillsTags.length && <p className="content--wrapper__skillsTags">
              <i class="material-icons">code</i>
              <ul className="skillTags">
                {skillsTags.map((skill => (<li key={skill}><span>{skill}</span></li>)))}
              </ul>
            </p>}
            {projects.length > 0 && <p className="content--wrapper_projects">
              <i class="material-icons">list</i>
              <ul className="projects">
                {projects.map((project) => (
                  <li class="project--row" key={project.name}>
                    <span className="projectName">{project.name}</span>
                    <a className="projectLink" href={project.link}>{project.link}</a>
                  </li>
                ))}
              </ul>
            </p>}
          </div>
      </li>
    );
  }
}

export default Experience;
