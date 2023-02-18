import React from "react";
import '../styles/App.css';
import '../styles/HomeStyles.css';

const Home = () => {
    return (
        <div className="App">
            <div className='outer-container'>
                <h1>Kelli ja Tanel</h1>
                <h2>15 juuni 2023</h2>
                <button>Anna teada oma tulekust</button>
                <div className="menu-buttons">
                    <button className="menu-selection">Asukoht</button>
                    <button className="menu-selection">Kingitused ja lilled</button>
                    <button className="menu-selection">Kava</button>
                    <button className="menu-selection">Riietumisstiil</button>
                </div>
                <p>Pulmad toimuvad suures mõisas kuskil Eestis. Sinna pääseb üldjuhul autoga, aga saab ka jalgsi või bussiga tulla. Parkimine ei ole võimalik ja auto tuleks koju jätta.</p>
                <iframe 
                    className="google-map"
                    title="googleMaps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.1166106241444!2d26.180918116199397!3d59.54780910052754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4693a52b4502b5a1%3A0x6258049a6f7471e4!2sVihula%20M%C3%B5isa%20Viinamuuseum!5e0!3m2!1sen!2see!4v1676670407519!5m2!1sen!2see" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                />
            </div>
        </div>
    )
}

export default Home