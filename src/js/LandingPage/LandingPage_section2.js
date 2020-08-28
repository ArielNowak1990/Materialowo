import React from 'react';


function LandingPageSection2() {
 return (
     <div className="container white">
      <section className="pricing">
       <h2>Cennik</h2>
       <div className="pricing_option">
        <div className="option">
         <h3>PAKIET PODSTAWOWY</h3>
         <span>$0</span>
         <span></span>
         <p>
          <ul>
           <li><i className="far fa-check-circle"></i> 10 zamówień miesięcznie</li>
           <li><i className="far fa-check-circle"></i> możliwość porównania 3 ofert</li>
           <li><i className="far fa-check-circle"></i> pełne wsparcie techniczne</li>
           <li><i className="fas fa-do-not-enter"></i> brak dostępu do historii</li>
           <li><i className="fas fa-do-not-enter"></i> brak możliwość drukowania</li>

          </ul>
         </p>
         <button className={"button_main"}>Begin</button>
        </div>

        <div className="option">
         <h3>PAKIET PROFESJONALNY</h3>
         <span>$25</span>
         <span>Limited offer</span>
         <p>
          <ul>
           <li><i className="far fa-check-circle"></i> 20 zamówień miesięcznie</li>
           <li><i className="far fa-check-circle"></i> możliwość porównania 5 ofert</li>
           <li><i className="far fa-check-circle"></i> pełne wsparcie techniczne</li>
           <li><i className="far fa-check-circle"></i> dostęp do historii</li>
           <li><i className="far fa-check-circle"></i>możliwość drukowania</li>
          </ul>
         </p>
         <button className={"button_main"}>Begin</button>
        </div>

        <div className="option">
         <h3>PAKIET PREMIUM</h3>
         <span>$60</span>
         <span>Limited offer</span>
         <p>
          <ul>
           <li><i className="far fa-check-circle"></i> brak limitu zamówień miesięcznie</li>
           <li><i className="far fa-check-circle"></i> brak limitu porównań</li>
           <li><i className="far fa-check-circle"></i> pełne wsparcie techniczne</li>
           <li><i className="far fa-check-circle"></i> dostęp do historii</li>
           <li><i className="far fa-check-circle"></i> możliwość drukowania</li>
          </ul>
         </p>
         <button className={"button_main"}>Begin</button>
        </div>
       </div>
      </section>
     </div>
 );
}
export default LandingPageSection2;