class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if (this.products.some((product) => product.code === code)) {
            console.log("El codigo ya esta en uso");
            return;
        }

        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
    };

    getProducts = () => {
        return this.products;
    };

    getProductById = (id) => {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            console.log("No encontrado");
        }
        return product;
    };
}

const productManager = new ProductManager(); // se crea instancia
console.log(productManager.getProducts()); // se verifica que recien creada devuelva un array vacio
// se agrega un producto
productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);
console.log(productManager.getProducts()); // se muestra el producto agregado
// se agrega el mismo producto arrojando un error por estar repetido el code
productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);
productManager.getProductById(5); // se verifica al buscar por un id inexistente que arroje error
console.log(productManager.getProductById(1)); // se muestra un producto existente encontrado por el id
