import React from "react";

import "./footer.css";

function Footer() {
  return (
    <div className="intro__footer">
      <footer>
        <p>You can find your right partner with these technologies!</p>

        <div className="footer__icons">
          <ul>
            <li>
              <i class="fab fa-react"></i>
            </li>
            <li>
              <i class="fab fa-angular"></i>
            </li>
            <li>
              <i class="fab fa-vuejs"></i>
            </li>
            <li>
              <i class="fab fa-node-js"></i>
            </li>
            <li>
              <i class="fab fa-python"></i>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
