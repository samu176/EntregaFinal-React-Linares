

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <a className="ver-detalles" href={` /item/${producto.id}`}> Ver detalles del libro</a>
        </div>
    </div>

  );
};

export default Item;