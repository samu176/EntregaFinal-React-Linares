import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./Components/Nosotros";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";

function App() {

  return (
    <div>
      <CartProvider>
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/productos" element={<ItemListContainer />}/>
        <Route path="/productos/:categoria" element={<ItemListContainer />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/carrito" element={<Carrito />}/>
      </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}



export default App;
