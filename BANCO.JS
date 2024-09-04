

function depositar(){
    let saldo= parseInt(document.getElementById("saldo").value);
    let cantidad= parseInt(document.getElementById("cantidad").value);
   
    if(saldo+cantidad>990 || saldo+cantidad<10){
      alert("No se puede realizar el movimiento ya que incumple con las politicas de tu cuenta")
      
    }else{
      document.getElementById("saldo").value=saldo+cantidad;
    document.getElementById("resultado").textContent="Has depositado $"+ cantidad+ " Tu nuevo saldo es: "+document.getElementById("saldo").value;
}
}

function retirar(){
    let saldo= parseInt(document.getElementById("saldo").value)
    let cantidad= parseInt(document.getElementById("cantidad").value)
    
    if(saldo-cantidad>990 || saldo-cantidad<10){
      alert("No se puede realizar el movimiento ya que incumple con las politicas de tu cuenta");
      
    }else{
      document.getElementById("saldo").value=saldo-cantidad
    document.getElementById("resultado").textContent="Has retirado $"+ cantidad+ "Tu nuevo saldo es: "+document.getElementById("saldo").value;
}
}

function saldo(){
  document.getElementById("resultado2").textContent="Tu saldo es: "+document.getElementById("saldo").value;
}

function salir(){

  window.location.href="index.html";
}

