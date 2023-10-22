import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">TIENDAPOTTER</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">inicio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/productos/libros">libros</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/productos/peliculas">peliculas</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/nosotros">Nosotros</Link>
      </li>
      <li> <CartWidget /> </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;