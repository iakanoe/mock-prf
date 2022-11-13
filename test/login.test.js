const axios = require('axios');

const url = `http://190.106.131.51:9658/api/Login`;
const token_id = ``;

describe("general", () => {
    it("Login andando", async() => {
        const response = await axios.post(`${url}/authenticate`, {
            "documento_tipo_cod": "DNI",
            "documento_nro": "39171745",
            "clave_app": "asd",
            "email": "diez.manuel98@gmail.com"
          }
          )
        expect(response.status).toEqual(200)
    });
    it("Login fail", async() => {
        const response = await axios.post(`${url}/authenticate`,{
            "documento_tipo_cod": "DNI",
            "documento_nro": "39171745",
            "clave_app": "wrong password",
            "email": "diez.manuel98@gmail.com"
          }
          )
        expect(response.status).toEqual(200)
        expect(response.data.resultado).toEqual('NO')
    });
})


