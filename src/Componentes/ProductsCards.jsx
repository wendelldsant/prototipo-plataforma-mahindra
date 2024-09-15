function ProductsCard({ dados }) {
  return (
      <div className="grid grid-cols-4 gap-2">
          {dados.map((pegaDados, index) => (
              <div key={index} className="max-w-sm bg-white hover:shadow-lg rounded-lg overflow-hidden flex flex-col items-center ">
                  <h1 className="text-lg font-bold mb-2">{pegaDados.titulo}</h1>
                  <img src={pegaDados.imagem} alt={pegaDados.titulo} className="w-full h-48 object-contain" />
                  <div className="flex gap-2 justify-center items-center m-2">
                    <h1 className=" text-gray-700">{pegaDados.preco}</h1>
                    <button className="bg-orange-400 rounded-lg text-color-white">COMPRAR</button>
                  </div>
              </div>
          ))}
      </div>
  );
}

export default ProductsCard;
