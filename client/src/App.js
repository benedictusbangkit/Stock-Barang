/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StockList from "./componets/StockList.js"
import AddStock from "./componets/AddStock.js";
import EditStock from "./componets/EditStock.js";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<StockList/>}/>
        <Route path="add" element={<AddStock/>}/>
        <Route path="edit/:id" element={<EditStock/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
