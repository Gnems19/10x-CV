import { useState, useEffect } from "react";
import { Moon, Sun, Mail, MapPin, Globe, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [showPI, setShowPI] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
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
    { label: "Debug", level: 95 },
    { label: "OOP", level: 85 },
    { label: "Comm", level: 90 },
    { label: "Research", level: 99 },
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
      role: ".NET Developer",
      place: "Altasoft — Tbilisi, Georgia",
      description: "Oct 2023 – Present | Redesigning Lien & Collection Management for the Ministry of Finance using event sourcing and CQRS; developing microservices and refactoring legacy systems into modern C# codebases; building SOAP/XML interfaces and compliance services.",
    },
    {
      year: "2021",
      role: "Java Software Engineer",
      place: "Quantori — Remote",
      description: "Dec 2021 – Sep 2022 | Backend development for pharmaceutical industry systems; building REST APIs with Vert.x, MySQL and Docker; writing unit tests with Mockito and collaborating in Agile teams.",
    },
  ];

  const education = [
    {
      year: "2019",
      title: "BSc in Math & Computer Science",
      place: "Free University of Tbilisi",
      description: "2019 – Present | Coursework includes C++, Java OOP, Databases, Applied Statistics, Design Patterns, Probability & Statistics, Artificial Intelligence, Distributed Systems, Swift/iOS, Oracle SQL and more.",
    },
    {
      year: "2018",
      title: "Competitive Programming Club in C++",
      place: "Akaki Tsereteli State University",
      description: "2018 – 2019 | Focused on algorithmic problem-solving, data structures, and competitive programming techniques.",
    },
  ];

  const projects = [
    { title: "Multithreading library in C (pthreads, futures, promises, channeling)", link: "https://github.com/Gnems19/multi-threading_library_in_C" },
    { title: "Online casino using Java WebSocket and Tomcat", link: "https://github.com/Gnems19/final-project-nargizbet" },
    { title: "Crypto wallet built with Python and FastAPI", link: "https://github.com/Gnems19/Strapped" },
    { title: "Unity platformer game", link: "https://github.com/Gnems19/Design_Patterns_Final_Project" },
    { title: "iOS weather app developed with Swift and CocoaPods", link: "" },
    { title: "Mini games: Tetris, Sudoku, Breakout, Yahtzee, and Boggle", link: "" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-cv-dark">
      {/* Top Menu Bar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-cv-sidebar border-b-2 border-foreground/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex gap-3">
            <Button
              onClick={() => setShowPI(false)}
              className={`font-bold shadow-sm hover:opacity-90 transition-opacity border-0 ${
                !showPI 
                  ? 'bg-cv-purple text-white' 
                  : 'bg-muted/20 text-muted-foreground'
              }`}
              size="sm"
            >
              CV
            </Button>
            <Button
              onClick={() => setShowPI(true)}
              className={`font-bold shadow-sm hover:opacity-90 transition-opacity border-0 ${
                showPI 
                  ? 'bg-cv-teal text-cv-dark' 
                  : 'bg-muted/20 text-muted-foreground'
              }`}
              size="sm"
            >
              PI
            </Button>
          </div>
          <Button
            onClick={toggleTheme}
            className="bg-cv-accent text-cv-dark font-bold shadow-sm hover:opacity-90 transition-opacity border-0"
            size="sm"
          >
            {isDark ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {isDark ? "Light" : "Dark"}
          </Button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto bg-white dark:bg-cv-dark">
        {!showPI ? (
          <div>
            {/* Header */}
            <header className="flex items-center gap-8 p-8 lg:p-12 bg-white dark:bg-cv-sidebar">
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-4 border-cv-purple dark:border-cv-purple"></div>
            <div className="absolute inset-2 rounded-full border-4 border-white dark:border-cv-sidebar overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Gigi Nemsadze" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <h1 className="font-outfit text-5xl lg:text-6xl font-black uppercase text-gradient-purple leading-tight">
              Gigi Nemsadze
            </h1>
            <div className="w-1 h-16 bg-foreground/20 dark:bg-white/20 rounded-full" />
            <h2 className="font-outfit text-4xl lg:text-5xl font-black uppercase text-gradient-pink leading-tight">
              Software<br/>Engineer
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
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20">
                Personal
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1">Name</div>
                  <div className="text-xs text-muted-foreground">Gigi Nemsadze</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1">Birthday</div>
                  <div className="text-xs text-muted-foreground">January 17, 2002</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1">Nationality</div>
                  <div className="text-xs text-muted-foreground">Georgian</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1">Languages</div>
                  <div className="text-xs text-muted-foreground">Georgian, English, Japanese</div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20">
                Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    Email
                  </div>
                  <div className="text-xs text-muted-foreground break-all">giginemsadze33@gmail.com</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    Website
                  </div>
                  <a href="https://chocola.ge" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-cv-purple transition-colors">chocola.ge</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Linkedin className="w-3 h-3" />
                    LinkedIn
                  </div>
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-cv-purple transition-colors">linkedin.com/in/giginemsadze</a>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20">
                Programming Languages
              </h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                  <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: '#7250FC',
                      }}
                    />
                  </div>
                </div>
              ))}
            </section>

            {/* Software */}
            <section className="mt-10">
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase pb-3 mb-5 border-b-2 border-foreground/20">
                Software
              </h3>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide">
                    IDE (VSCode, Visual Studio)
                  </span>
                </div>
                <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '90%',
                      backgroundColor: '#7250FC',
                    }}
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide">
                    CMD
                  </span>
                </div>
                <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '70%',
                      backgroundColor: '#7250FC',
                    }}
                  />
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Git
                  </span>
                </div>
                <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '90%',
                      backgroundColor: '#7250FC',
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
                  <path d="M0 12.1057H4.7245V7.33415H1.69273V3.38485C3.9493 3.22053 5.1014 2.27978 5.64203 0.42334H10.2492V12.1057H14.504V17.2773H0V12.1057Z" className="fill-cv-dark dark:fill-white"></path>
                  <path d="M20.1209 16.807C17.0654 15.5376 15.3726 12.9988 15.3726 8.95602V8.90898C15.3726 7.02871 15.8192 5.43005 16.6652 4.11362C18.405 1.43372 21.5314 0 25.5742 0C27.5486 0 29.3115 0.352474 30.8161 1.03421C33.8717 2.44472 35.6817 5.10079 35.6817 8.88515V8.97923C35.6817 10.9536 35.2584 12.5754 34.4123 13.8919C32.7196 16.5009 29.617 17.7471 25.5272 17.7471C23.4588 17.7471 21.6719 17.4417 20.1209 16.807ZM29.8289 8.95602C29.8289 6.18204 28.1832 4.98351 25.5272 4.98351C22.8711 4.98351 21.2254 6.2529 21.2254 8.9328V8.95602C21.2254 11.518 22.8241 12.7642 25.5033 12.7642C28.1826 12.7642 29.8283 11.6597 29.8283 8.95602H29.8289Z" className="fill-cv-dark dark:fill-white"></path>
                  <path d="M42.4746 17.2774H35.7281L42.2865 10.1552L36.2926 3.64392H42.8509L45.6481 6.84062L48.4453 3.64392H54.9566L48.9859 10.2023L55.2388 17.2774H48.6805L45.6011 13.6341L42.4746 17.2774Z" className="fill-cv-dark dark:fill-white"></path>
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
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4">
                Profile
              </h3>
              <p className="text-sm leading-relaxed text-foreground">
                I am a .NET Developer and Software Engineer with a passion for problem-solving and continuous learning.
                I specialize in building scalable backend systems, refactoring legacy code, and implementing modern
                architectural patterns like CQRS and event sourcing.
              </p>
            </section>

            {/* Core Areas */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-6 justify-center mb-8">
                {coreAreas.map((area, index) => (
                  <div
                    key={area.label}
                    className="relative w-32 h-32"
                  >
                    <svg width="128" height="128" viewBox="0 0 96 96" className="absolute inset-0 -rotate-90">
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
                      <path
                        d={getCirclePath(area.level)}
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base font-black uppercase tracking-wide text-foreground">
                        {area.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-8">
                Work
              </h3>
              <div className="relative">
                {/* Continuous vertical line */}
                <div className="absolute left-[72px] top-2 bottom-0 w-[1px] bg-foreground/20 dark:bg-white/20" />
                
                {experience.map((exp, index) => (
                  <div
                    key={exp.year}
                    className="flex gap-4 mb-8 relative"
                  >
                    {/* Year Badge */}
                    <div className="relative w-[50px] h-[20px] flex-shrink-0 mt-1">
                      <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                        <path d="M3.33987 0.750002L41.4631 0.75C42.2532 0.75 43.2409 1.22 43.6592 1.8L48.5161 8.48C48.9809 9.13 48.9344 10.15 48.3999 10.76L42.3811 17.66C41.9512 18.15 41.0216 18.55 40.3128 18.55H3.33987C1.30647 18.55 0.0748724 16.63 1.14386 15.14L4.36238 10.71C4.7923 10.12 4.7923 9.16 4.36238 8.57L1.14386 4.14C0.0748724 2.67 1.31809 0.750002 3.33987 0.750002Z" 
                          className="fill-foreground stroke-foreground dark:fill-white dark:stroke-white" 
                          strokeWidth="1.5" 
                          strokeMiterlimit="10" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-black text-background dark:text-cv-dark">{exp.year}</span>
                      </div>
                    </div>

                    {/* Dot on the continuous line */}
                    <div className="relative flex flex-col items-center flex-shrink-0 w-3">
                      <div className="w-3 h-3 rounded-full bg-foreground dark:bg-white z-10 mt-1" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-sm font-black uppercase tracking-wide text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-xs uppercase text-muted-foreground mb-2 font-bold">{exp.place}</p>
                      <p className="text-xs text-foreground/80 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-12">
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-8">
                Education
              </h3>
              <div className="relative">
                {/* Continuous vertical line */}
                <div className="absolute left-[72px] top-2 bottom-0 w-[1px] bg-foreground/20 dark:bg-white/20" />
                
                {education.map((edu, index) => (
                  <div 
                    key={edu.year} 
                    className="flex gap-4 mb-8 relative"
                  >
                    {/* Year Badge */}
                    <div className="relative w-[50px] h-[20px] flex-shrink-0 mt-1">
                      <svg width="50" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                        <path d="M3.33987 0.750002L41.4631 0.75C42.2532 0.75 43.2409 1.22 43.6592 1.8L48.5161 8.48C48.9809 9.13 48.9344 10.15 48.3999 10.76L42.3811 17.66C41.9512 18.15 41.0216 18.55 40.3128 18.55H3.33987C1.30647 18.55 0.0748724 16.63 1.14386 15.14L4.36238 10.71C4.7923 10.12 4.7923 9.16 4.36238 8.57L1.14386 4.14C0.0748724 2.67 1.31809 0.750002 3.33987 0.750002Z" 
                          className="fill-foreground stroke-foreground dark:fill-white dark:stroke-white" 
                          strokeWidth="1.5" 
                          strokeMiterlimit="10" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-black text-background dark:text-cv-dark">{edu.year}</span>
                      </div>
                    </div>

                    {/* Dot on the continuous line */}
                    <div className="relative flex flex-col items-center flex-shrink-0 w-3">
                      <div className="w-3 h-3 rounded-full bg-foreground dark:bg-white z-10 mt-1" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-sm font-black uppercase tracking-wide text-foreground mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-xs uppercase text-muted-foreground mb-2 font-bold">{edu.place}</p>
                      <p className="text-xs text-foreground/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-12">
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4">
                Projects
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
                        {project.title}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="font-anton text-[20.5px] leading-[100%] uppercase border-b-2 border-foreground/20 pb-3 mb-4">
                Achievements
              </h3>
              <ul className="space-y-2 text-xs leading-relaxed text-foreground list-disc list-inside marker:text-cv-teal">
                <li>Honorable Mention — ACM ICPC Northern Eurasia Finals (2022)</li>
                <li>National Math Olympiad finalist (2019)</li>
              </ul>
            </section>
          </main>
        </div>
          </div>
        ) : (
          /* Personal Interests Page */
          <div className="p-8 lg:p-12">
            <h1 className="text-5xl font-black uppercase text-gradient-purple text-center mb-12">
              Personal Interests
            </h1>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Hobbies & Activities */}
              <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10">
                <h2 className="font-anton text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3">
                  Hobbies & Activities
                </h2>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Swimming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Skiing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Learning Japanese</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Singing in Japanese choir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Japanese culture enthusiast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Board games (Code Names, Mafia)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Playing guitar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Drawing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Clay crafting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cv-teal text-lg">•</span>
                    <span>Cooking</span>
                  </li>
                </ul>
              </div>

              {/* Personal Records */}
              <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10">
                <h2 className="font-anton text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3">
                  Personal Records
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-1">Swimming</h3>
                    <p className="text-sm text-muted-foreground">100m in 1:36</p>
                  </div>
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-1">Skiing</h3>
                    <p className="text-sm text-muted-foreground">Max speed: 79 km/h (accidentally)</p>
                  </div>
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-1">Rubik's Cube</h3>
                    <p className="text-sm text-muted-foreground">Solved in 55 seconds</p>
                  </div>
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-1">Strength</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bench press: 100kg</li>
                      <li>• Push-ups: 50 in one go</li>
                      <li>• Pull-ups: 20 in one go</li>
                      <li>• Plank pose: 5 minutes straight</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sports & Games */}
              <div className="bg-white dark:bg-cv-sidebar rounded-lg p-8 border-2 border-foreground/10 md:col-span-2">
                <h2 className="font-anton text-[20.5px] uppercase mb-6 border-b-2 border-foreground/20 pb-3">
                  Sports & Games
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-2">Favorites</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pool</li>
                      <li>• Ping-pong</li>
                      <li>• Water polo (former pro)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-2">Down to Play</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Football (still learning)</li>
                      <li>• Basketball (still learning)</li>
                      <li>• Monkey in the Middle</li>
                      <li>• Capture the Flag</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-cv-purple font-bold text-sm mb-2">Chess</h3>
                    <p className="text-sm text-muted-foreground">Rating: 800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
