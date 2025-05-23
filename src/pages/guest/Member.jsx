import { useState } from "react";
import members from "../../data/member.json";
import { FaUserCheck, FaTimesCircle, FaCrown, FaMedal, FaGem } from "react-icons/fa";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    const found = members.find((m) => m.email === email.trim());
    if (found) {
      setResult(found);
    } else {
      setResult(false);
    }
  };

  const memberStyle = {
    silver: {
      bg: "bg-gradient-to-r from-gray-100 to-gray-300",
      text: "text-gray-800",
      icon: <FaMedal className="text-2xl text-gray-600" />,
    },
    gold: {
      bg: "bg-gradient-to-r from-yellow-200 to-yellow-400",
      text: "text-yellow-900",
      icon: <FaCrown className="text-2xl text-yellow-700" />,
    },
    platinum: {
      bg: "bg-gradient-to-r from-purple-300 to-purple-500",
      text: "text-white",
      icon: <FaGem className="text-2xl text-white" />,
    },
  };

  return (
    <div id="member" className="max-w-xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg border">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600 font-abril tracking-wide">Cek Keanggotaan</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 transition-all duration-300"
      >
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Cek Keanggotaan
        </button>
      </form>

      {result && result !== false && (
        <div
          className={`mt-6 p-5 rounded-xl shadow-inner flex items-center gap-4 ${memberStyle[result.tipe_member].bg} ${memberStyle[result.tipe_member].text}`}
        >
          <div>{memberStyle[result.tipe_member].icon}</div>
          <div>
            <p className="text-lg font-semibold">🧾 Selamat datang, {result.nama}!</p>
            <p>Anda adalah member <strong>{result.tipe_member.toUpperCase()}</strong>.</p>
          </div>
        </div>
      )}

      {result === false && (
        <div className="mt-6 p-5 bg-red-100 text-red-700 rounded-xl shadow-inner flex items-center gap-3">
          <FaTimesCircle className="text-2xl" />
          <span>❌ Email tidak terdaftar sebagai member.</span>
        </div>
      )}
    </div>
  );
}
