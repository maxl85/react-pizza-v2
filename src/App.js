// import logo from './logo.svg';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React, { useState, useEffect } from 'react';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://62cb3b881eaf3786ebb710bc.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                setItems(arr);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            /* <PizzaBlock title="Мексиканская" price={500} /> */
                            items.map((obj) => (
                                <PizzaBlock
                                    // name={obj.name}
                                    // price={obj.price}
                                    // imageUrl={obj.imageUrl}
                                    // sizes={obj.sizes}
                                    // types={obj.types}
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;