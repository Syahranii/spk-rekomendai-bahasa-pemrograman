'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Brain, Share2, ArrowLeft } from 'lucide-react'
import RecommendationCard from '@/components/result/RecommendationCard'
import { calculateRecommendation, generateAnalysis } from '@/lib/expert-system'

// ✅ Define AssessmentData type inline
interface AssessmentData {
  goal: string
  experience: string
  time: number
  mathInterest: string
  platform: string
}

// ✅ Define AssessmentResult type inline
interface AssessmentResult {
  language: string
  score: number
  explanation: string
  roadmap: string[]
  links: { name: string; url: string }[]
}

export default function ResultPage() {
  const router = useRouter()
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null)
  const [recommendations, setRecommendations] = useState<AssessmentResult[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // ✅ Ambil data dari localStorage
    const savedData = localStorage.getItem('assessmentData')
    if (savedData) {
      try {
        const data = JSON.parse(savedData)
        setAssessmentData(data)
        
        // ✅ Hitung rekomendasi
        const results = calculateRecommendation(data)
        setRecommendations(results)
      } catch (error) {
        console.error('Error parsing assessment ', error)
        router.push('/assessment')
      }
    } else {
      console.error('No assessment data found')
      router.push('/assessment')
    }
    
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-umc-red border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Memproses rekomendasi...</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Harap tunggu sebentar</p>
        </div>
      </div>
    )
  }

  if (!assessmentData || recommendations.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Data Tidak Ditemukan</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Tidak ada data assessment yang tersimpan. Silakan kembali ke halaman assessment.
          </p>
          <button 
            className="px-6 py-3 border-2 border-umc-red text-umc-red rounded-lg font-medium hover:bg-umc-red hover:text-white transition-all"
            onClick={() => router.push('/assessment')}
          >
            Kembali ke Assessment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Analysis Section - HANYA UNTUK ANALISIS JAWABAN */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
          {/* Header dengan "Hasil Rekomendasi" dan "Bagikan Hasil" */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-umc-red rounded-lg p-3 mr-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Hasil Rekomendasi</h2>
            </div>
            <button 
              className="px-4 py-2 bg-umc-red/10 text-umc-red rounded-lg font-medium border border-umc-red/30 hover:bg-umc-red/20"
              onClick={() => {
                const text = `Saya direkomendasikan belajar ${recommendations[0]?.language} dengan skor ${recommendations[0]?.score}%! #UMC #Programming`
                if (navigator.share) {
                  navigator.share({ title: 'Rekomendasi Bahasa Pemrograman - UMC', text, url: window.location.href })
                } else {
                  navigator.clipboard.writeText(text)
                  alert('Teks telah disalin ke clipboard!')
                }
              }}
            >
              Bagikan Hasil
            </button>
          </div>
          
          {/* Analisis Jawaban */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            <strong>Berdasarkan jawaban Anda:</strong> {generateAnalysis(assessmentData)}
          </p>
          
          {/* Colored Tags sesuai desain */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Tujuan: {assessmentData.goal}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Pengalaman: {assessmentData.experience}
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Waktu: {assessmentData.time} jam/minggu
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
              Minat Matematika: {assessmentData.mathInterest}
            </span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
              Platform: {assessmentData.platform}
            </span>
          </div>
        </div>

        {/* ✅ 2 BUTTON DI LUAR CARD (POJOK KIRI BAWAH) */}
        <div className="mb-8 flex justify-start space-x-4">
          <button 
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-200"
            onClick={() => router.push('/history')}
          >
            Kembali ke Hasil Lainnya
          </button>
          <button 
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium border border-gray-300 hover:bg-gray-200 flex items-center justify-center"
            onClick={() => router.push('/assessment')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ulangi Assessment
          </button>
        </div>

        {/* Recommendations - CARD SAMA BESAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recommendations.map((result, index) => (
            <div key={index} className="relative h-full">
              {/* ✅ BUTTON DI POJOK KANAN CARD */}
              <div className="absolute top-4 right-4 z-10">
                <button 
                  className="px-3 py-2 bg-umc-red/10 hover:bg-umc-red/20 text-umc-red rounded-lg font-medium flex items-center justify-center"
                  onClick={() => {
                    const text = `Saya direkomendasikan belajar ${result.language} dengan skor ${result.score}%! #UMC #Programming`
                    if (navigator.share) {
                      navigator.share({
                        title: 'Rekomendasi Bahasa Pemrograman - UMC',
                        text,
                        url: window.location.href
                      })
                    } else {
                      navigator.clipboard.writeText(text)
                      alert('Teks telah disalin ke clipboard!')
                    }
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Bagikan
                </button>
              </div>
              
              {/* ✅ CARD REKOMENDASI - SAMA BESAR */}
              <div className="h-full">
                <RecommendationCard 
                  result={result} 
                  index={index} 
                  assessmentData={assessmentData}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Catatan Penting */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 mb-8">
          <h3 className="text-lg font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Catatan Penting
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-justify">
            Rekomendasi ini dibuat berdasarkan sistem pakar dengan aturan yang telah ditentukan. 
            Hasil ini bersifat saran — Anda tetap bebas memilih bahasa pemrograman yang sesuai 
            dengan minat dan kebutuhan Anda.
          </p>
        </div>
      </div>
    </div>
  )
}