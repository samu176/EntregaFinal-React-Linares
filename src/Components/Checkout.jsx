import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);


    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido ={
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title"> Felicades se ha hecho tu compra exitosamente</h1>
                <p>tu numero de pedido es: {pedidoId}</p>

            </div>
        )
    }


    return (

        <div className="container">
        <h1 className="main-title">finalizar orden</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />

            <button className="enviar" type="submit">crear orden</button>

        </form>
    </div>

    )
}
export default Checkout