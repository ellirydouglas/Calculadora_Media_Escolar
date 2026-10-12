
const formulario = document.getElementById("form-notas");
const resultado = document.getElementById("resultado");

function calcularMedia(evento) {
    evento.preventDefault();

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        resultado.textContent = "Digite notas entre 0 e 10!";
        return;
    }

    const media = (nota1 + nota2) / 2;

    if (media >= 7) {
        resultado.textContent = "Média: " + media.toFixed(1) + " - Aprovado!";
    } else {
        resultado.textContent = "Média: " + media.toFixed(1) + " - Reprovado!";
    }
}

formulario.addEventListener("submit", calcularMedia);