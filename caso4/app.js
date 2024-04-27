export function caso4() {
  const string = "Taxi me puede llevar al hotel mariposas amarillas";

  let arregloString = string.split("");
  // ["t","a","x","i"]

  let nuevoArreglito = [];

  for (let letra = 0; letra < arregloString.length; letra++) {
    //0,1,2,3,4... 49
    // console.log(arregloString[letra]);
    //["t" con indice 0, "a" con indice 1, x con indice 2, etc...]
    if (
      arregloString[letra] === "a" ||
      arregloString[letra] === "e" ||
      arregloString[letra] === "i" ||
      arregloString[letra] === "o" ||
      arregloString[letra] === "u"
    ) {
      nuevoArreglito.push("i");
    } else {
      nuevoArreglito.push(arregloString[letra]);
    }
  }

  const nuevoString = nuevoArreglito.join("");
  // pasa de ["t", "i","x","i"...] a tixi tomando en cuanta el parametro del join
  console.log(nuevoString);
}
