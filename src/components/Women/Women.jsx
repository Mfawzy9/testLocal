import { useEffect, useState } from "react";
import Title from "../Title/Title";
import ProductCard from "../productCard/ProductCard";
import Login from "../Login/Login";
import data from "../../Json/products.json";

const Women = () => {
  const [openModal, setOpenModal] = useState(false);
  const [women, setWomen] = useState(
    data?.filter(
      (item) => item.category == "حريمي" || item.category == "حريمي و رجالي"
    )
  );

  useEffect(() => {
    setWomen(
      data?.filter(
        (item) => item.category == "حريمي" || item.category == "حريمي و رجالي"
      )
    );
  }, [data]);
  return (
    <>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
      <Title title={"السكرابات النسائي"} mx={"mx-auto"} my={"my-5"} />
      <div className="grid sm:grid-cols-2 min-h-full md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
        {women?.map((product, idx) => {
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

export default Women;
