export default class CL_mNegocio {
    constructor() {
        this.acVenta = 0;
        this.ventaMayor = 0;
        this.articuloMayor = "";
    }

    procesarCliente(cliente) {
        this.acVenta += cliente.montoPagar();
        if (cliente.cantidad > this.ventaMayor) {
            this.ventaMayor = cliente.cantidad;
            this.articuloMayor = cliente.producto;
        }
    }
    articuloMasVendido() {
        return this.articuloMayor;
    }
    ventaTotal() {
        return this.acVenta;
    }
}