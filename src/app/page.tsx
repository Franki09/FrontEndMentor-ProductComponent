"use client";

import Image from "next/image";

import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className="bg-cream my-auto min-h-screen">
      <div className="flex flex-col p-5">
        <Image src="/image-product-mobile.jpg" alt="Perfume" width={500} height={300} className="rounded-t-xl" />
        <div className="bg-white rounded-b-xl p-6 ">
          <h2 className="font-montserrat text-grey uppercase tracking-[5px] mb-5 text-[14px]">Perfume</h2>
          <h1 className="font-fraunces text-black text-3xl mb-5">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-montserrat text-grey mb-5 text-[14px] w-full">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-3 mb-5">
            <p className="font-fraunces text-green-500 text-3xl">$149.99</p>
            <p className="font-montserrat text-grey line-through ml-2">$169.99</p>
          </div>
          <div className="flex justify-center items-center gap-2 rounded-lg p-3 bg-green-500 hover:bg-green-700">
            <MdOutlineShoppingCart className="text-white text-xl" />
            <button
              className="text-white font-montserrat"
              onClick={() =>
                toast.success("Item added to cart!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              }
            >
              {" "}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
