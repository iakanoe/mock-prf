let db = [
    { idSocio: 1, hora: "2022-11-07T18:21:00-03:00", idCancha: 3, llevaEquipo: true },
    { idSocio: 2, hora: "2022-11-07T18:21:00-03:00", idCancha: 4, llevaEquipo: true },
    { idSocio: 3, hora: "2022-11-07T18:21:00-03:00", idCancha: 1, llevaEquipo: false },
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