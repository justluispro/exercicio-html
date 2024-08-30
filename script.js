function calcular(){
let p, n, i, v
p = document.getElementById('vp').value
n = document.getElementById('qp').value
i = document.getElementById('tj').value
v = document.getElementById('ve').value


i = i/100
p = v * ((Math.pow(1 + i, n) * i) /
            (Math.pow(1 + i, n) - 1))

document.getElementById('vp').innerHTML = p.toFixed(2);
}
function limpar(){
    document.getElementById('vp').innerHTML = "";
    document.getElementById('qp').value = "";
    document.getElementById('tj').value = "";
    document.getElementById('ve').value = "";
}