'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += +num[i] * 2 ** (num.length - 1 - i);
    }
    return suma;
}

//'10100'
//0 -> 1 2 ** (4 - 0) 2**4 = 16;
//0 -> 0 2 ** (4 - 1) 2**3 = 8; (no cuenta porque num[i] vale 0

    //opcion con expresion regular
    //num = num.replace(/[^01]/gi, '');
    //return Number.parseInt(num, 2);


function DecimalABinario(num) {
  // tu codigo aca
  let number = parseInt(num);
  let resultado = number.toString(2);
	return resultado;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}