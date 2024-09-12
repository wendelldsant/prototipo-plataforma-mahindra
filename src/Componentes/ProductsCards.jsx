function ProductsCard({dados}) {
    return ( 
        <>{
            dados.map((pegaDados, index) => 
              <div
                className="max-w-64"
              >
                <h1>{pegaDados.titulo}</h1>
                <img src= {pegaDados.imagem} alt="" />
                <h1>{pegaDados.preco}</h1>

              </div>  
            )
        }</>
     );
}

export default ProductsCard;