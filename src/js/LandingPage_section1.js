import React, { useState } from 'react';
import Carousel from "./carousel";





function LandingPageSection1() {
 return (
     <section className={"container"}>
         <div className={"section1"}>
         <div className={"login_sign"}>
             <h2> Witaj !</h2>
             <p> Cieszymy się że jesteś! </p>
             <p> Chętnie pomożemy Ci zarządzać Twoim procesem zamówień materiałów wszelkiego rodzaju !</p>
             <div className={"buttonsy"}>
                 <button className={"button_main"}>Zaloguj się</button>
                 <button className={"button_main"}>Zarejestruj się</button>
             </div>

         </div>
            <Carousel/>
         </div>
     </section>
 );
}
export default LandingPageSection1;