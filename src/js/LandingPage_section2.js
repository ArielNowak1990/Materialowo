import React, { useState } from 'react';


function LandingPageSection2() {
 return (
     <div className="container">
      <section className="pricing">
       <h2>Cennik</h2>
       <div className="pricing_option">
        <div className="option">
         <h3>Pakiet Podstawowy</h3>
         <span>$0</span>
         <span></span>
         <p>
          <ul>
           <li><img src="#" alt=""/> 2 GB HDD</li>
           <li><img src="#" alt=""/> 1 Subdomain</li>
           <li><img src="#" alt=""/> 2 E-mails</li>
           <li><img src="#" alt=""/> Two years License</li>
           <li><img src="#" alt=""/> Full Support</li>
          </ul>
         </p>
         <button>Begin</button>
        </div>

        <div className="option">
         <h3>Pakiet Profesjonalny</h3>
         <span>$25</span>
         <span>Limited offer</span>
         <p>
          <ul>
           <li><img src="#" alt=""/> 2 GB HDD</li>
           <li><img src="#" alt=""/> 1 Subdomain</li>
           <li><img src="#" alt=""/> 2 E-mails</li>
           <li><img src="#" alt=""/> Two years License</li>
           <li><img src="#" alt=""/> Full Support</li>
          </ul>
         </p>
         <button>Begin</button>
        </div>

        <div className="option">
         <h3>Pakiet Premium</h3>
         <span>$60</span>
         <span>Limited offer</span>
         <p>
          <ul>
           <li><img src="#" alt=""/> 2 GB HDD</li>
           <li><img src="#" alt=""/> 1 Subdomain</li>
           <li><img src="#" alt=""/> 2 E-mails</li>
           <li><img src="#" alt=""/> Two years License</li>
           <li><img src="#" alt=""/> Full Support</li>
          </ul>
         </p>
         <button>Begin</button>
        </div>
       </div>
      </section>
     </div>
 );
}
export default LandingPageSection2;