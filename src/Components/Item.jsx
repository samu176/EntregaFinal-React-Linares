import { Link } from "react-router-dom";


const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <Link className="ver-detalles" to={`/item/${producto.id}`}> Ver detalles del libro</Link>
        </div>
    </div>

  )
}

export default Item