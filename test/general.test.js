const axios = require('axios');

const url = `http://190.106.131.51:9658/api/General`;
const token_id = ``;

describe("general", () => {
    it("Test 1", async() => {
        const response = await axios.get(`${url}/GetPreguntasFrecuentes`)
        expect(response.data.length).toEqual(5);
        expect(response.status).toEqual(200)
    });
    it("Test 1", async() => {
        const response = await axios.post(`${url}/PedidoDeSoporte`,{
            "token_id": "AF902771-6C48-4FC4-AD00-E3ACC501C366",
            "motivo_codigo": "002",
            "comentarios": "Test comentario"
          })
        expect(response.status).toEqual(200)
    });
})


