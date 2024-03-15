import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavNetflix from "./components/NavNetflix";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import "./assets/styleNetflix.css";

import ContainerCarousel from "./components/ContainerCarousel";

function App() {
  return (
    <>
      <NavNetflix></NavNetflix>
      <ContainerCarousel></ContainerCarousel>

      {/* <DefaultNav></DefaultNav> */}
    </>
  );
}

export default App;
