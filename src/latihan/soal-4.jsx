// Materi: Controlled Form (useState, value, onChange, onSubmit)
import { useState } from "react";

function FormSiswa() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [dataSafe, setDataSafe] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setDataSafe({ nama, kelas });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-5 border border-gray-200 rounded-xl bg-white max-w-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nama Siswa
        </label>
        <input
          type="text"
          placeholder="Masukkan nama siswa"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Kelas
        </label>
        <input
          type="text"
          placeholder="Contoh: XI B"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          value={kelas}
          onChange={(e) => setKelas(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium"
      >
        Simpan Data
      </button>

      <div className="border-t border-gray-200 pt-4 text-sm text-gray-600">
        <p className="font-medium text-gray-800">Live Preview</p>
        <p>Nama: {nama || "-"}</p>
        <p>Kelas: {kelas || "-"}</p>
      </div>

      {dataSafe ? (
        <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
          Data tersimpan: {dataSafe.nama} - {dataSafe.kelas}
        </div>
      ) : (
        <p className="text-sm text-gray-500">Preview data akan muncul di sini</p>
      )}
    </form>
  );
}

export default FormSiswa;
