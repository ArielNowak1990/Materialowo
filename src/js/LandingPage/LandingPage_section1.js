import React from 'react';
import Carousel from "./carousel";
import {Link} from "react-router-dom";





function LandingPageSection1() {
 return (
     <section className={"container"}>
         <div className={"section1"}>
         <div className={"login_sign"}>
             <h2> Witaj !</h2>
             <p> Cieszymy się że jesteś! </p>
             <p> Chętnie pomożemy Ci zarządzać Twoim procesem zamówień materiałów wszelkiego rodzaju !</p>
             <div className={"buttonsy"}>
                 <Link to='/app/log'><button className={"button_main"}>Zaloguj się</button></Link>
                 <Link to='/app/sign'><button className={"button_main"}>Zarejestruj się</button></Link>

             </div>

         </div>
            <Carousel/>
         </div>
     </section>
 );
}
export default LandingPageSection1;