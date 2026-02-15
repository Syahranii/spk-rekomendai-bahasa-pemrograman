'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Brain, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import QuestionCard from '@/components/assessment/QuestionCard'
import ProgressBar from '@/components/assessment/ProgressBar'
import { questions } from '@/lib/data'
import { calculateRecommendation } from '@/lib/expert-system'

export default function AssessmentPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (questionId: number, value: any) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    // Map answers to expert system format
    const assessmentData = {
      goal: mapAnswer(1, answers[1]),
      experience: mapAnswer(2, answers[2]),
      time: answers[3],
      mathInterest: mapAnswer(4, answers[4]),
      platform: mapAnswer(5, answers[5])
    }

    // Hanya hitung jika semua pertanyaan wajib dijawab
    const allRequiredAnswered = [1, 2, 3, 4, 5].every(id => {
      const value = answers[id];
      return value !== undefined && value !== '' && value !== null;
    });
    
    // Validasi sebelum menghitung rekomendasi
    if (!allRequiredAnswered) {
      alert('Silakan jawab semua pertanyaan wajib terlebih dahulu!');
      return;
    }
    
    // Calculate recommendation
    const results = calculateRecommendation(assessmentData)
    
    if (results.length === 0) {
      alert('Terjadi kesalahan saat memproses rekomendasi.');
      return;
    }
    
    // ✅ SIMPAN RIWAYAT DENGAN TIMESTAMP
    const timestamp = new Date();
    const historyEntry = {
      date: timestamp.toLocaleString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      timestamp: timestamp.getTime(),
      results: results,
      data: assessmentData
    };

    // ✅ Ambil riwayat lama atau buat array baru
    const existingHistory = localStorage.getItem('assessmentHistory');
    const history = existingHistory ? JSON.parse(existingHistory) : [];
    
    // ✅ Tambahkan riwayat baru
    history.push(historyEntry);
    
    // ✅ Simpan ke localStorage
    localStorage.setItem('assessmentHistory', JSON.stringify(history));
    localStorage.setItem('assessmentResults', JSON.stringify(results));
    localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
    
    setCompleted(true)
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push('/result');
    }, 2000);
  }

  const mapAnswer = (questionId: number, answer: string): string => {
    const question = questions.find(q => q.id === questionId)
    if (!question || !answer) return ''
    
    // Map answers to expert system format
    const mapping: Record<string, string> = {
      // Question 1: Goal
      'Web Development': 'web',
      'Mobile Development': 'mobile',
      'Game Development': 'game',
      'Data Science / AI': 'data_science',
      'Desktop Applications': 'desktop',
      'Embedded Systems / IoT': 'embedded',
      
      // Question 2: Experience
      'Pemula': 'pemula',
      'Menengah': 'menengah',
      'Mahir': 'mahir',
      
      // Question 4: Math Interest
      'Rendah': 'rendah',
      'Sedang': 'sedang',
      'Tinggi': 'tinggi',
      
      // Question 5: Platform
      'Windows': 'windows',
      'Mac': 'mac',
      'Linux': 'linux',
      'Mobile': 'mobile'
    }
    
    return mapping[answer] || answer.toLowerCase()
  }

  const allAnswered = Object.keys(answers).length === questions.length
  const currentQuestionData = questions[currentQuestion]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-umc-red/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-umc-red" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Assessment Bahasa Pemrograman
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Jawab 20 pertanyaan berikut untuk mendapatkan rekomendasi bahasa pemrograman yang sesuai dengan kebutuhan Anda.
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar 
        currentStep={Object.keys(answers).length}
        totalSteps={questions.length} 
      />

      {/* Question Card */}
      {!completed ? (
        <QuestionCard
          question={currentQuestionData as any}
          onAnswer={handleAnswer}
          answer={answers[currentQuestionData.id]}
        />
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
          <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Assessment Selesai!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Sedang memproses rekomendasi Anda...
          </p>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-umc-red rounded-full overflow-hidden">
              <div className="w-full h-full bg-umc-red animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      {!completed && (
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Sebelumnya</span>
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestionData.id]}
              className="flex items-center space-x-2 px-6 py-3 bg-umc-red text-white rounded-lg hover:bg-umc-red/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="flex items-center space-x-2 px-6 py-3 bg-umc-gold text-umc-dark rounded-lg hover:bg-umc-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Selesai & Lihat Hasil</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}