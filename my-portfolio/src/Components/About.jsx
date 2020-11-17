import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="profile">
            <div className="profilePhoto">
              <img
                id="profileImage"
                alt="profile"
                src="../../Images/profieImgsmile.jpg"
              ></img>
              <div>프로필 사진</div>
              <div className="profileInfo">
                <div>EunJin Kim</div>
                <div>#Genie</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
