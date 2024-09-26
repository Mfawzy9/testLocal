import { Link, Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />

      <div className="container min-h-screen py-24">
        <Outlet />
      </div>

      <footer className="bg-gray-200 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    من نحن
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    منتجاتنا
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    تسوق اون لاين
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    توصيل سريع
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    دعم فني
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    البريد الالكتروني: info@scrubsEgypt.com
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    الهاتف: 00201036451892
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-600 hover:text-gray-900" href="#">
                    العنوان: القاهرة - مصر
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black/5 mt-5 p-4 text-center">
          © 2024 Copyright : <Link to={"/"}>Scrubs Egypt</Link>
        </div>
      </footer>
    </>
  );
};

export default LayOut;
