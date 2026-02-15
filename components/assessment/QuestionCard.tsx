// D:\Semester Tujuh\SPK\components\assessment\QuestionCard.tsx

import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    type: 'single' | 'multiple' | 'range';
    options?: string[];
    min?: number;
    max?: number;
  };
  onAnswer: (questionId: number, value: any) => void;
  answer: any;
}

export default function QuestionCard({ question, onAnswer, answer }: QuestionCardProps) {
  const handleOptionChange = (value: any) => {
    onAnswer(question.id, value)
  }

  return (
    <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-umc-red p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            {question.text}
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        {question.type === 'single' && (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label 
                key={option} 
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                  answer === option 
                    ? 'bg-umc-red text-white border-umc-red' 
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answer === option}
                  onChange={() => handleOptionChange(option)}
                  className="form-radio h-5 w-5 text-umc-red"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        )}

        {question.type === 'multiple' && (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label 
                key={option} 
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                  answer?.includes(option)
                    ? 'bg-umc-red text-white border-umc-red' 
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answer?.includes(option)}
                  onChange={() => {
                    const newAnswer = answer?.includes(option)
                      ? answer.filter((a: string) => a !== option)
                      : [...(answer || []), option]
                    handleOptionChange(newAnswer)
                  }}
                  className="form-checkbox h-5 w-5 text-umc-red"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>
        )}

        {question.type === 'range' && (
          <div className="space-y-4">
            <input
              type="range"
              min={question.min}
              max={question.max}
              value={answer || question.min}
              onChange={(e) => handleOptionChange(parseInt(e.target.value))}
              className="w-full h-2 bg-umc-red rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm font-medium text-gray-700">
              {Array.from({ length: (question.max! - question.min!) / 5 + 1 }, (_, i) => (
                <span key={i}>
                  {question.min! + i * 5} jam/minggu
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}