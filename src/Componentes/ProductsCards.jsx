import StandardModal from "./StandardModal";
import React, { useState } from "react";

function ProductsCard({ dados }) {

  const [showPurchase, setShowPurchase] = useState(false)


  const handlePurchaseConfirm = () => {
    setShowPurchase(true);

  }

  const handleCloseModal = () => {
    setShowPurchase(false);
  }

  return (
    <div>
      {showPurchase && <StandardModal handleCloseModal={handleCloseModal} />}  {/* Exibe o Modal ao clicar */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 w-auto">
        {dados.map((pegaDados, index) => (
          <div
            key={index}
            className="col-span-1 w-auto p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
          >
            <div>
              <img
                className="w-full h-40 object-contain rounded-t-lg flex flex-col items-center "
                alt={pegaDados.titulo}
                src={pegaDados.imagem}
              />
              <div className="p-4">
                <h2 className="text-xl text-center  font-semibold">{pegaDados.titulo}</h2>
                <p className="text-gray-600 text-center">
                  {pegaDados.preco}
                </p>
                <div className="flex justify-center gap-3 items-center mt-4">
                  <button
                    className="bg-blue-500 
                 text-white px-4 py-2 rounded-full 
                   border-solid border-2  border-blue-600
                 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-110"
                    onClick={handlePurchaseConfirm}
                  >
                    Comprar
                  </button>
                  <button
                    className="bg-transparent
                  text-blue-600 px-4 py-2 
                    border-solid border-2 border-blue-600 rounded-full 
                  hover:bg-blue-600 hover:text-white 
                    focus:ring-2 focus:ring-blue-400 hover:scale-110"
                  >
                    
                    Detalhes
                  </button>

                </div>
              </div>
            </div>
          </div>


        ))}

      </div>
    </div>

  );
}

export default ProductsCard;


{/* <div className="grid grid-cols-4 gap-2">
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
</div> */}
