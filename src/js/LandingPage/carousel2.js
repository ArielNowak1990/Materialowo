import React, {useState, useEffect} from 'react';
import image1 from "../../images/cooperatives1.png"
import image2 from "../../images/cooperatives2.png"
import image3 from "../../images/cooperatives3.jpg"
import image4 from "../../images/cooperatives4.png"
import image5 from "../../images/cooperatives5.png"


function Carousel2() {
    const [counter, setCounter] = useState(0)


    const carousel_element = () => {
        if (counter === 0) {
            return (
                <>
                <div><img src={image1} alt="wakacje"/></div>
                <div><img src={image2} alt="wakacje"/></div>
                <div><img src={image3} alt="wakacje"/></div>
                <div><img src={image4} alt="wakacje"/></div>

                </>
                )
        }
        if (counter === 1) {
            return (
                    <>
                        <div><img src={image2} alt="wakacje"/></div>
                        <div><img src={image3} alt="wakacje"/></div>
                        <div><img src={image4} alt="wakacje"/></div>
                        <div><img src={image5} alt="wakacje"/></div>
                        </>
                )
        }
        if (counter === 2) {
            return (
                <>
                    <div><img src={image3} alt="wakacje"/></div>
                    <div><img src={image4} alt="wakacje"/></div>
                    <div><img src={image5} alt="wakacje"/></div>
                    <div><img src={image1} alt="wakacje"/></div>
                    </>
            )
        }
        if (counter === 3) {
            return (
                <>
                    <div><img src={image4} alt="wakacje"/></div>
                    <div><img src={image5} alt="wakacje"/></div>
                    <div><img src={image1} alt="wakacje"/></div>
                    <div><img src={image2} alt="wakacje"/></div>
                </>
            )
        }
        if (counter === 4) {
            return (
                <>
                    <div><img src={image5} alt="wakacje"/></div>
                    <div><img src={image1} alt="wakacje"/></div>
                    <div><img src={image2} alt="wakacje"/></div>
                    <div><img src={image3} alt="wakacje"/></div>
                </>
            )
        }

    };


    useEffect(() => {
            const timeOut = setTimeout(() => {
                if (counter === 4) {setCounter(0)}
                else {setCounter(prevState => prevState + 1)}

                },2500
            );
            return() => {clearTimeout(timeOut);
        }

        },[counter]
    )

    const handlePrev = () => {
        if (counter === 0) {setCounter(4)}
        else {setCounter(prevState => prevState - 1)}
    }

    const handleNext = () => {
        if (counter === 4) {setCounter(0)}
        else {setCounter(prevState => prevState + 1)}
    }


    return (
        <div className={"carousel2"}>
            <button onClick={handlePrev}>&lt;</button>
            <p> {carousel_element()}</p>
            <button onClick={handleNext}>&gt;</button>

        </div>
    );
}

export default Carousel2;