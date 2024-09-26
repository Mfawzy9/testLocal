import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./components/Home/Home";
import LayOut from "./components/LayOut/LayOut";
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import Products from "./components/Products/Products";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/men",
        element: <Men />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
