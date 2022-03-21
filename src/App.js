import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
