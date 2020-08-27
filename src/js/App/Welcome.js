import React from 'react';
import {Link} from "react-router-dom";


function Welcome(names) {



    return (
        <section className={"container"}>
            <div className={"back"}>
                <div className={"back_container"}>
                    <div className={"front_container"}>
                       <h2>Welcome {names}</h2>
                        <div className={"choice_menu"}>
                            <Link to='/app/NewForm'> <div className="choice">Stwórz zamówienie</div></Link>
                            <div className="choice">Wysłane zapytania</div>
                            <div className="choice">Gotowe karty wyboru</div>
                            <div className="choice">Historia Twoich zamówień</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Welcome;