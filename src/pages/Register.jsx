function Register() {
    const handleCadastreSe = () => {
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Novo elemento criado!';
        
        const container = document.querySelector('.text-xl');
        
        if (container) {
            container.appendChild(newDiv);
        }
    };

    return ( 
        <div className="container">
            <section className="text-xl">
                <div>
                    <button type="button" id="btn-login">Login</button>
                </div>
                <div className="button-container">
                    <button type="button" id="btnCadastreSe" onClick={handleCadastreSe}>Cadastre-se</button>
                </div>
                <div className="button-container">
                    <button type="submit" id="btn-cadastrar">Cadastrar</button>
                </div>
                <div className="button-container">
                    <button type="button" id="btn-voltar" className="hidden">Voltar</button>
                </div>
            </section>
        </div>
    );
}

export default Register;
