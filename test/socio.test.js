// la mayoria estan sin testear, no tenia el token para probar.
const axios = require('axios');

const url = `http://190.106.131.51:9658/api/Socio`;

const token_id = ''

const config = {
    headers: {
        'sToken' : token_id
    }
}

describe("Socio", () => {
    it("Tget grupo famiiar", async() => {
        const response = await axios.get(`${url}/GetGrupoFamiliar`, 
        config
        )
        expect(response.data.length).toEqual(5);
        expect(response.status).toEqual(200)
    });
    it("get socio", async() => {
        const response = await axios.get(`${url}/GetSocio`, 
        config
        )
        expect(response.data.length).toEqual(5);
        expect(response.status).toEqual(200)
    });
    it("get sociobyId", async() => {
        const response = await axios.get(`${url}/GetSocioById`, {
            headers: {
                'sToken' : token_id
            },
            params: {
                sId : 1
            }
        })
        expect(response.data.socio_id).toEqual(1);
        expect(response.status).toEqual(200)
    });
    it("get sociobyId fail", async() => {
        const response = await axios.get(`${url}/GetSocioById`, {
            headers: {
                'sToken' : token_id
            },
            params: {
                sId : 2
            }
        })
        expect(response.data.socio_id).toEqual(1);
        expect(response.status).toEqual(200)
    });
    it("get saldo", async() => {
        const response = await axios.get(`${url}/GetSaldo`, 
        config
        )
        expect(response.data).toEqual(0);
        expect(response.status).toEqual(200)
    });
    it("actualizar config", async() => {
        const response = await axios.put(`${url}/ActualizarConfiguracion`,
        {
            "flag_invita_sin_aut": "false",
            "flag_invita_con_aut": "false",
            "flag_puede_autorizar": "false",
            "socio_id": 0 
        },
        config
        )
        expect(response.status).toEqual(200)
    });
    
})


