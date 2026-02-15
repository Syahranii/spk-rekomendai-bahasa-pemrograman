// D:\Semester Tujuh\SPK\lib\data.ts

export interface Question {
  id: number;
  text: string;
  type: 'single' | 'multiple' | 'range';
  options?: string[];
  min?: number;
  max?: number;
}

export interface TeamMember {
  foto: string;
  nama: string;
  nim: string;
  kelas: string;
  gmail: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Apa tujuan utama Anda belajar pemrograman?",
    type: "single",
    options: [
      "Web Development",
      "Mobile Development", 
      "Game Development",
      "Data Science / AI",
      "Desktop Applications",
      "Embedded Systems / IoT",
      "Sistem Operasi / Networking"
    ]
  },
  {
    id: 2,
    text: "Seberapa berpengalaman Anda dalam pemrograman?",
    type: "single",
    options: ["Pemula", "Menengah", "Mahir"]
  },
  {
    id: 3,
    text: "Berapa jam per minggu yang bisa Anda luangkan untuk belajar?",
    type: "range",
    min: 1,
    max: 20
  },
  {
    id: 4,
    text: "Seberapa tinggi minat Anda terhadap matematika?",
    type: "single",
    options: ["Rendah", "Sedang", "Tinggi"]
  },
  {
    id: 5,
    text: "Platform apa yang paling sering Anda gunakan?",
    type: "single",
    options: ["Windows", "Mac", "Linux", "Mobile"]
  },
  {
    id: 6,
    text: "Apa yang paling menarik bagi Anda dalam pemrograman?",
    type: "multiple",
    options: [
      "Membangun antarmuka pengguna",
      "Membangun logika kompleks",
      "Menganalisis data",
      "Membangun game",
      "Membangun sistem keamanan"
    ]
  },
  {
    id: 7,
    text: "Apa yang paling Anda takuti saat belajar pemrograman?",
    type: "multiple",
    options: [
      "Kesulitan memahami konsep",
      "Tidak punya waktu",
      "Tidak tahu mulai dari mana",
      "Kesulitan menemukan sumber belajar",
      "Tidak punya komputer yang memadai"
    ]
  },
  {
    id: 8,
    text: "Apa yang paling Anda sukai dari pemrograman?",
    type: "multiple",
    options: [
      "Membuat sesuatu yang bermanfaat",
      "Mengatasi masalah yang rumit",
      "Bekerja secara kreatif",
      "Bekerja dalam tim",
      "Bekerja sendiri"
    ]
  },
  {
    id: 9,
    text: "Seberapa penting bagi Anda untuk memiliki komunitas pengembang yang besar?",
    type: "single",
    options: ["Sangat Penting", "Penting", "Tidak Penting"]
  },
  {
    id: 10,
    text: "Apakah Anda lebih suka bekerja dengan tim atau sendiri?",
    type: "single",
    options: ["Tim", "Sendiri", "Tergantung proyek"]
  },
  {
    id: 11,
    text: "Seberapa cepat Anda ingin bisa membuat project nyata?",
    type: "single",
    options: ["Segera (1-2 bulan)", "Cukup cepat (3-6 bulan)", "Tidak terburu-buru (6+ bulan)"]
  },
  {
    id: 12,
    text: "Apakah Anda tertarik dengan teknologi terbaru?",
    type: "single",
    options: ["Sangat tertarik", "Cukup tertarik", "Lebih suka teknologi yang sudah stabil"]
  },
  {
    id: 13,
    text: "Seberapa penting bagi Anda untuk bisa kerja remote?",
    type: "single",
    options: ["Sangat penting", "Penting", "Tidak penting"]
  },
  {
    id: 14,
    text: "Apakah Anda tertarik dengan gaji yang tinggi?",
    type: "single",
    options: ["Sangat penting", "Cukup penting", "Lebih suka passion"]
  },
  {
    id: 15,
    text: "Apakah Anda suka bekerja dengan deadline ketat?",
    type: "single",
    options: ["Suka", "Netral", "Tidak suka"]
  },
  {
    id: 16,
    text: "Apakah Anda tertarik dengan open source?",
    type: "single",
    options: ["Sangat tertarik", "Cukup tertarik", "Tidak tertarik"]
  },
  {
    id: 17,
    text: "Seberapa penting dokumentasi yang lengkap?",
    type: "single",
    options: ["Sangat penting", "Penting", "Bisa belajar dari contoh"]
  },
  {
    id: 18,
    text: "Apakah Anda suka debugging dan troubleshooting?",
    type: "single",
    options: ["Suka", "Netral", "Tidak suka"]
  },
  {
    id: 19,
    text: "Apakah Anda tertarik dengan AI/Machine Learning?",
    type: "single",
    options: ["Sangat tertarik", "Cukup tertarik", "Tidak tertarik"]
  },
  {
    id: 20,
    text: "Apa yang paling Anda harapkan dari bahasa pemrograman yang akan Anda pelajari?",
    type: "multiple",
    options: [
      "Banyak sumber belajar",
      "Komunitas aktif",
      "Banyak pekerjaan tersedia",
      "Mudah dipelajari",
      "Dapat digunakan di berbagai bidang"
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    foto: "https://i.pravatar.cc/150?img=1",
    nama: "Ahmad Fauzi",
    nim: "21.11.1234",
    kelas: "TI-3A",
    gmail: "ahmad.fauzi@umc.ac.id"
  },
  {
    foto: "https://i.pravatar.cc/150?img=2",
    nama: "Siti Aisyah",
    nim: "21.11.5678",
    kelas: "TI-3B",
    gmail: "siti.aisyah@umc.ac.id"
  },
  {
    foto: "https://i.pravatar.cc/150?img=3",
    nama: "Budi Santoso",
    nim: "21.11.9012",
    kelas: "TI-3A",
    gmail: "budi.santoso@umc.ac.id"
  },
  {
    foto: "https://i.pravatar.cc/150?img=4",
    nama: "Dewi Lestari",
    nim: "21.11.3456",
    kelas: "TI-3C",
    gmail: "dewi.lestari@umc.ac.id"
  }
];