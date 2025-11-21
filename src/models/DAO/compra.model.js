import FS from 'fs';

const compras = [];

class Compra {
    constructor({ id, evento, cantidad, comprador, fecha }) {
        this.id = id;
        this.evento = evento;
        this.cantidad = cantidad;
        this.comprador = comprador;
        this.fecha = fecha;
        this.email = this.email;
    }

    static async postCompra(newCompra) {
        if (newCompra != null) {
            compras.push(newCompra);
        } else {
            return "Error: La compra es nula";
        }
        return compras;
    }

    static async putCompra(id, updatedCompra) {
        const index = compras.findIndex(compra => compra.id == id);
        if (index !== -1) {
            compras[index] = { id, ...updatedCompra };
        } else {
            return `Error: No se encontró la compra con id ${id}`;
        }
        return compras[index];
    }

    static async patchCompra(id, updatedCompra) {
        const index = compras.findIndex(compra => compra.id == id);
        if (index !== -1) {
            compras[index] = { ...compras[index], ...updatedCompra };
        } else {
            return `Error: No se encontró la compra con id ${id}`;
        }
        return compras[index];
    }

    static async deleteCompra(id) {
        const index = compras.findIndex(compra => compra.id == id);
        if (index !== -1) {
            compras.splice(index, 1);
        } else {
            return `Error: No se encontró la compra con id ${id}`;
        }
        return compras;
    }

    static async getCompras() {
        return compras;
    }
}

export default {
    postCompra: Compra.postCompra,
    putCompra: Compra.putCompra,
    patchCompra: Compra.patchCompra,
    deleteCompra: Compra.deleteCompra,
    getCompras: Compra.getCompras
}
