export const products = [
    { id: 1, name: "Cuchillo para Pan", categ: 3, imgUrl: "/img/CuchilloPan.jfif", brand: "Tramontina", detail: "Cuchillo para Pan, del campo a tu casa, como el pan", price: 590, stock: 20 },
    { id: 2, name: "Cuchillo para Carne", categ: 4, imgUrl: "/img/CuchilloCarne.jfif", brand: "Tramontina", detail: "Cuchillo para Carne, afilado por los dioses del olimpo y puesto en tu mesa por nosotros", price: 900, stock: 15 },
    { id: 3, name: "Cuchillo de Caza", categ: 1, imgUrl: "/img/CuchilloCaza.jfif", brand: "Monte", detail: "Cuchillo Cazador 4. Caza, Monte, Asado, Outdoor", price: 3400, stock: 16 },
    { id: 4, name: "Cuchillos de Mesa", categ: 2, imgUrl: "/img/CuchilloMesa.jfif", brand: "Tramontina", detail: "4 Cuchillos serrucho marca tramontina", price: 300, stock: 7 },
    { id: 5, name: "Cubiertos Varios", categ: 2, imgUrl: "/img/CubiertosVarios.jfif", brand: "Tramontina", detail: "4 Juegos de cubiertos(Cuchillo, Tenedor, Cuchara)", price: 1600, stock: 53 },
    { id: 6, name: "Cuchillo para pezca", categ: 1, imgUrl: "/img/CuchiloParaPezca.jpg", brand: "Tramontina", detail: "Cuchillo de caza especial para pezca", price: 3100, stock: 5 },

]


export const carrito = JSON.parse(localStorage.getItem("Carrito")) || []


export class Compra {

    constructor(name, categ, imgUrl, brand, detail, price, cantidad) {
        this.id = carrito.length + 1;
        this.name = name
        this.categ = categ
        this.imgUrl = imgUrl
        this.brand = brand
        this.detail = detail
        this.price = price
        this.cantidad = cantidad
    }
}

// Cuchillo para Carne, afilado por los dioses del olimpo y puesto en tu mesa por nosotros