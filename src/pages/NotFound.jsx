import React from 'react';
import error404 from '../assets/404.png'; // Mengimpor gambar 404 dari assets

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      {/* Menampilkan gambar error 404 */}
      <img src={error404} alt="Error 404 - Not Found" className="mx-auto w-64 mb-6" />
      {/* Menampilkan judul Error 404 */}
      <h1 className="text-5xl font-bold text-red-500 mb-4">Error 404</h1>
      {/* Menampilkan deskripsi bahwa halaman tidak ditemukan */}
      <p className="text-lg text-gray-600">Page Not Found</p>
    </div>
  );
}
