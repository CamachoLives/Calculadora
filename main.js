let NumeroActual = "";
let NumeroAnterior = "";
let Operador = null;
let Resultado = null;

function NumeroPresente(Valor) {
  NumeroActual += Valor;
  ActualizarDisplay(NumeroActual);
}

function ActualizarDisplay(Valor) {
  document.getElementById("display").value = Valor;
}

function OperadorFun(Operacion) {
  if (NumeroActual === "") return;
  if (Resultado) {
    NumeroAnterior = Resultado;
    NumeroActual = "";
    Operador = Operacion;
  } else {
    NumeroAnterior = NumeroActual;
    NumeroActual = "";
    Operador = Operacion;
  }
}


function Operacion() {
  let Anterior = parseFloat(NumeroAnterior);
  let Actual = parseFloat(NumeroActual);
  if (Actual === 0 && Operador === "/") {
    ActualizarDisplay("No se puede dividir entre 0");
  } else {
    //**
    // operador = "+", "-", "*", "/" 
    //  */
    switch (Operador) {
      case "+":
        Resultado = Anterior + Actual;
        ActualizarDisplay(Resultado);
        break;
      case "-":
        Resultado = Anterior - Actual;
        ActualizarDisplay(Resultado);
        break;
      case "*":
        Resultado = Anterior * Actual;
        ActualizarDisplay(Resultado);
        break;
      case "/":
        Resultado = Anterior / Actual;
        ActualizarDisplay(Resultado);
        break;
    }
  }
  return Resultado;
}

function DeleteAll() {
  NumeroActual = "";
  NumeroAnterior = "";
  Operador = null;
  Resultado = null;
  ActualizarDisplay(Resultado);
}
