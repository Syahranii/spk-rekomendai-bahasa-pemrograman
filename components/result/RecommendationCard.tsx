'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

// ✅ Define AssessmentData type INLINE (tanpa import error)
interface AssessmentData {
  goal: string
  experience: string
  time: number
  mathInterest: string
  platform: string
}

interface RecommendationCardProps {
  result: {
    language: string
    score: number
    explanation: string
    roadmap: string[]
    links: { name: string; url: string }[]
  }
  index: number
  assessmentData: AssessmentData
}

export default function RecommendationCard({ 
  result, 
  index, 
  assessmentData 
}: RecommendationCardProps) {
  // ✅ Warna header tetap MERAH solid (UMC Red)
  const getHeaderColor = () => {
    return 'bg-umc-red'
  }

  // ✅ Deskripsi lengkap untuk setiap bahasa
  const getDetailedDescription = (language: string): string => {
    const descriptions: Record<string, string> = {
      'Python': `Python adalah bahasa pemrograman tingkat tinggi yang sangat populer karena sintaksnya yang sederhana dan mudah dibaca. Dengan Python, Anda dapat membangun berbagai aplikasi mulai dari web development, data science, machine learning, hingga automation script. Komunitas Python yang besar dan library yang lengkap menjadikannya pilihan ideal untuk pemula maupun profesional.`,
      
      'JavaScript': `JavaScript adalah bahasa pemrograman yang wajib dipelajari untuk pengembangan web modern. Sebagai bahasa yang berjalan di browser, JavaScript memungkinkan Anda membuat website yang interaktif dan dinamis. Dengan ekosistem yang luas seperti React, Vue, dan Node.js, JavaScript dapat digunakan untuk membangun aplikasi web full-stack, mobile apps, hingga desktop applications.`,
      
      'Java': `Java adalah bahasa pemrograman yang kuat, stabil, dan enterprise-grade. Dikenal dengan prinsip "Write Once, Run Anywhere", Java dapat berjalan di berbagai platform tanpa perlu modifikasi. Java banyak digunakan untuk pengembangan aplikasi enterprise, Android development, dan sistem backend yang membutuhkan skalabilitas tinggi.`,
      
      'C#': `C# adalah bahasa pemrograman modern dari Microsoft yang powerful dan versatile. Dengan sintaks yang mirip Java namun lebih elegan, C# cocok untuk pengembangan aplikasi Windows, game development dengan Unity, dan web applications menggunakan ASP.NET.`,
      
      'Go': `Go (Golang) adalah bahasa pemrograman yang dikembangkan oleh Google dengan fokus pada kesederhanaan, efisiensi, dan concurrency. Go memiliki performa yang sangat cepat mendekati C/C++, namun dengan sintaks yang lebih mudah dipelajari. Ideal untuk backend services, microservices, dan cloud infrastructure.`,
      
      'Ruby': `Ruby adalah bahasa pemrograman yang dirancang untuk membuat programmer bahagia. Dengan sintaks yang natural dan elegan, Ruby memungkinkan Anda menulis kode yang indah dan mudah dibaca. Framework Ruby on Rails menjadikan Ruby pilihan utama untuk rapid web development.`,
      
      'PHP': `PHP adalah bahasa pemrograman server-side yang mendominasi dunia web development. Lebih dari 70% website di dunia menggunakan PHP, termasuk platform besar seperti WordPress. PHP sangat mudah dipelajari untuk pemula dan memiliki komunitas yang sangat besar.`,
      
      'Swift': `Swift adalah bahasa pemrograman modern dari Apple yang dirancang khusus untuk pengembangan aplikasi iOS, macOS, watchOS, dan tvOS. Dengan sintaks yang clean dan aman, Swift menggantikan Objective-C sebagai bahasa utama untuk development Apple ecosystem.`,
      
      'Kotlin': `Kotlin adalah bahasa pemrograman modern yang kini menjadi bahasa utama untuk Android development. Dikembangkan oleh JetBrains, Kotlin sepenuhnya interoperable dengan Java namun dengan sintaks yang lebih concise dan fitur-fitur modern seperti null safety dan coroutines.`,
      
      'Rust': `Rust adalah bahasa pemrograman systems programming yang menggabungkan performa C/C++ dengan safety yang lebih baik. Dikembangkan oleh Mozilla, Rust menjamin memory safety tanpa garbage collector melalui ownership system yang unik. Ideal untuk sistem yang membutuhkan performa tinggi dan keamanan.`
    }

    return descriptions[language] || result.explanation || `Berdasarkan jawaban Anda, ${language} sangat cocok untuk kebutuhan dan kemampuan Anda. Bahasa ini menawarkan keseimbangan antara kemudahan belajar dan kemampuan untuk membangun aplikasi yang powerful.`
  }

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
      {/* ✅ Header dengan warna MERAH solid */}
      <CardHeader className={`${getHeaderColor()} p-5 flex flex-row items-center justify-between`}>
        <h3 className="text-xl font-bold text-white">{index + 1}. {result.language}</h3>
        <span className="text-white text-3xl font-bold bg-white/20 px-4 py-2 rounded-full">
          {result.score}%
        </span>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-6">
        {/* ✅ Penjelasan Lengkap & Elegan */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center text-lg">
            <span className="w-2 h-2 bg-umc-red rounded-full mr-2"></span>
            Tentang {result.language}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
            {getDetailedDescription(result.language)}
          </p>
        </div>

        {/* ✅ Roadmap Belajar */}
        <div className="mb-5">
          <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center text-lg">
            <span className="w-2 h-2 bg-umc-red rounded-full mr-2"></span>
            Roadmap Belajar
          </h4>
          <div className="bg-gradient-to-r from-umc-red/5 to-umc-red/10 border border-umc-red/20 rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-2.5 text-gray-700 dark:text-gray-300 pl-4">
              {result.roadmap.map((step, i) => (
                <li key={i} className="mb-1.5 pl-1.5 border-l-2 border-umc-red/30 pl-3 py-0.5">
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ✅ Link Belajar Resmi */}
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center text-lg">
            <span className="w-2 h-2 bg-umc-red rounded-full mr-2"></span>
            Sumber Belajar Resmi
          </h4>
          <div className="space-y-2">
            {result.links.map((link, i) => (
              <div 
                key={i} 
                className="group bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg hover:bg-umc-red/5 dark:hover:bg-umc-red/10 transition-colors"
              >
                <Link 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-umc-red hover:text-umc-red/80 dark:text-umc-red dark:hover:text-umc-red/80 font-medium transition-colors group"
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span className="hover:underline">{link.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}