let NumeroActual = "";
let NumeroAnterior = "";
let Operador = null;
let Resultado = null;

function NumeroPresente(Valor) {
  NumeroActual += Valor;
  ActualizarDisplay(NumeroActual);
  console.log(NumeroActual);
}

function ActualizarDisplay(Valor) {
  document.getElementById("display").value = Valor;
}

function OperadorFun(Operacion) {
  if (NumeroActual === "") return;
  if (NumeroAnterior !== "") {
    NumeroAnterior = Resultado;
    NumeroActual = "";
    Operador = Operacion;  
  }
  NumeroAnterior = NumeroActual;
  NumeroActual = "";
  Operador = Operacion;
}

function Operacion() {
  let Anterior = parseFloat(NumeroAnterior);
  let Actual = parseFloat(NumeroActual);

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
  return Resultado;
}
