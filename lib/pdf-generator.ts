// D:\Semester Tujuh\SPK\lib\pdf-generator.ts

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error('Element not found');
    alert('Gagal menghasilkan PDF. Element tidak ditemukan.');
    return;
  }

  // Show loading
  const originalText = document.querySelector('button svg + span')?.textContent;
  if (originalText) {
    document.querySelector('button svg + span')!.textContent = 'Sedang menghasilkan...';
  }

  html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    width: element.offsetWidth,
    height: element.offsetHeight,
    onclone: (clonedDoc) => {
      // 1. Ganti semua oklch di style attributes
      const elements = clonedDoc.querySelectorAll('*');
      elements.forEach(el => {
        const style = el.getAttribute('style');
        if (style && style.includes('oklch')) {
          const newStyle = style.replace(/oklch\([^)]+\)/g, 'rgb(255, 0, 0)');
          el.setAttribute('style', newStyle);
        }
      });

      // 2. Override semua CSS variables
      const styleOverride = clonedDoc.createElement('style');
      styleOverride.textContent = `
        :root {
          --background: #ffffff;
          --foreground: #333333;
          --card: #ffffff;
          --card-foreground: #333333;
          --popover: #ffffff;
          --popover-foreground: #333333;
          --primary: #d32f2f;
          --primary-foreground: #ffffff;
          --secondary: #f5f5f5;
          --secondary-foreground: #333333;
          --muted: #f5f5f5;
          --muted-foreground: #666666;
          --accent: #f5f5f5;
          --accent-foreground: #333333;
          --destructive: #d32f2f;
          --border: #e0e0e0;
          --input: #f5f5f5;
          --ring: #d32f2f;
          --chart-1: #d32f2f;
          --chart-2: #3f51b5;
          --chart-3: #009688;
          --chart-4: #ff9800;
          --chart-5: #673ab7;
          --sidebar: #ffffff;
          --sidebar-foreground: #333333;
          --sidebar-primary: #d32f2f;
          --sidebar-primary-foreground: #ffffff;
          --sidebar-accent: #f5f5f5;
          --sidebar-accent-foreground: #333333;
          --sidebar-border: #e0e0e0;
          --sidebar-ring: #d32f2f;
        }
        * {
          color: var(--foreground) !important;
          background: var(--background) !important;
          border-color: var(--border) !important;
          outline-color: var(--ring) !important;
        }
        .bg-umc-red {
          background-color: #d32f2f !important;
        }
        .text-umc-red {
          color: #d32f2f !important;
        }
        .bg-umc-gold {
          background-color: #ff9800 !important;
        }
        .text-umc-gold {
          color: #ff9800 !important;
        }
        a {
          text-decoration: none !important;
          color: #0066cc !important;
        }
        .recommendation-card {
          page-break-inside: avoid !important;
        }
      `;
      clonedDoc.head.appendChild(styleOverride);
    }
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add image to PDF
    const imgWidth = 210; // A4 width in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Save PDF
    pdf.save(`${fileName}.pdf`);
    
    // Restore button text
    if (originalText) {
      setTimeout(() => {
        document.querySelector('button svg + span')!.textContent = originalText;
      }, 1000);
    }
  }).catch(error => {
    console.error('PDF generation error:', error);
    alert(`Gagal menghasilkan PDF. Error: ${error.message}`);
    
    // Restore button text on error
    if (originalText) {
      document.querySelector('button svg + span')!.textContent = originalText;
    }
  });
};

// ✅ FUNGSI BARU: Generate PDF untuk rekomendasi spesifik
export const generateSpecificPDF = (elementId: string, fileName: string, cardIndex: number) => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    alert('Gagal menghasilkan PDF. Element tidak ditemukan.');
    return;
  }

  // Cari card yang sesuai
  const cards = element.querySelectorAll('.recommendation-card');
  if (cardIndex >= cards.length) {
    console.error('Card index out of range');
    alert('Gagal menghasilkan PDF. Card tidak ditemukan.');
    return;
  }
  
  const card = cards[cardIndex];
  const clonedCard = card.cloneNode(true) as HTMLElement;
  
  clonedCard.classList.add('pdf-specific-card'); // Tambahkan class khusus

  // Tambahkan style override
  const styleOverride = document.createElement('style');
  styleOverride.textContent = `
    :root {
      --background: #ffffff;
      --foreground: #333333;
      --card: #ffffff;
      --card-foreground: #333333;
      --popover: #ffffff;
      --popover-foreground: #333333;
      --primary: #d32f2f;
      --primary-foreground: #ffffff;
      --secondary: #f5f5f5;
      --secondary-foreground: #333333;
      --muted: #f5f5f5;
      --muted-foreground: #666666;
      --accent: #f5f5f5;
      --accent-foreground: #333333;
      --destructive: #d32f2f;
      --border: #e0e0e0;
      --input: #f5f5f5;
      --ring: #d32f2f;
      --chart-1: #d32f2f;
      --chart-2: #3f51b5;
      --chart-3: #009688;
      --chart-4: #ff9800;
      --chart-5: #673ab7;
      --sidebar: #ffffff;
      --sidebar-foreground: #333333;
      --sidebar-primary: #d32f2f;
      --sidebar-primary-foreground: #ffffff;
      --sidebar-accent: #f5f5f5;
      --sidebar-accent-foreground: #333333;
      --sidebar-border: #e0e0e0;
      --sidebar-ring: #d32f2f;
    }
    * {
      color: var(--foreground) !important;
      background: var(--background) !important;
      border-color: var(--border) !important;
      outline-color: var(--ring) !important;
    }
    .bg-umc-red {
      background-color: #d32f2f !important;
    }
    .text-umc-red {
      color: #d32f2f !important;
    }
    .bg-umc-gold {
      background-color: #ff9800 !important;
    }
    .text-umc-gold {
      color: #ff9800 !important;
    }
    .pdf-specific-card {
      max-width: 100% !important;
      width: 100% !important;
      page-break-inside: avoid !important;
      box-shadow: none !important;
      margin: 0 !important;
      padding: 20px !important;
      border: none !important;
    }
  `;
  document.head.appendChild(styleOverride);

  // Show loading
  const originalText = document.querySelector('button svg + span')?.textContent;
  if (originalText) {
    document.querySelector('button svg + span')!.textContent = 'Sedang menghasilkan...';
  }

  html2canvas(clonedCard, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    width: clonedCard.offsetWidth,
    height: clonedCard.offsetHeight
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add image to PDF
    const imgWidth = 210; // A4 width in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Save PDF
    pdf.save(`${fileName}.pdf`);
    
    // Restore button text
    if (originalText) {
      setTimeout(() => {
        document.querySelector('button svg + span')!.textContent = originalText;
      }, 1000);
    }
  }).catch(error => {
    console.error('PDF generation error:', error);
    alert(`Gagal menghasilkan PDF. Error: ${error.message}`);
    
    // Restore button text on error
    if (originalText) {
      document.querySelector('button svg + span')!.textContent = originalText;
    }
  }).finally(() => {
    // Hapus style override
    document.head.removeChild(styleOverride);
  });
};