import Foto from "./components/foto";
import img from "./components/banner.png";
import Menu from "./components/menu";
import Logoo from "./components/logo";
import Logo from "./components/logo.png";
import Home from "./components/home";
import Rodape from "./components/rodape";


function App(props) {
 return (
    <>
    <Menu></Menu>
    <Logoo logo={Logo}></Logoo>
    <Home></Home>
    <Foto foto={img} />
    <Rodape></Rodape>
    
    </>
  );
}

export default App;