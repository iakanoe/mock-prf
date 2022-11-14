test("adds Pedido entity correctly to db and retrieves it correctly", async () => {
    const repository = await require("../pedidos.repository");

    let entity = {
        idSocio: 1,
        description: "Hola!",
        hora: new Date(),
        address: "calle falsa 123",
        nota: "marge simpson"
    };

    let { id } = await repository.add(entity);

    let a = (await repository.getById(id))[0];
    expect(a).toMatchObject(entity);
});

test("deletes Pedido entity from db", async () => {
    const repository = await require("../pedidos.repository");

    let entity = {
        idSocio: 2,
        description: "chau!",
        hora: new Date(),
        address: "calle verdadera 123",
        nota: "homero simpson"
    };

    await repository.add(entity);

    let all = await repository.getAllBySocio(entity.idSocio);

    for (let el of all) await repository.deleteById(el.id)

    let a = await repository.getAllBySocio(entity.idSocio)

    expect(a).toHaveLength(0);
});

test("modifies Pedido entity in db", async () => {
    const repository = await require("../pedidos.repository");

    let entity = {
        idSocio: 3,
        description: "hola",
        hora: new Date(),
        address: "calle verdadera 123",
        nota: "homero simpson"
    };

    const { id } = await repository.add(entity);

    entity.description = "Chau";

    await repository.modify(id, entity);

    let g = (await repository.getById(id))[0];

    expect(g.description).toBe("Chau");
});