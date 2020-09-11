function makeCounter() {
    let coin = parseInt(prompt('Hola!! Bienvenido a tu banco de confianza.\nPresiona 1 si quieres revisar tu saldo en pesos.\nPresiona 2 si quieres revisar tu saldo en dolares.', ''));
    const cuenta = () => {
        let saldoPesos = 50000;
        let saldoDollar = 20000;
        if (coin === 1){
            let depositoPesos = parseInt(prompt(`Tu saldo actual es: $${saldoPesos}.\n Cuánto quieres depositar? `,''));
            saldoPesos += depositoPesos;
            alert(`Tu nuevo saldo es: $${saldoPesos}`);
        } else { if (coin === 2) {
            let depositoDollar = parseInt(prompt(`Tu saldo actual es: $${saldoDollar}.\n Cuánto quieres depositar? `,''));
            saldoDollar += depositoDollar;
            alert(`Tu nuevo saldo es: $${saldoDollar}`);
           } else {
            alert('Selección Invalida, Intenta de nuevo Por favor')
            }
        }
    }
    return cuenta();
}

makeCounter();          
