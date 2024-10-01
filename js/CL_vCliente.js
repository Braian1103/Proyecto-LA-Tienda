export default class CL_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inProducto = document.getElementById("clienteForm_inProducto");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarCliente({
                cedula: this.inCedula.value,
                producto: this.inProducto.value,
                cantidad: this.inCantidad.value,
            });
        this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}