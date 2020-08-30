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
    const style= {
        rowspan: 3
    }
    return (
        <section className={"container_Choice"}>
            <div className={"cardChoice"}>
                <div className={"wycena"}>
                    <h4>1. Tabela z elementami do wyceny</h4>
                    <table>
                        <thead>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            {allOfert[0].firm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{element}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Lp.</td>
                            <td>Materiał</td>
                            <td>Miara</td>
                            <td>Ilość</td>
                            <td>Uwagi Zamawiającego</td>
                            {allOfert[0].firm.map((element, index) => {return(
                               <>
                                <td key={index}>Cena J</td>
                                <td>Cena C</td>
                                <td>Uwagi Dostawcy</td>
                                </>
                            )})}

                        </tr>
                        </thead>
                        <tbody>
                        {allOfert[0].elements.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.fabric}</td>
                                    <td>{element.unit}</td>
                                    <td>{element.quantity}</td>
                                    <td>{element.note}</td>
                                    <td>{element.price}</td>
                                    <td>{element.priceAll}</td>
                                    <td>{element.noteFirm}</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                    </div>
            </div>
        </section>
    )}
}

export default NewCardChoice;