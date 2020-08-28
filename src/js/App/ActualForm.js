import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";
import {Link} from "react-router-dom";

function ActualForm(user) {
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
            <div className={"pulpit_background"}>
                <div className={"box"}>
                    <div className={"recipes"}>
                        <div className={"recipes_header"}>
                            <h1>LISTA WYSŁANYCH ZAMÓWIEŃ:</h1>
                            <Link to={"#"}><i className="fas fa-plus-square"/></Link>
                        </div>
                        <div className={"recipes_table"}>
                            <div className={"table_header"}>
                                <div className={"id"}>ID</div>
                                <div className={"nazwa"}>ODBIORCY:</div>
                                <div className={"opis"}>MATERIAŁY</div>
                                <div className={"akcje"}>AKCJE</div>
                            </div>
                            <div className={"table"}>
                                {orders.map((element, index) => {return(
                                    <div key={element.id} className={"table_element"}>
                                        <div className={"id"}>{element.id}</div>
                                        <div className={"nazwa"}>{element.firm}</div>
                                        <div className={"nazwa"}>{element.status}</div>
                                        {/* TODO tu konieczna druga pętla*/}
                                        <div className={"nazwa"}>{element.elements.fabric}</div>
                                        <div className={"nazwa"}>{element.dateAuthor[2]}</div>
                                    </div>
                                )})}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )};
}

export default ActualForm;