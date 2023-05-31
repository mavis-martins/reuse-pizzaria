import React from "react";
import {useState, useEffect} from 'react';
import PizzaShop from "./modeloPizzaria";
import styles from './pizzariaApi.module.css'


function PizzaApi() {
    const [pizzaShops, setPizzaShops] = useState([]);

    useEffect(() => {
        const fecthData = async (url) => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const mappedData = data.map (
                    (item) =>
                        new PizzaShop(
                            item.id,
                            item.image,
                            item.name,
                            item.rank,
                            item.type,
                            item.size,
                            item.Time
                        )
                );
                setPizzaShops(mappedData);
            } catch (error) {
                console.log(error)
            }
        };
        const url = "https://mocki.io/v1/e805a9cd-7b26-48c6-b85d-2ab0305abfca";
        fecthData(url)
    }, []);

    return (
        <ul className={styles.pizzaria}>
            <div className={styles.pizzaria_Container}>
                {pizzaShops.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt="Imagem da Pizzaria" />
                        <p className={styles.pizzaria_Name}>{item.name}</p>
                        <p className={styles.pizzaria_Rank}>{item.rank}</p>
                        <span className={styles.pizzaria_Type}>{item.type}</span>
                        <span className={styles.pizzaria_Size}>{item.size}</span>
                        <p className={styles.pizzaria_Time}>{item.Time}</p>
                    </li>
                ))}
            </div>
        </ul>
    )
}
export default PizzaApi