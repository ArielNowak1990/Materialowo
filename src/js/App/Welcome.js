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
                            <Link to='/app/ActualForm'><div className="choice">Wysłane zapytania</div></Link>
                            <Link to='/app/ActualCardChoice'><div className="choice">Gotowe karty wyboru</div></Link>
                            <Link to='/app/HistoryForm'><div className="choice">Historia Twoich zamówień</div></Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Welcome;