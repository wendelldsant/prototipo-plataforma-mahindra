function ProductsCards({ dados }) {
    return (
        <>
            {dados.map((pegaDados, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full max-w-xs flex flex-col"
                >
                    <div className="w-full h-56 flex items-center justify-center bg-gray-200">
                        <img
                            src={pegaDados.imagem}
                            alt={pegaDados.titulo}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                        <h1 className="text-lg font-semibold text-gray-800 mb-2">
                            {pegaDados.texto}
                        </h1>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-red-500">
                                {pegaDados.preco}
                            </span>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductsCards;
