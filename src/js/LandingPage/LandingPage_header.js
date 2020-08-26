import React from 'react';

function LandingPageHeader() {
 return (
      <header>
          <nav>
              <a href={"#"}><div className={"brand"}>MaterialOWO</div></a>
              <div className={"nav_menu"}>
                  <ul>
                      <li> <a href={"#"}> Ceny Pakietów </a> </li>
                      <li> <a href={"#"}> Pracodawcy </a> </li>
                      <li> <a href={"#"}> Zalety </a> </li>
                      <li> <a href={"#"}> Kontakt </a> </li>
                  </ul>
              </div>
          </nav>
      </header>
 );
}
export default LandingPageHeader;