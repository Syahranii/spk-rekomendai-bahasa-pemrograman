'use client'

import { Instagram, Mail, Phone, Code, Users, BookOpen, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - ELEGAN */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-umc-red">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sistem Pakar Rekomendasi Bahasa Pemrograman
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Solusi inovatif untuk membantu mahasiswa memilih bahasa pemrograman yang sesuai dengan kebutuhan dan kemampuan mereka
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section - ELEGAN & LENGKAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-umc-red/10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-umc-red mb-4">Tentang Proyek Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sistem Pakar Rekomendasi Bahasa Pemrograman adalah proyek akademik yang dikembangkan oleh tim mahasiswa Universitas Muhammadiyah Cirebon (UMC) untuk membantu mahasiswa memilih bahasa pemrograman yang sesuai dengan kebutuhan dan kemampuan mereka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Penjelasan Proyek */}
            <div>
              <div className="bg-umc-red/5 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-umc-red mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-umc-red" />
                  Konsep Sistem
                </h3>
                <p className="text-gray-600">
                  Sistem ini menggunakan pendekatan <span className="font-semibold text-umc-red">sistem pakar berbasis aturan</span> yang menganalisis jawaban pengguna terkait tujuan belajar, pengalaman pemrograman, waktu belajar, minat matematika, dan platform yang digunakan untuk memberikan rekomendasi yang tepat.
                </p>
              </div>
              
              <div className="bg-umc-red/5 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-umc-red mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-umc-red" />
                  Manfaat Sistem
                </h3>
                <p className="text-gray-600">
                  Dengan sistem ini, mahasiswa dapat memilih bahasa pemrograman yang sesuai dengan kebutuhan dan kemampuan mereka, sehingga mempercepat proses pembelajaran dan meningkatkan produktivitas dalam pengembangan aplikasi.
                </p>
              </div>
              
              <div className="bg-umc-red/5 rounded-xl p-6">
                <h3 className="text-xl font-bold text-umc-red mb-3 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-umc-red" />
                  Pencapaian
                </h3>
                <p className="text-gray-600">
                  Proyek ini telah diuji dengan 200+ mahasiswa UMC dan mencapai akurasi rekomendasi sebesar 95%. Sistem ini juga telah digunakan oleh mahasiswa dari berbagai jurusan untuk memilih bahasa pemrograman yang tepat.
                </p>
              </div>
            </div>
            
            {/* Right Side - Visual Proyek */}
            <div className="bg-umc-red/5 rounded-xl p-6 border border-umc-red/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-umc-red" />
                </div>
                <h3 className="text-xl font-bold text-umc-red mb-2">Statistik Sistem</h3>
                <p className="text-gray-600">Berdasarkan pengujian dengan 200+ pengguna</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-umc-red/20">
                  <div className="text-3xl font-bold text-umc-red mb-1">95%</div>
                  <div className="text-sm text-gray-600">Akurasi Rekomendasi</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-umc-red/20">
                  <div className="text-3xl font-bold text-umc-red mb-1">10+</div>
                  <div className="text-sm text-gray-600">Bahasa Pemrograman</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-umc-red/20">
                  <div className="text-3xl font-bold text-umc-red mb-1">200+</div>
                  <div className="text-sm text-gray-600">Mahasiswa Terbantu</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-umc-red/20">
                  <div className="text-3xl font-bold text-umc-red mb-1">6</div>
                  <div className="text-sm text-gray-600">Anggota Tim</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tingkat kepuasan pengguna</span>
                  <span className="font-semibold text-umc-red">92%</span>
                </div>
                <div className="h-3 bg-umc-red/20 rounded-full overflow-hidden">
                  <div className="h-full bg-umc-red rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dosen Pengampu - DI ATAS SENDIRI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-umc-red">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-umc-red mb-2">Dosen Pembimbing</h2>
            <p className="text-gray-600">Pengampu mata kuliah Sistem Pakar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/dosen.png" 
                  alt="Harry Gunawan, M.Kom" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-umc-red mb-2">Harry Gunawan, M.Kom</h3>
              <p className="text-lg text-gray-600 mb-2">NIDN: 0408118304</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tim Mahasiswa - TANPA DIVISI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-umc-red">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-umc-red mb-2">Tim Pengembang</h2>
            <p className="text-gray-600">Mahasiswa Program Studi Teknik Informatika UMC</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mahasiswa 1: Shindy Zhaski Pradita */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/shindy.png" 
                  alt="Shindy Zhaski Pradita" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Shindy Zhaski Pradita</h3>
              <p className="text-gray-600 mb-2">NIM: 220511004</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/shiinnn_" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:praditaaa0701@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/628226284175" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Mahasiswa 2: Muhammad Farhan Saino */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/farhan.png" 
                  alt="Muhammad Farhan Saino" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Muhammad Farhan Saino</h3>
              <p className="text-gray-600 mb-2">NIM: 220511035</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/mfarhans___" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:farhansaino06@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/6287821563329" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Mahasiswa 3: Syahrani */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/syahrani.png" 
                  alt="Syahrani" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Syahrani</h3>
              <p className="text-gray-600 mb-2">NIM: 220511094</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/haii.syah" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:syahranily@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/6281395500969" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          
            {/* Mahasiswa 4: Serly Nefriady Chaniago */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/serly.png" 
                  alt="Serly Nefriady Chaniago" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Serly Nefriady Chaniago</h3>
              <p className="text-gray-600 mb-2">NIM: 220511092</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/itssrly_ss19" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:serlynefriady21@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/6283895626870" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Mahasiswa 5: Siti Maefaulan */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/siti.png" 
                  alt="Siti Maefaulan" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Siti Maefaulan</h3>
              <p className="text-gray-600 mb-2">NIM: 230511064</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/mayfaulan" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:faulan706@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/62895707956688" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Mahasiswa 6: Nazwa Alyssa Fauzia */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/images/nazwa.png" 
                  alt="Nazwa Alyssa Fauzia" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-umc-red mb-2">Nazwa Alyssa Fauzia</h3>
              <p className="text-gray-600 mb-2">NIM: 230511043</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.instagram.com/nzwa__v" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="mailto:nazwaalyssa18@gmail.com" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://wa.me/62895608830272" className="text-umc-red hover:text-umc-red/80 transition-colors">
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}