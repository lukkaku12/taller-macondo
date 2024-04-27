export function caso5(salario) {
  let arranque = true;
  while (arranque) {
    let inputUsuario = Number(
      prompt("cuál desea escoger? \n 1. piedra\n 2. papel\n 3. tijera")
    );

    let inputTaxista = Math.floor(Math.random() * 3 + 1);
    console.log(inputTaxista);
    //empecemos  con el escenario donde usuario gana
    if (inputUsuario === 1 && inputTaxista === 2) {
      console.log("Hildebrando ganaste!");
    } else if (inputUsuario === 1 && inputTaxista === 3) {
      console.log("Hildebrando ganaste!");
    } else if (inputUsuario === 2 && inputTaxista === 1) {
      console.log("Hildebrando ganaste!");
    } else if (inputUsuario === 3 && inputTaxista === 2) {
      console.log("Hildebrando ganaste!");
      // donde el taxista gana
    } else if (inputUsuario === 2 && inputTaxista === 3) {
      console.log("taxista gana");
      salario -= 300000;
      console.log(salario);
    } else if (inputUsuario === 3 && inputTaxista === 1) {
      console.log("taxista gana");
      salario -= 300000;
      console.log(salario);
    } else if (inputUsuario === 1 && inputTaxista === 2) {
      console.log("taxista gana");
      salario -= 300000;
      console.log(salario);
      //empates
    } else {
      console.log("empate, no pasa nada");
    }

    arranque = confirm("desea continuar?");
  }
  return salario;
}
