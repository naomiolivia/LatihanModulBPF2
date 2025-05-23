import kueBanner from '../assets/baner1.png';

export default function GuestHero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${kueBanner})` }}
    >
      {/* Overlay gradasi dari bawah */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

      {/* Isi konten */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl md:text-8xl font-extrabold leading-tight md:leading-snug drop-shadow-lg font-abril tracking-wider">
          Hello <br className="hidden md:block" /> Welcome to <span className="text-green-500">MIZ'</span>Cake
        </h1>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
          Order Now
        </button>
      </div>

      <button className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
        ←
      </button>
      <button className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
        →
      </button>
    </section>

  );
}
