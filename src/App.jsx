
import { Outlet, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state, dispatch } = useContextGlobal();
  return (
    <div className="App" style={{background: state.theme.background, color: state.theme.font}}>
          <Navbar/>
          <Outlet/>
          <Footer/>       
      </div>
  );
}

export default App;
