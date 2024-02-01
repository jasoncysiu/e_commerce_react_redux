import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact Component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetails} />
          <Route path="*" element={<div>404 Error</div>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
