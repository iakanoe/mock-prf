test("adds Cancha entity correctly to db and retrieves it correctly", async () => {
    const repository = await require("../canchas.repository");

    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    let entity = {
        idSocio: 1,
        fromTime: today,
        toTime: tomorrow,
        llevaEquipo: true,
        canchaDeFutbol: true,
        canchaDeTenis: false,
        canchaDePadel: false
    };

    let { id } = await repository.add(entity);

    let a = (await repository.getById(id))[0];
    expect(a).toMatchObject(entity);
});

test("deletes Cancha entity from db", async () => {
    const repository = await require("../canchas.repository");

    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    let entity = {
        idSocio: 2,
        fromTime: today,
        toTime: tomorrow,
        llevaEquipo: true,
        canchaDeFutbol: true,
        canchaDeTenis: false,
        canchaDePadel: false
    };

    await repository.add(entity);

    let all = await repository.getAllBySocio(entity.idSocio);

    for (let el of all) await repository.deleteById(el.id)

    let a = await repository.getAllBySocio(entity.idSocio)

    expect(a).toHaveLength(0);
});

test("modifies Cancha entity in db", async () => {
    const repository = await require("../canchas.repository");

    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    let entity = {
        idSocio: 3,
        fromTime: today,
        toTime: tomorrow,
        llevaEquipo: true,
        canchaDeFutbol: true,
        canchaDeTenis: false,
        canchaDePadel: false
    };

    const { id } = await repository.add(entity);

    entity.canchaDeFutbol = false;
    entity.canchaDePadel = true;

    await repository.modify(id, entity);

    let g = (await repository.getById(id))[0];

    expect(g).toMatchObject(entity);
});