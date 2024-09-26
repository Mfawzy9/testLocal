import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Title from "../Title/Title";
import Login from "../Login/Login";

const Men = () => {
  const [openModal, setOpenModal] = useState(false);
  const [men, setMen] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await axios.get("../src/Json/products.json");
      setMen(
        data?.filter(
          (item) => item.category == "رجالي" || item.category == "حريمي و رجالي"
        )
      );
    })();
  }, []);
  return (
    <>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
      <Title title={"السكرابات الرجالي"} mx={"mx-auto"} my={"my-5"} />
      <div className="grid sm:grid-cols-2 min-h-full md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
        {men?.map((product, idx) => {
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

export default Men;
