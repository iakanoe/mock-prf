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
    it("Get tipo docs", async() => {
        const response = await axios.get(`${url}/GetTiposDocumentos`)
        expect(response.data.length).toEqual(5);
        expect(response.status).toEqual(200)
    });
    it("get tipo invitados", async() => {
        const response = await axios.get(`${url}/GetTipoInvitados`)
        expect(response.data.length).toEqual(2);
        expect(response.status).toEqual(200)
    });
    it("get motivos ayuda", async() => {
        const response = await axios.get(`${url}/GetMotivosAyuda`)
        expect(response.data.length).toEqual(5);
        expect(response.status).toEqual(200)
    });
    it("get correo informes", async() => {
        const response = await axios.get(`${url}/GetCorreoInformes`)
        expect(response.data).toEqual("SOLEDADNAKAMA@GMAIL.COM");
        expect(response.status).toEqual(200)
    });
    it("pedido soporte", async() => {
        const response = await axios.post(`${url}/PedidoDeSoporte`, {
            "token_id": "string",
            "motivo_codigo": "string",
            "comentarios": "string"
          }
          )
        expect(response.status).toEqual(200)
    });
    it("pedido soporte fail", async() => {
        const response = await axios.post(`${url}/PedidoDeSoporte`,{
            "token_id": "!string",
            "motivo_codigo": "string",
            "comentarios": "string"
          }
          )
        expect(response.status).toEqual(200)
        expect(response.data.status).toEqual(-101)
    });
    it("get boletin", async() => {
        const response = await axios.get(`${url}/GetBoletin`)
        expect(response.data).toEqual("https://www.c-sharpcorner.com/article/asp-net-core-5-0-web-api/");
        expect(response.status).toEqual(200)
    });
    it("novedades", async() => {
        const response = await axios.get(`${url}/GetNovedades`)
        expect(response.data.length).toEqual(1);
        expect(response.status).toEqual(200)
    });
    it("parentescos", async() => {
        const response = await axios.get(`${url}/GetParentescos`)
        expect(response.data.length).toEqual(10);
        expect(response.status).toEqual(200)
    });
    it("eliminar invitado de invitacion", async() => { 
        const response = await axios.delete(`${url}/Encriptar`, { 
            params: {
                sTexto : "blablabla"
            }
        }
          )
        expect(response.status).toEqual(200)
        //expect(response.data).toEqual(/*string encriptado */)
    });
    it("eliminar invitado de invitacion", async() => { 
        const response = await axios.delete(`${url}/Encriptar`, { 
            params: {
                sTexto : "UKLLrgKIeVKll41biH99Ng=="
            }
        }
          )
        expect(response.status).toEqual(200)
        //expect(response.data).toEqual(/*string desencriptado */)
    });it("eliminar invitado de invitacion", async() => { 
        const response = await axios.delete(`${url}/Encriptar`, { 
            params: {
                sTexto : "blabla"
            }
        }
          )
        expect(response.status).toEqual(-102)
    });

})


