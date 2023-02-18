import React from "react";
import '../styles/App.css';

const Home = () => {
    return (
        <div className="App">
            <div className='outer-container'>
                <h1>Kelli ja Taneli pulmad</h1>
                <button>Anna teada oma tulekust ja vali menuu.</button>
                <p>Pulmad toimuvad suures mõisas kuskil Eestis. Sinna pääseb üldjuhul autoga, aga saab ka jalgsi või bussiga tulla. Parkimine ei ole võimalik ja auto tuleks koju jätta.</p>
                <iframe 
                    title="googleMaps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.1166106241444!2d26.180918116199397!3d59.54780910052754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4693a52b4502b5a1%3A0x6258049a6f7471e4!2sVihula%20M%C3%B5isa%20Viinamuuseum!5e0!3m2!1sen!2see!4v1676670407519!5m2!1sen!2see" 
                    width="600" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                />
                <span className="dot"></span>
                <p>Kingituseks võib tuua raha alates 50-st eurost. Suuremad kingid nagu auto, bassein ja muu selline võiks pärast pulmi koju toimetada.</p>
                <span className="dot"></span>
                <p>Lilled, mida tuua voib on pojengid.</p>
                <span className="dot"></span>
                <p>Pulma kavas on STEFAN, abiellumine, soomine, tantsimine ja magamine. Pulmapaev algab kell 12:00, aga kohal voiks olla juba kella 9:00 ajal.</p>
                <span className="dot"></span>
                <p>Urituse riietumisstiil on moisa-pidulik voi moisa-smart.</p>
            </div>
        </div>
    )
}

export default Home