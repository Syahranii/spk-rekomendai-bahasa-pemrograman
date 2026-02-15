// ✅ Define types inline
interface Language {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  useCases: string[];
  learningTime: string;
  resources: string[];
  score: number;
}

interface AssessmentData {
  goal: string;
  experience: string;
  time: number;
  mathInterest: string;
  platform: string;
}

interface AssessmentResult {
  language: string;
  score: number;
  explanation: string;
  roadmap: string[];
  links: { name: string; url: string }[];
}

export const languages: Language[] = [
  {
    id: "python",
    name: "Python",
    description: "Bahasa pemrograman yang mudah dipelajari dengan sintaks yang sederhana dan jelas. Sangat populer untuk web development, data science, dan AI.",
    difficulty: "easy",
    useCases: ["Web Development", "Data Science", "Machine Learning", "Automation"],
    learningTime: "2-3 bulan",
    resources: [
      "https://www.python.org/",
      "https://docs.python.org/3/",
      "https://www.w3schools.com/python/"
    ],
    score: 0
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Bahasa pemrograman yang wajib dipelajari untuk web development modern. Dapat digunakan untuk frontend maupun backend development.",
    difficulty: "medium",
    useCases: ["Web Development", "Mobile Apps", "Desktop Apps", "Game Development"],
    learningTime: "2-3 bulan",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info/",
      "https://www.w3schools.com/js/"
    ],
    score: 0
  },
  {
    id: "java",
    name: "Java",
    description: "Bahasa pemrograman yang kuat dan stabil, banyak digunakan untuk enterprise applications dan Android development.",
    difficulty: "medium",
    useCases: ["Enterprise Applications", "Android Development", "Web Applications"],
    learningTime: "3-4 bulan",
    resources: [
      "https://www.oracle.com/java/",
      "https://docs.oracle.com/javase/tutorial/",
      "https://www.w3schools.com/java/"
    ],
    score: 0
  },
  {
    id: "csharp",
    name: "C#",
    description: "Bahasa pemrograman modern dari Microsoft yang powerful dan versatile untuk berbagai jenis aplikasi.",
    difficulty: "medium",
    useCases: ["Windows Applications", "Game Development", "Web Applications"],
    learningTime: "3-4 bulan",
    resources: [
      "https://learn.microsoft.com/en-us/dotnet/csharp/",
      "https://docs.microsoft.com/en-us/dotnet/csharp/",
      "https://www.w3schools.com/cs/"
    ],
    score: 0
  },
  {
    id: "go",
    name: "Go",
    description: "Bahasa pemrograman yang dikembangkan oleh Google dengan fokus pada kesederhanaan dan performa tinggi.",
    difficulty: "medium",
    useCases: ["Backend Development", "Cloud Services", "System Programming"],
    learningTime: "2-3 bulan",
    resources: [
      "https://go.dev/",
      "https://golang.org/doc/",
      "https://www.golangprograms.com/"
    ],
    score: 0
  }
];

export const scoringRules = {
  goal: {
    web: { python: 90, javascript: 95, java: 70, csharp: 65, go: 80 },
    mobile: { python: 60, javascript: 85, java: 90, csharp: 85, go: 40 },
    game: { python: 70, javascript: 80, java: 75, csharp: 95, go: 50 },
    data_science: { python: 95, javascript: 50, java: 70, csharp: 60, go: 75 },
    desktop: { python: 80, javascript: 60, java: 85, csharp: 90, go: 70 },
    embedded: { python: 60, javascript: 30, java: 70, csharp: 50, go: 85 }
  },
  experience: {
    pemula: { python: 95, javascript: 80, java: 60, csharp: 65, go: 85 },
    menengah: { python: 80, javascript: 85, java: 80, csharp: 80, go: 80 },
    mahir: { python: 70, javascript: 75, java: 85, csharp: 80, go: 90 }
  },
  time: {
    low: { python: 90, javascript: 75, java: 60, csharp: 65, go: 85 },
    medium: { python: 85, javascript: 85, java: 80, csharp: 80, go: 80 },
    high: { python: 75, javascript: 80, java: 90, csharp: 85, go: 75 }
  },
  mathInterest: {
    rendah: { python: 90, javascript: 85, java: 70, csharp: 75, go: 70 },
    sedang: { python: 85, javascript: 80, java: 85, csharp: 80, go: 85 },
    tinggi: { python: 80, javascript: 75, java: 90, csharp: 85, go: 95 }
  },
  platform: {
    windows: { python: 85, javascript: 90, java: 85, csharp: 95, go: 85 },
    mac: { python: 90, javascript: 90, java: 85, csharp: 80, go: 85 },
    linux: { python: 95, javascript: 85, java: 90, csharp: 75, go: 95 }
  }
};

