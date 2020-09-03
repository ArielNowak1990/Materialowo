import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";
import DatePicker from "react-datepicker";


function NewFormFirm() {
    const [myOfert, setMyOfert]=useState(false)
    const [dateFrom, setDateFrom] = useState(new Date())
    const [deliveryPrice, setDeliveryPrice] = useState("")
    const [render, setRender] = useState(0)

    let adres = window.location.href;
    let arrayAdres = [...adres];
    let arrayGoodAdres = arrayAdres.slice(0,34);
    let goodAdres = "";
    for (let i=0; i<34; i++){ goodAdres=goodAdres+arrayGoodAdres[i]}
    let code = adres.replace(`${goodAdres}`,"");

    const handleChangePrice = (event, {index}) => {
        let element = myOfert.elements;
        let myElem = element[+index];
        myElem.price = event.target.value
        myElem.priceAll = event.target.value *  myElem.quantity
        console.log(myElem)
        setRender(render+1)
    }
    // const handleChangePriceAll = (event, {index}) => {
    //     let element = myOfert.elements;
    //     let myElem = element[+index];
    //     myElem.priceAll = event.target.value *  myElem.quantity
    //     console.log(myElem)
    // }
    const handleChangeNote = (event, {index}) => {
        let element = myOfert.elements;
        let myElem = element[+index];
        myElem.noteFirm = event.target.value
        console.log(myElem)
    }

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
                })
                .catch(err => console.log(err));
        },[])

    const handleSend = () =>{
        myOfert.status = "close";
        myOfert.deliveryFirm = dateFrom;
        myOfert.deliveryPrice = deliveryPrice;
        fetch(`${API_URL}/ofert/${myOfert.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(myOfert),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(window.location.href=`${PAGE_URL}`)
            .then(alert("zapytanie zostało zapisane"))
            .catch(error => console.log(error))
    }


    const handledeliveryPrice = (event) => {
        setDeliveryPrice(event.target.value)
    }



    if(!myOfert){return("Niestety. Brak danych do wyświetlenia. ")}
    if (myOfert && myOfert.status === "close"){return ("Na zapytanie została już udzielona oferta")}
    if(myOfert){
    return (
        <section className={"NewFormFirm"}>
                <h3>Witaj! Przedstaw ofertę do dnia {myOfert.dateAuthor[1]} wypełniając pomarańczowe pola  a  następnie kliknij przycisk wyślij:</h3>
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
                               <td>Uwagi</td>
                               <td>Cena J.</td>
                               <td>Cena C.</td>
                               <td>Uwagi Dostawcy</td>
                            </tr>
                            </thead>
                            <tbody>
                            {myOfert.elements.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{element.fabric}</td>
                                        <td>{element.unit}</td>
                                        <td>{element.quantity}</td>
                                        <td>{element.note}</td>
                                        <td><input type="text"  onChange={(event) => handleChangePrice(event, {index})}/></td>
                                        <td>{element.priceAll}</td>
                                        <td><input type="text"  onChange={(event) => handleChangeNote(event, {index})}/></td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                        <div>
                           <h4> 2. Koszt transportu {myOfert.delivery}: {myOfert.placeDelivery}  <input type="text" value={deliveryPrice} onChange={handledeliveryPrice}/></h4>
                        </div>
                        <div >
                            <h4> 3. Termin odbioru/dostawy:
                                <DatePicker selected={dateFrom} value={dateFrom} onChange={date => setDateFrom(date)} /></h4>
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