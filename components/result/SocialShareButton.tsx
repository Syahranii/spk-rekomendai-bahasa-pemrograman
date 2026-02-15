// D:\Semester Tujuh\SPK\components\result\SocialShareButton.tsx

'use client'

import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

interface SocialShareButtonProps {
  results: Array<{
    language: {
      name: string;
    };
  }>;
}

export default function SocialShareButton({ results }: SocialShareButtonProps) {
  const topLanguages = results.slice(0, 3).map(r => r.language.name).join(', ');
  const shareText = `Saya baru saja melakukan assessment di Sistem Pakar Rekomendasi Bahasa Pemrograman UMC dan direkomendasikan belajar: ${topLanguages}! Coba juga di`;
  const url = 'https://spk-umc.vercel.app';
  
  const shareToWhatsApp = () => {
    const text = encodeURIComponent(`${shareText}\n${url}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${shareText} ${url}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  const shareNative = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Rekomendasi Bahasa Pemrograman',
        text: `Saya direkomendasikan belajar: ${topLanguages}!`,
        url: url
      });
    } else {
      shareToWhatsApp();
    }
  };

  return (
    <Button 
      variant="outline"
      size="sm"
      className="border-umc-red text-umc-red hover:bg-umc-red/10"
      onClick={shareNative}
    >
      <Share2 className="mr-1 h-4 w-4" />
      Bagikan Hasil
    </Button>
  )
}