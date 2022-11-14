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
    it("pass reset andando", async() => {
      const response = await axios.post(`${url}/PasswordReset`, {
          "documento_tipo_cod": "DNI",
          "documento_nro": "39171745",
          "email": "diez.manuel98@gmail.com"
        }
        )
      expect(response.status).toEqual(200)
  });
  it("pass reset fail", async() => {
    const response = await axios.post(`${url}/PasswordReset`, {
        "documento_tipo_cod": "DNI",
        "documento_nro": "12345678",
        "email": "diez.manuel98@gmail.com"
      }
      )
    expect(response.status).toEqual(-101)
});
it("pass reset token andando", async() => {
  const response = await axios.post(`${url}/PasswordResetByToken`, {
    headers: {
      'sToken' : token_id
    } 
  }
    )
  expect(response.status).toEqual(200)
});
it("pass change ", async() => {
  const response = await axios.post(`${url}/PasswordChange`, {
      "clave_app_actual": "asd",
      "clave_app_nueva": "asds",
      "token_id": token_id
    }
    )
  expect(response.status).toEqual(200)
});
it("pass change fail", async() => {
  const response = await axios.post(`${url}/PasswordChange`, {
      "clave_app_actual": "asds",
      "clave_app_nueva": "asdss",
      "token_id": token_id
    }
    )
  expect(response.status).toEqual(-101)
});
it("cerrar sesion", async() => {
  const response = await axios.post(`${url}/CerrarSesion`, {
    //JSON.stringify("value")
    }
    )
  expect(response.status).toEqual(200)
});



})


