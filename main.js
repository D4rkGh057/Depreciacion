const fechCompra = document.getElementById("selectorFechaCompra");
const fechCalculo = document.getElementById("selectorFechaCalculo");
const precioCompra = document.getElementById("precioCompra");

function diffDate() {
  const date1 = new Date(fechCalculo.value);
  const date2 = new Date(fechCompra.value);
  var dias = (date1 - date2) / (1000 * 60 * 60 * 24);
  return dias;
}
function calcDepreciacion() {
  var numdias = diffDate();
  var costoOr = parseInt(precioCompra.value);
  var costoRes = costoOr * 0.1;
  var depAnual = costoOr * 0.2;
  if (numdias > 1825) {
    var dep = costoRes;
  } else {
    var dep = costoOr - (depAnual * numdias) / 365;
  }
  return dep.toFixed(2);
}

function mostrarMensaje() {
  if (diffDate() < 0) {
    alert("la fecha de compra es mayor a la de depreciación");
  } else if(precioCompra.value===""){
    alert("Agregue un precio de compra")
  }else {
    const texto =
      "Valor para el " + fechCalculo.value + " es: " + calcDepreciacion();
    const textoCreado = document.getElementById("valorDepreciacion");
    textoCreado.innerHTML = texto;
  }
}

