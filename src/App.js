import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import About from "./pages/about/About"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      ;
    </>
  )
}

export default App
