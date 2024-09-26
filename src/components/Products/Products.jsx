import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Title from "../Title/Title";
import Login from "../Login/Login";
import data from "../../Json/products.json";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [allProducts, setAllProducts] = useState(data);

  useEffect(() => {
    setAllProducts(data);
  }, [allProducts]);
  return (
    <>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
      <Title title={"جميع المنتجات"} mx={"mx-auto"} my={"my-5"} />
      <div className="grid sm:grid-cols-2 min-h-full md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
        {allProducts?.map((product, idx) => {
          return (
            <ProductCard
              setOpenModal={setOpenModal}
              product={product}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
