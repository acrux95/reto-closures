function makeCounter() {
    let coin = parseInt(prompt('Presiona 1 si quieres revisar tu saldo en pesos \n Presiona 2 si quieres revisar tu saldo en dolares', ''));
    const cuenta = () => {
        let pesos = 50000;
        let dollar = 20000;
        coin === 1
            ? alert(`$${pesos}`)
            : coin === 2
                ? alert(`$${dollar}`)
                : alert('No hay datos')
                }
            
        
    return cuenta();
}
makeCounter();              

//     return {
//       increase: function() {
//         count = count + 1;
//       },
//       decrease: function() {
//         count = count - 1;
//       },
//       getCount: function() {
//         return count;
//       },
//     };
//   }

//   let counterPeso = makeCounter(peso);
//   let counterDollar = makeCounter(dollar);

//   console.log('The count is:', counter.getCount());
//   counter.increase();
//   console.log('The count is:', counter.getCount());
//   counter.decrease();