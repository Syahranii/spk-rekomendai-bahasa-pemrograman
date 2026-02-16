// D:\Semester Tujuh\SPK\app\(main)\dashboard\page.tsx

import Image from 'next/image'
import { Brain, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ❌ HAPUS SELURUH BAGIAN HEADER */}
      {/* Tidak ada header sama sekali di sini */}
      
      {/* Main Banner - Hanya Foto Kampus */}
      <section className="relative min-h-[60vh] lg:min-h-[500px]">
        <div className="absolute inset-0">
          <img 
            src="/university-building.jpg" 
            alt="Universitas Muhammadiyah Cirebon" 
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Selamat Datang di Sistem Pakar!</h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8">Rekomendasi Bahasa Pemrograman untuk Pemula</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-10 sm:py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa yang Bisa Anda Lakukan?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan sistem ini, Anda dapat menemukan bahasa pemrograman yang paling sesuai dengan kebutuhan dan kemampuan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 - Icon Otak */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-umc-red flex items-center justify-center">
              <div className="text-white text-6xl">🧠</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mulai Assessment</h3>
              <p className="text-gray-600 mb-4">
                Jawab 20 pertanyaan untuk mendapatkan rekomendasi bahasa pemrograman yang sesuai dengan kebutuhan Anda
              </p>
              <a href="/assessment" className="inline-flex items-center text-umc-red font-medium hover:text-umc-red/80">
                Mulai Assessment
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 2 - Icon Jam */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-umc-red flex items-center justify-center">
              <div className="text-white text-6xl">🕒</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Riwayat Assessment</h3>
              <p className="text-gray-600 mb-4">
                Lihat hasil assessment Anda sebelumnya dan bandingkan dengan hasil terkini, pahami perbandingannya
              </p>
              <a href="/history" className="inline-flex items-center text-umc-red font-medium hover:text-umc-red/80">
                Lihat Riwayat
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Card 3 - Icon Orang */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
            <div className="h-48 bg-umc-red flex items-center justify-center">
              <div className="text-white text-6xl">👤</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tentang Sistem Pakar</h3>
              <p className="text-gray-600 mb-4">
                Pelajari lebih lanjut tentang bagaimana sistem pakar ini bekerja dan menghasilkan rekomendasi
              </p>
              <a href="/about" className="inline-flex items-center text-umc-red font-medium hover:text-umc-red/80">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* About Section - Background Putih */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Apa itu Sistem Pakar?</h2>
              <p className="text-gray-600 mb-4">
                Sistem pakar adalah program komputer yang meniru keputusan dan penalaran manusia ahli untuk memecahkan masalah kompleks. 
                Dalam konteks ini, sistem pakar membantu Anda memilih bahasa pemrograman yang paling sesuai dengan kebutuhan dan kemampuan Anda.
              </p>
              <p className="text-gray-600">
                Dengan menggabungkan aturan-aturan dari ahli pemrograman dan algoritma penalaran, sistem ini memberikan rekomendasi yang akurat dan dapat diandalkan.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                <div className="flex items-center mb-4">
                  <div className="bg-umc-red text-white p-3 rounded-lg mr-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Metode Rule-Based Reasoning</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Sistem ini menggunakan aturan eksplisit yang ditentukan oleh ahli untuk menghasilkan rekomendasi.
                </p>
                <p className="text-gray-600 mb-4">
                  Setiap aturan diuji terhadap jawaban Anda untuk menghasilkan skor yang akurat.
                </p>
                <div className="flex space-x-2">
                  <span className="bg-umc-red/10 text-umc-red px-3 py-1 rounded-full text-sm">Forward Chaining</span>
                  <span className="bg-umc-red/10 text-umc-red px-3 py-1 rounded-full text-sm">Scoring System</span>
                  <span className="bg-umc-red/10 text-umc-red px-3 py-1 rounded-full text-sm">Knowledge Base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - MERAH dengan TEKS PUTIH */}
      <footer className="bg-umc-red text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-center text-center lg:text-left">
            <div className="flex items-center mb-4 md:mb-0">
              <Image 
                src="/umc-logo.png" 
                alt="Logo UMC" 
                width={30} 
                height={30} 
                className="mr-2"
              />
              <span className="font-bold">Universitas Muhammadiyah Cirebon</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-200">About</a>
              <a href="#" className="hover:text-gray-200">Contact</a>
              <a href="#" className="hover:text-gray-200">Privacy Policy</a>
              <a href="#" className="hover:text-gray-200">Terms of Service</a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} Sistem Pakar Rekomendasi Bahasa Pemrograman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}