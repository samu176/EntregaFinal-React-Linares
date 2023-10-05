import data from "../data/data.json";

export const PedidoDeDatos = () => {

    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "no se encuentra el producto que buscas"
            })
        }
    })
}