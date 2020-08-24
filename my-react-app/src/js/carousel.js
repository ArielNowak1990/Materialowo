import React, {useState, useEffect} from 'react';

function Carousel() {
    const [counter, setCounter] = useState(0)


    const carousel_element = () => {
        if (counter === 0) {
            return (
                <>
                <p>Z nami masz więcej czasu na wakacje!</p>
                <img src="../images/wakacje.jpg" alt="wakacje"/>
                </>
                )
        }
        if (counter === 1) {
            return (
                    <>
                        <p>Kurier dostarczy materiał na czas!</p>
                        <img src="../images/kurier.jpg" alt="kurier"/>
                        </>
                )
        }
        if (counter === 2) {
            return (
                <>
                    <p>Masz pewność że nie przepłacisz!</p>
                    <img src="../images/pieniadze.jpg" alt="pieniądze"/>
                    </>
            )
        }
        if (counter === 3) {
            return (
                <>
                    <p>Najprostszy sposób aby zyskać to wszystko!</p>
                    <img src="./czas.jpg" alt="zegar"/>
                </>
            )
        }
    };


    useEffect(() => {
            const timeOut = setTimeout(() => {
                if (counter === 3) {setCounter(0)}
                else {setCounter(prevState => prevState + 1)}

                },2500
            );
            return() => {clearTimeout(timeOut);
        }

        },[counter]
    )

    const handlePrev = () => {
        if (counter === 0) {setCounter(3)}
        else {setCounter(prevState => prevState - 1)}
    }

    const handleNext = () => {
        if (counter === 3) {setCounter(0)}
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