// estan sin testear, no tenia el token para probar. 

const axios = require('axios');

const url = `http://190.106.131.51:9658/api/Invitacion`;

const token_id = ''

const config = {
    headers: {
        'sToken' : token_id
    }
}
describe("Invitacion", () => {
    it("get invitacion lista", async() => {
        const response = await axios.get(`${url}/GetInvitacionLista`,
        config)
        expect(response.data).toContain('');
        expect(response.status).toEqual(200)
    });
    it("get maximo mensual", async() => {
        const response = await axios.get(`${url}/GetMaximoMensual`,
        config)
        expect(response.data).toEqual(1);
        expect(response.status).toEqual(200)
    });
    it("get maximo anual", async() => {
        const response = await axios.get(`${url}/GetMaximoAnual`,
        config)
        expect(response.data).toEqual(8);
        expect(response.status).toEqual(200)
    });
    it("crear invitacion", async() => { 
        const response = await axios.post(`${url}/CrearInvitacion`,
            {
                "invitacion_nro": "123",
                "fecha_efectiva": "2022-11-14T00:14:00.026Z",
                "fecha_efectiva_hasta": "2022-11-14T00:14:00.026Z",
                "fecha_pedido": "2022-11-14T00:14:00.026Z",
                "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                "invitacion_autorizada": "string",
                "invitados": [
                  {
                    "invitacion_id": 0,
                    "invitado_id": 0,
                    "invitado_nombre": "string",
                    "invitado_apellido": "string",
                    "documento_tipo_cod": "string",
                    "documento_nro": "string",
                    "tipo_vinculo_id": 0,
                    "tipo_invitado_cod": "string",
                    "email": "string",
                    "tel_celular": "string",
                    "patente": "string",
                    "flag_ingreso_en_aus": "string",
                    "flag_retira_llave": "string",
                    "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                    "invitacion_autorizada": "string"
                  }
                ]
              },
              config
          )
        expect(response.status).toEqual(200)
        //expect(response.data).toEqual('')
    });
    it("actualizar invitacion", async() => { 
        const response = await axios.put(`${url}/ActualizarInvitacion`,
            {
                "invitacion_nro": "123",
                "fecha_efectiva": "2022-11-14T00:14:00.026Z",
                "fecha_efectiva_hasta": "2022-11-14T00:14:00.026Z",
                "fecha_pedido": "2022-11-14T00:14:00.026Z",
                "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                "invitacion_autorizada": "string",
                "invitados": [
                  {
                    "invitacion_id": 0,
                    "invitado_id": 0,
                    "invitado_nombre": "string",
                    "invitado_apellido": "string",
                    "documento_tipo_cod": "string",
                    "documento_nro": "string",
                    "tipo_vinculo_id": 0,
                    "tipo_invitado_cod": "string",
                    "email": "string",
                    "tel_celular": "string",
                    "patente": "string",
                    "flag_ingreso_en_aus": "string",
                    "flag_retira_llave": "string",
                    "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                    "invitacion_autorizada": "string"
                  }
                ]
              },
              config
          )
        expect(response.status).toEqual(200)
        expect(response.data.resultado).toEqual('NO')
    });
    it("actualizar una invitacion by id", async() => { 
        const response = await axios.put(`${url}/ActualizarUnaInvitacionById`,
            {
                "invitacion_nro": "123",
                "fecha_efectiva": "2022-11-14T00:14:00.026Z",
                "fecha_efectiva_hasta": "2022-11-14T00:14:00.026Z",
                "fecha_pedido": "2022-11-14T00:14:00.026Z",
                "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                "invitacion_autorizada": "string",
                "invitados": [
                  {
                    "invitacion_id": 0,
                    "invitado_id": 0,
                    "invitado_nombre": "string",
                    "invitado_apellido": "string",
                    "documento_tipo_cod": "string",
                    "documento_nro": "string",
                    "tipo_vinculo_id": 0,
                    "tipo_invitado_cod": "string",
                    "email": "string",
                    "tel_celular": "string",
                    "patente": "string",
                    "flag_ingreso_en_aus": "string",
                    "flag_retira_llave": "string",
                    "fecha_autorizacion": "2022-11-14T00:14:00.026Z",
                    "invitacion_autorizada": "string"
                  }
                ]
              },
              config
          )
        expect(response.status).toEqual(200)
        expect(response.data.resultado).toEqual('NO')
    });
    it("eliminar invitado de invitacion", async() => { 
        const response = await axios.delete(`${url}/EliminarInvitadoInvitacion`, { 
            //"id" : "1",
            headers: {
                'sToken' : token_id
            },
            params: {
                sId : 1
            }
        }
          )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("eliminar invitacion by id", async() => { 
        const response = await axios.delete(`${url}/EliminarInvitacionById`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("eliminar invitacion by nro", async() => { 
        const response = await axios.delete(`${url}/EliminarInvitacionByNro`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("autorizar invitacion by nro", async() => { 
        const response = await axios.put(`${url}/AutorizarInvitacionByNro`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("autorizar invitacion by id", async() => { 
        const response = await axios.put(`${url}/AutorizarInvitacionById`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("autorizar invitacion by nro", async() => { 
        const response = await axios.put(`${url}/DesautorizarInvitacionByNro`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });
    it("autorizar invitacion by nro", async() => { 
        const response = await axios.put(`${url}/DesautorizarInvitacionById`,
        config
        )
        expect(response.status).toEqual(200)
        expect(response.data).toEqual('Eliminado')
    });

    it("get tipos vinculo", async() => {
        const response = await axios.get(`${url}/GetTiposVinculo`, {
        params: {
            sId : 1
        }
    })
        expect(response.data.length).toEqual(7);
        expect(response.status).toEqual(200)
    });
})


