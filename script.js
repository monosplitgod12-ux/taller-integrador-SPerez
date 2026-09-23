const CANTIDAD_NOTAS = 3;

document.getElementById("btn-calcular").addEventListener("click", calcularPromedio);

function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const elementoPromedio = document.getElementById("resultado-promedio");
    const elementoEstado = document.getElementById("resultado-estado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        elementoPromedio.innerHTML = "Debe ingresar las tres notas.";
        elementoEstado.innerHTML = "";
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / CANTIDAD_NOTAS;
    elementoPromedio.innerHTML = "Promedio: " + promedio.toFixed(2);

    if (promedio >= 3.0) {
        elementoEstado.innerHTML = "Resultado: aprobado";
    } else {
        elementoEstado.innerHTML = "Resultado: reprobado";
    }
}