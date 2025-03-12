import './App.css'
import Navbar from './components/Navbar/Navbar';
import Saludo from './components/Saludo/Saludo';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings='Bienvenidos!' />
      <Saludo />
    </>
  );
};

export default App
