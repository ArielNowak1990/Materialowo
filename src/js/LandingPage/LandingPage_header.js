import React from 'react';



function LandingPageHeader() {
 return (
      <header>
          <nav>
              <a href={"http://localhost:3001/"}><div className={"brand"}>Material<span>OWO</span></div></a>
              <div className={"nav_menu"}>
                  <ul>
                      <li> <a href={"#pricing"}> PAKIETY </a> </li>
                      <li> <a href={"#popular2"}> USŁUGOBIORCY </a> </li>
                      <li> <a href={"#popular"}> ZALETY </a> </li>
                      <li> <a href={"#footer"}> KONTAKT </a> </li>
                  </ul>
              </div>
          </nav>
      </header>
 );
}
export default LandingPageHeader;