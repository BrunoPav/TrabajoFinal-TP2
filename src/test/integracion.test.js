import { expect } from 'chai';
import supertest from 'supertest';
import { it } from 'test';

const url = supertest('http://localhost:8080');


describe(Pruebasdeintegración, () => {

    it("GET /compras ->", async () => { 
        const respuesta = await url.get('/api/compras');
        expect(respuesta.status).to.equal(200);
    });
},

    it("POST /compras ->", async () => { 

        const respuesta = await url.post('/api/compras').send(nuevaCompra);
        expect(respuesta.status).to.equal(200);
        expect(respuesta.body).to.have.property('status').that.equals('success');
        expect(respuesta.body).to.have.property('data');
        expect(respuesta.body.data).to.include(nuevaCompra);        

    }),

   
    
    it ("POST /compras ->", async () => {
        const respuesta = await url.post('/api/compras').send(nuevaCompra);
        expect(respuesta.status).to.equal(200);
        expect(respuesta.body).to.have.property('status').that.equals('success');
        expect(respuesta.body).to.have.property('data');
        expect(respuesta.body.data).to.include(nuevaCompra);
    }),

    it ("PUT /compras/:id ->", async () => {
        const compraActualizada = {
            usuarioId: "usuario123",
            eventoId: "evento456",
            cantidad: 3,
            total: 150.00,
            fecha: new Date().toISOString()
        }
    }),

    it (delete "/compras/:id ->", async () => {
        const compraId = "64b7f8f2c9e77a6f4d3e8b9a";            
        const respuesta = await url.delete(`/api/compras/${compraId}`);
        expect(respuesta.status).to.equal(200);
        expect(respuesta.body).to.have.property('status').that.equals('success');           
    })
);
