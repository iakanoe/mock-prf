const express = require("express");
const router = express.Router();

const menu = [{
        id: 1,
        name: "Pizza Margarita",
        category: "PLATO_PRINCIPAL",
        image: "https://carta.menu/storage/media/dishes_main/2220550/conversions/dish_thumbnail.jpg"
    },
    {
        id: 2,
        name: "Fetuccini Carbonara",
        category: "PLATO_PRINCIPAL",
        image: "https://carta.menu/storage/media/dishes_main/74342/conversions/dish_thumbnail.jpg"
    },
    {
        id: 3,
        name: "Hamburguesa de la Casa",
        category: "PLATO_PRINCIPAL",
        image: "https://carta.menu/storage/media/dishes_main/2220557/conversions/dish_thumbnail.jpg"
    },
    {
        id: 4,
        name: "Roll California",
        category: "PLATO_PRINCIPAL",
        image: "https://carta.menu/storage/media/dishes_main/74494/conversions/dish_thumbnail.jpg"
    },
    {
        id: 5,
        name: "Ensalada Caesar",
        category: "GUARNICION",
        image: "https://carta.menu/storage/media/dishes_main/2220561/conversions/dish_thumbnail.jpg"
    },
    {
        id: 6,
        name: "Papas Fritas",
        category: "GUARNICION",
        image: "https://www.cocinacaserayfacil.net/wp-content/uploads/2019/01/Patatas-fritas-caseras-perfectas-y-crujientes.jpg"
    },
    {
        id: 7,
        name: "Puré de Papa",
        category: "GUARNICION",
        image: "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/c02ffcb6-feee-4d8d-bd73-10dc97cd8ce5.jpg"
    },
    {
        id: 8,
        name: "Ensalada Mixta",
        category: "GUARNICION",
        image: "https://airescriollos.com.ar/wp-content/uploads/2020/11/Guarnicion-ensalada-mixta.jpg"
    },
    {
        id: 9,
        name: "Flan con Dulce de Leche y Crema",
        category: "POSTRE",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/13/a7/1e/50/flan-con-crema-y-dulce.jpg"
    },
    {
        id: 10,
        name: "Ensalada de Frutas",
        category: "POSTRE",
        image: "https://i.ytimg.com/vi/RqT-UKZl6gQ/maxresdefault.jpg"
    },
    {
        id: 11,
        name: "Copa de la Casa",
        category: "POSTRE",
        image: "https://content-cocina.lecturas.com/medio/2018/11/23/copa_de_helado_con_flan_32e73edb_600x600.jpg"
    },
    {
        id: 12,
        name: "Queso y Dulce",
        category: "POSTRE",
        image: "https://airescriollos.com.ar/wp-content/uploads/2020/11/queso-y-dulce.jpg"
    },
    {
        id: 13,
        name: "Coca-Cola 1,5L",
        category: "BEBIDA",
        image: "https://www.rimoldimayorista.com.ar/datos/uploads/mod_catalogo/31308/coca-1-5-605e30445448a.jpg"
    },
    {
        id: 14,
        name: "Sprite 1,5L",
        category: "BEBIDA",
        image: "https://carrefourar.vtexassets.com/arquivos/ids/232328/7790895000447_02.jpg?v=637763940887870000"
    },
    {
        id: 15,
        name: "Agua Mineral 1,5L",
        category: "BEBIDA",
        image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/157/846/products/556225-800-auto11-6873ce0acf40df215b16354448519602-640-0.jpg"
    },
    {
        id: 16,
        name: "Sifón de Soda 1L",
        category: "BEBIDA",
        image: "http://www.labuenaesperanza.com.ar/wp-content/uploads/2015/07/sifon-retornable.jpg"
    },
];

router.get("/", (req, res) => {
    res.status(200).json(menu);
});

module.exports = router;