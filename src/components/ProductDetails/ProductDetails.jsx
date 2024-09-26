import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation, Autoplay } from "swiper/modules";
import * as fontAwesome from "react-icons/fa"; //fontawesome icons
import RatingStars from "../RatingStars/RatingStars";
import Login from "../Login/Login";
import SaleBadge from "../SaleBadge/SaleBadge";
import data from "../../Json/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(
    data?.find((item) => item.id == id)
  );

  useEffect(() => {
    setProductDetails(data?.find((item) => item.id == id));
  }, [data]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Login openModal={openModal} setOpenModal={setOpenModal} />
      <section className="py-10 max-w-screen-xl mx-auto my-6  p-0 sm:p-3 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-3 ">
          {/* Product Details */}
          <div className="ps-2 flex flex-col md:col-span-3 lg:col-span-4 justify-center">
            <div className="mt-5">
              <RatingStars rating={productDetails?.rating} />
            </div>

            <div>
              <ul className="flex flex-col gap-4 my-3 list-inside text-gray-700">
                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  مواصفات المنتج :
                  <span className="text-black dark:text-white font-semibold">
                    {productDetails?.description}
                  </span>
                </li>
                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  الفئة :
                  <span className="text-black dark:text-white font-semibold">
                    {productDetails?.category}
                  </span>
                </li>

                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  الحالة :{" "}
                  <span
                    className={`${
                      productDetails?.qty > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }  font-semibold`}
                  >
                    {productDetails?.qty > 0
                      ? "متوفر في المخزون"
                      : "Out of stock"}
                  </span>{" "}
                </li>
                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  الكمية المباعة:{" "}
                  <span className="text-black dark:text-white font-semibold">
                    {productDetails?.sold}
                  </span>
                </li>
                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center ">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  السعر قبل الخصم:{" "}
                  <span className="text-black dark:text-white font-semibold line-through">
                    {productDetails?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    EGP
                  </span>
                </li>
                <li className="dark:text-gray-400 text-gray-600 flex flex-wrap gap-2 items-center">
                  <fontAwesome.FaCircle className="text-[9px]" />
                  السعر بعد الخصم:{" "}
                  <span className="font-bold text-2xl">
                    {productDetails?.priceAfterDiscount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    EGP
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              type="button"
              className="w-full p-2 group relative overflow-hidden bg-cyan-700 focus:ring-4 focus:ring-cyan-300 inline-flex items-center rounded-lg text-white justify-center"
            >
              <span className=" flex items-center">
                <fontAwesome.FaCartPlus className="mr-2 text-xl" />
                شراء الان
              </span>

              <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[70%] z-20 duration-1000"></div>
            </button>
          </div>
          {/* Product Images */}
          <div className="details-slider md:col-span-2 lg:col-span-2 relative order-first md:order-last">
            <SaleBadge product={productDetails} top={"-top-4"} />
            <Swiper
              effect={"cube"}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              navigation={true}
              modules={[EffectCube, Navigation, Autoplay, Pagination]}
              className="relative "
            >
              {productDetails?.imgs?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default ProductDetails;
