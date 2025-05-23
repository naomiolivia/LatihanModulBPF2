import React from "react";
import aboutImage from "../../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 text-gray-800 flex flex-col md:flex-row items-center gap-12 rounded-3xl shadow-lg"
      style={{
        background: "linear-gradient(135deg, #e6eadf 0%, #ffffff 50%, #c3ccb5 100%)",
      }}
    >
      {/* Gambar Kiri */}
      <div className="flex-1">
        <img
          src={aboutImage}
          alt="Tentang MizCake"
          className="rounded-2xl shadow-xl w-full max-h-[450px] object-contain"
        />
      </div>

      {/* Konten Kanan */}
      <div className="flex-1 relative">
        <p className="text-3xl mb-2 text-green-700 uppercase tracking-wide font-abril">
          About Us
        </p>
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 font-abril tracking-wide">
          MIZ'Cake - Rasa yang Menghangatkan Hati
        </h2>
        <p className="mb-6 text-justify leading-relaxed text-[17px]">
          MIZ'Cake hadir sebagai pilihan terbaik untuk Anda yang mencari kue berkualitas dengan rasa autentik dan tampilan yang menggoda. Kami menggunakan bahan-bahan segar, tanpa pengawet, dan diolah secara higienis oleh tim profesional yang berpengalaman. Setiap kue kami dibuat dengan cinta untuk menciptakan pengalaman manis yang tak terlupakan – baik untuk momen spesial, perayaan keluarga, maupun sekadar teman ngopi sore.
        </p>

        <div className="flex gap-8 flex-wrap mb-8">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.1 0-2 .9-2 2v6h4v-6c0-1.1-.9-2-2-2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 20h12"
              />
            </svg>
            <span className="font-semibold">Bahan Premium</span>
          </div>

          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9 6 9-6-9-6-9 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
              />
            </svg>
            <span className="font-semibold">Tanpa Pengawet</span>
          </div>

          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
              />
            </svg>
            <span className="font-semibold">100% Homemade</span>
          </div>
        </div>

        <button className="bg-green-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-800 transition duration-200 shadow-md">
          Pesan Sekarang
        </button>

        {/* Tulisan Background "MIZ'Cake" */}
        <span
          className="absolute top-2 right-4 text-gray-300 text-7xl font-handwriting opacity-10 select-none pointer-events-none"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          MIZ'Cake
        </span>
      </div>
    </section>
  );
}
