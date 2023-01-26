import React from 'react';
import './App.css';
const App = () => {
    const wishes = [
        {
            title: "I want a bike",
            completed:false
        },
        {
            title: "I want a car",
            completed:true
        }
    ];
    return (
    <div className='app'>
        <form>
            <h1>MY WISHLIST</h1>
            <input className='deseo-Imput' type="text" placeholder='Texting...' />
            <input type="submit" value="send" />

            <ul className='lista-deseos'>
                <h1>Current wishes: </h1>
                {wishes.map(({title,completed})=>(

                    <li className={`lista-deseos__item ${completed?'lista-deseos__item--cumplido':""}`}><input type="checkbox" checked={completed}/>{title}</li>
                ))}
                  </ul>
        </form>
    </div>
    );
}
export default App;