import React, { useState } from "react";
import Card from "./card/Card";

export default function BankComponent({setIdadeSelecionada, inputPassBank, clickConfirmBank, errorPassword, setValueSexo, nameCard, setNameCard, setAdressUser}) {

    const sexoSelect = (e) => {
        setValueSexo(e.target.value)
    }

    return(
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="heading_8264">MASTERCARD</p>
                        <Card />
                        <p className="number">9759 2484 5269 6576</p>
                        <p className="valid_thru">VALID THRU</p>
                        <p className="date_8264">1 2 / 2 8</p>
                        <p className="name">{nameCard}</p>
                    </div>
                    <div className="flip-card-back">
                        <div className="strip"></div>
                        <div className="mstrip"></div>
                        <div className="sstrip">
                        <p className="code">***</p>
                        </div>
                    </div>
                </div>
            </div>
            <form >
                <h2>2 - Crie seu perfil</h2>
                <h3>Banco digital da Rc</h3>
                
                <label htmlFor="nome">Nome para cartão:</label>
                <input type="text" id="nome" placeholder="Nome completo" 
                    value={nameCard}
                    onChange={(e) => setNameCard(e.target.value)}
                    required
                />

                <label>Sexo:</label>
                <select name="sexo" required onChange={sexoSelect}>                    
                    <option value="selecione">selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>

                <label>Você é maior de 18 anos?</label>
                <div className="radio-btn">
                    <div className="flex">
                        <input type="radio" id="sim" 
                        name="idade" value="sim" 
                        onChange={(e) => setIdadeSelecionada(e.target.value === 'sim')}/>
                        <label htmlFor="sim">Sim</label>
                    </div>
                    <div className="flex">
                        <input type="radio" id="nao" 
                        name="idade" value="nao" 
                        onChange={(e) => setIdadeSelecionada(e.target.value === 'nao')} />
                        <label htmlFor="nao">Não</label>
                    </div>
                </div>

                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" onChange={(e) => setAdressUser(e.target.value)} placeholder="Cidade" />
                <input type="text" placeholder="Complemento" /> 

                <label htmlFor="password">Confirme sua senha Rc:</label>
                {inputPassBank()}
                <span
                className={errorPassword === "Sua senha está correta!" ? "color-green" : "" }>
                    {errorPassword}
                </span>
                <button type="submit" onClick={clickConfirmBank}>Criar perfil</button>
            </form>
        </>
    )
}
