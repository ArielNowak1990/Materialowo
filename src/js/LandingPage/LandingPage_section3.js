import React from 'react';


function LandingPageSection3() {
 return (
     <div className="container">
      <section className="popular" id={"zalety"}>
       <h2>Dlatego warto skorzystać z naszych usług:</h2>
       <div className="proof_popular">
        <div className="box">
         <div><i className="far fa-clock"></i></div>
         <h3>90 min</h3>
         <p>Tyle oszczędzisz na jednej karcie</p>
        </div>
        <div className="box">
         <div><i className="fas fa-coins"></i></div>
         <h3>15%</h3>
         <p>Tyle średnio tańsze zakupy</p>
        </div>
        <div className="box">
         <div><i className="fas fa-money-bill-alt"></i></div>
         <h3>37%</h3>
         <p>Tyle najczęściej się oszczędza</p>
        </div>
        <div className="box">
         <div><i className="fas fa-laugh-wink"></i></div>
         <h3>+5</h3>
         <p>tyle zyskujesz do samopoczucia</p>
        </div>
        <div className="box">
         <div><i className="fas fa-thumbs-up"></i></div>
         <h3>uznanie</h3>
         <p>od szefa za ładne dokumenty</p>
        </div>
       </div>
      </section>
     </div>
 );
}
export default LandingPageSection3;