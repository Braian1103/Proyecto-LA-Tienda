export default class CL_mNegocio {
    constructor() {
        this.acVenta = 0;
        this.ventaMayor = 0;
        this.articuloMayor = "";
        this.arti = 0;
    }

    procesarCliente(cliente) {
        this.acVenta += cliente.montoPagar();
        this.arti += cliente.producto;
        this.arti++
        if (this.arti > 1) {
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