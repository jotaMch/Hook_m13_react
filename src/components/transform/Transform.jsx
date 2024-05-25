import React, { useState, useEffect } from "react";
import BankComponent from "../forms/Bank";
import ShopComponent from "../forms/Shop";
import List from "./list/List";

function TransformedComponent({ inputPassBank, inputPassShop, valuePassBank, valuePassShop, ...props }) {
        const [idadeSelecionada, setIdadeSelecionada] = useState(false);
        const [registerOk, setRegisterOk] = useState(true);
        const [charValueShop, setCharValueShop] = useState("");
        const [numberValueShop, setNumberValueShop] = useState("");
        const [lengthPass, setLengthPass] = useState("");
        const [confirmPass, setConfirmPass] = useState(true);
        const [valueConfirm, setValueConfirm] = useState("");
        const [messegeCheck, setMessegeCheck] = useState(false);
        const [errorPassword, setErrorPassword] = useState("");
        const [errorName, setErrorName] = useState("");
        const [spanErroName, setSpanErroName] = useState(false);        
        const [valueSexo, setValueSexo] = useState("");

        const [nameCard, setNameCard] = useState("");
        const [adressUser, setAdressUser] = useState("")


        useEffect(() => {
            const hasNumberShop = /\d/.test(valuePassShop);
            const hasSpecialCharShop = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(valuePassShop);

            if (!hasNumberShop) {
                setNumberValueShop("A senha deve conter pelo menos um número");                                
                props.setBorderErro(true)
            } else {
                setNumberValueShop("");
                props.setBorderErro(false)
            }
        
            if (!hasSpecialCharShop) {
                setCharValueShop("A senha deve conter pelo menos um caractere especial");
                props.setBorderErro(true)
            } else {
                setCharValueShop("");
                props.setBorderErro(false)
            }
            
            if (valuePassShop.length < 10) {
                setLengthPass("A senha deve conter pelo menos 10 caracteres");
                props.setBorderErro(true)
            } else {
                setLengthPass("");
                props.setBorderErro(false)
            }
        }, [valuePassShop]);    
        
        const clickRegister = (e) => {  
            const hasNumberShop = /\d/.test(valuePassShop);
            const hasSpecialCharShop = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(valuePassShop);
            const isPasswordLongEnough = valuePassShop.length >= 10;
            

            if (hasNumberShop && hasSpecialCharShop && isPasswordLongEnough && valueConfirm === valuePassShop && errorName.length >= 3) {
                setMessegeCheck(true);
            } else if(errorName.length < 3){
                setSpanErroName(true)
                setMessegeCheck(false)
            } else {
                alert("A senha não atende aos critérios de validação");
            }             
        
        }
        
        const clickConfirmBank = (e) => {
            e.preventDefault()
            
            if(valuePassBank !== valuePassShop){
                setErrorPassword("Sua senha está incorreta!")
                setMessegeCheck(true);
            } else {
                setErrorPassword("Sua senha está correta!")
                setTimeout(() => {
                    setRegisterOk(false)
                }, 1000);
            }

            if(valueSexo === "selecione") {
                alert("Selecione o seu sexo")
            } else if (!idadeSelecionada) {
                alert("Por favor, selecione se você é maior de 18 anos.");
                
            }
        }
        
        return (
            <div className="forms-content">   
                {registerOk &&  
                !messegeCheck &&
                <ShopComponent 
                    {...props}
                    inputPassShop={inputPassShop} 
                    valChar={valuePassShop.length > 0 ? charValueShop : ""} 
                    valNumber={valuePassShop.length > 0 ? numberValueShop : ""}
                    valuePassShop={valuePassShop}
                    confirmPass={confirmPass}
                    setConfirmPass={setConfirmPass}
                    lengthPass={valuePassShop.length > 0 ? lengthPass : ""}
                    borderErro={props.borderErro}
                    messegeCheck={messegeCheck}
                    clickRegister={clickRegister}
                    setValueConfirm={setValueConfirm}
                    setErrorName={setErrorName}
                    spanErroName={spanErroName}
                />}
                
                {registerOk &&  messegeCheck &&
                <BankComponent 
                    {...props}
                    inputPassBank={inputPassBank} 
                    clickConfirmBank={clickConfirmBank}
                    errorPassword={errorPassword}
                    setIdadeSelecionada={setIdadeSelecionada}
                    setValueSexo={setValueSexo}
                    nameCard={nameCard}
                    setNameCard={setNameCard}
                    setAdressUser={setAdressUser}
                    
                />}
                {!registerOk && 
                <List valuePassShop={valuePassShop} nameCard={nameCard} adressUser={adressUser}/>
                }
            </div>
        );
    };

export default TransformedComponent;
