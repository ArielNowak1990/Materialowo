import React from 'react';
import {Link} from "react-router-dom";
import {PAGE_URL} from "../Fetch/fetch";
import {NavLink} from "react-router-dom";

let adres = window.location.href;

function LandingPageHeader2() {
 return (
      <header>
          <nav>
              <a href={PAGE_URL}><div className={"brand"}>MaterialOWO</div></a>
              <div className={"nav_menu"}>
                  <ul>
                      <li> <NavLink to='/app/NewForm' activeClassName={'AppSidebarActiveLink'}>STWÓRZ ZAMÓWIENIE</NavLink> </li>
                      <li> <NavLink to='/app/ActualForm' activeClassName={'AppSidebarActiveLink'}> WYSŁANE ZAPYTANIA </NavLink> </li>
                      <li> <NavLink to='/app/ActualCardChoice' activeClassName={'AppSidebarActiveLink'}> KARTY WYBORU </NavLink> </li>
                      <li> <NavLink to='/app/HistoryForm' activeClassName={'AppSidebarActiveLink'}> ARCHIWUM </NavLink></li>
                      <li> <a href={adres} activeClassName={'AppSidebarActiveLink'}> TWOJA GŁÓWNA </a> </li>
                      <li> <a href={PAGE_URL} > WYLOGUJ </a> </li>
                  </ul>
              </div>
          </nav>
      </header>
 );
}
export default LandingPageHeader2;