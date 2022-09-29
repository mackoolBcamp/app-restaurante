import CardImg from "./components/CardImg";
import Formulario from "./components/Formulario";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="h1-header">Restaurante</h1>
      <CardImg />
      <Formulario />
    </>
  );
}

export default App;
