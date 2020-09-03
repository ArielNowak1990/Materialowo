import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";

function NewCardChoice() {
    const [allOfert, setAllOfert] =useState(false)
    const [Author, setAuthor] =useState(false)
    const [idAuthor, setIdAuthor] =useState(false)

    // const [quantityFirm, setQuantityFirm] = useState([1,2,3,4])
    // const [quantityProducts, setQuantityProducts] = useState([1,2,3,4,5])
    let quantityFirm = [];
    let quantityProducts = [];
    let sum = [];
    let goodPrice = 0;



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
                setAuthor(data[0].id)
                setIdAuthor(data[0].id.charAt(0))
            })
            .catch(err => console.log(err));

        // fetch(`${API_URL}/user?userEmail=${Author}`)
        //     .then(response => {
        //         if (response.ok === false) {
        //             throw new Error("błąd sieci!")
        //         } else {
        //             return response.json();
        //         }
        //     })
        //     .then(data => {
        //         setIdAuthor(data.id)
        //         console.log(Author)
        //         console.log(data)
        //     })
        //     .catch(err => console.log(err));
    },[])




if (!allOfert){return ("Niestety. Brak danych do wyświetlenia. ")}
if (allOfert){

    let newArray = [];
    for (let i=1; i<=allOfert.length ;i++){newArray.push(i)}
    quantityFirm =[...newArray]
    let newArrays = [];
    for (let i=1; i<=allOfert[0].elements.length ;i++){newArrays.push(i)}
    quantityProducts =[...newArrays]

    for (let i=0; i<allOfert.length; i++){
        let array = 0;
        allOfert[i].elements.map( (element) => { array= array + +element.priceAll })
        sum.push(array + +allOfert[i].deliveryPrice)
    };

    let betterOfert = sum.sort((a,b) => { return (a-b)})
    let betterIndex;
    for (let i=0; i<allOfert.length; i++){
        if (betterOfert[0] === sum[i]) {betterIndex = i}
        console.log(`${betterOfert[0]}  ${sum[i]}`)
    }

    return (
        <section className={"container_Choice"}>
            <div className={"cardChoice"}>
                <div className={"wycena"}>
                    <h4>1. Tabela z elementami do wyceny</h4>
                    <table>
                        <thead>
                        <tr>
                            <td colSpan={5}> </td>
                            {allOfert[0].firm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{element}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Lp.</td>
                            <td>Materiał</td>
                            <td>Miara</td>
                            <td>Ilość</td>
                            <td>Uwagi</td>
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
                        {quantityProducts.map( (element, index)=>{return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{allOfert[0].elements[index].fabric}</td>
                                <td>{allOfert[0].elements[index].unit}</td>
                                <td>{allOfert[0].elements[index].quantity}</td>
                                <td>{allOfert[0].elements[index].note}</td>
                                {quantityFirm.map((elem,id)=>{return(
                                    <>
                                        <td key={id}>{allOfert[id].elements[index].price}</td>
                                        <td>{allOfert[id].elements[index].priceAll}</td>
                                        <td>{allOfert[id].elements[index].noteFirm}</td>
                                    </>
                                )})}
                            </tr>
                        )})}
                        <tr>
                            <td colSpan={5}> Koszt dostawy:</td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{allOfert[index].deliveryPrice}</td>
                            )})}
                        </tr>
                        <tr>
                            <td colSpan={5}> Suma całkowita: </td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{sum[index]}</td>
                            )})}
                        </tr>
                        <tr>
                            <td colSpan={5}> Oferowany termin dostawy:</td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{allOfert[index].deliveryFirm.slice(0,10)}</td>
                            )})}
                        </tr>
                        </tbody>
                    </table>

                    <h4>REKOMENDOWANY PRZEZ PROGRAM DOSTAWCA:</h4>
                    <p>W związku z przedstawiem najkorzystniejszej oferty pod kątem cenowym, rekomendujemy zamówienie towarów od firmy {allOfert[betterIndex].firm[betterIndex]} </p>
                    <p>Dostawa oczekiwana była w zakresie od {allOfert[betterIndex].dateDeliveryAuthor[0].slice(0,10)} do {allOfert[betterIndex].dateDeliveryAuthor[2].slice(0,10)}, z najdogodniejszym terminem {allOfert[betterIndex].dateDeliveryAuthor[1].slice(0,10)} natomiast termin zaproponowany przez firmę {allOfert[betterIndex].firm[betterIndex]} to {allOfert[betterIndex].deliveryFirm.slice(0,10)}</p>
                    <p>Przed zamówieniem konieczne jest indywidualne przeglądniecie ofert, i porównanie wszystkich danych !</p>
                    </div>

                <a href={`${PAGE_URL}/app/MainApp/${idAuthor}`}> TWOJA GŁÓWNA </a>
            </div>
        </section>
    )}
}

export default NewCardChoice;