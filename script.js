function calcular() {
    let el_inss = document.getElementById("inss");
    let el_fgts = document.getElementById("fgts");
    let el_liquido = document.getElementById("liquido");
    let el_salario = document.getElementById("salario");

    let salario = el_salario.value;
    let inss = 0

    if (salario <= 1412.00) {
        inss += salario * 0.075;
    } else if (salario > 1412.00 && salario <= 2666.68) {
        inss += 1412 * 0.075
        inss += (salario - 1412) * 0.09
    } else if (salario > 2666.68 && salario <= 4000.03) {
        inss += 1412 * 0.075
        inss += (2666.68 - 1412) * 0.09
        inss += (salario - 2666.68) * 0.12
    } else if (salario > 4000.03 && salario <= 7786.02) {
        inss += 1412 * 0.075
        inss += (2666.68 - 1412) * 0.09
        inss += (4000.03 - 2666.68) * 0.12
        inss += (salario - 4000.03) * 0.14
    } else {
        inss += 1412 * 0.075
        inss += (2666.68 - 1412) * 0.09
        inss += (4000.03 - 2666.68) * 0.12
        inss += (7786.02 - 4000.03) * 0.14
    }

    el_inss.innerText = "R$ " + inss.toFixed(2)
    el_fgts.innerText = "R$ " + (salario * 0.08).toFixed(2)
    el_liquido.innerText = "R$ " + (salario - inss - (salario * 0.08)).toFixed(2)
}