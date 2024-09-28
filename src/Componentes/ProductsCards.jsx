import StandardModal from "./StandardModal";
import React, { useState } from "react";

function ProductsCard({ dados }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPurchase, setShowPurchase] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Função para abrir o modal de compra
  const handlePurchaseConfirm = (product) => {
    setSelectedProduct(product);
    setShowPurchase(true);
  };

  // Função para abrir o modal de detalhes
  const handleDetails = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowPurchase(false);
    setShowDetails(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Modal de compra */}
      {showPurchase && selectedProduct && (
        <StandardModal
          handleCloseModal={handleCloseModal}
          atributes={{
            title: "Confirmação",
            text: `Você deseja trocar seus pontos pelo produto "${selectedProduct.titulo}"?`,
            cancelName: 'Cancelar',
            confirmName: 'Sim',
          }}
        />
      )}

      {/* Modal de detalhes */}
      {showDetails && selectedProduct && (
        <StandardModal
          handleCloseModal={handleCloseModal}
          atributes={{
            title: "Detalhes do Produto",
            text: selectedProduct.detalhes, // Exibindo os detalhes do produto
            cancelName: 'Fechar',
          }}
        />
      )}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 w-auto">
        {dados.map((pegaDados, index) => (
          <div
            key={index}
            className="col-span-1 w-auto p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
          >
            <div>
              <img
                className="w-full h-40 object-contain rounded-t-lg flex flex-col items-center"
                alt={pegaDados.titulo}
                src={pegaDados.imagem}
              />
              <div className="p-4">
                <h2 className="text-xl text-center font-semibold">{pegaDados.titulo}</h2>
                <p className="text-gray-600 text-center">{pegaDados.preco} pontos</p>
                <div className="flex justify-center gap-3 items-center mt-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full border-solid border-2 border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-110"
                    onClick={() => handlePurchaseConfirm(pegaDados)}
                  >
                    Comprar
                  </button>
                  <button
                    className="bg-transparent text-blue-600 px-4 py-2 border-solid border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-400 hover:scale-110"
                    onClick={() => handleDetails(pegaDados)}
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
