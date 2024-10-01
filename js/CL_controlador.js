/*Una tienda vende 3 productos: Producto A, Producto B y Producto C.
Al principio de la jornada se conoce el precio de cada producto.
Conociendo la cédula de cada cliente, el código del producto que lleva y la cantidad, se requiere:
a) Calcular el monto a pagar por cada cliente.
b) También debe reportarse: cuál artículo se vendió más y el monto total vendido.
DATOS DE PRUEBA
Precio Producto A: $10.00
Precio Producto B: $5.00
Precio Producto C: $20.00
Cédula  Producto    Cantidad    Monto pagar
555         C           3       $60.00
222         B           5       $25.00
333         A           10      $100.00
111         B           10      $50.00
El artículo que se vendió más fue el Producto B
Se vendió un total de $235.00   */

import CL_mCliente from "./CL_mCliente.js";
import CL_mNegocio from "./CL_mNegocio.js";
import CL_vCliente from "./CL_vCliente.js";
import CL_vNegocio from "./Cl_vNegocio.js";
export default class CL_controlador {
    constructor() {
        this.mNegocio = new CL_mNegocio()
        this.vCliente = new CL_vCliente(this)
        this.vNegocio = new CL_vNegocio(this)
    }
    mostrarVistaCliente() {
        this.vNegocio.ocultar();
        this.vCliente.mostrar();
    }
    mostrarVistaNegocio() {
        this.vCliente.ocultar();
        this.vNegocio.mostrar();
    }
    agregarCliente({ cedula, producto, cantidad }) {
        let cliente = new CL_mCliente({ cedula, producto, cantidad })
        this.mNegocio.procesarCliente(cliente);
        this.vNegocio.reportarCliente({
            cedula: cliente.cedula,
            producto: cliente.producto,
            cantidad: cliente.cantidad,
            montoPagar: cliente.montoPagar().toFixed(2),
            articuloMasVendido: this.mNegocio.articuloMasVendido(),
            ventaTotal: this.mNegocio.ventaTotal().toFixed(2),
        });
        this.mostrarVistaNegocio();
    }
}