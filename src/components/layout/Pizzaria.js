import React from "react";
import PizzaShop from "./modeloPizzaria";
import { Banner } from "../../assets/images";
import styles from './pizzaria.module.css'

const Pizzaria = () => {
    const pizzeria = [
        new PizzaShop('1', Banner, 'Pizzaria Matex', '32 Avaliações', 'Brasileira', 'Média', '20-30'),     
        
        new PizzaShop('2', Banner, 'Pizzaria Erivax', '20 Avaliações', 'Italiana', 'Broto', '10-20'),

        new PizzaShop('3', Banner, 'Pizzaria Cairo', '45 Avaliações', 'Italiana', 'Giga', '25-35')
    ];

    return (
        <ul className={styles.pizzaria}> 
            {pizzeria.map((data) => (
                <div className={styles.pizzaria_Container}>
                <li key={data.id}>
                    <img src={data.image} alt='Imagem da pizzaria'/>
                    <p className={styles.pizzaria_Name}>{data.name}</p>
                    <p className={styles.pizzaria_Rank}>{data.rank}</p>
                    <span className={styles.pizzaria_Type}>{data.type}</span>
                    <span className={styles.pizzaria_Size}>{data.size}</span>
                    <p className={styles.pizzaria_Time}>{data.time}</p>
                </li>
                </div>
            ))}
        </ul>
    )
}

export default Pizzaria