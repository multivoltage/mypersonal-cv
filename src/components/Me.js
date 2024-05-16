import React, { Component } from "react";
// import Icon from './assets/svg/outline-date_range-24px.svg';
import "../me.scss";

const image_url =
  "https://media.licdn.com/dms/image/D4D03AQETL-8cMKx_qQ/profile-displayphoto-shrink_800_800/0/1715851254740?e=1721260800&v=beta&t=4f7NWRQixhmJoyQtS0gyT-RZ2WtkP1SHZ_ZHPH_ZvPU";

class Me extends Component {
  render() {
    const { phone, email, linkedin, github, location } = this.props.me;
    return (
      <div class="me--row">
        <div className="colum">
          <img className="imageProfile" src={image_url} />
        </div>
        <div className="colum">
          <span className="location">
            <i class="material-icons">location_on</i>
            <span className="text">{location}</span>
          </span>
          <span className="phone">
            <i class="material-icons">phone</i>
            <span className="text">{phone}</span>
          </span>
          <span className="email">
            <i class="material-icons">alternate_email</i>
            <a href={`mailto:${email}`}>
              <span mailTo={email} className="text">
                {email}
              </span>
            </a>
          </span>
          <span className="linkedin">
            <i className="icon-linkedin" />
            <a href={linkedin}>
              <span className="text">{linkedin}</span>
            </a>
          </span>

          <span className="github">
            <i className="icon-github" />
            <a href={github}>
              <span className="text">{github}</span>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Me;
