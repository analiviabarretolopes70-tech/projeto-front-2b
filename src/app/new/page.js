'use client';
import { useState } from "react"

export default function NovoProduto() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [status, setStatus] = useState('');

    const enviarDados = async () => {
        e.preventDefaut();
        setStatus('');
    try {
         const precoNumber = Number(preco)
        if (nome.trim() && precoNumber) {
            const produto = {
                nome: nome,
                preco: precoNumber,
            }
            const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(produto),
            });
            if (!response.ok) throw new Error('Erro ao salvar o produto!');
             console.log(produto);
        } else {
           throw new Error('Campos obrigatórios não preenchidos!');
        }
        setStatus('Produto salvo com sucesso!');
        setNome('');
        setPreco('');

    } catch (e) {
        console.log('ok');
        alert(`Erro: ${e.message}`)
        setStatus(e.message)
    }
     
}

    return (
        <div>
            <h1>Novo Produto</h1>
            {status && <p>{status}</p>}
            <form onSubmit={enviarDados}>
                <fieldset>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="Preco">Preco:</label>
                <input type="text" id="preco" value={preco} onChange={(e) => setPreco(e.target.value)} />
                <button type="submit" onSubmit={enviarDados} >salvar</button>
                <button type="reset">Limpar</button>
                </fieldset>
            </form>
        </div>
    )
}