// ✅ Mapping dari label user-friendly ke key scoring rules
const goalMapping: Record<string, string> = {
  'Web Development': 'web',
  'Mobile App Development': 'mobile',
  'Game Development': 'game',
  'Data Science / AI': 'data_science',
  'Desktop Applications': 'desktop',
  'Embedded Systems': 'embedded',
  'web': 'web',
  'mobile': 'mobile',
  'game': 'game',
  'data_science': 'data_science',
  'desktop': 'desktop',
  'embedded': 'embedded'
};

// ✅ FUNGSI BARU: generateAnalysis (SUDAH DI-EXPORT)
export function generateAnalysis(assessmentData: AssessmentData): string {
  const { goal, experience, time, mathInterest, platform } = assessmentData;

  // Mapping tujuan ke deskripsi
  const goalDescriptions: Record<string, string> = {
    'Web Development': 'Anda ingin membangun aplikasi web yang interaktif dan modern.',
    'Mobile App Development': 'Anda tertarik untuk mengembangkan aplikasi mobile untuk Android/iOS.',
    'Game Development': 'Anda ingin membuat game yang menarik dan interaktif.',
    'Data Science / AI': 'Anda tertarik pada analisis data, machine learning, dan kecerdasan buatan.',
    'Desktop Applications': 'Anda ingin membangun aplikasi desktop yang powerful.',
    'Embedded Systems': 'Anda tertarik pada sistem embedded dan IoT development.',
    'web': 'Anda ingin membangun aplikasi web yang interaktif dan modern.',
    'mobile': 'Anda tertarik untuk mengembangkan aplikasi mobile untuk Android/iOS.',
    'game': 'Anda ingin membuat game yang menarik dan interaktif.',
    'data_science': 'Anda tertarik pada analisis data, machine learning, dan kecerdasan buatan.',
    'desktop': 'Anda ingin membangun aplikasi desktop yang powerful.',
    'embedded': 'Anda tertarik pada sistem embedded dan IoT development.'
  };

  // Mapping pengalaman ke deskripsi
  const experienceDescriptions: Record<string, string> = {
    'pemula': 'Anda masih pemula dalam pemrograman, jadi kemudahan belajar menjadi prioritas.',
    'menengah': 'Anda sudah memiliki pengalaman dasar, siap untuk meningkatkan skill.',
    'mahir': 'Anda sudah mahir, mencari bahasa yang powerful untuk proyek kompleks.'
  };

  // Mapping waktu belajar ke deskripsi
  const timeDescriptions = time <= 5 
    ? 'Anda memiliki waktu belajar yang terbatas (kurang dari 5 jam/minggu), jadi efisiensi waktu sangat penting.'
    : time <= 10
    ? 'Anda memiliki waktu belajar yang cukup (5-10 jam/minggu), memungkinkan pembelajaran yang konsisten.'
    : 'Anda memiliki waktu belajar yang banyak (lebih dari 10 jam/minggu), memungkinkan pembelajaran intensif.';

  // Mapping minat matematika ke deskripsi
  const mathDescriptions: Record<string, string> = {
    'rendah': 'Anda memiliki minat matematika yang rendah, jadi bahasa dengan logika sederhana lebih cocok.',
    'sedang': 'Anda memiliki minat matematika yang sedang, terbuka untuk berbagai jenis bahasa pemrograman.',
    'tinggi': 'Anda memiliki minat matematika yang tinggi, cocok untuk bahasa dengan konsep matematis yang kuat.'
  };

  // Mapping platform ke deskripsi
  const platformDescriptions: Record<string, string> = {
    'windows': 'Anda menggunakan Windows, kompatibilitas dengan ekosistem Windows menjadi pertimbangan.',
    'mac': 'Anda menggunakan Mac, bahasa yang optimal untuk macOS akan lebih baik.',
    'linux': 'Anda menggunakan Linux, bahasa yang native di lingkungan Unix/Linux akan lebih efisien.'
  };

  // Build analisis
  const analysisParts = [
    goalDescriptions[goal] || `Anda ingin fokus pada ${goal}.`,
    experienceDescriptions[experience] || `Anda memiliki pengalaman ${experience}.`,
    timeDescriptions,
    mathDescriptions[mathInterest] || `Minat matematika Anda ${mathInterest}.`,
    platformDescriptions[platform] || `Anda menggunakan platform ${platform}.`
  ];

  return analysisParts.join(' ');
}

