import React from "react";

function ShopComponent({ setValueConfirm, messegeCheck, clickRegister, inputPassShop, valChar, valNumber, valuePassShop, setConfirmPass, confirmPass, lengthPass }) {
    
    
    return (
        <>
            <form>
                <h3>1 - Cadastre-se em nossa plataforma Rc</h3>
                <input type="text" placeholder="Seu nome" required />
                <input type="email" placeholder="E-mail" required />

                {inputPassShop()}
                <span>{valChar}</span>
                <span>{valNumber}</span>
                <span>{lengthPass}</span>
                <input
                    type="password"
                    placeholder="confirm password"
                    onChange={(e) => {
                        const confirmPassword = e.target.value;
                        setValueConfirm(e.target.value)
                        
                        setConfirmPass(confirmPassword === valuePassShop);
                    }}
                required
                />
                {!confirmPass && <span>As senhas não correspondem</span>}
                <button type="submit" onClick={clickRegister}>
                    Cadastre-se
                </button>
            </form>
            {messegeCheck && <p>deu certo</p>}
        </>
    );
}

export default ShopComponent;
