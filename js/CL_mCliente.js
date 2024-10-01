export default class CL_mCliente {
    constructor({ cedula, producto, cantidad }) {
        this.cedula = cedula;
        this.producto = producto;
        this.cantidad = cantidad;
    }

    set cedula(c) {
        this._cedula = +c;
    }
    get cedula() {
        return this._cedula;
    }
    set producto(p) {
        this._producto = p;
    }
    get producto() {
        return this._producto;
    }
    set cantidad(ca) {
        this._cantidad = +ca;
    }
    get cantidad() {
        return this._cantidad;
    }

    precioProducto() {
        switch(this.producto) {
            case "A":
                return 10
            case "B":
                return 5
            case "C":
                return 20
        }
    }
    montoPagar() {
        return this.precioProducto() * this.cantidad;
    }
}