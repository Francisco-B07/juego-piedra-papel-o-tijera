import { state } from "../../state";

export function initResult(params) {
  const div = document.createElement("div");
  const resultado = state.getState().currentGame.resultado;
  const tusPuntos = state.getState().currentGame.vos;
  const compuPuntos = state.getState().currentGame.computer;
  var style = document.createElement("style");
  style.textContent = `
        .container{
          width:100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--fondo-${resultado});          
        }

        .container-score{
          margin-top: 90px;
          width: 259px;
          height: 200px;
          background-color: #FFFFFF;
          border: 10px solid #000000;
          border-radius: 10px; 
        }
        .titulo-score{
          text-align:center;
          font-size: 30px;
          margin-bottom: 30px;
        }
        .container-boton{
          width: 322px;
          margin-top: 20px;
        }
        .puntajes{
          text-align: end;
          margin-right: 20px;
          font-size: 20px;
        }
        .img-fondo-arriba{
          position: absolute;
          bottom: 62%;
          Width: 158px;
          Height: 375px;
          transform: rotate(180deg);
          left: 30%;          
        }        

    `;

  div.innerHTML = `
  <div class="container">
    <estrella-el resultado="${resultado}"></estrella-el> 
    <div class="container-score">
      <h2 tag="h2" class="titulo-score">Puntaje</h2>
      <p class="puntajes" tag="p">Vos: ${tusPuntos}</p>
      <p class="puntajes" tag="p">Máquina: ${compuPuntos}</p>    
    </div>
    <div class="container-boton">
        <button-el >Volver a Jugar</button-el>
    </div>      
  </div>
  `;

  div.append(style);
  var botonEl = div.querySelector(".container-boton");

  botonEl.addEventListener("click", () => {
    params.goTo("/instructions");
  });

  return div;
}
