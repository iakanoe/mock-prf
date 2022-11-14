let db = [
    { description: "Milanesa con fritas", takeout: true, address: "UF 420", idSocio: 1, hora: "2022-11-07T18:21:00-03:00" },
    { description: "Ensalada mixta", takeout: true, address: "UF 69", idSocio: 2, hora: "2022-11-07T20:00:00-03:00" },
    { description: "Pizza de Muzarella", takeout: true, address: "UF 42", idSocio: 3, hora: "2022-11-07T18:21:49-03:00" },
];

module.exports = {
    getAllBySocio: (idSocio) => {
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