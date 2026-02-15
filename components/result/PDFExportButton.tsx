// D:\Semester Tujuh\SPK\components\result\PDFExportButton.tsx

'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { generatePDF } from '@/lib/pdf-generator'

interface PDFExportButtonProps {
  elementId: string;
  fileName: string;
}

export default function PDFExportButton({ elementId, fileName }: PDFExportButtonProps) {
  return (
    <Button 
      variant="outline"
      size="sm"
      className="border-umc-red text-umc-red hover:bg-umc-red/10"
      onClick={() => generatePDF(elementId, fileName)}
    >
      <Download className="mr-1 h-4 w-4" />
      Simpan semua
    </Button>
  )
}