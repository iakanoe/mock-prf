const { DataTypes } = require("sequelize");

const db = require("../data/db");

const Model = db.define("Pedido", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idSocio: DataTypes.INTEGER,
    description: DataTypes.STRING,
    hora: DataTypes.DATE,
    address: DataTypes.STRING,
    nota: DataTypes.STRING
});

module.exports = Model.sync().then(() => ({
    getAllBySocio: async (idSocio) => {
        return await Model.findAll({ where: { idSocio } });
    },

    getById: async (id) => {
        return await Model.findAll({ where: { id } });
    },

    deleteById: async (id) => {
        await Model.destroy({ where: { id } });
    },

    add: async (entity) => {
        return await Model.create(entity);
    },

    modify: async (id, entity) => {
        return await Model.update(entity, { where: { id } });
    },
}));