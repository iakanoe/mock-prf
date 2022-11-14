test("adds Notificacion entity correctly to db and retrieves it correctly", async () => {
    const repository = await require("../notificaciones.repository");

    let entity = {
        idSocio: 1,
        message: "Hola!"
    };

    let { id } = await repository.add(entity);

    let a = (await repository.getById(id))[0];
    expect(a).toMatchObject(entity);
});

test("deletes Notificacion entity from db", async () => {
    const repository = await require("../notificaciones.repository");

    let entity = {
        idSocio: 2,
        message: "Chau!"
    };

    await repository.add(entity);

    let all = await repository.getAllBySocio(entity.idSocio);

    for (let el of all) await repository.deleteById(el.id)

    let a = await repository.getAllBySocio(entity.idSocio)

    expect(a).toHaveLength(0);
});

test("modifies Notificacion entity in db", async () => {
    const repository = await require("../notificaciones.repository");

    let entity = {
        idSocio: 3,
        message: "Hola!"
    };

    const { id } = await repository.add(entity);

    entity.message = "Chau";

    await repository.modify(id, entity);

    let g = (await repository.getById(id))[0];

    expect(g.message).toBe("Chau");
});

test("deletes Notificacion entity by socio in db", async () => {
    const repository = await require("../notificaciones.repository");

    let entity = {
        idSocio: 4,
        message: "Hola!"
    };

    const { id } = await repository.add(entity);

    await repository.deleteAllBySocio(entity.idSocio);

    let g = await repository.getAllBySocio(entity.idSocio);

    expect(g).toHaveLength(0);
});