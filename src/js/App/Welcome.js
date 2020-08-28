import React from 'react';
import {Link} from "react-router-dom";


function Welcome(names) {



    return (
        <section className={"container"}>
            <div className={"Welcome_back"}>
                <div className={"Welcome_back_container"}>
                    <h2>Witaj {names} !</h2>
                    <div className={"front_container"}>
                        <div className={"choice_menu"}>
                            <div className="choice"><Link to='/app/NewForm'>Stwórz zamówienie</Link></div>
                            <div className="choice"><Link to='/app/ActualForm'>Wysłane zapytania</Link></div>
                            <div className="choice"><Link to='/app/ActualCardChoice'>Gotowe karty wyboru</Link></div>
                            <div className="choice"><Link to='/app/HistoryForm'>Historia Twoich zamówień</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Welcome;