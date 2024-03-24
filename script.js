function inicia(){
    var Lista = document.getElementById("Lista");
    let Btn = document.getElementById("btn");
    let Gambiarra = 0;
    Btn.addEventListener("click", function(){
      var li = document.createElement("li");
      let ValorInserido = document.getElementById("valor").value;
      var dt = document.createElement("dt");
      var Fatorial = 1;
      var texto = ""
      var Aux = " x "
       
      if (ValorInserido>21 || ValorInserido<1){

      }
      else {
        Gambiarra = 1 + Gambiarra;
      for(let i = ValorInserido; i >= 1; i--){
       Fatorial = i * Fatorial;
       texto = texto.concat(i);
       if (i>=2){
       texto = texto.concat(Aux);
       }
       if(i===1){
        Fatorial.innerHTML = "<strong>" + Fatorial + "</strong>";
        texto = texto.concat(" = " + Fatorial);
       }
      }
      if (Gambiarra===1) {
        dt.style.paddingTop = 0 + "px";
      }
      else{
        dt.style.paddingTop =  25 + "px";
      }
      dt.textContent = ("Calculando" + " " + ValorInserido + "!")
      Lista.appendChild(dt);
      li.textContent = texto;
      Lista.appendChild(li);
    }
    })
}

window.addEventListener("load",inicia);


