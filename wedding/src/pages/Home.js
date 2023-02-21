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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160911.08646495806!2d25.60196356099699!3d58.001181612026706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb78625f8ab80f%3A0x3f56bf5d61e7681b!2sTaagepera%20Loss%20O%C3%9C!5e0!3m2!1sen!2see!4v1676749879603!5m2!1sen!2see" 
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