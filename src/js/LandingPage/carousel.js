import React, {useState, useEffect} from 'react';
import image1 from "../../images/wakacje.jpg"
import image2 from "../../images/kurier.jpg"
import image3 from "../../images/pieniadze.jpg"
import image4 from "../../images/czas.jpg"
import {Link} from "react-router-dom";


function Carousel() {
    const [counter, setCounter] = useState(0)


    const carousel_element = () => {
        if (counter === 0) {
            return (
                <>
                    <div className={"section1"}>
                    <img src={image1} alt="wakacje"/>
                    <div className={"login_sign1"} style={{back}}>
                        <h2> Witaj !</h2>
                        <p> Cieszymy się że jesteś! </p>
                        <p> Chętnie pomożemy Ci zarządzać Twoim procesem zamówień materiałów wszelkiego rodzaju !</p>
                        <div className={"buttonsy"}>
                            <Link to='/app/log'><button className={"button_main"}>Zaloguj się</button></Link>
                            <Link to='/app/sign'><button className={"button_main"}>Zarejestruj się</button></Link>
                        </div>
                    </div>
                <p>Z nami masz więcej czasu na wakacje!</p>
                    </div>
                </>
                )
        }
        if (counter === 1) {
            return (
                    <>
                    <div className={"section1"}>
                        <img src={image2} alt="kurier"/>
                        <div className={"login_sign2"}>
                            <h2> Witaj !</h2>
                            <p> Cieszymy się że jesteś! </p>
                            <p> Chętnie pomożemy Ci zarządzać Twoim procesem zamówień materiałów wszelkiego rodzaju !</p>
                            <div className={"buttonsy"}>
                                <Link to='/app/log'><button className={"button_main"}>Zaloguj się</button></Link>
                                <Link to='/app/sign'><button className={"button_main"}>Zarejestruj się</button></Link>
                            </div>
                        </div>
                        <p>Kurier dostarczy materiał na czas!</p>
                    </div>
                        </>
                )
        }


    };


    useEffect(() => {
            const timeOut = setTimeout(() => {
                if (counter === 1) {setCounter(0)}
                else {setCounter(prevState => prevState + 1)}

                },3500
            );
            return() => {clearTimeout(timeOut);
        }

        },[counter]
    )

    const handlePrev = () => {
        if (counter === 0) {setCounter(1)}
        else {setCounter(prevState => prevState - 1)}
    }

    const handleNext = () => {
        if (counter === 1) {setCounter(0)}
        else {setCounter(prevState => prevState + 1)}
    }


    return (
        <div className={"carousel"}>
            <button onClick={handlePrev}>&lt;</button>
            <p> {carousel_element()}</p>
            <button onClick={handleNext}>&gt;</button>

        </div>
    );
}

export default Carousel;