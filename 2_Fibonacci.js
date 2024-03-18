function seeFibonacci(valor) {
  let valor1 = 0;
  let valor2 = 1;

  while (valor2 < valor) {
    let resultado = valor1 + valor2;

    if (resultado == valor) {
      return true;
    }

    valor1 = valor2;
    valor2 = resultado;
  }
  return false;
}

const numeroEscolhido = 21;

const resultado = seeFibonacci(numeroEscolhido);

if (resultado)
  console.log(`O valor ${numeroEscolhido} informado PERTENCE a sequência de Fibonacci.`);
else
  console.log(`O valor ${numeroEscolhido} informado NÃO PERTENCE a sequência de Fibonacci.`);
