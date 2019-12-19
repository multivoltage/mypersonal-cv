import React, { Component } from "react";
// import Icon from './assets/svg/outline-date_range-24px.svg';
import "../me.scss";

const image_url =
  "https://media.licdn.com/dms/image/C5103AQG9OzZVZYLoxw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=_BcalLnfAP2VECjyvHpJwxUJ67U9-U7ClnT6Ml59Im0";

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
