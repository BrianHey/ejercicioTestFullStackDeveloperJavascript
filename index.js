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

var regOrdenados = registros.sort((a, b) => a.date - b.date);

for (i = 0; i < regOrdenados.length; i++) {
  $("#tablaOrdenada").append(
    `
        <tr>
            <td>${regOrdenados[i].id}</td>
            <td>${regOrdenados[i].nombre}</td>
            <td>${regOrdenados[i].date}</td>
        </tr>
   `
  );
}
