import React, {useEffect, useState} from 'react';
import {API_URL} from "../Fetch/fetch";

function NewCardChoice() {
    const [allOfert, setAllOfert] =useState(false)

    let adres = window.location.href;
    let arrayAdres = [...adres];
    let arrayGoodAdres = arrayAdres.slice(0,36);
    let goodAdres = "";
    for (let i=0; i<36; i++){ goodAdres=goodAdres+arrayGoodAdres[i]}
    let code = adres.replace(`${goodAdres}`,"");

    useEffect(() => {
        fetch(`${API_URL}/ofert?idOrder=${code}`)
            .then(response => {
                if (response.ok === false) {
                    throw new Error("błąd sieci!")
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setAllOfert([...data])
                console.log([...data])
            })
            .catch(err => console.log(err));
    },[])



if (!allOfert){return ("wczytywanie")}
if (allOfert){
    return (
        <section className={"container"}>
            <div className={"form"}>
                <h3>Karta wyboru do zamówienia ............. </h3>
                <div className={"NewOrder"}>
                    {allOfert.map( (element) => {return(
                        <p>{element.id}</p>
                    )})}
                </div>
            </div>
        </section>
    )}
}

export default NewCardChoice;