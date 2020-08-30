import React, {useEffect, useState} from 'react';
import {API_URL} from "../Fetch/fetch";

function NewCardChoice() {
    const [allOfert, setAllOfert] =useState(false)
    const [quantityFirm, setQuantityFirm] = useState([1,2,3,4])
    const [quantityProducts, setQuantityProducts] = useState([1,2,3,4,5])
    const sum = [];


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
                // let newArray = [];
                // for (let i=1; i<=[...data].length ;i++){newArray.push(i)}
                // setQuantityFirm([...newArray])
                // console.log(quantityFirm)
                // let newArrays = [];
                // for (let i=1; i<=[...data][0].elements.length ;i++){newArrays.push(i)}
                // setQuantityProducts([...newArrays])
                // console.log(quantityProducts);
            })
            .catch(err => console.log(err));
    },[])




if (!allOfert){return ("wczytywanie")}
if (allOfert){

    for (let i=0; i<allOfert.length; i++){
        let array = 0;
        allOfert[i].elements.map( (element) => { array= array + +element.priceAll })
        sum.push(array)
    };

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
                            <td colSpan={5}> Suma całkowita: </td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{sum[index]}</td>
                            )})}
                        </tr>
                        <tr>
                            <td colSpan={5}> Oferowany termin dostawy:</td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{allOfert[index].deliveryFirm}</td>
                            )})}
                        </tr>
                        <tr>
                            <td colSpan={5}> Koszt dostawy:</td>
                            {quantityFirm.map((element, index) => {return(
                                <td colSpan={3} key={index}>{allOfert[index].deliveryPrice}</td>
                            )})}
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </section>
    )}
}

export default NewCardChoice;