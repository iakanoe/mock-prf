let db = [
    { message: "Pedido completado!", timestamp: "2022-11-07T18:21:00-03:00" },
    { message: "Pedido registrado.", timestamp: "2022-11-07T20:00:00-03:00" },
    { message: "Tus invitados están en la entrada del country.", timestamp: "2022-11-07T18:21:49-03:00" },
];

module.exports = {
    getAll: () => {
        return db.map((item, index) => {
            item.id = index + 1;
            return item;
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
    }
}