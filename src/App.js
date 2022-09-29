import Componente from "./components/Componente";
import MenuComida from "./components/MenuComida";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Hola Mundo</h1>
      <p>Hola como estan</p>
      <Componente />
      <MenuComida />
    </>
  );
}

export default App;
