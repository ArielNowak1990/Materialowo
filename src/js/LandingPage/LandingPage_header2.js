import React from 'react';
import {Link} from "react-router-dom";
import {PAGE_URL} from "../Fetch/fetch";

let adres = window.location.href;

function LandingPageHeader2() {
 return (
      <header>
          <nav>
              <a href={PAGE_URL}><div className={"brand"}>MaterialOWO</div></a>
              <div className={"nav_menu"}>
                  <ul>
                      <li> <Link to='/app/NewForm'>STWÓRZ ZAMÓWIENIE</Link> </li>
                      <li> <Link to='/app/ActualForm'> WYSŁANE ZAPYTANIA </Link> </li>
                      <li> <Link to='/app/ActualCardChoice'> KARTY WYBORU </Link> </li>
                      <li> <Link to='/app/HistoryForm'> ARCHIWUM </Link></li>
                      <li> <a href={adres}> TWOJA GŁÓWNA </a> </li>
                      <li> <a href={PAGE_URL}> WYLOGUJ </a> </li>
                  </ul>
              </div>
          </nav>
      </header>
 );
}
export default LandingPageHeader2;