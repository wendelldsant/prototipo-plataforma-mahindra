function Buttons({ dados }) {
    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div className = {pegaDados.divStyle}>
                        <button
                            className="col-span-2 flex justify-center gap-2 items-center mx-auto shadow-xl lg:text-xl lg:block md:block hidden bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-900 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                            onClick={pegaDados.handle}
                        >
                           {pegaDados.title}
                        </button>                    
                    </div>
                ))
            }
        </>
    );
}

export default Buttons;
