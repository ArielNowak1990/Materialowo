import React from 'react';

function LandingPageHeader() {
 return (
      <header>
          <nav>
              <a href={"http://localhost:3001/"}><div className={"brand"}>MaterialOWO</div></a>
              <div className={"nav_menu"}>
                  <ul>
                      <li> <a href={"#cennik"}> CENNIK </a> </li>
                      <li> <a href={"#beneficjenci"}> BENEFICJENCI </a> </li>
                      <li> <a href={"#zalety"}> ZALETY </a> </li>
                      <li> <a href={"#kontakt"}> KONTAKT </a> </li>
                  </ul>
              </div>
          </nav>
      </header>
 );
}
export default LandingPageHeader;