function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequirec3e2;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){i[n]=e},e.parcelRequirec3e2=o),o.register("bXuNP",(function(e,t){var i,o;n(e.exports,"register",(()=>i),(n=>i=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var a={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},o=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("bXuNP").register(JSON.parse('{"d3X8m":"index.40ad5120.js","9nnT3":"fondo.d2120cef.svg","8tTTt":"tijera.d0905478.svg","hGZqP":"piedra.fd962f13.svg","4Z8Rf":"papel.51112237.svg"}')),o.register("kvgeX",(function(n,e){n.exports=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("9nnT3")})),o.register("kPq84",(function(e,t){var i;n(e.exports,"getBundleURL",(()=>i),(n=>i=n));var o={};function a(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),o[n]=e),e}}));const a={data:{currentGame:{computerPlay:"",myPlay:"",resultado:"",vos:0,computer:0}},listeners:[],getState(){return this.data},whoWins(n,e){const t=this.getState(),i="tijera"==n&&"piedra"==e,o="piedra"==n&&"papel"==e,a="papel"==n&&"tijera"==e,r=["papel"==n&&"piedra"==e,"piedra"==n&&"tijera"==e,"tijera"==n&&"papel"==e].includes(!0),s=[a,o,i].includes(!0);r?(t.currentGame.resultado="Ganaste",t.currentGame.vos++):s?(t.currentGame.resultado="Perdiste",t.currentGame.computer++):t.currentGame.resultado="Empate";const d={...this.getState().currentGame,myPlay:n,computerPlay:e};this.setState(d)},setState(n){this.data.currentGame=n;for(const e of this.listeners)e(n);localStorage.setItem("saved-state",JSON.stringify(n))},subscribe(n){this.listeners.push(n)},init(){const n=localStorage.getItem("saved-state");n&&this.setState(JSON.parse(n))}};const r=[{path:/\/welcome/,component:function(n){const e=document.createElement("div"),t=o("kvgeX");var i=document.createElement("style");return i.textContent=`\n        span{\n          color: #91CCAF;\n          font-size: 80px;\n          font-weight: bold;\n          display: inline;\n        }\n\n        .container{\n          background-image: url(${t});\n          width:100%;\n          height: 100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        .container-page{\n          max-width: 400px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        .titulo{\n          padding: 115px 34px 74px 34px;          \n        }\n        @media (max-width: 400px){\n          .titulo{\n            padding: 80px 25px 74px 25px;          \n          }\n\n        }\n\n        .container-boton{\n          width: 322px;\n        }\n\n        .container-figuras{\n          position: absolute;\n          left: 15%;\n          top: 87%;\n        }\n\n        @media (min-width: 600px){\n          .container-figuras{\n            left: 40%;\n            top: 87%;\n          }\n        }              \n    `,e.innerHTML='\n  <div class="container">\n    <div class="container-page">\n      <div class="titulo">    \n        <text-el tag="h1"> Piedra Papel </text-el>\n        <span>ó</span> \n        <text-el tag="h1">Tijera</text-el>\n      </div>\n      <div class="container-boton">\n          <button-el >Empezar</button-el>\n      </div>\n      <div class="container-figuras">      \n        <piedra-papel-tijera></piedra-papel-tijera>\n      </div>\n    </div>\n  </div>\n  ',e.append(i),e.querySelector(".container-boton").addEventListener("click",(()=>{n.goTo("/instructions")})),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div"),t=o("kvgeX");var i=document.createElement("style");return i.textContent=`\n        .container{\n          background-image: url(${t});\n          width:100%;\n          height: 100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        .container-page{\n          max-width: 400px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        \n\n        .instrucciones{\n          padding: 70px 27px 0px 27px;\n          text-align: center;\n        }\n\n        .container-boton{\n          width: 322px;\n        }\n\n        .container-figuras{\n          position: absolute;\n          left: 15%;\n          top: 87%;\n        }\n        \n        @media (min-width: 600px){\n          .container-figuras{\n            left: 40%;\n            top: 87%;\n          }\n        }\n\n    `,e.innerHTML='\n  <div class="container">\n    <div class="container-page">\n      <div class="instrucciones">    \n        <text-el tag="p"> Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>\n        </div>\n        <div class="container-boton">\n          <button-el >¡Jugar!</button-el>\n        </div>\n        <div class="container-figuras">      \n        <piedra-papel-tijera></piedra-papel-tijera>\n        </div>\n    </div>\n  </div>\n  ',e.append(i),e.querySelector(".container-boton").addEventListener("click",(()=>{n.goTo("/play")})),e}},{path:/\/play/,component:function(n){const e=document.createElement("div"),t=o("kvgeX"),i=Math.floor(3*Math.random());0==i?this.computerPlay="piedra":1==i?this.computerPlay="papel":2==i&&(this.computerPlay="tijera");let r=3,s=0;const d=setInterval((()=>{e.querySelector(".contador").textContent=r.toString(),r--;const t=e.querySelector(".seleccionado");if(r<1&&null!=t){t.classList.add("jugado"),e.querySelector(".no-seleccionado").remove(),e.querySelector(".no-seleccionado").remove(),e.querySelector(".container-contador").remove();const i=e.querySelector(".container"),o=document.createElement("div");o.innerHTML=`\n      <div class= "computer-select">\n      <${this.computerPlay}-el></${this.computerPlay}-el>\n      </div>\n      `,i.appendChild(o);const a=setInterval((()=>{s++,n.goTo("/result"),s>0&&clearInterval(a)}),1e3);clearInterval(d)}r<0&&(n.goTo("/instructions"),clearInterval(d))}),1e3);var c=document.createElement("style");c.textContent=`\n        .container{\n          background-image: url(${t});\n          width:100%;\n          height: 100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n        .container-page{\n          max-width: 400px;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n        }\n\n        .tijera{\n          position: absolute;\n          left: 10%;\n          top: 80%; \n          Width: 104px;\n          Height: 233px;         \n        }\n        @media (min-width: 600px){\n          .tijera{\n            left: 32%;\n          }\n        }\n\n        .piedra{\n          position: absolute;\n          left: 40%;\n          top: 80%;\n          Width: 104px;\n          Height: 233px;\n        }  \n        @media (min-width: 600px){\n          .piedra{\n            left:47%;\n          }\n        }   \n\n        .papel{\n          position: absolute;\n          left: 70%;\n          top: 80%;\n          Width: 104px;\n          Height: 233px;\n        }\n        @media (min-width: 600px){\n          .papel{\n            left: 63%;\n          }\n        }\n\n        .seleccionado{          \n          top: 75%;\n          Width: 104px;\n          Height: 263px;\n        }        \n        .no-seleccionado{          \n          top: 85%;\n        }\n        \n        .jugado{\n          top: 50%;\n          Width: 158px;\n          Height: 375px;\n          top: 63%;\n          left: 30%\n        }\n        @media (min-width: 600px){\n          .jugado{\n            left: 45%;          \n          }\n        }   \n\n        .container-contador{\n          margin-top: 170px;\n          width: 250px;\n          height: 250px;\n          -moz-border-radius: 50%;\n          -webkit-border-radius: 50%;\n          border-radius: 50%;\n          background: rgba(0, 0, 0, 0.767);\n          color: white;\n          display:flex;\n          align-items: center ;\n          justify-content: center;\n          font-size: 65px;   \n        }\n        @media (min-width: 600px){\n          .container-contador{\n            margin-top: 130px;\n            width: 300px;\n            height: 300px;\n            font-size: 85px;\n          }\n        }\n\n        .computer-select{\n          position: absolute;\n          bottom: 62%;\n          Width: 158px;\n          Height: 375px;\n          transform: rotate(180deg);\n          left: 30%;          \n        }\n        @media (min-width: 600px){\n          .computer-select{\n            left: 45%;          \n          }\n        }       \n    `,e.innerHTML='\n  <div class="container">\n    <div class="container-page">\n      <div class="container-contador">\n          <h1 class="contador"><h1>\n      </div>\n      <div class="tijera">\n        <tijera-el></tijera-el>\n      </div>\n      <div class="piedra">\n        <piedra-el></piedra-el>\n      </div>\n      <div class="papel">\n        <papel-el></papel-el>\n      </div>\n    </div>\n  </div>\n  ',e.append(c);var l=e.querySelector(".piedra"),p=e.querySelector(".papel"),u=e.querySelector(".tijera");return l.addEventListener("click",(()=>{0==this.contJugadas&&(this.myPlay="piedra",l.classList.add("seleccionado"),p.classList.add("no-seleccionado"),u.classList.add("no-seleccionado"),a.whoWins(this.myPlay,this.computerPlay)),this.contJugadas++})),p.addEventListener("click",(()=>{0==this.contJugadas&&(this.myPlay="papel",l.classList.add("no-seleccionado"),p.classList.add("seleccionado"),u.classList.add("no-seleccionado"),a.whoWins(this.myPlay,this.computerPlay)),this.contJugadas++})),u.addEventListener("click",(()=>{if(0==this.contJugadas){const n="tijera";l.classList.add("no-seleccionado"),p.classList.add("no-seleccionado"),u.classList.add("seleccionado"),a.whoWins(n,this.computerPlay)}this.contJugadas++})),e}},{path:/\/result/,component:function(n){const e=document.createElement("div"),t=a.getState().currentGame.resultado,i=a.getState().currentGame.vos,o=a.getState().currentGame.computer;var r=document.createElement("style");return r.textContent=`\n        .container{\n          width:100%;\n          height: 100vh;\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background-color: var(--fondo-${t});          \n        }\n\n        .container-score{\n          margin-top: 90px;\n          width: 259px;\n          height: 200px;\n          background-color: #FFFFFF;\n          border: 10px solid #000000;\n          border-radius: 10px; \n        }\n        .titulo-score{\n          text-align:center;\n          font-size: 30px;\n          margin-bottom: 30px;\n        }\n        .container-boton{\n          width: 322px;\n          margin-top: 20px;\n        }\n        .puntajes{\n          text-align: end;\n          margin-right: 20px;\n          font-size: 20px;\n        }\n        .img-fondo-arriba{\n          position: absolute;\n          bottom: 62%;\n          Width: 158px;\n          Height: 375px;\n          transform: rotate(180deg);\n          left: 30%;          \n        }        \n\n    `,e.innerHTML=`\n  <div class="container">\n    <estrella-el resultado="${t}"></estrella-el> \n    <div class="container-score">\n      <h2 tag="h2" class="titulo-score">Puntaje</h2>\n      <p class="puntajes" tag="p">Vos: ${i}</p>\n      <p class="puntajes" tag="p">Máquina: ${o}</p>    \n    </div>\n    <div class="container-boton">\n        <button-el >Volver a Jugar</button-el>\n    </div>      \n  </div>\n  `,e.append(r),e.querySelector(".container-boton").addEventListener("click",(()=>{n.goTo("/instructions")})),e}}];function s(){return location.host.includes("github.io")}o.register("1l5oJ",(function(n,e){n.exports=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("8tTTt")})),o.register("gLFnG",(function(n,e){n.exports=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("hGZqP")})),o.register("Ctfg3",(function(n,e){n.exports=o("kPq84").getBundleURL("d3X8m")+o("bXuNP").resolve("4Z8Rf")})),function(){!function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=this.getAttribute("resultado"),e=document.createElement("style");e.textContent=`\n            #estrella{\n                Margin-top: 15px;\n                width: 1px;\n                height: 1px;\n                border-bottom: 225px solid var(--estrella-${n});\n                border-left: 134px solid transparent;\n                border-right: 151px solid transparent;\n            }\n            \n            #estrella:before{\n                content: "";\n                display: block;\n                width: 1px;\n                height: 1px;\n                border-top: 228px solid var(--estrella-${n});\n                border-left: 144px solid transparent;\n                border-right: 141px solid transparent;\n                position: relative;\n                bottom: -74px/*30%*/;\n                left: -139px/*55%*/;\n            }\n\n            .resultado{\n                position: absolute;\n                top: 21%;\n                left: 31%;\n                color: white; \n                transform: rotate(-25deg);\n              }\n\n              @media (min-width: 600px){\n                .resultado{\n                  top: 17%;\n                  left: 45%;\n                }\n              }\n\n        `,this.shadow.appendChild(e),this.render()}render(){const n=this.getAttribute("resultado"),e=document.createElement("div");e.innerHTML=`\n            <div id="estrella" ></div>\n            <h1 class="resultado">${n}</h1>  \n      `,this.shadow.appendChild(e)}}customElements.define("estrella-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.tags=["h1","h2","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag"));const n=document.createElement("style");n.textContent="\n        .h1{\n            color: #009048;\n            font-size: 70px;\n            display:inline;\n        }\n        .h2{\n            font-size: 50px;\n            text-align: center;\n            color: #000000;\n            font-weight: normal;\n\n        }\n        .p{\n            font-weight: normal;\n            font-size: 40px;\n            text-align: center;\n            color: #000000;\n        }\n      ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement(this.tag);n.textContent=this.textContent,n.classList.add(this.tag),this.shadow.appendChild(n)}}customElements.define("text-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent="\n        .root{\n            background-color: #006CFC;\n            border: 10px solid #001997;\n            border-radius: 10px;\n            width:100%;\n            font-size: 40px;\n            text-align: center;\n            color: #D8FCFC;\n        }\n        @media (max-width: 400px){\n          .root{\n            font-size: 30px;\n          }\n\n        }\n      ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("button");n.textContent=this.textContent,n.classList.add("root"),this.shadow.appendChild(n)}}customElements.define("button-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent="\n        .imagen{\n          Width: 100%;\n          Height: 100%;\n        }\n      ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("1l5oJ");n.classList.add("container"),n.innerHTML=`\n        <img class="imagen" src=${e}>\n      `,this.shadow.appendChild(n)}}customElements.define("tijera-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent="\n          .imagen{\n            Width: 100%;\n            Height: 100%;\n          }\n        ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("gLFnG");n.classList.add("container"),n.innerHTML=`\n          <img class="imagen" src=${e}>\n        `,this.shadow.appendChild(n)}}customElements.define("piedra-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent="\n            .imagen{\n              Width: 100%;\n              Height: 100%;\n            }\n          ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("Ctfg3");n.classList.add("container"),n.innerHTML=`\n            <img class="imagen" src=${e}>\n          `,this.shadow.appendChild(n)}}customElements.define("papel-el",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent="\n              .container{\n                  Width: 280px;\n                  display:flex;\n                  justify-content: space-between;\n              }\n              .imagen{\n                  Width: 56px;\n                  Height: 128px;\n\n              }\n            ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div"),e=o("gLFnG"),t=o("Ctfg3"),i=o("1l5oJ");n.classList.add("container"),n.innerHTML=`\n              <img class = "imagen" src=${i}>\n              <img class = "imagen" src=${e}>\n              <img class = "imagen" src=${t}>\n     `,this.shadow.appendChild(n)}}customElements.define("piedra-papel-tijera",n)}();!function(n){function e(n){const e=s()?"/juego-piedra-papel-o-tijera"+n:n;history.pushState({},"",e),t(e)}function t(t){const i=s()?t.replace("/juego-piedra-papel-o-tijera",""):t;for(const t of r)if(t.path.test(i)){const i=t.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(i)}}"/juego-piedra-papel-o-tijera/"==location.pathname||"/"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".root")),a.init()}();
//# sourceMappingURL=index.40ad5120.js.map
