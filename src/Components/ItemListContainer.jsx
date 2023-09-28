import { useEffect, useState } from "react";
import { PedidoDeDatos } from "../helpers/PedidoDeDatos";
import ItemList from "./ItemList";
 
 const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);

    useEffect(() => {
        PedidoDeDatos()
          .then((res) => {
            setProductos(res);

          })
    }, [])


    return (
      <div>
        <ItemList productos={productos} />
      </div>
    );
  };
  
  export default ItemListContainer;