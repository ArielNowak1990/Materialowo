import React, {useEffect, useState} from 'react';
import {API_URL, PAGE_URL} from "../Fetch/fetch";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker, {registerLocale} from 'react-datepicker';
import pl from "date-fns/locale/pl"
registerLocale("Pl", pl);

function NewForm(user) {

    const [elements, setElements] = useState([])
    const [fabric, setFabric] = useState("")
    const [unit, setUnit] = useState("")
    const [quantity, setQuantity] = useState("")
    const [note, setNote] = useState("")
    const [edit, setEdit] = useState(false)
    const [addError, setAddError] = useState([])
    const [addErrorMail, setAddErrorMail] = useState([])

    const [place, setPlace] = useState("");
    const [delivery, setDelivery] = useState("");

    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateIdeal, setDateIdeal] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())
    const [dateFinish, setDateFinish] = useState(new Date())

    const [firms, setFirms] = useState([])
    const [firm, setFirm] = useState("")
    const [editFirm, setEditFirm] = useState(false)

    const data = new Date();

    const [orders, setOrders] = useState([])


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
    }, [])

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
        let ArrayError = [];
        setAddError([...ArrayError]);
        if (fabric.length < 3) {
            ArrayError.push("Nazwa materiału ma być dłuższa niż 3 litery")
        }
        if (unit.length < 1) {
            ArrayError.push("Nazwa jednostki ma być dłuższa niż 1 litera")
        }
        if (quantity.length < 1) {
            ArrayError.push("ilość ma być dłuższa niż 1 litera")
        }
        if (ArrayError.length === 0) {
            if (edit !== false) {
                const newArray = [...elements];
                newArray[edit] = {
                    fabric: fabric,
                    unit: unit,
                    quantity: quantity,
                    note: note,
                    price: 0,
                    priceAll: 0,
                    noteFirm: ""
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
                    price: 0,
                    priceAll: 0,
                    noteFirm: ""
                }
                ])
                setFabric("")
                setUnit("")
                setQuantity("")
                setNote("")
            }
        }
        if (ArrayError.length > 0) {
            setAddError(ArrayError)
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
    const handleChangeDelivery = (event) => {
        setDelivery(event.target.value)
    }
    const handleAddFirm = (event) => {
        setFirm(event.target.value)
    }
    const handleAddFirms = () => {
        let ArrayError = [];
        setAddErrorMail([...ArrayError]);
        if (firm.length < 5) {
            ArrayError.push("Nazwa maila ma być dłuższa niż 5 liter")
        }
        if (firm.indexOf("@") < 0) (ArrayError.push(" Mail nie posiada znaku @"))
        if (ArrayError.length === 0) {
            if (editFirm !== false) {
                const newArray = [...firms];
                newArray[editFirm] = firm;
                setFirms([...newArray])
                setFirm("")
            } else {
                setFirms([...firms, firm]);
                setFirm("")
            }
        }
        if (ArrayError.length > 0) {
            setAddErrorMail([...ArrayError])
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

    let zmienna = `${user.id}AorderA${orders.length + 1}`

    const handleSend = () => {
        let zmienna = `${user.id}AorderA${orders.length + 1}`
        const order = {
            author: user.userEmail,
            id: zmienna,
            dateDeliveryAuthor: [dateFrom, dateIdeal, dateTo],
            delivery: delivery,
            placeDelivery: place,
            firm: firms,
            status: "open",
            elements: elements,
            dateAuthor: [data, dateFinish],
        }
        for (let i = 0; i < firms.length; i++) {
            let zmiennaOfert = `${zmienna}AofertA${i}`
            const ofert = {
                author: user.userEmail,
                id: zmiennaOfert,
                idOrder: zmienna,
                dateDeliveryAuthor: [dateFrom, dateIdeal, dateTo],
                delivery: "jeśli jest adres to dostawa:",
                placeDelivery: place,
                firm: firms,
                status: "open",
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
            .then(window.location.href = `${PAGE_URL}/app/MainApp/${user.id}`)
            .then(alert("zapytanie zostało zapisane"))
            .catch(error => console.log(error))
    }


    return (
        <section className={"container"}>
            <div className={"back"}>
                <div className={"form"}>
                    <h3>Zamówienie nr {orders.length + 1}</h3>
                    <div className={"NewOrder"}>
                        <div className={"order_ID"}>ID Zamówienia: {zmienna}</div>
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
                                    <td><input type="text" value={fabric} onChange={handleChangeFabric}/>
                                    </td>
                                    <td><input type="text" value={unit} onChange={handleChangeUnit}/>
                                    </td>
                                    <td><input type="text" value={quantity} onChange={handleChangeQuantity}/>
                                    </td>
                                    <td><input type="text" value={note} onChange={handleChangeNote}/></td>
                                    <td onClick={handleAddElement}><i className="fas fa-plus-square"/>DODAJ</td>
                                </tr>
                                </tbody>
                            </table>
                            <ol className={"ListError"}>
                                {addError.map((element, index) => {
                                    return (
                                        <li key={index}>{element}</li>
                                    )
                                })}
                            </ol>
                            <br/>
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
                            <br/>
                        </div>
                        <div className={"order_2pkt"}>2. Forma odbioru:
                            <div>
                                <label>
                                    <input type="radio" id={"odbiór osobisty"} name={"przekazanie"}
                                           value={"odbiór"} onChange={handleChangeDelivery}/>Odbiór osobisty
                                </label>
                                <div className="question"><label>
                                    <input type="radio" id={"dostawa"} name={"przekazanie"}
                                           value={"dostarczenie"} onChange={handleChangeDelivery}/>
                                    Dostawa na adres:
                                    <input type="text" className="hidden-textbox" onChange={handleChangePlace}/>
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className={"order_3pkt"}>3. Termin odbioru/dostawy: <br/>
                            <p> najwcześniejsza:
                                <DatePicker dateFormat="yyyy/MM/dd" selected={dateFrom} value={dateFrom}
                                            onChange={date => setDateFrom(date)} withPortal locale="Pl"
                                            /></p>
                            <p>idealna:
                                <DatePicker dateFormat="yyyy/MM/dd" selected={dateIdeal} value={dateIdeal}
                                            onChange={date => setDateIdeal(date)} withPortal locale="Pl"/>
                            </p> <p> najpóźniejsza:
                                <DatePicker dateFormat="yyyy/MM/dd" selected={dateTo} value={dateTo}
                                            onChange={date => setDateTo(date)} withPortal locale="Pl"/>
                            </p></div>

                        <div className={"order_4pkt"}>4. Wyślij do ( podaj email):
                            <input type="text" value={firm} onChange={handleAddFirm}/>
                            <i className="fas fa-plus-square" onClick={handleAddFirms}/> DODAJ <p
                                className={"ListError"}>{addErrorMail.map((element, index) => {
                                return (<span key={index}>{element}</span>)
                            })}</p></div>
                        <div>
                            <ol> {firms.map((elements, index) => {
                                return (<li key={index}>{index + 1}. {elements}
                                    <i className="fas fa-edit" onClick={(e) => handleEditeFirm(e, index)}/>
                                    <i className="fal fa-trash-alt" onClick={(e) => handleRemoveFirm(e, index)}/> Link
                                    do ręcznego
                                    wysłania: {PAGE_URL}/NewFormFirm/{user.id}AorderA{orders.length + 1}AofertA{index}
                                </li>)
                            })}</ol>
                        </div>
                        <div className={"order_5pkt"}>5. Termin oczekiwania na oferty:
                            <DatePicker dateFormat="yyyy/MM/dd" selected={dateFinish} value={dateFinish}
                                        onChange={date => setDateFinish(date)} withPortal locale="Pl"/>
                        </div>
                    </div>
                    <button className={"button_main"} onClick={handleSend}>WYŚLIJ ZAPYTANIE</button>
                </div>
            </div>

        </section>
    );
}

export default NewForm;