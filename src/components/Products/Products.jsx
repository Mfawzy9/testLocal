import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Title from "../Title/Title";
import Login from "../Login/Login";
import axios from "axios";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("../src/Json/products.json");
      setdata(data);
    })();
  }, []);
  return (
    <>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
      <Title title={"جميع المنتجات"} mx={"mx-auto"} my={"my-5"} />
      <div className="grid sm:grid-cols-2 min-h-full md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
        {data?.map((product, idx) => {
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
