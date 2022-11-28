let db = [];

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