import React, {useEffect, useState} from 'react';
import {API_URL} from "../Fetch/fetch";
import DatePicker from "react-datepicker";


function NewFormFirm() {
    const [myOfert, setMyOfert]=useState(false)

    let adres = window.location.href;
    let arrayAdres = [...adres];
    let arrayGoodAdres = arrayAdres.slice(0,34);
    let goodAdres = "";
    for (let i=0; i<34; i++){ goodAdres=goodAdres+arrayGoodAdres[i]}
    let code = adres.replace(`${goodAdres}`,"");

        useEffect(() => {
            fetch(`${API_URL}/ofert?id=${code}`)
                .then(response => {
                    if (response.ok === false) {
                        throw new Error("błąd sieci!")
                    } else {
                        return response.json();
                    }
                })
                .then(data => {
                    setMyOfert(...data)
                    console.log(...data)

                })
                .catch(err => console.log(err));
        },[])

    const handleSend = () =>{
        console.log("wysyłam...")
    //    TODO do dokończenia!
    }

    if(!myOfert){return("wczytywanie")}
    if(myOfert){
    return (
        <section className={"NewFormFirm"}>
                <h3>Witaj! Przedstaw ofertę wypełniając pomarańczowe pola  a  następnie kliknij przycisk wyślij:</h3>
                <div className={"firmForm"}>
                    <div className={"wycena"}>
                        <h4>1. Tabela z elementami do wyceny</h4>
                        <table>
                            <thead>
                            <tr>
                               <td>Lp.</td>
                               <td>Materiał</td>
                               <td>Miara</td>
                               <td>Ilość</td>
                               <td>Uwagi Zamawiającego</td>
                               <td>Cena J.</td>
                               <td>Cena C.</td>
                               <td>Uwagi Dostawcy</td>
                            </tr>
                            </thead>
                            <tbody>
                            {myOfert.elements.map((element,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{element.fabric}</td>
                                        <td>{element.unit}</td>
                                        <td>{element.quantity}</td>
                                        <td>{element.note}</td>
                                        <td><input/></td>
                                        <td><input/></td>
                                        <td><input/></td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                        <div>
                           <h4> 2. Koszt transportu (jeżeli brak adresu to odbiór osobisty):{myOfert.placeDelivery} <input/></h4>
                        </div>
                        <div >
                            <h4> 3. Termin odbioru/dostawy:  <input/></h4>
                            najwcześniejsza: (wg zamawiającego) {myOfert.dateDeliveryAuthor[0]}.
                            idealna: (wg zamawiającego) {myOfert.dateDeliveryAuthor[0]}.
                            najpóźniejsza: (wg zamawiającego) {myOfert.dateDeliveryAuthor[0]}.
                        </div>
                    </div>
                    <button className={"button_main"} onClick={handleSend} >WYŚLIJ OFERTĘ</button>
                </div>
        </section>
    );
    }
}

export default NewFormFirm;