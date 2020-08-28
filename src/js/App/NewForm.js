import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";

function NewForm(user) {

    const [elements, setElements] = useState([])
    const [fabric, setFabric] = useState("")
    const [unit, setUnit] = useState("")
    const [quantity, setQuantity] = useState("")
    const [note, setNote] = useState("")
    const [edit, setEdit] = useState(false)

    const [place, setPlace] = useState("");

    const [dateFrom, setDateFrom] = useState([])
    const [dateIdeal, setDateIdeal] = useState([])
    const [dateTo, setDateTo] = useState([])
    const [dateFinish, setDateFinish] = useState([])

    const [firms, setFirms] = useState([])
    const [firm, setFirm] = useState("")
    const [editFirm, setEditFirm] = useState(false)

    const data = new Date();

    const[orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/orders`)
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

    const handleChangeFabric = (event) => {
        setFabric(event.target.value)
    }
    const handleChangeUnit = (event) => {
        setUnit(event.target.value)
    }
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value)
    }
    const handleChangeNote = (event) => {
        setNote(event.target.value)
    }

    const handleAddElement = () => {
        if (edit !== false) {
            const newArray = [...elements];
            newArray[edit] = {
                fabric: fabric,
                unit: unit,
                quantity: quantity,
                note: note,
            };
            setElements([...newArray]);
            setEdit(false);
            setFabric("")
            setUnit("")
            setQuantity("")
            setNote("")
        } else {
            setElements([...elements, {
                fabric: fabric,
                unit: unit,
                quantity: quantity,
                note: note,
            }
            ])
            setFabric("")
            setUnit("")
            setQuantity("")
            setNote("")
        }
    }

    const handleEditeElement = (e, index) => {
        setEdit(index)
        elements.map((elem, id) => {
            if (id === index) {
                setFabric(elem.fabric)
                setUnit(elem.unit)
                setQuantity(elem.quantity)
                setNote(elem.note)
            }
        })
    }

    const handleRemoveElement = (e, index) => {
        const newArray = [];
        elements.map((elem, id) => (id !== index) ? newArray.push(elem) : null)
        setElements([...newArray]);
    }

    const handleChangePlace = (event) => {
        setPlace(event.target.value)
    }
    const handleChangeDateFrom = (event) => {
        setDateFrom(event.target.value)
    }
    const handleChangeDateIdeal = (event) => {
        setDateIdeal(event.target.value)
    }
    const handleChangeDateto = (event) => {
        setDateTo(event.target.value)
    }

    const handleAddFirm = (event) => {
        setFirm(event.target.value)
    }
    const handleAddFirms = () => {
        if (editFirm !== false ) {
            const newArray = [...firms];
            newArray[editFirm] = firm;
            setFirms([...newArray])
            setFirm("")
        }
        else {
            setFirms([...firms, firm]);
            setFirm("")
        }
    }

    const handleEditeFirm = (e, index) => {
        setEditFirm(index)
        firms.map((elem, id) => {
            if (id === index) {
                    setFirm(elem)
            }
        })
    }

    const handleRemoveFirm = (e, index) => {
        const newArray = [];
        firms.map((elem, id) => (id !== index) ? newArray.push(elem) : null)
        setFirms([...newArray]);
    }

    const handleChangeDateFinish = (event) => {
        setDateFinish(event.target.value)
    }

    const handleSend =() =>{
       let zmienna = `${user.id}AorderA${orders.length + 1}`
            const order = {
                author: user.userEmail,
                id:  zmienna,
                dateDeliveryAuthor: [dateFrom,dateIdeal,dateTo],
                delivery: "jeśli jest adres to dostawa:",
                placeDelivery: place,
                firm: firms,
                status: "send",
                elements: elements,
                dateAuthor: [data, dateFinish],
            }
        for (let i=0; i<firms.length; i++){
            let zmiennaOfert= `${zmienna}AofertA${i}`
            const ofert = {
                author: user.userEmail,
                id:  zmiennaOfert,
                dateDeliveryAuthor: [dateFrom,dateIdeal,dateTo],
                delivery: "jeśli jest adres to dostawa:",
                placeDelivery: place,
                firm: firms,
                status: "send",
                elements: elements,
                dateAuthor: [data, dateFinish],
            }
            fetch(`${API_URL}/ofert`, {
                method: 'POST',
                body: JSON.stringify(ofert),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .catch(error => console.log(error))

        }

        fetch(`${API_URL}/orders`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(window.location.href=`${PAGE_URL}/app/MainApp/${user.id}`)
            .then(alert("zapytanie zostało zapisane"))
            .catch(error => console.log(error))
    }


    return (
        <section className={"container"}>
            <div className={"back"}>
                <div className={"form"}>
                    <h3>Zamówienie nr 1</h3>
                    <div className={"NewOrder"}>
                        <div className={"order_ID"}>ID Zamówienia ..........</div>
                        <div className={"order_1pkt"}>1. Dodaj materiały do zamówienia</div>
                        <div className={"order_tab1"}>
                            <table className={"order"}>
                                <thead>
                                <tr>
                                    <th>Lp.</th>
                                    <th>Materiał</th>
                                    <th>Miara</th>
                                    <th>Ilość</th>
                                    <th>Uwagi</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={"green"}>
                                    <td> Auto</td>
                                    <td><input type="text" value={fabric} onChange={handleChangeFabric}/></td>
                                    <td><input type="text" value={unit} onChange={handleChangeUnit}/></td>
                                    <td><input type="text" value={quantity} onChange={handleChangeQuantity}/></td>
                                    <td><input type="text" value={note} onChange={handleChangeNote}/></td>
                                    <td><i className="fas fa-plus-square" onClick={handleAddElement}/></td>
                                </tr>
                                </tbody>
                            </table>
                            <table className={"order"}>
                                <thead>

                                </thead>
                                <tbody>
                                {elements.map((elements, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{elements.fabric}</td>
                                            <td>{elements.unit}</td>
                                            <td>{elements.quantity}</td>
                                            <td>{elements.note}</td>
                                            <td><i className="fas fa-edit"
                                                   onClick={(e) => handleEditeElement(e, index)}/><i
                                                className="fal fa-trash-alt"
                                                onClick={(e) => handleRemoveElement(e, index)}/></td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>

                        </div>
                        <div className={"order_2pkt"}>2. Forma odbioru:
                            <div>
                                <label>
                                    <input type="radio" id={"odbiór osobisty"} name={"przekazanie"}
                                              value={"odbiór"}/> Odbiór osobisty
                                </label>
                                <div className="question"><label>
                                    <input type="radio" id={"dostawa"} name={"przekazanie"}
                                           value={"dostarczenie"} onChange={handleChangePlace}/>
                                    Dostawa na adres:
                                    <input type="text" className="hidden-textbox"/> </label>
                                </div>
                            </div>
                            <div className={"order_3pkt"}>3. Termin odbioru/dostawy:
                                najwcześniejsza: <input type="text" value={dateFrom} onChange={handleChangeDateFrom}/>
                                idealna: <input type="text" value={dateIdeal} onChange={handleChangeDateIdeal}/>
                                najpóźniejsza: <input type="text" value={dateTo} onChange={handleChangeDateto}/></div>
                        </div>
                        <div className={"order_4pkt"}>4. Wyślij do ( podaj email):
                            <input type="text" value={firm} onChange={handleAddFirm}/>
                        <i className="fas fa-plus-square" onClick={handleAddFirms}/></div>
                        <div>
                            <ol> {firms.map((elements, index) => {
                                return (<li key={index}>{index + 1}. {elements}
                                <i className="fas fa-edit" onClick={(e) => handleEditeFirm(e, index)}/>
                                <i className="fal fa-trash-alt" onClick={(e) => handleRemoveFirm(e, index)}/></li>)
                            })}</ol>
                        </div>
                        <div className={"order_5pkt"}>4. Termin oczekiwania na oferty:
                            <input type="text" value={dateFinish} onChange={handleChangeDateFinish}/>
                        </div>
                    </div>
                    <button onClick={handleSend}>WYŚLIJ ZAPYTANIE</button>
                </div>
            </div>

        </section>
    );
}

export default NewForm;