export function initEstrella() {
  class Estrella extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      const resultado = this.getAttribute("resultado");
      const style = document.createElement("style");
      style.textContent = `
            #estrella{
                Margin-top: 15px;
                width: 1px;
                height: 1px;
                border-bottom: 225px solid var(--estrella-${resultado});
                border-left: 134px solid transparent;
                border-right: 151px solid transparent;
            }
            
            #estrella:before{
                content: "";
                display: block;
                width: 1px;
                height: 1px;
                border-top: 228px solid var(--estrella-${resultado});
                border-left: 144px solid transparent;
                border-right: 141px solid transparent;
                position: relative;
                bottom: -74px/*30%*/;
                left: -139px/*55%*/;
            }

            .resultado{
                position: absolute;
                top: 17%;
                left: 33%;
                color: white; 
                transform: rotate(-25deg);
              }

              @media (min-width: 600px){
                .resultado{
                  top: 17%;
                  left: 45%;
                }
              }

        `;
      this.shadow.appendChild(style);
      this.render();
    }
    render() {
      const resultado = this.getAttribute("resultado");
      const rootEl = document.createElement("div");
      rootEl.innerHTML = `
            <div id="estrella" ></div>
            <h1 class="resultado">${resultado}</h1>  
      `;
      this.shadow.appendChild(rootEl);
    }
  }
  customElements.define("estrella-el", Estrella);
}
