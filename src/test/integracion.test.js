import { expect } from 'chai';
import supertest from 'supertest';

const url = supertest('http://localhost:8080');


const nuevaCompra = {
    evento: "Concierto Test",
    cantidad: 1,
    comprador: "Test User",
    email: "test@example.com",
    precio: 100.00
};

describe("Pruebas de integración", () => {

    it("GET /compras -> Debería obtener todas las compras", async () => { 
        const respuesta = await url.get('/api/compras');
        expect(respuesta.status).to.equal(200);
    });

    it("POST /compras -> Debería crear una nueva compra exitosamente", async () => {
        const respuesta = await url.post('/api/compras').send(nuevaCompra);
        expect(respuesta.status).to.equal(200);
        expect(respuesta.body).to.have.property('status').that.equals('success');
        expect(respuesta.body).to.have.property('data');
    });

    it("POST /compras -> Debería fallar sin campos requeridos", async () => {
        const compraSinDatos = {
            evento: "Test"

        };
        
        const respuesta = await url.post('/api/compras').send(compraSinDatos);
        expect(respuesta.status).to.equal(400);
        expect(respuesta.body).to.have.property('status').that.equals('error');
    });

    it("PATCH /compras/:id -> Debería actualizar una compra", async () => {

        const respuestaCreate = await url.post('/api/compras').send(nuevaCompra);
        const compraId = respuestaCreate.body.data.dbResult.insertedId;

        
        const compraActualizada = {
            cantidad: 2,
            precio: 200.00
        };
        
        const respuesta = await url.patch(`/api/compras/${compraId}`).send(compraActualizada);
        expect(respuesta.status).to.equal(200);
        expect(respuesta.body).to.have.property('modifiedCount').that.equals(1);
    });

});
