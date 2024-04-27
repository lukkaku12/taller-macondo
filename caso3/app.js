//" ElPassEs: 01110010_01101001_01110111_01101001"
//import { salario } from "../utilidades";

export function caso3(salary) {
  let contraseña = "01110010_01101001_01110111_01101001";

  let contra = contraseña.split("_");

  let nuevoArreglo = [];

  contra.forEach((element) => {
    nuevoArreglo.push(parseInt(element, 2));
  });

  let ArregloFinal = [
    /*141, 119, 115, 119 */
  ];

  nuevoArreglo.forEach((element) => {
    ArregloFinal.push(String.fromCharCode(element));
  });

  let stringified = ArregloFinal.join("");

  console.log(stringified);

  salary -= 50000;

  return salary;
}
