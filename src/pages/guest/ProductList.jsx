import React, { useState } from "react";
import { Eye, Heart, ShoppingCart, X } from "lucide-react";
import productsData from "../../data/produk.json";
import cake from "../../assets/cake.jpg";
import cheese from "../../assets/cheese.jpg";
import pastry from "../../assets/pastry.jpg";
import pie from "../../assets/pie.jpg";
import tiramisu from "../../assets/tiramisu.jpg";
import bento from "../../assets/bento.jpg";

const imageMap = {
  "cake.jpg": cake,
  "cheese.jpg": cheese,
  "pastry.jpg": pastry,
  "pie.jpg": pie,
  "tiramisu.jpg": tiramisu,
  "bento.jpg": bento,
};

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section id="produk" className="py-16 px-6 max-w-7xl mx-auto bg-white">
      <h2 className="text-5xl font-bold mb-12 text-center text-green-600 font-abril tracking-wide">
        Our Best Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 font-abril tracking-wide">
        {productsData.map(({ id, name, price, image, description }) => (
          <div key={id} className="bg-[#fefaf3] border rounded-xl shadow hover:shadow-xl transition p-4 text-center">
            {/* Gambar Produk */}
            <div className="bg-white p-4 rounded-lg h-[320px] flex items-center justify-center">
              <img
                src={imageMap[image]}
                alt={name}
                className="w-[300px] h-[300px] object-cover rounded-lg shadow"
              />
            </div>

            {/* Icon Aksi */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600"
                onClick={() => setSelectedProduct({ name, description, image })}
              >
                <Eye className="w-5 h-5" />
              </button>
              <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <Heart className="w-5 h-5" />
              </button>
              <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            {/* Nama Produk */}
            <h3 className="mt-6 font-semibold text-lg text-gray-800">{name}</h3>

            {/* Rating */}
            <div className="flex justify-center gap-1 mt-2 text-green-500 text-sm">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Harga */}
            <p className="text-gray-700 font-medium mt-1">Rp {price.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* MODAL DESKRIPSI */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-[90%] max-w-3xl p-8 rounded-3xl shadow-2xl border-4 border-green-400 bg-gradient-to-br from-white via-green-50 to-white transition-all duration-300">

            {/* Tombol Tutup */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-green-500 hover:text-red-500 transition-transform transform hover:scale-125"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Gambar */}
              <img
                src={imageMap[selectedProduct.image]}
                alt={selectedProduct.name}
                className="w-full h-[300px] object-cover rounded-xl border border-green-200 shadow-md"
              />

              {/* Isi Deskripsi */}
              <div>
                <h3 className="text-4xl font-extrabold text-green-700 mb-4 flex items-center gap-2 font-abril tracking-wide">
                  {selectedProduct.name}
                </h3>

                <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-inner border border-green-100 max-h-[300px] overflow-y-auto">
                  <p className="text-gray-800 text-justify text-base leading-relaxed tracking-wide">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
