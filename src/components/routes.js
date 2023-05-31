import React from "react";
import { Routes, Route } from 'react-router-dom';
import Pizzarias from "../pages/Buscar/Pizzarias";
import Sobre from "../pages/Sobre/Sobre"
import Carrinho from "../pages/Carrinho/Carrinho";
import ComoFunciona from "../pages/ComoFunciona/comoFunciona";
import Contatos from "../pages/Contato/Contato";
import Perfil from "../pages/Perfil/Perfil";
import Planos from "../pages/Planos/Planos";

function Rota () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Pizzarias/>}/>
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/como-funciona" element={<ComoFunciona/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/planos" element={<Planos/>}/>
            </Routes>
        </div>
    );
}

export default Rota;