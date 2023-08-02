
// react router
import { Routes, Route } from "react-router-dom";

// pages
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

// context
import CartContextProvider from "./context/cartContext";



const App = () => {

  return (
    <CartContextProvider>
      <main className="max-w-md" style={{ direction: "rtl" }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </CartContextProvider>
  )
}

export default App;
