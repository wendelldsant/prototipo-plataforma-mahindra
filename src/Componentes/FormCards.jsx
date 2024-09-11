function FormCards({data}) {
    return ( 
        <>{
            data.map((pegaDados, index)=>(
                <div
                    className = "form-group"
                    id={`campo${index}`}
                >
                    <label htmlFor={pegaDados.dataType}>{pegaDados.titulo}</label>
                    <input type="text" id={pegaDados.dataType} />
                    <div id={pegaDados.errorID} className="hidden">{pegaDados.errorText}</div>
                </div>
            ))
        }
        </>
     );
}

export default FormCards;