export default class CL_vNegocio {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblArticuloMasVendido = document.getElementById("mainForm_lblArticuloMasVendido");
        this.lblVentaTotal = document.getElementById("mainForm_lblVentaTotal");
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        producto,
        cantidad,
        montoPagar,
        articuloMasVendido,
        ventaTotal
    }) {
        this.tabla.innerHTML += `
        <tr>
          <td>${cedula}</td>
          <td>${producto}</td>
          <td>${cantidad}</td>
          <td>${montoPagar}</td>
        </tr>`;
        this.lblArticuloMasVendido.innerHTML = articuloMasVendido;
        this.lblVentaTotal.innerHTML = ventaTotal;
    }
}