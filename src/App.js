import React, { Component } from "react";
import "./App.scss";
import Experience from "./components/Experience";
import Me from "./components/Me";
import { Experiences, Me_Info, Skills, Projects } from "./me_it";

class App extends Component {
  renderExperiences(from, to) {
    return (
      <ul className="list-experiences">
        {Experiences.filter((el, i) => i >= from && i < to).map(e => (
          <Experience experience={e} />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>Diego Tonini</p>
        </header>

        <div className="page page1 sizeA4">
          <main>
            <Me me={Me_Info} />
            <Description />
            <School />
            {/* {this.renderExperiences(0,3)} */}
          </main>
        </div>

        <div className="page page2 lastPage sizeA4">
          <main>
            <section className="experiences">
              <h2 className="title">EXPERIENCE</h2>
              {this.renderExperiences(0, 2)}
            </section>
          </main>
        </div>

        <div className="page page2 sizeA4">
          <main>
            <section className="experiences">
              <h2 className="title">EXPERIENCE</h2>
              {this.renderExperiences(2, 4)}
            </section>

            <div className="row row--container">
              <section className="skills">
                <h2 className="title">SKILLS</h2>
                <ul className="skills-list">
                  {Skills.map(s => (
                    <span>{s.tag}</span>
                  ))}
                </ul>
              </section>
              <section className="projects">
                <h2 className="title">MY PROJECTS</h2>
                <ul className="projects-list">
                  {Projects.map(p => (
                    <li className="project--row">
                      <span className="project--name">{p.name}</span>
                      <span className="project--url">{p.url}</span>
                      <span className="project--description">
                        {p.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* <img className="firma" src="./firma.png"/> */}

            <footer>
              <p>
                In compliance with the Italian legislative Decree no. 196 dated
                30/06/2003, I hereby authorize you to use and process my
                personal details contained in this document
              </p>
            </footer>
          </main>
        </div>
      </div>
    );
  }
}

const Description = () => (
  <section className="description">
    <h2 className="title">ABOUT</h2>
    <p>
      Obviously I am passionate about technology in all its aspects and in every
      field of application. I never settle for what I do and monotony is just
      what I would like to stay away from.
    </p>
    <div className="horizontal--divider" />
    <p>
      I am a skydiver so I expect a dynamic job, risky but above all not
      monotonous. I love people, I love working together and creating something
      out of the business environment.
    </p>
    <div className="horizontal--divider" />
    <p>
      I am optimistic and I am going to sleep with the thought that sooner or
      later I will have a revolutionary idea.
    </p>
    <p>
      I saw a lot of similar cv, and I like problem solving, from mathematical
      games to the code of a program to create a cv in pdf without using
      illustrator (like this).
    </p>
  </section>
);

const School = props => {
  return (
    <section className="school">
      <h2 className="title">SCHOOL</h2>
      <ul className="schoolList">
        {Me_Info.schools.map(s => {
          return (
            <li className="colum" key={s.Name}>
              <span>{s.name}</span>
              <span>{s.period}</span>
              <span>{s.resultTitle}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default App;
