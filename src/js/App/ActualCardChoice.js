import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";
import {Link} from "react-router-dom";

function ActualCardChoice(user) {
    const [myUser, setMyUser] = useState(user)
    const [orders, setOrders] = useState("")
    const [actualOrders, setActualOrders] =useState([])

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
                let arrayActual = [];
                order.map(element => {if (element.status === "close"){arrayActual.push(element)}})
                setActualOrders([...arrayActual])
            })
            .catch(err => console.log(err));


    },[])

    const handleChangeStatus = (id) => {
        actualOrders.map(element => {if (element.id === id){
            element.status="archive";
            fetch(`${API_URL}/orders/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(element),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(alert("Zapytanie zostało zarchiwizowane"))
                .catch(error => console.log(error))
        }
            let arrayActual = [];
            actualOrders.map(element => {if (element.status === "close"){arrayActual.push(element)}})
            setActualOrders([...arrayActual])
        })}

    const handleOpenCard = (id) =>{
        window.location.href=`${PAGE_URL}/NewCardChoice/${id}`;
    }

    if (actualOrders.length < 1) {return ( "trwa wczytywanie danych")}
    if (actualOrders.length >=1) {
        return (
            <section className={"container"}>
                <div className={"list"}>
                    <div className={"list_header"}>
                        <h1>LISTA KART WYBORU:</h1>
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
                            {actualOrders.map((element, index) => {return(
                                <div key={element.id} className={"table_element"}>
                                    <div className={"id"}>{index+1}</div>
                                    <div className={"odbiorcy"}><ol>
                                        {element.firm.map( (el, ind) =>{return ( <li key={ind}>{ind+1} {el}</li>)} )}</ol></div>
                                    <div className={"term"}>{element.dateAuthor[1]}</div>
                                    <div className={"materialy"}><ol>{element.elements.map( (ele, inde) => {return(<li key={inde}>{inde+1} {ele.fabric} {ele.unit} {ele.quantity} </li>)})}</ol></div>
                                    <div onClick={ () => handleOpenCard(element.id)}><i className="fas fa-file-invoice-dollar">Otwórz Kartę</i></div>
                                    <div onClick={ () => handleChangeStatus(element.id)}><i className="fas fa-file-invoice-dollar">przenieś do archiwum</i></div>
                                </div>
                            )})}
                        </div>
                    </div>
                </div>
            </section>
        )}
}

export default ActualCardChoice;