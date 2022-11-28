let db = [
    { id: 1, message: "Pedido completado!", idSocio: 33257 },
    { id: 2, message: "Pedido registrado.", idSocio: 33257 },
    { id: 3, message: "Tus invitados están en la entrada del country.", idSocio: 33257 },
];

module.exports = {
    getAllBySocio: (idSocio) => {
        console.log(db, 'DN')
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
    },

    deleteAll: (idSocio) => {
        console.log(db, idSocio)
        db = db.filter(item => {
            return item.idSocio.toString() !== idSocio;
        })
    }
}