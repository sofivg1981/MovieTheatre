import {LandingPage} from "./pages/LandingPage";
import {LandingNetflix} from "./pages/LandingNetflix";
import {LandingDrama} from "./pages/LandingDrama";
import {LandingComedia} from "./pages/LandingComedia";
import {LandingAccion} from "./pages/LandingAccion";
import {LandingRomances} from "./pages/LandingRomances";
import {LandingThrillers} from "./pages/LandingThrillers";
import {LandingFantasia} from "./pages/LandingFantasia";
import {PeliculaDetalle } from "./pages/PeliculaDetalle";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Buscador } from "./Components/Buscador";

import "./App.css";

function App() {
  return (
<BrowserRouter>
      <header >
      <Link to="/">
      <h1 className="title" ><br>
      
      </br></h1>
      </Link>
      <Buscador/>
      <div className="logoPlataforma1">
      <Link to="/Accion"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/357446406_10159756745218634_8004640448601687151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2a-KmOs2QEMAX_bzT8v&_nc_ht=scontent.fcor10-3.fna&oh=00_AfAmytE6p3yA41vohWDsE_1GyzGmgnYJrgoYG1wj0HJ0Jg&oe=64A9D5DD"></img></a></div> </Link>
      <Link to="/Comedia"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/358462364_10159756745208634_5948913222862788310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=B5oxgr9_1V0AX99bQKm&_nc_ht=scontent.fcor10-3.fna&oh=00_AfDaEHAQI1lyNBFspFKsmImCUhbFyAxm2N2lb7HaeEvO0Q&oe=64AB17A4"></img></a></div></Link>
      <Link to="/Drama"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/358355843_10159756745318634_3672233774865976562_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=1YGRQJ0qZLgAX9uEFoA&_nc_ht=scontent.fcor10-3.fna&oh=00_AfBVwWG3ytcxkzsN02xNumEmrrNAml6KiqVxk0JT44vhRA&oe=64AA1D66"></img></a></div></Link>
      <Link to="/Fantasia"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/358430611_10159756745213634_1326791756614599147_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RL1qmYyyVUgAX-qIcxu&_nc_ht=scontent.fcor10-4.fna&oh=00_AfDxo-6xoYXc2ULj96Z3Uv_1JpuP6PgthB5_Q15lUE-bZw&oe=64AAFAB6"></img></a></div></Link>
      <Link to="/Romances"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/358430971_10159756745313634_1293967417719091959_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=5Exla9usSmoAX-RQigK&_nc_ht=scontent.fcor10-4.fna&oh=00_AfCZvFVzXAlViypUM2lk1jaLVcdFrXKKC1fNATi6KIhOTg&oe=64AAF810"></img></a></div></Link>
      <Link to="/Thrillers"><div><a href=""><img class="logoPlataforma" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/358371212_10159756745333634_6866327483031184499_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=LbugWQjBm-EAX848LOm&_nc_ht=scontent.fcor10-3.fna&oh=00_AfBD8oDMDREZ5jw2w0P07xNfUTQEH7fJhpaYMAUBmvNxmA&oe=64A9CB61"></img></a></div></Link>
      </div>
    
      </header>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/Netflix/" element={<LandingNetflix/>} />
    <Route path="/Drama/" element={<LandingDrama/>} />
    <Route path="/Comedia/" element={<LandingComedia/>} />
    <Route path="/Accion/" element={<LandingAccion/>} />
    <Route path="/Thrillers/" element={<LandingThrillers/>} />
    <Route path="/Romances/" element={<LandingRomances/>} />
    <Route path="/Fantasia/" element={<LandingFantasia/>} />
    <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
    </Routes>
     
</BrowserRouter>
  );
}

export default App;

