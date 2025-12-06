import { useState, useEffect } from "react";
import { Moon, Sun, Mail, MapPin, Globe, ExternalLink, Phone, ChevronDown } from "lucide-react";
import { LinkedinLogo } from "phosphor-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profilePhoto from "@/assets/profile-photo.png";
import flagUK from "@/assets/flag-uk.svg";
import flagGE from "@/assets/flag-ge.svg";
import flagJP from "@/assets/flag-jp.svg";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showPI, setShowPI] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  
  // Detect browser language on mount
  const getBrowserLanguage = (): 'en' | 'ka' | 'ja' => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('ka')) return 'ka';
    return 'en';
  };
  
  const [language, setLanguage] = useState<'en' | 'ka' | 'ja'>(getBrowserLanguage());

  useEffect(() => {
    // Check time of day on mount (dark mode from 6 PM to 6 AM)
    const currentHour = new Date().getHours();
    const isDarkMode = currentHour >= 18 || currentHour < 6;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }


    // Trigger progress bar animations after a brief delay
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const skills = [
    { name: "C# / .NET", level: 90 },
    { name: "Java", level: 70 },
    { name: "Python", level: 80 },
    { name: "C/C++", level: 69 },
    { name: "Swift", level: 50 },
    { name: "JavaScript", level: 10 },
    { name: "React", level: 20 },
    { name: "HTML", level: 30 },
    { name: "CSS", level: 10 },
  ];

  const coreAreas = [
    { label: { en: "Debug", ka: "დებაგი", ja: "デバッグ" }, level: 95 },
    { label: { en: "OOP", ka: "ოოპ", ja: "OOP" }, level: 85 },
    { label: { en: "Comm", ka: "კომუნიკაცია", ja: "伝達力" }, level: 90 },
    { label: { en: "Research", ka: "კვლევა", ja: "研究" }, level: 99 },
  ];

  const getCirclePath = (percentage: number) => {
    const radius = 44;
    const center = 48;
    const circumference = 2 * Math.PI * radius;
    const progress = (percentage / 100) * circumference;
    const angle = (percentage / 100) * 360;
    const radians = (angle - 90) * (Math.PI / 180);
    const x = center + radius * Math.cos(radians);
    const y = center + radius * Math.sin(radians);
    const largeArcFlag = angle > 180 ? 1 : 0;

    return `M ${center} ${center - radius} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}`;
  };

  const experience = [
    {
      year: "2023",
      role: { en: ".NET Developer", ka: ".NET დეველოპერი", ja: ".NET開発者" },
      place: { en: "Altasoft — Tbilisi, Georgia", ka: "Altasoft — თბილისი, საქართველო", ja: "Altasoft — トビリシ、ジョージア" },
      description: {
        en: "Oct 2023 – Present | Redesigning Lien & Collection Management for the Ministry of Finance using event sourcing and CQRS; developing microservices and refactoring legacy systems into modern C# codebases; building SOAP/XML interfaces and compliance services.",
        ka: "ოქტ 2023 – დღემდე | ფინანსთა მენეჯმენტის სისტემის რედიზაინი event sourcing-ისა და CQRS-ის გამოყენებით; მიკროსერვისების დეველოპმენტი და ლეგასი სისტემების რეფაქტორინგი თანამედროვე C# ში; SOAP/XML ინტერფეისებისა და კომპლაენსის სერვისების აგება.",
        ja: "2023年10月〜現在 | イベントソーシングとCQRSを使用した財務省のリエン＆コレクション管理の再設計; マイクロサービスの開発とレガシーシステムのモダンなC#コードベースへのリファクタリング; SOAP/XMLインターフェースとコンプライアンスサービスの構築。"
      },
    },
    {
      year: "2021",
      role: { en: "Java Software Engineer", ka: "Java სოფთვეარ ინჟინერი", ja: "Javaソフトウェアエンジニア" },
      place: { en: "Quantori — Remote", ka: "Quantori — დისტანციურად", ja: "Quantori — リモート" },
      description: {
        en: "Dec 2021 – Sep 2022 | Backend development for pharmaceutical industry systems; building REST APIs with Vert.x, MySQL and Docker; writing unit tests with Mockito and collaborating in Agile teams.",
        ka: "დეკ 2021 – სექტ 2022 | ფარმაცევტული ინდუსტრიის სისტემების backend დეველოპმენტი; REST API-ების აგება Vert.x, MySQL და Docker-ით; unit ტესტების წერა Mockito-თი და Agile მეთოდოლოგია.",
        ja: "2021年12月〜2022年9月 | 製薬業界システムのバックエンド開発; Vert.x、MySQL、Dockerを使用したREST APIの構築; Mockitoでのユニットテストの作成とアジャイルチームでのコラボレーション。"
      },
    },
  ];

  const education = [
    {
      year: "2019",
      title: { en: "BSc in Math & Computer Science", ka: "ბაკალავრი მათემატიკა და კომპიუტერულ მეცნიერებაში", ja: "数学・コンピュータサイエンス学士" },
      place: { en: "Free University of Tbilisi", ka: "თბილისის თავისუფალი უნივერსიტეტი", ja: "トビリシ自由大学" },
      description: {
        en: "2019 – Present | Coursework includes Cryptography, Databases, Applied Statistics, Design Patterns, Probability & Statistics, Artificial Intelligence, Distributed Systems, Swift/iOS, Oracle SQL and more.",
        ka: "2019 – დღემდე | გავლილი კურსები: კრიპტოგრაფია, მონაცემთა ბაზები, ალბათობა და გამოყენებითი სტატისტიკა, დიზაინ პატერნები, AI, დისტრიბუციული სისტემები, Swift/iOS, Oracle SQL და სხვა.",
        ja: "2019年〜現在 | コースワークには暗号理論、データベース、応用統計学、デザインパターン、確率・統計、人工知能、分散システム、Swift/iOS、Oracle SQLなどが含まれます。"
      },
    },
    {
      year: "2018",
      title: { en: "Competitive Programming Club in C++", ka: "კონკურენტული პროგრამირების კლუბი C++-ში", ja: "C++競技プログラミングクラブ" },
      place: { en: "Akaki Tsereteli State University", ka: "აკაკი წერეთლის სახელმწიფო უნივერსიტეტი", ja: "アカキ・ツェレテリ州立大学" },
      description: {
        en: "2018 – 2019 | Focused on algorithmic problem-solving, data structures, and competitive programming techniques.",
        ka: "2018 – 2019 | ფოკუსი ალგორითმული პრობლემების გადაჭრაზე, მონაცემთა სტრუქტურებზე და კონკურენტული პროგრამირების ტექნიკებზე.",
        ja: "2018年〜2019年 | アルゴリズムを用いた問題解決力の強化、データ構造の理解、そして競技プログラミングにおける高度なテクニックの習得に重点を置いて活動していました。"
      },
    },
  ];

  const projects = [
    {
      title: {
        en: "Multithreading library in C (pthreads, futures, promises, channeling)",
        ka: "მულტითრედინგის ბიბლიოთეკა C-ში (pthreads, futures, promises, channeling)",
        ja: "Cのマルチスレッドライブラリ（pthreads、futures、promises、channeling）"
      },
      link: "https://github.com/Gnems19/multi-threading_library_in_C"
    },
    {
      title: {
        en: "Online casino using Java WebSocket and Tomcat",
        ka: "ონლაინ კაზინო Java WebSocket-ისა და Tomcat-ის გამოყენებით",
        ja: "Java WebSocketとTomcatを使用したオンラインカジノ"
      },
      link: "https://github.com/Gnems19/final-project-nargizbet"
    },
    {
      title: {
        en: "Crypto wallet built with Python and FastAPI",
        ka: "კრიპტო საფულე აგებული Python-ისა და FastAPI-ით",
        ja: "PythonとFastAPIで構築された暗号ウォレット"
      },
      link: "https://github.com/Gnems19/Design_Patterns_Final_Project"
    },
    {
      title: {
        en: "Unity platformer game",
        ka: "Unity პლატფორმერ თამაში",
        ja: "Unityプラットフォーマーゲーム"
      },
      link: "https://github.com/Gnems19/Strapped"
    },
    {
      title: {
        en: "iOS weather app developed with Swift and CocoaPods",
        ka: "iOS ამინდის აპლიკაცია შექმნილი Swift-ისა და CocoaPods-ით",
        ja: "SwiftとCocoaPodsで開発されたiOS天気アプリ"
      },
      link: ""
    },
    {
      title: {
        en: "Mini games: Tetris, Sudoku, Breakout, Yahtzee, and Boggle",
        ka: "მინი თამაშები: Tetris, Sudoku, Breakout, Yahtzee და Boggle",
        ja: "ミニゲーム：テトリス、数独、ブレイクアウト、ヤッツィー、ボグル"
      },
      link: ""
    },
  ];

  const translations = {
    en: {
      cvButton: "CV",
      piButton: "PI",
      nameValue: "Gigi Nemsadze",
      jobTitle: "Software\nEngineer",
      personal: "Personal",
      name: "Name",
      birthday: "Birthday",
      birthdayValue: "January 17, 2002",
      nationality: "Nationality",
      nationalityValue: "Georgian",
      languages: "Languages",
      languagesValue: "Georgian, English, Japanese",
      contact: "Contact",
      email: "Email",
      website: "Website",
      programmingLanguages: "Programming Languages",
      software: "Software",
      profile: "Profile",
      profileText: "I am a .NET Developer and Software Engineer with a passion for problem-solving and continuous learning. I specialize in building scalable backend systems, refactoring legacy code, and implementing modern architectural patterns like CQRS and event sourcing.",
      work: "Work",
      education: "Education",
      projects: "Projects",
      achievements: "Achievements",
      achievementsList: [
        "Honorable Mention — ACM ICPC Northern Eurasia Finals (2022)",
        "National Math Olympiad finalist (2019)"
      ],
      personalInterests: "Personal Interests",
      hobbiesActivities: "Hobbies & Activities",
      hobbies: [
        "Swimming",
        "Skiing",
        "Learning Japanese",
        "Singing in Japanese choir",
        "Board games",
        "Playing guitar",
        "Drawing",
        "Clay crafting",
        "Cooking"
      ],
      personalRecords: "Personal Records",
      swimming: "Swimming",
      swimmingRecord: "100m in 1:36",
      skiing: "Skiing",
      skiingRecord: "Max speed: 79 km/h (accidentally)",
      rubiksCube: "Rubik's Cube",
      rubiksCubeRecord: "Solved in 55 seconds",
      strength: "Strength",
      strengthRecords: [
        "Bench press: 100kg",
        "Push-ups: 60 in one go",
        "Pull-ups: 20 in one go",
        "Plank: 5 minutes straight"
      ],
      sportsGames: "Sports & Games",
      favorites: "Favorites",
      favoritesList: [
        "Pool",
        "Ping-pong",
        "Water polo (former pro)"
      ],
      downToPlay: "Down to Play",
      downToPlayList: [
        "Football (still learning)",
        "Basketball (still learning)",
        "Monkey in the Middle",
        "Capture the Flag"
      ],
      chess: "Chess",
      chessRating: "Rating: 800"
    },
    ka: {
      cvButton: "სივი",
      piButton: "მე",
      nameValue: "გიგი ნემსაძე",
      jobTitle: "სოფთვეარ\nინჟინერი",
      personal: "პირადი",
      name: "სახელი",
      birthday: "დაბადების თარიღი",
      birthdayValue: "17 იანვარი, 2002",
      nationality: "მოქალაქეობა",
      nationalityValue: "ქართველი",
      languages: "ენები",
      languagesValue: "ქართული, ინგლისური, იაპონური",
      contact: "კონტაქტი",
      email: "ელ. ფოსტა",
      website: "ვებსაიტი",
      programmingLanguages: "პროგრამირების ენები",
      software: "პროგრამები",
      profile: "პროფილი",
      profileText: "მე ვარ .NET დეველოპერი და სოფთვეარ ინჟინერი, გატაცებული ვარ პრობლემების გადაჭრითა და სწავლით. გამოცდილება მაქ მასშტაბურ ბექენდ სისტემების აგებაში, ლეგასი კოდის რეფაქტორინგში და თანამედროვე არქიტექტურული პატერნების (როგორიცაა CQRS და event sourcing) დანერგვაში.",
      work: "სამუშაო გამოცდილება",
      education: "განათლება",
      projects: "პროექტები",
      achievements: "მიღწევები",
      achievementsList: [
        "საპატიო სიგელი — ACM ICPC ჩრდილოეთ ევრაზიის ფინალი (2022)",
        "მათემატიკის ეროვნული ოლიმპიადის ფინალისტი (2019)"
      ],
      personalInterests: "პირადი ინტერესები",
      hobbiesActivities: "ჰობი და აქტივობები",
      hobbies: [
        "ცურვა",
        "თხილამურებით სრიალი",
        "იაპონურის სწავლა",
        "იაპონურ გუნდში სიმღერა",
        "სამაგიდო თამაშები",
        "გიტარაზე დაკვრა",
        "ხატვა",
        "თიხით ძერწვა",
        "კულინარია"
      ],
      personalRecords: "პირადი რეკორდები",
      swimming: "ცურვა",
      swimmingRecord: "100მ 1:36-ში",
      skiing: "თხილამურებით სრიალი",
      skiingRecord: "მაქს. სიჩქარე: 79 კმ/სთ (შემთხვევით)",
      rubiksCube: "რუბიკის კუბიკი",
      rubiksCubeRecord: "ავაწყვე 55 წამში",
      strength: "ძალა",
      strengthRecords: [
        "ბენჩ პრესი: 100კგ",
        "აზიდვები: 60 ერთი მისვლით",
        "ბარზე აწევა: 20 ერთ მისვლით",
        "პლანკი: 5 წუთი უწყვეტად"
      ],
      sportsGames: "სპორტი და თამაშები",
      favorites: "ფავორიტები",
      favoritesList: [
        "ბილიარდი",
        "პინგ-პონგი",
        "წყალბურთი (ყოფილი ქუთაისის ნაკრების წევრი)"
      ],
      downToPlay: "მზად ვარ ვითამაშო",
      downToPlayList: [
        "ფეხბურთი (ჯერ ვსწავლობ)",
        "კალათბურთი (ჯერ ვსწავლობ)",
        "წრეში ბურთი",
        "დროშობანა"
      ],
      chess: "ჭადრაკი",
      chessRating: "რეიტინგი: 800"
    },
    ja: {
      cvButton: "経歴",
      piButton: "個人",
      nameValue: "ギギネムサゼ",
      jobTitle: "ソフトウェア\nエンジニア",
      personal: "個人情報",
      name: "名前",
      birthday: "生年月日",
      birthdayValue: "2002年1月17日",
      nationality: "国籍",
      nationalityValue: "ジョージア",
      languages: "言語",
      languagesValue: "ジョージア語、英語、日本語",
      contact: "連絡先",
      email: "メール",
      website: "ウェブサイト",
      programmingLanguages: "プログラミング言語",
      software: "ソフトウェア",
      profile: "プロフィール",
      profileText: "私は.NET開発者兼ソフトウェアエンジニアとして、問題解決と継続的な学習に情熱を持っています。スケーラブルなバックエンドシステムの構築、レガシーコードのリファクタリング、CQRSやイベントソーシングなどのモダンなアーキテクチャパターンの実装を専門としています。",
      work: "職務経歴",
      education: "学歴",
      projects: "プロジェクト",
      achievements: "実績",
      achievementsList: [
        "優秀賞 — ACM ICPC北ユーラシア決勝 (2022)",
        "全国数学オリンピックファイナリスト (2019)"
      ],
      personalInterests: "個人的な興味",
      hobbiesActivities: "趣味とアクティビティ",
      hobbies: [
        "水泳",
        "スキー",
        "日本語学習",
        "日本語合唱団への参加",
        "ボードゲーム",
        "ギター演奏",
        "絵を描く",
        "粘土工芸",
        "料理"
      ],
      personalRecords: "個人記録",
      swimming: "水泳",
      swimmingRecord: "100m 1分36秒",
      skiing: "スキー",
      skiingRecord: "最高速度：79 km/h（偶然）",
      rubiksCube: "ルービックキューブ",
      rubiksCubeRecord: "55秒で解決",
      strength: "筋力",
      strengthRecords: [
        "ベンチプレス：100kg",
        "腕立て伏せ：60回連続",
        "懸垂：20回連続",
        "プランク：5分間連続"
      ],
      sportsGames: "スポーツとゲーム",
      favorites: "お気に入り",
      favoritesList: [
        "ビリヤード",
        "卓球",
        "水球（元選手）"
      ],
      downToPlay: "一緒にプレイできます",
      downToPlayList: [
        "サッカー（学習中）",
        "バスケットボール（学習中）",
        "モンキーゲーム",
        "キャプチャー・ザ・フラッグ"
      ],
      chess: "チェス",
      chessRating: "レーティング：800"
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white dark:bg-cv-dark">
      <div className="cv-shell bg-white dark:bg-cv-dark">
        {/* Top Menu Bar */}
        <nav className="sticky top-0 z-50 bg-white dark:bg-cv-sidebar border-b-2 border-foreground/10">
          <div className="max-w-6xl mx-auto px-6 py-3 grid grid-cols-3 items-center">
            <div className="flex justify-start gap-3">
              <Button
                onClick={() => setShowPI(false)}
                className={`${language === "ka" ? "font-georgian" : ""} w-12 h-9 p-0 text-xs font-bold transition-all border border-foreground/20 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[2px] active:shadow-none active:translate-y-1 ${!showPI
                  ? 'bg-cv-purple text-white'
                  : 'bg-muted/20 text-muted-foreground'
                  }`}
              >
                {t.cvButton}
              </Button>
              <Button
                onClick={() => setShowPI(true)}
                className={`${language === "ka" ? "font-georgian" : ""} w-12 h-9 p-0 text-xs font-bold transition-all border border-foreground/20 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[2px] active:shadow-none active:translate-y-1 ${showPI ? "bg-cv-teal text-cv-dark" : "bg-muted/20 text-muted-foreground"
                  }`}
              >
                {t.piButton}
              </Button>
            </div>
            <div className="flex justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-9 h-9 cursor-pointer hover:scale-110 transition-transform duration-150 focus:outline-none flex items-center justify-center">
                    <img
                      src={language === 'en' ? flagUK : language === 'ka' ? flagGE : flagJP}
                      alt={language === 'en' ? 'English flag' : language === 'ka' ? 'Georgian flag' : 'Japanese flag'}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="bg-white dark:bg-[hsl(30_20%_15%)] border border-border shadow-lg z-[100] text-foreground"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage('en')}
                    className="cursor-pointer flex items-center gap-2 hover:bg-accent focus:bg-accent"
                  >
                    <img src={flagUK} alt="English flag" className="w-5 h-5 object-contain" loading="lazy" />
                    <span>English</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage('ka')}
                    className="cursor-pointer flex items-center gap-2 hover:bg-accent focus:bg-accent"
                  >
                    <img src={flagGE} alt="Georgian flag" className="w-5 h-5 object-contain" loading="lazy" />
                    <span>ქართული</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage('ja')}
                    className="cursor-pointer flex items-center gap-2 hover:bg-accent focus:bg-accent"
                  >
                    <img src={flagJP} alt="Japanese flag" className="w-5 h-5 object-contain" loading="lazy" />
                    <span>日本語</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex justify-end">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                          relative w-9 h-9 
                          rounded-xl overflow-hidden
                          border border-white/20
                          bg-gradient-to-b from-white/10 to-white/5
                          backdrop-blur-md
                          shadow-[0_1px_3px_rgba(0,0,0,0.2),0_0_10px_rgba(255,255,255,0.3)]
                          transition-colors duration-700
                        "
              >

                {/* Sky background that changes */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-orange-300 dark:from-slate-900 dark:to-indigo-950 transition-all duration-700" />
                {/* Sun */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                >
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      {/* {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-0.5 h-1.5 bg-red-400 rounded-full"
                        style={{
                          transform: `rotate(${i * 45}deg) translateY(-9px)`,
                          transformOrigin: '0 0',
                        }}
                      />
                    ))} */}
                    </div>
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-red-400 via-orange-500 to-red-500 shadow-md shadow-red-400/50" />
                  </div>
                </div>
                {/* Moon */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                >
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-md shadow-slate-400/30" />
                    <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-slate-300/40" />
                    <div className="absolute top-2 left-2 w-0.5 h-0.5 rounded-full bg-slate-300/30" />
                    <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 rounded-full bg-slate-300/50" />
                  </div>
                </div>
              </button>

            </div>
          </div>
        </nav>
        {/* Stars (only visible in dark mode) */}
        {
          // isDark && (
          //   <div className="absolute inset-0 transition-opacity duration-700">
          //     <div
          //         key={1}
          //         className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          //         style={{
          //           /**random distribution  around the center*/

          //           top: `${10 + (1 * 10)}%`,
          //           right: `${20 + (1 * 50)}%`,
          //           animationDelay: `${1 * 0.3}s`,
          //           animationDuration: '2s',
          //         }}
          //       />

          //   </div>
          // )
        }
        {/* Centered container for large screens */}
        <div className="min-h-[calc(100vh-60px)] flex items-center justify-center py-8">
          <div className="max-w-6xl w-full mx-auto bg-white dark:bg-cv-dark shadow-2xl overflow-hidden">
            {!showPI ? (
              <div>
                {/* Header */}
                <header className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 lg:p-12 bg-white dark:bg-cv-sidebar">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full border-4 border-cv-purple dark:border-cv-purple"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-white dark:border-cv-sidebar overflow-hidden">
                      <img src={profilePhoto} alt="Gigi Nemsadze" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                    <h1
                      className={`${language === "ka" ? "font-georgian" : "font-outfit"} text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-gradient-purple leading-tight`}
                    >
                      {t.nameValue}
                    </h1>
                    <div className="hidden sm:block w-1 h-16 bg-foreground/20 dark:bg-foreground/20 rounded-full" />
                    <h2
                      className={`${language === "ka" ? "font-georgian" : "font-outfit"} text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-gradient-pink leading-tight whitespace-pre-line`}
                    >{t.jobTitle}
                    </h2>
                  </div>
                </header>

                {/* Separator Line */}
                <div className="h-[2px] bg-muted-foreground/20 rounded-full" />

                <div className="flex flex-col lg:flex-row">
                  {/* Sidebar */}
                  <aside className="lg:w-1/3 bg-white dark:bg-cv-sidebar border-b lg:border-b-0 lg:border-r-2 border-muted-foreground/20 p-8 lg:p-12 relative">
                    {/* Personal */}
                    <section className="mb-10">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20`}>
                        {t.personal}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.nameValue}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1">{t.birthday}</div>
                          <div className="text-xs text-muted-foreground">{t.birthdayValue}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1">{t.nationality}</div>
                          <div className="text-xs text-muted-foreground">{t.nationalityValue}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1">{t.languages}</div>
                          <div className="text-xs text-muted-foreground">{t.languagesValue}</div>
                        </div>
                      </div>
                    </section>

                    {/* Contact */}
                    <section className="mb-10">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20`}>
                        {t.contact}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {t.email}
                          </div>
                          <a href="mailto:giginemsadze33@gmail.com" className="text-xs text-muted-foreground break-all hover:text-cv-purple transition-colors">giginemsadze33@gmail.com</a>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            {t.website}
                          </div>
                          <a href="https://chocola.ge" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-cv-purple transition-colors">chocola.ge</a>
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                            <LinkedinLogo className="w-3 h-3" />
                            LinkedIn
                          </div>
                          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-cv-purple transition-colors">linkedin.com/in/giginemsadze</a>
                        </div>
                      </div>
                    </section>

                    {/* Skills */}
                    <section>
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20`}>
                        {t.programmingLanguages}
                      </h3>
                      {skills.map((skill, index) => (
                        <div key={skill.name} className="mb-5 group">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold uppercase tracking-wide">
                              {skill.name}
                            </span>
                          </div>
                          <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                              style={{
                                width: animateProgress ? `${skill.level}%` : '0%',
                                backgroundColor: '#7250FC',
                                transition: animateProgress ? `width 1s ease-out ${index * 0.1}s, filter 0.3s ease` : 'filter 0.3s ease',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </section>

                    {/* Software */}
                    <section className="mt-10">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20`}>
                        {t.software}
                      </h3>
                      <div className="mb-5 group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold uppercase tracking-wide">
                            IDE (VSCode, Visual Studio)
                          </span>
                        </div>
                        <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                            style={{
                              width: animateProgress ? '90%' : '0%',
                              backgroundColor: '#7250FC',
                              transition: animateProgress ? 'width 1s ease-out 0.9s, filter 0.3s ease' : 'filter 0.3s ease',
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-5 group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold uppercase tracking-wide">
                            CMD
                          </span>
                        </div>
                        <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                            style={{
                              width: animateProgress ? '70%' : '0%',
                              backgroundColor: '#7250FC',
                              transition: animateProgress ? 'width 1s ease-out 1s, filter 0.3s ease' : 'filter 0.3s ease',
                            }}
                          />
                        </div>
                      </div>
                      <div className="mb-5 group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold uppercase tracking-wide">
                            Git
                          </span>
                        </div>
                        <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                            style={{
                              width: animateProgress ? '90%' : '0%',
                              backgroundColor: '#7250FC',
                              transition: animateProgress ? 'width 1s ease-out 1.1s, filter 0.3s ease' : 'filter 0.3s ease',
                            }}
                          />
                        </div>
                      </div>
                    </section>

                    {/* 10x Badge */}
                    <div className="mt-16">
                      <svg width="90" height="33" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-auto">
                        <g clipPath="url(#svg-clip0)">
                          <path d="M59.9994 13.0728H4.75012V21.5028H59.9994V13.0728Z" fill="#7250FC"></path>
                          <path d="M0 12.1057H4.7245V7.33415H1.69273V3.38485C3.9493 3.22053 5.1014 2.27978 5.64203 0.42334H10.2492V12.1057H14.504V17.2773H0V12.1057Z" className="fill-foreground"></path>
                          <path d="M20.1209 16.807C17.0654 15.5376 15.3726 12.9988 15.3726 8.95602V8.90898C15.3726 7.02871 15.8192 5.43005 16.6652 4.11362C18.405 1.43372 21.5314 0 25.5742 0C27.5486 0 29.3115 0.352474 30.8161 1.03421C33.8717 2.44472 35.6817 5.10079 35.6817 8.88515V8.97923C35.6817 10.9536 35.2584 12.5754 34.4123 13.8919C32.7196 16.5009 29.617 17.7471 25.5272 17.7471C23.4588 17.7471 21.6719 17.4417 20.1209 16.807ZM29.8289 8.95602C29.8289 6.18204 28.1832 4.98351 25.5272 4.98351C22.8711 4.98351 21.2254 6.2529 21.2254 8.9328V8.95602C21.2254 11.518 22.8241 12.7642 25.5033 12.7642C28.1826 12.7642 29.8283 11.6597 29.8283 8.95602H29.8289Z" className="fill-foreground"></path>
                          <path d="M42.4746 17.2774H35.7281L42.2865 10.1552L36.2926 3.64392H42.8509L45.6481 6.84062L48.4453 3.64392H54.9566L48.9859 10.2023L55.2388 17.2774H48.6805L45.6011 13.6341L42.4746 17.2774Z" className="fill-foreground"></path>
                        </g>
                        <defs>
                          <clipPath id="svg-clip0">
                            <rect width="60" height="21.5027" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </aside>

                  {/* Main Content */}
                  <main className="lg:w-2/3 p-8 lg:p-12 bg-white dark:bg-cv-dark">
                    {/* Profile */}
                    <section className="mb-12">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4`}>
                        {t.profile}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground">
                        {t.profileText}
                      </p>
                    </section>

                    {/* Core Areas */}
                    <section className="mb-12">
                      <div className="flex flex-wrap gap-6 justify-center mb-8">
                        {coreAreas.map((area, index) => {
                          const radius = 44;
                          const circumference = 2 * Math.PI * radius;
                          const strokeDashoffset = animateProgress
                            ? circumference - (area.level / 100) * circumference
                            : circumference;

                          return (
                            <div key={area.label.en} className="relative w-36 h-36 group cursor-pointer">
                              <svg width="144" height="144" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
                                <defs>
                                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#7250FC" />
                                    <stop offset="100%" stopColor="#B47CFF" />
                                  </linearGradient>
                                </defs>
                                <circle
                                  cx="48"
                                  cy="48"
                                  r="44"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="8"
                                  className="text-muted/20"
                                />
                                <circle
                                  cx="48"
                                  cy="48"
                                  r="44"
                                  fill="none"
                                  stroke={`url(#gradient-${index})`}
                                  strokeWidth="8"
                                  strokeLinecap="round"
                                  strokeDasharray={circumference}
                                  strokeDashoffset={strokeDashoffset}
                                  className="transition-all duration-1000 ease-out group-hover:brightness-125"
                                  style={{
                                    transitionDelay: `${index * 0.15}s`,
                                  }}
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`text-base font-black uppercase tracking-wide text-foreground ${language === 'ka' ? 'font-georgian' : ''}`}>
                                  {area.label[language]}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-12">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-8`}>
                        {t.work}
                      </h3>
                      <div className="relative">

                        {experience.map((exp, index) => (
                          <div
                            key={exp.year}
                            className="flex gap-4 mb-8 relative group cursor-pointer"
                          >
                            {/* Year Badge */}
                            <div className="relative w-[50px] h-[20px] flex-shrink-0">
                              <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                                <path d="M3.33987 0.750002L41.4631 0.75C42.2532 0.75 43.2409 1.22 43.6592 1.8L48.5161 8.48C48.9809 9.13 48.9344 10.15 48.3999 10.76L42.3811 17.66C41.9512 18.15 41.0216 18.55 40.3128 18.55H3.33987C1.30647 18.55 0.0748724 16.63 1.14386 15.14L4.36238 10.71C4.7923 10.12 4.7923 9.16 4.36238 8.57L1.14386 4.14C0.0748724 2.67 1.31809 0.750002 3.33987 0.750002Z"
                                  className="fill-foreground stroke-foreground dark:fill-white dark:stroke-white group-hover:fill-cv-purple group-hover:stroke-cv-purple transition-colors"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-black text-background dark:text-cv-dark group-hover:text-white transition-colors">{exp.year}</span>
                              </div>
                            </div>

                            <div className="relative flex flex-col items-center flex-shrink-0 w-3">
                              {/* Continuous vertical line, behind the dot */}
                              {index !== education.length - 1
                                ? <div className="absolute top-0 bottom-[-45%] left-1/2 -translate-x-1/2 w-[2px] bg-foreground/20 dark:bg-white/20 mt-1 rounded-full pointer-events-none" />
                                : <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-foreground/20 dark:bg-white/20 mt-1 rounded-full pointer-events-none" />
                              }
                              {/* Dot on the line */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-foreground dark:bg-white z-10 mt-1 group-hover:bg-cv-purple group-hover:scale-125 transition-all" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h4 className="text-sm font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-cv-purple transition-colors">
                                {exp.role[language]}
                              </h4>
                              <p className="text-xs uppercase text-muted-foreground mb-2 font-bold group-hover:text-cv-purple transition-colors">{exp.place[language]}</p>
                              <p className="text-xs text-foreground/80 leading-relaxed">{exp.description[language]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Education */}
                    <section className="mb-12">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-8`}>
                        {t.education}
                      </h3>
                      <div className="relative">
                        {education.map((edu, index) => (
                          <div
                            key={edu.year}
                            className="flex gap-4 mb-8 relative group cursor-pointer"
                          >
                            {/* Year Badge */}
                            <div className="relative w-[50px] h-[20px] flex-shrink-0">
                              <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                                <path d="M3.33987 0.750002L41.4631 0.75C42.2532 0.75 43.2409 1.22 43.6592 1.8L48.5161 8.48C48.9809 9.13 48.9344 10.15 48.3999 10.76L42.3811 17.66C41.9512 18.15 41.0216 18.55 40.3128 18.55H3.33987C1.30647 18.55 0.0748724 16.63 1.14386 15.14L4.36238 10.71C4.7923 10.12 4.7923 9.16 4.36238 8.57L1.14386 4.14C0.0748724 2.67 1.31809 0.750002 3.33987 0.750002Z"
                                  className="fill-foreground stroke-foreground dark:fill-white dark:stroke-white group-hover:fill-cv-purple group-hover:stroke-cv-purple transition-colors"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-black text-background dark:text-cv-dark group-hover:text-white transition-colors">{edu.year}</span>
                              </div>
                            </div>

                            <div className="relative flex flex-col items-center flex-shrink-0 w-3">
                              {/* Continuous vertical line, behind the dot */}
                              {index !== education.length - 1
                                ? <div className="absolute top-0 bottom-[-45%] left-1/2 -translate-x-1/2 w-[2px] bg-foreground/20 dark:bg-white/20 mt-1 rounded-full pointer-events-none" />
                                : <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-foreground/20 dark:bg-white/20 mt-1 rounded-full pointer-events-none" />
                              }
                              {/* Dot on the line */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-foreground dark:bg-white z-10 mt-1 group-hover:bg-cv-purple group-hover:scale-125 transition-all" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h4 className="text-sm font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-cv-purple transition-colors">
                                {edu.title[language]}
                              </h4>
                              <p className="text-xs uppercase text-muted-foreground mb-2 font-bold group-hover:text-cv-purple transition-colors">{edu.place[language]}</p>
                              <p className="text-xs text-foreground/80 leading-relaxed">
                                {edu.description[language]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-12">
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4`}>
                        {t.projects}
                      </h3>
                      <ul className="space-y-2 text-xs leading-relaxed text-foreground">
                        {projects.map((project, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-cv-teal mt-1">•</span>
                            {project.link ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cv-teal transition-colors inline-flex items-center gap-1 group"
                              >
                                {project.title[language]}
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ) : (
                              <span>{project.title[language]}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Achievements */}
                    <section>
                      <h3 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4`}>
                        {t.achievements}
                      </h3>
                      <ul className="space-y-2 text-xs leading-relaxed text-foreground list-disc list-inside marker:text-cv-teal">
                        {t.achievementsList.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </section>
                  </main>
                </div>
              </div>
            ) : (
              /* Personal Interests Page */
              <div className="p-8 lg:p-12">
                <h1 className={`${language === 'ka' ? 'font-georgian' : FontFace} text-5xl font-black uppercase text-gradient-purple text-center mb-12`}>
                  {t.personalInterests}
                </h1>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Hobbies & Activities */}
                  <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10">
                    <h2 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3`}>
                      {t.hobbiesActivities}
                    </h2>
                    <ul className="space-y-3 text-sm text-foreground">
                      {t.hobbies.map((hobby, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="text-cv-teal text-lg">•</span>
                          <span>{hobby}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Records */}
                  <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10">
                    <h2 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3`}>
                      {t.personalRecords}
                    </h2>
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-1">{t.swimming}</h3>
                        <p className="text-sm text-muted-foreground">{t.swimmingRecord}</p>
                      </div>
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-1">{t.skiing}</h3>
                        <p className="text-sm text-muted-foreground">{t.skiingRecord}</p>
                      </div>
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-1">{t.rubiksCube}</h3>
                        <p className="text-sm text-muted-foreground">{t.rubiksCubeRecord}</p>
                      </div>
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-1">{t.strength}</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {t.strengthRecords.map((record, index) => (
                            <li key={index}>• {record}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sports & Games */}
                  <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10 md:col-span-2">
                    <h2 className={`${language === 'ka' ? 'font-georgian' : 'font-anton'} text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3`}>
                      {t.sportsGames}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-2">{t.favorites}</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {t.favoritesList.map((favorite, index) => (
                            <li key={index}>• {favorite}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-2">{t.downToPlay}</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {t.downToPlayList.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-cv-purple font-bold text-sm mb-2">{t.chess}</h3>
                        <p className="text-sm text-muted-foreground">{t.chessRating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
