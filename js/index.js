import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import dt_prestamos from "./data.js";

const ofici = new Cl_oficina();


  
  
  dt_prestamos.forEach((pres) => 
ofici.agregarPrestamo(
    new Cl_prestamo(pres.cliente,pres.codigo,pres.prestamo,pres.meses)
)    
);


let salidaTmp = `<br><br>Datos de los Clientes:
<br>
<table>
  <tr>
    <th>Cliente</th>
    <th>Codigo</th>
    <th>Prestamo</th>
    <th>Meses</th>
  </tr>`;
dt_prestamos.forEach((pres) => {
  salidaTmp += `
  <tr>
    <td>${pres.cliente}</td>
    <td>${pres.codigo}</td>
    <td>${pres.prestamo}</td>
    <td>${pres.meses}</td>
  </tr>`
  ;
});
salidaTmp += "</table>"


salida.innerHTML += salidaTmp;
salida.innerHTML +=`
<br>El Monto Final Disponible fue:${ofici.MontoFinal()}
<br>El Cliente que pidio el prestamo por 2 meses fue: ${ofici.DosMeses()}
<br>El Cliente que pidio el prestamo minimo fue: ${ofici.PrestMin()} 
`
