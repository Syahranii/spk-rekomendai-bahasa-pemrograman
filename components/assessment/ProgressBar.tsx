// D:\Semester Tujuh\SPK\components\assessment\ProgressBar.tsx

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Pertanyaan {currentStep} dari {totalSteps}</span>
        <span className="text-umc-red font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-umc-red transition-all duration-300" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}