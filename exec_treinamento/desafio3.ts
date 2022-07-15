export {}
let btnAtualizar = document.getElementById('atualizar-saldo');
let btnLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let saldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (saldo) {
        saldoTotal += soma
        saldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (saldo) {
        saldoTotal = 0;
        saldo.innerHTML = saldoTotal.toString();
    }
}

if (btnAtualizar) {
    btnAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
btnLimpar.addEventListener('click', () => { 
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */