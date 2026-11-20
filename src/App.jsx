// Panggil komponen yang telah dibuat disini agar tampil ke browser

import StudentCard from "./latihan/soal-1";
import TaskItem from "./latihan/soal-2";
import DaftarSiswa from "./latihan/soal-3";
import FormSiswa from "./latihan/soal-4";

function App() {
  return (
    // NO.1
    // <div className="flex flex-col gap-3 w-full max-w-md">
    //   <StudentCard nama="Andi" kelas="X-RPL" statusLulus={true} />
    //   <StudentCard nama="Budi" kelas="X-TKJ" statusLulus={false} />
    //   <StudentCard nama="Citra" kelas="XI-MM" statusLulus={true} />
    // </div>

    // NO.2
    // <div className="w-screen flex justify-center pt-10">
    //   <div className="flex flex-col gap-3 w-full max-w-md">
    //     <TaskItem
    //       judul="Mengerjakan latihan React"
    //       prioritas="tinggi"
    //       selesai={false}
    //     />
    //     <TaskItem
    //       judul="Membaca materi props"
    //       prioritas="sedang"
    //       selesai={true}
    //     />
    //     <TaskItem
    //       judul="Merangkum conditional rendering"
    //       prioritas="tinggi"
    //       selesai={true}
    //     />
    //   </div>
    // </div>

    // NO.3
    // <div className="w-screen flex justify-center pt-10">
    //   <div className="flex flex-col gap-3 w-full max-w-md">
    //     <DaftarSiswa />
    //   </div>
    // </div>

    // NO.4
    <div className="w-screen flex justify-center pt-10">
      <FormSiswa />
    </div>
  );
}

export default App;
