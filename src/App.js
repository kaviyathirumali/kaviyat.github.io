import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"; 
import Home from "./Componets/Home/Home";
import About from "./Componets/About/About";
import Resume from "./Componets/Resume/Resume";
import Contact from "./Componets/Contact/Contact";
import Navbar from "./Componets/Navbar/Navbar";
import Project from "./Componets/Project/Project";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          {/*<Route exact path="/kaviyat.github.io" Component={Navlist}/>*/}
          <Route exact path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/resume" Component={Resume}/>
          <Route exact path="/project" Component={Project}/>
          <Route exact path="/contact" Component={Contact}/>
        </Routes>
      </Router>
  );
}

export default App;