// ✅ FUNGSI BARU: calculateRecommendation (SUDAH DI-EXPORT)
export function calculateRecommendation(answers: {
  goal: string;
  experience: string;
  time: number;
  mathInterest: string;
  platform: string;
}): AssessmentResult[] {
  // ✅ Validasi parameter wajib
  if (
    !answers.goal ||
    !answers.experience ||
    answers.time === undefined ||
    !answers.mathInterest ||
    !answers.platform
  ) {
    console.warn('Parameter tidak lengkap:', answers);
    return [];
  }

  // ✅ Normalisasi goal ke key yang valid
  const rawGoal = answers.goal;
  const goalKey = goalMapping[rawGoal] || 'web'; // Default ke 'web' jika tidak ditemukan
  
  console.log('🎯 Goal mapping:', { rawGoal, goalKey });

  // ✅ Validasi experience
  const validExperiences = ['pemula', 'menengah', 'mahir'];
  const experienceKey = validExperiences.includes(answers.experience) 
    ? answers.experience 
    : 'pemula';

  // ✅ Validasi mathInterest
  const validMathInterests = ['rendah', 'sedang', 'tinggi'];
  const mathInterestKey = validMathInterests.includes(answers.mathInterest) 
    ? answers.mathInterest 
    : 'sedang';

  // ✅ Validasi platform
  const validPlatforms = ['windows', 'mac', 'linux'];
  const platformKey = validPlatforms.includes(answers.platform) 
    ? answers.platform 
    : 'windows';

  // ✅ Kategori waktu belajar
  const timeCategory = answers.time <= 5 ? 'low' : answers.time <= 10 ? 'medium' : 'high';

  // ✅ Inisialisasi skor
  const scores: { [key: string]: number } = {};
  languages.forEach(lang => scores[lang.id] = 0);

  console.log('📊 Menghitung skor dengan:', { 
    goalKey, 
    experienceKey, 
    timeCategory, 
    mathInterestKey, 
    platformKey 
  });

  // ✅ Validasi goalKey sebelum digunakan
  if (!scoringRules.goal[goalKey as keyof typeof scoringRules.goal]) {
    console.error('❌ Goal key tidak valid:', goalKey);
    console.error('🎯 Goal mapping tersedia:', Object.keys(scoringRules.goal));
    // Gunakan default 'web' jika goalKey tidak valid
    const defaultGoalKey = 'web';
    
    scores.python += scoringRules.goal[defaultGoalKey].python;
    scores.javascript += scoringRules.goal[defaultGoalKey].javascript;
    scores.java += scoringRules.goal[defaultGoalKey].java;
    scores.csharp += scoringRules.goal[defaultGoalKey].csharp;
    scores.go += scoringRules.goal[defaultGoalKey].go;
  } else {
    // ✅ Hitung skor berdasarkan goal
    scores.python += scoringRules.goal[goalKey as keyof typeof scoringRules.goal].python;
    scores.javascript += scoringRules.goal[goalKey as keyof typeof scoringRules.goal].javascript;
    scores.java += scoringRules.goal[goalKey as keyof typeof scoringRules.goal].java;
    scores.csharp += scoringRules.goal[goalKey as keyof typeof scoringRules.goal].csharp;
    scores.go += scoringRules.goal[goalKey as keyof typeof scoringRules.goal].go;
  }

  // ✅ Hitung skor berdasarkan experience
  scores.python += scoringRules.experience[experienceKey as keyof typeof scoringRules.experience].python;
  scores.javascript += scoringRules.experience[experienceKey as keyof typeof scoringRules.experience].javascript;
  scores.java += scoringRules.experience[experienceKey as keyof typeof scoringRules.experience].java;
  scores.csharp += scoringRules.experience[experienceKey as keyof typeof scoringRules.experience].csharp;
  scores.go += scoringRules.experience[experienceKey as keyof typeof scoringRules.experience].go;

  // ✅ Hitung skor berdasarkan waktu belajar
  scores.python += scoringRules.time[timeCategory].python;
  scores.javascript += scoringRules.time[timeCategory].javascript;
  scores.java += scoringRules.time[timeCategory].java;
  scores.csharp += scoringRules.time[timeCategory].csharp;
  scores.go += scoringRules.time[timeCategory].go;

  // ✅ Hitung skor berdasarkan minat matematika
  scores.python += scoringRules.mathInterest[mathInterestKey as keyof typeof scoringRules.mathInterest].python;
  scores.javascript += scoringRules.mathInterest[mathInterestKey as keyof typeof scoringRules.mathInterest].javascript;
  scores.java += scoringRules.mathInterest[mathInterestKey as keyof typeof scoringRules.mathInterest].java;
  scores.csharp += scoringRules.mathInterest[mathInterestKey as keyof typeof scoringRules.mathInterest].csharp;
  scores.go += scoringRules.mathInterest[mathInterestKey as keyof typeof scoringRules.mathInterest].go;

  // ✅ Hitung skor berdasarkan platform
  scores.python += scoringRules.platform[platformKey as keyof typeof scoringRules.platform].python;
  scores.javascript += scoringRules.platform[platformKey as keyof typeof scoringRules.platform].javascript;
  scores.java += scoringRules.platform[platformKey as keyof typeof scoringRules.platform].java;
  scores.csharp += scoringRules.platform[platformKey as keyof typeof scoringRules.platform].csharp;
  scores.go += scoringRules.platform[platformKey as keyof typeof scoringRules.platform].go;

  // ✅ Sort languages by score
  const sortedLanguages = languages
    .map(lang => ({ ...lang, score: scores[lang.id] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  console.log('📈 Hasil skor:', sortedLanguages);

  // ✅ Generate explanations
  const results: AssessmentResult[] = sortedLanguages.map(lang => {
    let explanation = '';
    
    if (lang.name === 'Python') {
      explanation = 'Python sangat direkomendasikan karena kemudahannya untuk pemula dan kemampuannya yang luas di berbagai bidang seperti web development, data science, dan AI. Python memiliki sintaks yang sederhana dan komunitas yang besar.';
    } else if (lang.name === 'JavaScript') {
      explanation = 'JavaScript adalah pilihan utama untuk web development modern. Dengan JavaScript, Anda dapat membangun aplikasi web yang interaktif dan dinamis, serta mengembangkan aplikasi mobile dan desktop.';
    } else if (lang.name === 'Java') {
      explanation = 'Java adalah bahasa yang stabil dan enterprise-grade, cocok untuk pengembangan aplikasi skala besar. Java juga merupakan bahasa utama untuk Android development.';
    } else if (lang.name === 'C#') {
      explanation = 'C# adalah bahasa modern dari Microsoft yang powerful untuk berbagai jenis aplikasi, terutama game development dengan Unity dan aplikasi Windows.';
    } else if (lang.name === 'Go') {
      explanation = 'Go (Golang) adalah bahasa yang dikembangkan oleh Google dengan fokus pada kesederhanaan dan performa tinggi, ideal untuk backend services dan cloud infrastructure.';
    }

    // ✅ Generate roadmap belajar
    const roadmap: string[] = [];
    if (lang.name === 'Python') {
      roadmap.push(
        'Dasar Python (variabel, tipe data, operator)',
        'Struktur kontrol (if, loop, fungsi)',
        'OOP dan modul',
        'Web Framework (Django/Flask)',
        'Project nyata'
      );
    } else if (lang.name === 'JavaScript') {
      roadmap.push(
        'JavaScript dasar (ES6+)',
        'DOM Manipulation',
        'React/Vue.js',
        'Node.js & Express',
        'Full-stack project'
      );
    } else if (lang.name === 'Java') {
      roadmap.push(
        'Java fundamentals',
        'OOP concepts',
        'Collections & Streams',
        'Spring Framework',
        'Database & REST API'
      );
    } else if (lang.name === 'C#') {
      roadmap.push(
        'C# basics',
        '.NET Framework',
        'ASP.NET Core',
        'Entity Framework',
        'Unity/Game development'
      );
    } else if (lang.name === 'Go') {
      roadmap.push(
        'Go syntax & basics',
        'Concurrency (goroutines)',
        'Web server dengan Gin',
        'Database integration',
        'Microservices'
      );
    }

    return {
      language: lang.name,
      score: Math.round((lang.score / 470) * 100), // Normalisasi ke 0-100%
      explanation,
      roadmap,
      links: lang.resources.map(url => ({
        name: new URL(url).hostname,
        url
      }))
    };
  });

  return results;
}