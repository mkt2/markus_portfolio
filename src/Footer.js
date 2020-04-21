import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="http://strava.com/athletes/31642006" className="badge strava-badge">
        {" "}
      </a>
      <a
        href="https://www.linkedin.com/in/mtorfason/"
        className="badge linkedin-badge"
      >
        {" "}
      </a>

      <a
        href="https://www.facebook.com/markus.torfason/"
        className="badge facebook-badge"
      >
        {" "}
      </a>
      <a
        href="https://www.instagram.com/mktorfa/"
        className="badge instagram-badge"
      >
        {" "}
      </a>

      <p className="copyright">© 2020 Markús Karl Torfason.</p>
    </div>
  );
}

export default Footer;
