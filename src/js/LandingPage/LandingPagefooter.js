import React from 'react';


function LandingPageFooter() {
 return (
     <div className="container">
         <section className="footer" >
             <div className={"Footer_nav"} id={"footer"}>
                 <h3>Nawigacja</h3>
                 <ul>
                     <li>Ceny Pakietów</li>
                     <li>Z kim pracowaliśmy</li>
                     <li>Zalety</li>
                     <li>Kontakt</li>
                     <li>Zaloguj</li>
                     <li>Zarejestruj</li>
                     <li>Obejrzyj przykładową kartę wyboru</li>
                     <li>Obejrzyj przykładową kartę zapytania</li>
                     <li>Obejrzyj przykładową kartę oferty</li>
                 </ul>
             </div>
             <div className={"Footer_media"}>
                 <h3>Znajdziesz nas:</h3>
                 <ul>
                     <li>Facebook: </li>
                     <li>Twiter: </li>
                     <li>Linkedin: </li>
                 </ul>
             </div>
             <div className={"Footer_contact"}>
                 <h3>Kontakt</h3>
                 <ul>
                     <li>Polska</li>
                     <li>32-700 Kraków</li>
                     <li>ulica Kopciuszki 32</li>
                     <li>tel. 888 999 234</li>
                     <li>mail: kopciuszek@krasnoludki.pl</li>
                 </ul>
             </div>
         </section>
     </div>
 );
}
export default LandingPageFooter;