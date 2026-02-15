// D:\Semester Tujuh\SPK\components\result\ResetHistoryButton.tsx

'use client'

import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function ResetHistoryButton() {
  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat assessment? Tindakan ini tidak dapat dibatalkan!')) {
      localStorage.removeItem('assessmentHistory');
      localStorage.removeItem('assessmentResults');
      localStorage.removeItem('assessmentData');
      alert('Riwayat assessment berhasil dihapus!');
      window.location.reload();
    }
  };

  return (
    <Button 
      variant="outline"
      size="sm"
      className="border-red-500 text-red-500 hover:bg-red-500/10"
      onClick={handleReset}
    >
      <Trash2 className="mr-1 h-4 w-4" />
      Hapus Riwayat (Admin Only)
    </Button>
  )
}