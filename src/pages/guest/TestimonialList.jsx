import React from "react";
import dewiImg from "../../assets/dewi.png";
import riskiImg from "../../assets/riski.png";
import sariImg from "../../assets/sari.png";
import duduImg from "../../assets/dudu.png";
import cikaImg from "../../assets/cika.png";
import juriImg from "../../assets/juri.png";

import testimoniData from "../../data/testimoni.json";

const imageMap = {
  "dewi.png": dewiImg,
  "riski.png": riskiImg,
  "sari.png": sariImg,
  "dudu.png": duduImg,
  "cika.png": cikaImg,
  "juri.png": juriImg,

};

export default function TestimonialList() {
  return (
    <section id="testi" className="bg-[#f7f7f7] py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-4xl mb-2 text-green-600 font-abril tracking-wide">
          Our Testimonials
        </p>
        <h2 className="text-5xl font-bold text-gray-800 font-abril tracking-wide">What People Say?</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimoniData.map(({ id, name, image, review }) => (
          <div
            key={id}
            className="bg-white text-center p-8 rounded-lg shadow-md relative"
          >
            <img
              src={imageMap[image]}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mx-auto -mt-20 mb-4 border-4 border-white shadow"
            />
            <p className="text-gray-600 mb-4">{review}</p>
            <h3 className="text-green-700 font-bold">{name}</h3>
            <p className="text-sm text-gray-500">Customer</p>
            <div className="h-1 bg-green-500 w-full mt-6 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
