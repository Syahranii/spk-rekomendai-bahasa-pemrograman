// D:\Semester Tujuh\SPK\app\(main)\history\page.tsx

'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Clock as ClockIcon, ArrowLeft } from 'lucide-react' // ✅ Ganti History dengan Clock
import Link from 'next/link'
import ResetHistoryButton from '@/components/result/ResetHistoryButton'

export default function HistoryPage() {
  const { data: session, status } = useSession()
  const [history, setHistory] = useState<any[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem('assessmentHistory');
    
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      parsedHistory.sort((a: any, b: any) => b.timestamp - a.timestamp);
      setHistory(parsedHistory);
    }
  }, [])

  const isAdmin = session?.user?.role === 'admin';

  return (
    <div className="space-y-8">
      {/* Header - Icon Jam */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-umc-red/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <ClockIcon className="w-6 h-6 text-umc-red" /> {/* ✅ Icon Jam */}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Riwayat Assessment
            </h1>
          </div>
          {isAdmin && history.length > 0 && <ResetHistoryButton />}
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Lihat hasil assessment Anda sebelumnya
        </p>
      </div>

      {/* History List */}
      {history.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center">
          <div className="bg-gray-100 dark:bg-gray-700/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ClockIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" /> {/* ✅ Icon Jam */}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Belum Ada Riwayat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Lakukan assessment pertama Anda untuk melihat riwayat di sini
          </p>
          <Link 
            href="/assessment" 
            className="inline-flex items-center space-x-2 px-6 py-3 bg-umc-red text-white rounded-lg hover:bg-umc-red/90 transition-all"
          >
            <span>Mulai Assessment</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {history.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Assessment #{index + 1}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                  {item.results.length} Rekomendasi
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {item.results.map((result: any, idx: number) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-gray-800 dark:text-white">
                        {result.language.name}
                      </span>
                      <span className="text-2xl font-bold text-umc-red">
                        {result.score}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {result.explanation.substring(0, 60)}...
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  Tujuan: {item.data.goal}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                  Pengalaman: {item.data.experience}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                  Waktu: {item.data.time} jam/minggu
                </span>
              </div>

              <Link 
                href="/result" 
                className="inline-flex items-center space-x-2 text-umc-red hover:text-umc-red/80 dark:text-umc-gold dark:hover:text-umc-gold/80 font-medium"
              >
                <span>Lihat Detail Hasil</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}