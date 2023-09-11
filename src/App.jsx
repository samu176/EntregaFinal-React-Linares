import './App.css'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos!" />
    </div>
  );
};



export default App;
