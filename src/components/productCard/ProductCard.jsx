// import * as fontAwesome from "react-icons/fa"; //fontawesome icons

import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import SaleBadge from "../SaleBadge/SaleBadge";

export default function ProductCard({ product, setOpenModal }) {
  return (
    <div className="w-full relative max-w-sm bg-white border shadow-2xl border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/productDetails/${product?.id}`}>
        <img
          className="p-8 rounded-t-lg hover:scale-110 transition-all duration-500"
          src={product?.mainImg}
          alt="product image"
        />
      </Link>
      <SaleBadge product={product} top={"top-0"} />
      <div className="px-5 pb-5">
        <Link to={`/productDetails/${product?.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-3">
            {product?.description}
          </h5>
        </Link>
        <div className="flex justify-center items-center my-5">
          <RatingStars rating={product?.rating} />
        </div>
        <div className="flex flex-col gap-4 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <span
              dir="ltr"
              className="line-through font-bold text-gray-900 dark:text-white"
            >
              1000 EGP
            </span>
            <span
              dir="ltr"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              500 EGP
            </span>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 w-full focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            شراء الان
          </button>
        </div>
      </div>
    </div>
  );
}
