"use client";

import Image from "next/image";

import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-cream my-auto min-h-screen">
      <div className="flex flex-col md:flex-row max-w-150 w-full p-5">
        <div className="md:w-1/2">
          <Image
            src="/image-product-mobile.jpg"
            alt="Perfume"
            width={500}
            height={300}
            className="block md:hidden rounded-t-xl w-full h-full"
          />
          <Image
            src="/image-product-desktop.jpg"
            alt="Perfume"
            width={500}
            height={500}
            className="hidden md:block md:rounded-l-xl md:rounded-t-none w-full h-full"
          />
        </div>
        <div className="bg-white rounded-b-xl p-6 md:w-1/2 lg:w-1/2 md:rounded-r-xl lg:rounded-r-xl md:rounded-bl-none lg:rounded-bl-none">
          <h2 className="font-montserrat text-grey uppercase tracking-[5px] mb-5 text-[12px]">Perfume</h2>
          <h1 className="font-fraunces text-black text-3xl mb-5 md:max-w-55 lg:w-10/12">Gabrielle Essence Eau De Parfum</h1>
          <p className="font-montserrat text-grey mb-5 text-[14px] w-full">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-3 mb-5">
            <p className="font-fraunces text-green-500 text-3xl">$149.99</p>
            <p className="font-montserrat text-grey line-through text-sm ml-2">$169.99</p>
          </div>

          <button
            className="flex justify-center items-center gap-2 rounded-lg p-3 bg-green-500 hover:bg-green-700 w-full "
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
            <MdOutlineShoppingCart className="text-white text-lg" />
            <span className="text-white font-montserrat text-sm font-bold">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
