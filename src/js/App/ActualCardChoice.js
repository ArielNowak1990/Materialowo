import React, {useEffect, useState} from 'react';
import {API_URL} from "../Fetch/fetch";

function ActualCardChoice(user) {
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

        </section>
    )};
}

export default ActualCardChoice;