'use client';
import { useEffect, useState } from "react"
import styles from "./page.module.css";

export default function Produtos(){

     const [prods, setProds] = useState(null);
     const [categorias, setCategorias] = useState(null);
     

useEffect( () => {
    const fetchProdutos = async () => {
    try { 
    const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
    console.log(response); //só para decoração
    if(!response.ok) {
      throw new Error (`Erro ao buscar produtos ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data); //como salvar data no estado?
    setProds(data);
    } catch (e) {
      console.log(e.message);
    }
  }
   fetchProdutos();
  }, []);

useEffect( () => {
    const fetchCategorias = async () => {
    try { 
    const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/categorias');
    console.log(response); //só para decoração
    if(!response.ok) {
      throw new Error (`Erro ao buscar categorias ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data); //como salvar data no estado?
    setCategorias(data);
    } catch (e) {
      console.log(e.message);
    }
  }
   fetchCategorias();
  }, []);

  const getNomeCategoria = (id_categoria) => {
        const categoria = categorias?.find(cat => cat.id === id_categoria);
        return categoria? categoria.nome : 'Categoria Indisponível';
  }
    return (
         <div>
          {
           prods === null ? 
           <p>Carregando lista de produtos...</p> :
             <div>


              <h2>Lista de produtos</h2>
              <table className={styles.tbl}>
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Nome </th>
                    <th> Descricao </th>
                    <th> Categoria </th>
                    <th> Estoque </th>
                    <th> Preço </th>
                  </tr>
                </thead>
                     <tbody>
                 {
                 prods.map((prod) => (
                     <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.nome}</td>
                        <td>{prod.descricao}</td>
                        <td>{prod.categoria_id}</td>
                        <td>{prod.quantidade_estoque}</td>
                        <td>{prod.preco}</td>
                       </tr>
               ))
           }
              </tbody>
              </table>
                {
              prods.map((prod) => (
             <p key={prod.id}>{prod.nome}</p>
         ))
     }


             </div>
             
       }
         </div>
    )
}