export function verifyID(campo){
    const valor = document.querySelector(`${campo}`).value;
    if (valor === 'wendell'){
        console.log('True');
    } else {
        console.log('False');
    }
}
