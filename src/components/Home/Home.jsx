import { useEffect, useState } from "react";
// import * as fontAwesome from "react-icons/fa"; //fontawesome icons
// import * as bootstrapIcons from "react-icons/bs"; //bootstrap icons
import mainImg from "../../assets/pngegg.png";
import { Button } from "flowbite-react";

import ProductCard from "../productCard/ProductCard";
import axios from "axios";
import Login from "../Login/Login";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import data from "../../Json/products.json";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   (async function () {
  //     const { data } = await axios.get("../src/Json/products.json");
  //     setData(data);
  //   })();
  // }, []);

  return (
    <>
      <div className="mx-auto mb-10 grid max-w-screen-xl rounded-lg md:px-8 lg:grid-cols-12 lg:gap-8 lg:px-16 xl:gap-16">
        <div className="me-auto place-self-center lg:col-span-6 py-4">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
            <span className="text-cyan-700 font-bold">تخفيضات</span> حصرية على
            جميع السكرابات الطبية تصل إلى{" "}
            <span className="text-cyan-700 font-bold text-7xl m-3 md:m-0 ">
              50%
            </span>
          </h1>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            بمناسبة افتتاحنا لفرعنا الاول في مصر اشترك الان واحصل على كود الخصم
            لفترة محدودة
          </p>
          <Button onClick={() => setOpenModal(true)}>سجل الآن</Button>

          <Login openModal={openModal} setOpenModal={setOpenModal} />
        </div>

        <div className="lg:col-span-6 lg:mt-0">
          <a href="#">
            <img className="mb-4 w-full" src={mainImg} alt="peripherals" />
          </a>
        </div>
      </div>

      <hr />

      <Title title={"أحدث المنتجات"} mx={"mx-auto"} my={"my-10"} />
      <div className="grid sm:grid-cols-2 min-h-full md:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
        {data?.slice(0, 8)?.map((product, idx) => {
          return (
            <ProductCard
              setOpenModal={setOpenModal}
              product={product}
              key={idx}
            />
          );
        })}
      </div>
      <Link to={"/products"} className="block text-center my-10 w-full">
        <button
          onClick={() => setOpenModal(true)}
          type="button"
          className="w-full sm:w-96 p-2 group relative overflow-hidden bg-cyan-700 focus:ring-4 focus:ring-cyan-300 inline-flex items-center rounded-lg text-white justify-center"
        >
          <span className=" flex items-center">عرض المزيد</span>

          <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[100%] z-20 duration-700"></div>
        </button>
      </Link>
    </>
  );
};

export default Home;
