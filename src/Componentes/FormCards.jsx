function FormCards({data}) {
    return ( 
        <form className = "bg-gray-700 p-4">
        {
            data.map((pegaDados, index)=>(
                <div
                    className = "flex flex-col"
                    id={`campo${index}`}
                    key={pegaDados.dataType}
                >
                    <label htmlFor={pegaDados.dataType}>{pegaDados.titulo}</label>
                    <input type="text" id={pegaDados.dataType} />
                    <div id={pegaDados.errorID} className="hidden">{pegaDados.errorText}</div>
                </div>
            ))
        }
       </form> 
     );
}

export default FormCards;