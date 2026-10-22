'use client';
import { useState } from "react";
import styles from "./page.module.css"

export default function Contato() {
    let msg = 'Entre em contato';
    const [cont, setCont] = useState(0);
    const [texto, setTexto] = useState('');
    const [mostrar, setMostrar] = useState(true);

    const somar = () => {
       // cont++;
        setCont(cont + 1);
        console.log('Contador: ' + cont);
    }

    return (
        <main>
            <h1>Contato</h1>
            <p>{msg}</p>
            <p>Contador: {cont}</p>
            <button onClick={()=>somar()}>Somar</button>
            <button>{mostrar ? 'esconder': 'mostrar'}</button> 

            <form>
                <fieldset>
                    <p>{texto ? texto : 'Digite algum conteúdo'} </p>
                    <label htmlFor="msg">Digite aqui: </label>
                    <input type="text" id="msg" name="msg" onKeyUp={(e) => setTexto(e.target.value)}/>
                    <button type="button" onClick={()=>alert(texto)} >Clique aqui</button>
                    
                </fieldset>
            </form>
        </main>
    )
}