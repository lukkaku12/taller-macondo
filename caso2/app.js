export function case2() {
  let altoPermitido = 55;
  let largoPermitido = 40;
  let anchoPermitido = 20;

  let altoLLevado = 60;
  let largoLLevado = 40;
  let anchoLLevado = 20;

  const factorReduccionAlto = altoPermitido / altoLLevado;
  const factorReduccionLargo = largoPermitido / largoLLevado;
  const factorReduccionAncho = anchoPermitido / anchoLLevado;

  console.log(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

  let menor = Math.min(
    factorReduccionAlto,
    factorReduccionLargo,
    factorReduccionAncho
  );

  const nuevoAlto = altoLLevado * menor;
  const nuevoLargo = largoLLevado * menor;
  const nuevoAncho = anchoLLevado * menor;

  return [nuevoAlto, nuevoLargo, nuevoAncho];
}
