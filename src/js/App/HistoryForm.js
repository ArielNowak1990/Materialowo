import React, {useEffect, useState} from 'react';
import {API_URL} from "../Fetch/fetch";
import {Link} from "react-router-dom";

function HistoryForm(user) {
    const [myUser, setMyUser] = useState(user)
    const [orders, setOrders] = useState("")

    useEffect(() => {
        fetch(`${API_URL}/orders?author=${myUser.userEmail}`)
            .then(response => {
                if (response.ok === false) {
                    throw new Error("błąd sieci!")
                } else {
                    return response.json();
                }
            })
            .then(order => {
                setOrders([...order])
            })
            .catch(err => console.log(err));
    },[])

    if (orders.length < 1) {return ( "trwa wczytywanie danych")}
    if (orders.length >=1) {
        return (
            <section className={"container"}>
                <div className={"list"}>
                    <div className={"list_header"}>
                        <h1>LISTA WYSŁANYCH ZAMÓWIEŃ:</h1>
                        <Link to={"/app/NewForm"}><i className="fas fa-plus-square"/></Link>
                    </div>
                    <div className={"list_table"}>
                        <div className={"table_header"}>
                            <div className={"id"}>ID</div>
                            <div className={"odbiorcy"}>ODBIORCY:</div>
                            <div className={"term"}>ZAKONCZENIE</div>
                            <div className={"materialy"}>MATERIAŁY</div>
                            <div className={"akcje"}>AKCJE</div>
                        </div>
                        <div className={"table"}>
                            {orders.map((element, index) => {return(
                                <div key={element.id} className={"table_element"}>
                                    <div className={"id"}>{element.id}</div>
                                    <div className={"odbiorcy"}><ol>
                                        {element.firm.map( (el, ind) =>{return ( <li key={ind}>{ind+1} {el}</li>)} )}</ol></div>
                                    <div className={"term"}>{element.dateAuthor[1]}</div>
                                    <div className={"materialy"}><ol>{element.elements.map( (ele, inde) => {return(<li key={inde}>{inde+1} {ele.fabric} {ele.unit} {ele.quantity} </li>)})}</ol></div>

                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </section>
        )}
}

export default HistoryForm;