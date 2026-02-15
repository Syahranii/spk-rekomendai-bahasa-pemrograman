import html2canvas from 'html2canvas'; // ✅ Tambahkan baris ini
export const shareToSocial = async (resultData: any) => {
  const shareData = {
    title: 'Rekomendasi Bahasa Pemrograman',
    text: `Saya mendapatkan rekomendasi bahasa pemrograman dari Sistem Pakar UMC!\n\nBahasa: ${resultData.language.name}\nSkor: ${resultData.score}\n\nCek sistem pakar ini di: https://expert-system-umc.vercel.app`,
    url: window.location.href
  };

  try {
    if (navigator.share) {
      // Web Share API (mobile)
      await navigator.share(shareData);
      return { success: true, method: 'web-share' };
    } else if (navigator.clipboard) {
      // Copy to clipboard (desktop)
      await navigator.clipboard.writeText(shareData.text);
      return { success: true, method: 'clipboard', message: 'Teks berhasil disalin!' };
    } else {
      // Fallback: Show share options
      return { 
        success: false, 
        method: 'manual',
        options: [
          { platform: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(shareData.text)}` },
          { platform: 'Twitter', url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}` },
          { platform: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}` },
          { platform: 'Instagram', url: 'https://www.instagram.com/' } // Instagram doesn't support link sharing directly
        ]
      };
    }
  } catch (error) {
    console.error('Error sharing:', error);
    return { success: false, error: error };
  }
};

export const generateShareImage = async (elementId: string): Promise<string | null> => {
  try {
    const element = document.getElementById(elementId);
    if (!element) return null;

    const clone = element.cloneNode(true) as HTMLElement;
    document.body.appendChild(clone);
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    clone.style.width = '600px';

    await new Promise(resolve => setTimeout(resolve, 300));
    
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true
    });

    document.body.removeChild(clone);

    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error generating share image:', error);
    return null;
  }
};