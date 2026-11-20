// Materi: Fragment & Props key pada .map()

/* TODO:
  1. Lengkapi array 'daftarSiswa' minimal 3 data objek dengan properti:
     id (unik),
     nama (string),
     kelas (string).
  2. Bungkus hasil return utama komponen menggunakan Fragment (<>...</>) agar tidak menambah elemen pembungkus berlebih di DOM.
  3. Render 'daftarSiswa' menggunakan method .map() dan pasang props 'key={siswa.id}' pada elemen pembungkus tiap item (misalnya <section key={siswa.id}>).
  4. Tampilkan data 'nama' dan 'kelas' menggunakan interpolasi ({...}) di dalam item yang di-render.
*/

function DaftarSiswa() {
  const daftarSiswa = [
    { id: 1, nama: "andi", kelas: "XI B" },
    { id: 2, nama: "luna", kelas: "XI A" },
    { id: 3, nama: "joko", kelas: "XI C" },
  ];

  return (
    <>
      {daftarSiswa.map((siswa) => (
        <section
          key={siswa.id}
          className="p-4 rounded-xl border bg-white shadow-sm"
        >
          <h3 className="text-gray-900 font-bold capitalize">{siswa.nama}</h3>
          <p className="text-gray-900 font-bold capitalize">
            kelas {siswa.kelas}
          </p>
        </section>
      ))}
    </>
  );
}

export default DaftarSiswa;

// 1. Mengapa props 'key' wajib dipasang pada elemen terluar di dalam .map() dan sebaiknya menggunakan ID unik?
//   Jawaban:
// 2. Apa fungsi Fragment (<>...</>) saat merender elemen di dalam komponen dibandingkan membungkusnya dengan <div>?
//   Jawaban:
