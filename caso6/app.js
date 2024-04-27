// import { salario } from "../caso1/app.js";
export function case6(salario) {
  let diaActual = 1;
  let cantidadDias = 4;
  let vivo = true;
  let input1;

  while (diaActual < cantidadDias && vivo) {
    let input = prompt(
      "que color para el patrón de vestimenta deseas escojer? amarillo verde rojo azul"
    );

    console.log(salario);

    switch (input) {
      case "amarillo":
        input1 = confirm(
          "hay una piscina, huele algo extraño... ¿deseas entrar?"
        );
        if (input1) {
          alert("te sientes ahogado, demasiado cloro. Moriste...");
          vivo = false;
        } else {
          alert("no pasa nada, las vacaciones continuan");
        }
        break;
      case "verde":
        input1 = confirm(
          "va a haber caminatas, vas a llevar agua para el trayecto, ¿Pero deseas ir todo el trayecto?"
        );
        if (input1) {
          alert(
            "irás toda la caminata, irá a una hermosa cascada y se tomará fotos"
          );
          vivo = true;
        } else {
          alert("llegarás a cierto punto, te vas a devolver solo");
          let chancesSupervivencia = Math.floor(Math.random() * 10 + 1);
          if (chancesSupervivencia > 5) {
            alert("sobreviviste a pesar de perderte, que suerte!");
            vivo = true;
          } else {
            alert(
              "no pudiste llegar al hotel y te moriste, tarde o temprano te encontrarán tu cádaver"
            );
            vivo = false;
          }
        }
        break;

      case "rojo":
        input1 = Number(
          prompt(
            "habrán actividades en la playa \n 1. jugar voleibol \n 2. nadar en el mar y montar moto \n 3. tomar un coctel mientras descansas"
          )
        );
        if (input1 === 1) {
          alert("juegas voleibol y te la pasas bien!");
          vivo = true;
        } else if (input1 === 2) {
          alert("montas moto y te la pasas de chill");
          vivo = true;
        } else {
          alert(
            "de pronto sientes un fuerte dolor de cabeza y empiezas a perder la visión, chirrinchi adulterado, te tiene que devolver de emergencia. "
          );
          vivo = false;
        }
        break;

      case "azul":
        input1 = confirm(" actividades dentro del mismo hotel");

        if (input1) {
          let decision = Number(
            prompt(
              "tiene 3 opciones, 1. bingo \n 2. bailar \n 3. casino y apuestas"
            )
          );
          if (decision === 1) {
            alert("se lo gana y aumenta su dinero");
            salario += 300000;
            vivo = true;
          } else if (decision === 2) {
            alert("te la pasas muy bien bailando");
            vivo = true;
          } else {
            alert("solo te quedas con los pasajes de regreso");
            salario = salario - salario + 300000;
            console.log(salario);
            vivo = true;
            break;
          }
        }
        break;

      default:
        alert(
          "asegurese de poner el color correcto para poder empezar con la agenda del día"
        );
        break;
    }

    if (vivo && salario > 400000) {
      let arranque = confirm(
        "parece que estás intacto deseas continuar con las vacaciones?"
      );
      if (arranque) {
        diaActual++
      } else {
        console.log("vas a continuar con las vacaciones es tu tiempo libre!")
        diaActual++
        break;
      }
    } else {
      alert("el proceso se termina, no sobrevivió Hildebrando");
    }
  }
  return [salario, vivo];
}
