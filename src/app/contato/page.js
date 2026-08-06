import styles from "./page.module.css"

export default function Contato() {
    let msg = 'Entre em contato';
    let cont = 0;

    const somar = () => {
        cont++;
        console.log(cont);
    }

    return (
        <main>
            <h1>Contato</h1>
            <p>{msg}</p>
            <p>Contador: {cont}</p>
            <button onClick={somar()}>Somar</button>
        </main>
    )
}