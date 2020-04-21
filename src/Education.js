import React from "react";

import Header from "./Header";
import BottomContainer from "./BottomContainer";
import Certification from "./Certification";
import CertFlutter from "./images/Udemy_Flutter_Certificate.jpg";
import CertWeb from "./images/Udemy_Web_Dev_Certificate.jpg";
import CertMERN from "./images/Udemy_MERN_Certificate.jpg";
import "./ContentPages.css";

function Education(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="content-pages">
        <h1 className="content-page-title">Education</h1>
        <p>
          I have a master's degree in computational engineering and a
          bachelor's degree in computer science. I also have the following
          certifications:
        </p>
        <Certification
          title={"The Complete 2020 Web Dev Bootcamp"}
          description={
            "A Udemy course on various topics in web development. Taught by Dr. Angela Yu, founder and CTO of The App Brewery."
          }
          img={CertWeb}
        />
        <Certification
          title={"The MERN Fullstack Guide"}
          description={
            "A Udemy course on the MERN stack. The teachers introduce MongoDB, React, Node, and Express. There is a big course project in which the students learn how to create a MERN applications from scratch."
          }
          img={CertMERN}
        />
        <Certification
          title={"Learn Flutter & Dart"}
          description={
            "A Udemy course on mobile development using Flutter, including an introduction to the Dart programming language. There are various course projects in which the students get practice in creating their own Flutter applications."
          }
          img={CertFlutter}
        />
      </div>

      <BottomContainer />
    </React.Fragment>
  );
}

export default Education;
