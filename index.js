const registros = [
  {
    id: 1,
    nombre: "Martillo",
    date: new Date("2015-05-02"),
  },

  {
    id: 2,
    nombre: "Patineta",
    date: new Date("2011-05-02"),
  },
  {
    id: 3,
    nombre: "Monitor",
    date: new Date("2008-05-02"),
  },
  {
    id: 4,
    nombre: "Carro volador con propursor a chorro",
    date: new Date("2035-05-02"),
  },
];

var regOrdenados = registros.sort(function (a, b) { return a.date - b.date });
console.log(regOrdenados)

var cuerpoTabla = document.getElementById("tablaOrdenada")

for (let i = 0; i <= registros.length; i++) {
  var fila = document.createElement("tr")
  var columna1 = document.createElement("td")
  var columna2 = document.createElement("td")
  var columna3 = document.createElement("td")
  columna1.innerHTML = regOrdenados[i].id
  columna2.innerHTML = regOrdenados[i].nombre
  columna3.innerHTML = regOrdenados[i].date

  fila.appendChild(columna1)
  fila.appendChild(columna2)
  fila.appendChild(columna3)

  cuerpoTabla.appendChild(fila)
}
