let db = [
    { description: "Milanesa con fritas", takeout: true, address: "UF 420", idSocio: 1, hora: "2022-11-07T18:21:00-03:00" },
    { description: "Ensalada mixta", takeout: true, address: "UF 69", idSocio: 2, hora: "2022-11-07T20:00:00-03:00" },
    { description: "Pizza de Muzarella", takeout: true, address: "UF 42", idSocio: 3, hora: "2022-11-07T18:21:49-03:00" },
];

module.exports = {
    getAllBySocio: (idSocio) => {
        return db.filter((item, index) => {
            return idSocio === item.idSocio.toString()
        });
    },

    getById: (id) => {
        let editItem;
        db.forEach((item, index) => {
            if(item.id == id){
                editItem = item;
            }
        })
        return editItem;
    },

    deleteById: (id) => {
        let itemIndex;
        let deletedItem;
        db.forEach((item, index) => {
            if(item.id == id){
                itemIndex = index;
                deletedItem = item;
            }
        })
        db.splice(itemIndex, 1);
        return deletedItem;
    },

    add: (entity) => {
        db.push(entity);
        return entity;
    },

    modify: (id, entity) => {
        db.forEach((item, index) => {
            if(item.id == id){
                db[index] = entity;
            }
        })
    }
}