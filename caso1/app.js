/* Caso 1

Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.

día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la mañana a Macondo las opciones que tiene Hildebrando:
- si compra una almojábana con gaseosa son 15.000
	le caerá mal porque lleva mucho en el stand
- un subway con gaseosa 23.000
	estará llenito y bien
- no compra nada 
	- le tocara comprar algo en Medellín

Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las vacaciones

*/

// import { salario } from "../utilidades.js";
import { case2 } from "../caso2/app.js";
import { caso3 } from "../caso3/app.js";
import { caso4 } from "../caso4/app.js";
import { caso5 } from "../caso5/app.js";
import { case6 } from "../caso6/app.js";

let salario = 2500000;
let arranque = true;

while (arranque) {
  let decisionUser = prompt(
    "estas son tus opciones \n 1. almojábana con gaseosa son 15.000 \n 2. subway con gaseosa 23.000 \n 3. no comprar nada"
  );
  switch (decisionUser) {
    case "1":
      alert("no es suficiente. Te caerá mal porque llevas mucho en el stand");
      let oferta1 = 15000;
      salario = salario - oferta1;
      console.log(`te quedan ${salario}`);
      break;
    case "2":
      alert("buena decisión, estarás llenito y bien");
      let oferta2 = 23000;
      salario = salario - oferta2;
      console.log(`te quedan ${salario}`);
      break;
    case "3":
      alert("te tocara comprar algo en Medellín");
      console.log(`te quedan ${salario}`);
      break;
    default:
      break;
  }

  arranque = confirm("desea seguir comprando?");
}

const [nuevoAlto, nuevoLargo, nuevoAncho] = case2();
salario = caso3(salario)
console.log(`El nuevo valor del salario que caso3 modifico es ${salario}`)
caso4()
salario = caso5(salario);
console.log(`El nuevo valor del salario que caso5 modifico es ${salario}`)
 
const [salary, vivo] = case6(salario)

console.log(`el salario restante es ${salary}, y si preguntas si quedé vivo aqui te respondo: ${vivo}`)
