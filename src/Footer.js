import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="http://strava.com/athletes/31642006" class="badge strava-badge">
        {" "}
      </a>
      <a
        href="https://www.linkedin.com/in/mtorfason/"
        class="badge linkedin-badge"
      >
        {" "}
      </a>

      <a
        href="https://www.facebook.com/markus.torfason/"
        class="badge facebook-badge"
      >
        {" "}
      </a>
      <a
        href="https://www.instagram.com/mktorfa/"
        class="badge instagram-badge"
      >
        {" "}
      </a>

      <p className="copyright">© 2020 Markús Karl Torfason.</p>
    </div>
  );
}

export default Footer;
