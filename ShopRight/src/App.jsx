import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="/contact" element={<ContactPage />}></Route>
      {/* <Route path="*" element={<ErrorPage />}></Route> */}
    </Routes>
      
    </>
  )
}

export default App
