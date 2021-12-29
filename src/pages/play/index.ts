import { state } from "../../state";

export function initPlay(params) {
  const div = document.createElement("div");
  const imageURL = require("url:../../img/fondo.svg");
  const computerPlay = "";
  const SelectRandom = Math.floor(Math.random() * (3 - 0));

  if (SelectRandom == 0) {
    this.computerPlay = "piedra";
  } else if (SelectRandom == 1) {
    this.computerPlay = "papel";
  } else if (SelectRandom == 2) {
    this.computerPlay = "tijera";
  }

  let counter = 3;
  let counter2 = 0;

  const intervalId = setInterval(() => {
    const contador = div.querySelector(".contador");
    contador.textContent = counter.toString();
    counter--;

    const elegido = div.querySelector(".seleccionado");
    if (counter < 1 && elegido != null) {
      elegido.classList.add("jugado");
      div.querySelector(".no-seleccionado").remove();
      div.querySelector(".no-seleccionado").remove();
      div.querySelector(".container-contador").remove();
      const contenedorPage = div.querySelector(".container");
      const computerSelect = document.createElement("div");
      computerSelect.innerHTML = `
      <div class= "computer-select">
      <${this.computerPlay}-el></${this.computerPlay}-el>
      </div>
      `;
      contenedorPage.appendChild(computerSelect);

      const intervalId2 = setInterval(() => {
        counter2++;
        params.goTo("/result");
        if (counter2 > 0) {
          clearInterval(intervalId2);
        }
      }, 1000);
      clearInterval(intervalId);
    }
    if (counter < 0) {
      params.goTo("/instructions");
      clearInterval(intervalId);
    }
  }, 1000);

  var style = document.createElement("style");
  style.textContent = `
        .container{
          background-image: url(${imageURL});
          width:100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container-page{
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tijera{
          position: absolute;
          left: 10%;
          top: 80%; 
          Width: 104px;
          Height: 233px;         
        }
        @media (min-width: 600px){
          .tijera{
            left: 32%;
          }
        }

        .piedra{
          position: absolute;
          left: 40%;
          top: 80%;
          Width: 104px;
          Height: 233px;
        }  
        @media (min-width: 600px){
          .piedra{
            left:47%;
          }
        }   

        .papel{
          position: absolute;
          left: 70%;
          top: 80%;
          Width: 104px;
          Height: 233px;
        }
        @media (min-width: 600px){
          .papel{
            left: 63%;
          }
        }

        .seleccionado{          
          top: 75%;
          Width: 104px;
          Height: 263px;
        }        
        .no-seleccionado{          
          top: 85%;
        }
        
        .jugado{
          top: 50%;
          Width: 158px;
          Height: 375px;
          top: 63%;
          left: 30%
        }
        @media (min-width: 600px){
          .jugado{
            left: 45%;          
          }
        }   

        .container-contador{
          margin-top: 170px;
          width: 250px;
          height: 250px;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.767);
          color: white;
          display:flex;
          align-items: center ;
          justify-content: center;
          font-size: 65px;   
        }
        @media (min-width: 600px){
          .container-contador{
            margin-top: 130px;
            width: 300px;
            height: 300px;
            font-size: 85px;
          }
        }

        .computer-select{
          position: absolute;
          bottom: 62%;
          Width: 158px;
          Height: 375px;
          transform: rotate(180deg);
          left: 30%;          
        }
        @media (min-width: 600px){
          .computer-select{
            left: 45%;          
          }
        }       
    `;

  div.innerHTML = `
  <div class="container">
    <div class="container-page">
      <div class="container-contador">
          <h1 class="contador"><h1>
      </div>
      <div class="tijera">
        <tijera-el></tijera-el>
      </div>
      <div class="piedra">
        <piedra-el></piedra-el>
      </div>
      <div class="papel">
        <papel-el></papel-el>
      </div>
    </div>
  </div>
  `;

  div.append(style);

  var piedra = div.querySelector(".piedra");
  var papel = div.querySelector(".papel");
  var tijera = div.querySelector(".tijera");

  piedra.addEventListener("click", () => {
    this.myPlay = "piedra";
    piedra.classList.add("seleccionado");
    papel.classList.add("no-seleccionado");
    tijera.classList.add("no-seleccionado");

    state.whoWins(this.myPlay, this.computerPlay);
  });

  papel.addEventListener("click", () => {
    this.myPlay = "papel";
    piedra.classList.add("no-seleccionado");
    papel.classList.add("seleccionado");
    tijera.classList.add("no-seleccionado");

    state.whoWins(this.myPlay, this.computerPlay);
  });

  tijera.addEventListener("click", () => {
    const myPlay = "tijera";
    piedra.classList.add("no-seleccionado");
    papel.classList.add("no-seleccionado");
    tijera.classList.add("seleccionado");

    state.whoWins(myPlay, this.computerPlay);
  });

  return div;
}
