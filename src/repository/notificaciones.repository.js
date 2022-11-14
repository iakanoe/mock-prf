let db = [
    { id: 1, message: "Pedido completado!", idSocio: 33257 },
    { id: 2, message: "Pedido registrado.", idSocio: 33257 },
    { id: 3, message: "Tus invitados están en la entrada del country.", idSocio: 33257 },
];

module.exports = {
    getAllBySocio: (idSocio) => {
        return db.filter((item) => {
            return item.idSocio == idSocio.toString();
        });
    },

    getById: (id) => {
        return db[id - 1];
    },

    deleteById: (id) => {
        db.splice(id - 1);
    },

    add: (entity) => {
        db.push(entity);
        return entity;
    },

    modify: (id, entity) => {
        db[id - 1] = entity;
        return entity;
    },

    deleteAll: (idSocio) => {
        
    }
}