function Buttons({ dados }) {
    return (
        <>
            {
                dados.map((pegaDados, index) => (
                    <div className={pegaDados.style} key={pegaDados.id || index}>
                        <button type="submit" id={pegaDados.id} onClick={pegaDados.action}>
                            {pegaDados.name}
                        </button>                        
                    </div>
                ))
            }
        </>
    );
}

export default Buttons;
