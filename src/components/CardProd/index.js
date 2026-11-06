export default function CardProd({produto}) {
   console.log(produto);
     return (
        <div>
        <h2>id {produto.id} - nome {produto.nome}</h2>
        <p>descricao {produto.descricao}</p>
        <p>estoque {produto.quantidade_estoque}</p>
        <p>preço {produto.preco}</p>
        </div>
     )
}
    