import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Home from'./Home';
import About from "./about";
import Contact from "./contact";
import User from "./User";
import Add from "./Add";
import Edit from "./Edit";
// import useAppStore from "./store";


function App() {
  // const isDarkMode = useAppStore((state) => state.isDarkMode);

  // console.log(isDarkMode);
  return (
    <BrowserRouter>
      <nav style={{marginBottom: '1rem'}}>
        <Link to="/">Home</Link> |{""}
        <Link to="/about">About</Link> |{""}
        <Link to="/contact">Contact</Link> |{""}
        <Link to="/user/zain/@alawyzain">User 123</Link> |{""}
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name/:email" element={<User/>} />

        <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
    </BrowserRouter>
    
     
    
  )
}

export default App
