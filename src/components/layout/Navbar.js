import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { User, Logo2, Cart } from '../../assets/images';

function Navbar () {
    return(
        <nav className={styles.navbar}>
                <Link to="/"><img src={Logo2} alt="logo" /></Link>
            <ul>
                <li>
                    <Link to="/">Buscar</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/como-funciona">Como Funciona</Link>
                </li>
                <li>
                    <Link to="/planos">Planos</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
                </li>
            </ul>

            <Link to="/perfil"><img className={styles.user} src={User} alt="Perfil" /></Link>
            <Link to="/carrinho"><img className={styles.cart} src={Cart} alt="Carrinho" /></Link>
        </nav>
    );
}

export default Navbar