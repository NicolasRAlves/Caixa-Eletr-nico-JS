let saldo = 0; 

function sacar() {
    let valor = parseFloat(document.getElementById("valor").value);
    if (!isNaN(valor) && valor > 0 && valor <= saldo) {
        saldo -= valor;
        atualizarSaldo();
    } else {
        alert("Valor inválido ou saldo insuficiente para saque!");
    }
}

function depositar() {
    let valor = parseFloat(document.getElementById("valor-d").value);
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        atualizarSaldo();
    } else {
        alert("Valor inválido para depósito!");
    }
}

function atualizarSaldo() {
    document.getElementById("saldo").textContent = saldo;
}