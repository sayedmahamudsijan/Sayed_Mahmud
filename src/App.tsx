import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  BookOpen,
  Cpu,
  FlaskConical,
  Wrench,
  ExternalLink,
  Download,
  Sun,
  Moon,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import avatar from "src/assets/Sayed_Mahmud.jpg";
import cvFile from "src/assets/Sayed_Mahmud_CV.pdf";

const profile = {
  name: "Sayed Mahmud",        
  title: "Metamaterials Researcher • QA Engineer • ETE (IIUC)",
  location: "Mirpur 1, Dhaka, Bangladesh",
  email: "sayedmahamudsijann@gmail.com",
  phone: "+8801875806948",
  summary:
    "Research focus on metamaterials and microwave absorbers; experience with CST, MATLAB, VLSI sessionals; QA internships and club leadership.",
  links: {
    orcid: "https://orcid.org/0000-0002-3260-308X",
    linkedin: "https://linkedin.com/in/sayed-mahamud-2619b211",
    scholar: "https://scholar.google.com/citations?hl=en&user=ERA4SrsAAAAJ",
    researchgate: "https://www.researchgate.net/profile/Sayed-Sijan",
    github: "https://github.com/sayedmahamudsijan",
photo: avatar,
links: {
  // ...
  cvUrl: cvFile,
}
  
  },
};


const education = [
  {
    degree:
      "B.Sc. in Electronic & Telecommunication Engineering (CGPA 3.47/4.00)",
    school: "International Islamic University Chittagong (IIUC)",
    year: "2024",
    extra:
      "Thesis: Eye-Shaped Labyrinth Metamaterial Absorber for C, X, Ku & K-Band Applications",
  },
];

const experience = [
  {
    role: "QA Engineer Intern",
    org: "A1QA Software Testing Company",
    period: "Mar 2024 – Sep 2024",
    bullets: [
      "Participated in test planning, execution, and defect tracking.",
      "Worked with Jira, TestRail; improved test methodologies and coverage.",
    ],
  },
  {
    role: "Teaching Assistant (VLSI, AC Sessional, Electronic System Design)",
    org: "IIUC, ETE Department",
    period: "Nov 2022 – Nov 2023",
    bullets: [
      "Supported labs, graded assignments, and assisted in curriculum improvements.",
      "Guided students through VLSI design sessionals and practical experiments.",
    ],
  },
  {
    role: "Secretary, IIUC Telecom Club",
    org: "IIUC",
    period: "Nov 2022 – Nov 2023",
    bullets: [
      "Organized workshops and seminars; fostered student collaboration.",
      "Coordinated events and networking opportunities in telecom topics.",
    ],
  },
  {
    role: "Research Assistant (IIUC Research Society)",
    org: "IIUC",
    period: "—",
    bullets: [
      "Metamaterial simulations in CST; data analysis in MATLAB.",
      "Co-authored peer-reviewed publications in absorbers and related EM topics.",
    ],
  },
];

type PubType = "Journal" | "Conference";

type Publication = {
  type: PubType;
  title: string;
  venue: string;
  doi?: string; 
  authors: string;
  abstract?: string; 
};

const publications: Publication[] = [
  // From your earlier list + new ones you sent
  {
    type: "Conference",
    title:
      "Eye-Shaped Labyrinth Metamaterial Absorber For C, X, Ku & K-Band Applications",
    venue:
      "2023 IEEE International Conference on Telecommunications and Photonics (ICTP)",
    doi: "https://doi.org/10.1109/ICTP60248.2023.10491066",
    authors: "S Mahmud, S Hannan, O Faruk, M Ibrahim, MA Hossain",
    abstract:
      "Labyrinth eye-shaped resonator achieving multi-band absorption across C, X, Ku & K bands. (Replace with full abstract text if desired.)",
  },
  {
    type: "Journal",
    title:
      "Polarization-Selective Metamaterial Absorber Using Tailored Y-Shaped SRR for UWB Device and Doppler Navigation Aids Applications",
    venue: "Heliyon, 2024",
    doi: "https://doi.org/10.1016/j.heliyon.2024.e40102",
    authors:
      "S Mahmud, AR Chowdhury, S Hannan, MT Islam, AS Alshammari, M S Soliman",
    abstract:
      "Tailored Y-shaped SRR shows multiple high-absorption resonances with polarization-selective characteristics for UWB and Doppler aids. (Replace with full abstract text if desired.)",
  },
  {
    type: "Conference",
    title:
      "S-Shape Polarization Insensitive Metamaterial Absorber for SAR Reduction at 3.5 GHz",
    venue:
      "2024 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    authors:
      "SR Chowdhury, AR Chowdhury, S Hannan, MM Khan, DB Samudra, ... (incl. S M Sijan)",
    abstract:
      "S-shaped unit cell tuned at 3.5 GHz achieving polarization-insensitive absorption aimed at SAR reduction in 5G band. (Replace with full abstract text if desired.)",
  },
  {
    type: "Journal",
    title:
      "Spiral coil shaped multi-resonance metamaterial absorber for wireless communication and satellite applications",
    venue:
      "AEU-International Journal of Electronics and Communications 198, 155844 (2025)",
    doi: "https://doi.org/10.1016/j.aeue.2025.155844",
    authors: "M Faysal, S Mahmud, SR Chowdhury, AR Chowdhury",
    abstract:
      "Compact spiral-coil resonator producing multiple strong absorption peaks suitable for wireless and satellite links. (Replace with full abstract text if desired.)",
  },
  {
    type: "Conference",
    title:
      "Fan Grill Shaped Circular Split-ring Loaded Metamaterial Absorber For X, Ku & K Band Applications",
    venue:
      "2024 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    authors:
      "KMM Hossain, S Hannan, MM Uddin, M Forhad, SM Sijan, MI Hossen",
    abstract:
      "Fan-grill inspired circular SRR geometry with multi-peak absorption across X/Ku/K bands. (Replace with full abstract text if desired.)",
  },
  {
    type: "Conference",
    title:
      "Tetrahedral Molecular Shaped Metamaterial Absorber for Ku and K Band Applications",
    venue:
      "2024 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    doi: "https://doi.org/10.1109/ICISET62123.2024.10939153",
    authors: "MA Nasif, SM Sijan, AAH Newaz, DB Samudra, SR Chowdhury",
    abstract:
      "Tetrahedral-inspired unit cell optimized for strong Ku/K band absorption. (Replace with full abstract text if desired.)",
  },
];

const skills = [
  {
    group: "Simulation & EDA",
    icon: <Cpu className="w-4 h-4" />,
    items: ["CST Studio Suite", "MATLAB", "LTspice", "PROTEUS", "Microwind", "DSCH2"],
  },
  {
    group: "QA Tooling",
    icon: <Wrench className="w-4 h-4" />,
    items: ["Jira", "TestRail", "Postman", "Virtual Machines"],
  },
  {
    group: "Programming & Web",
    icon: <FlaskConical className="w-4 h-4" />,
    items: ["HTML", "CSS", "TypeScript", "SQL", "NoSQL (MongoDB)"],
  },
  {
    group: "Productivity",
    icon: <BookOpen className="w-4 h-4" />,
    items: ["Word", "Excel", "PowerPoint"],
  },
  {
    group: "Languages",
    icon: <BookOpen className="w-4 h-4" />,
    items: ["Bangla", "English"],
  },
];

// ====== UTIL ======
const badge = (text: string) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm bg-white/40 dark:bg-white/10 border-white/40 dark:border-white/10">
    {text}
  </span>
);

const Section = ({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
    </div>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// ====== MAIN COMPONENT ======
export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [active, setActive] = useState("about");
  const [pubFilter, setPubFilter] = useState<"All" | "Journal" | "Conference">("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const filteredPubs = useMemo(() => {
    return publications.filter((p) => {
      const matchType = pubFilter === "All" || p.type === pubFilter;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q);
      return matchType && matchQuery;
    });
  }, [pubFilter, query]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "publications", label: "Publications" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220] text-slate-800 dark:text-slate-100">
      {/* Decorative blobs */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-[-10rem] -z-10 blur-3xl opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 20 }}
      >
        <div className="relative left-[10%] aspect-[5/1] w-[80%] bg-gradient-to-r from-sky-300 via-indigo-300 to-fuchsia-300 dark:from-sky-600/40 dark:via-indigo-600/40 dark:to-fuchsia-600/40 rounded-full" />
      </motion.div>

      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-[#0b1220]/60 border-b border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 grid place-items-center text-white font-bold">
              SM
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{profile.name}</div>
              <div className="text-xs opacity-70">{profile.title}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  setActive(n.id);
                  document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  active === n.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={profile.links.cvUrl}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:shadow"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="w-4 h-4" /> CV
            </a>
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:shadow"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="text-lg opacity-80 mb-6 max-w-2xl">{profile.summary}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {badge("Metamaterials")}
              {badge("Antenna/EM")}
              {badge("VLSI/EDA")}
              {badge("QA & Testing")}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:shadow"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:shadow"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="md:col-span-2">
              <motion.div
                className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100 dark:from-sky-900/40 dark:via-indigo-900/40 dark:to-fuchsia-900/40" />
                <motion.div
                  className="absolute inset-0 grid place-items-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                >
                  <div className="text-center">
                    <img
                      src={profile.photo}
                      alt="Sayed Mahmud"
                      className="mx-auto w-28 h-28 rounded-2xl object-cover shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
                    />
                    <div className="mt-4 text-sm opacity-70">{profile.location}</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section id="about" title="About" icon={<MapPin className="w-6 h-6" />}>
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <p>
                I’m an Electronic & Telecommunication Engineering graduate focused on
                electromagnetic metamaterials and microwave absorbers. I’ve worked with
                CST Studio Suite and MATLAB for simulation and analysis, and I enjoy
                building clean testing workflows from QA internships to university labs.
              </p>
              <p>
                Beyond research, I’ve supported VLSI and AC sessionals as a Teaching Assistant,
                and helped run the IIUC Telecom Club. I’m comfortable across the stack:
                EM design tools, QA pipelines (Jira/TestRail), and web fundamentals.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-70" />{" "}
                <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-70" /> <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 opacity-70" /> <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 opacity-70" />{" "}
                <a
                  className="underline underline-offset-4"
                  href={profile.links.orcid}
                  target="_blank"
                  rel="noreferrer"
                >
                  ORCID
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 opacity-70" />{" "}
                <a
                  className="underline underline-offset-4"
                  href={profile.links.scholar}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 opacity-70" />{" "}
                <a
                  className="underline underline-offset-4"
                  href={profile.links.researchgate}
                  target="_blank"
                  rel="noreferrer"
                >
                  ResearchGate
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section id="experience" title="Experience" icon={<Wrench className="w-6 h-6" />}>
        <div className="space-y-4">
          {experience.map((e, idx) => (
            <FadeIn key={idx}>
              <div className="rounded-2xl border p-4 md:p-6 hover:shadow-sm transition">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <div className="text-sm opacity-80">{e.org}</div>
                  </div>
                  <div className="text-sm opacity-70 whitespace-nowrap">{e.period}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="publications" title="Publications" icon={<BookOpen className="w-6 h-6" />}>
        <div className="mb-4 flex flex-col md:flex-row gap-3 md:items-center">
          <div className="flex gap-2">
            {(["All", "Journal", "Conference"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setPubFilter(t)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  pubFilter === t
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "hover:shadow"
                }`}
              >
                <Filter className="w-4 h-4 inline mr-1" /> {t}
              </button>
            ))}
          </div>
          <div className="flex-1" />
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, venue, authors…"
              className="w-full md:w-[360px] pl-9 pr-3 py-2 rounded-xl border bg-white/70 dark:bg-white/10"
            />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {filteredPubs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border p-4 md:p-6 mb-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wide opacity-70">{p.type}</div>
                  <h3 className="text-lg font-semibold leading-snug mt-1">{p.title}</h3>
                  <div className="text-sm opacity-80 mt-1">{p.authors}</div>
                  <div className="text-sm opacity-70">{p.venue}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {p.doi && (
                    <a
                      href={p.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 border text-sm hover:shadow"
                    >
                      <ExternalLink className="w-4 h-4" /> DOI
                    </a>
                  )}
                  <button
                    onClick={() =>
                      setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
                    }
                    className="inline-flex items-center gap-1 text-xs opacity-80 hover:opacity-100"
                  >
                    {expanded[i] ? (
                      <>
                        Hide details <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        Show details <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {expanded[i] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 text-sm opacity-80">
                      {p.abstract && p.abstract.length > 0
                        ? p.abstract
                        : "Abstract unavailable here. You can paste the official abstract into the code if you want it shown."}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </Section>

      <Section id="skills" title="Skills" icon={<Cpu className="w-6 h-6" />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, idx) => (
            <FadeIn key={idx}>
              <div className="rounded-2xl border p-4 hover:shadow-sm transition bg-white/60 dark:bg-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="opacity-80">{s.icon}</div>
                  <h3 className="font-semibold">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it, i) => (
                    <span
                      key={i}
                      className="text-xs border rounded-full px-2 py-1 bg-white/70 dark:bg-white/10"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon={<GraduationCap className="w-6 h-6" />}>
        <div className="space-y-4">
          {education.map((ed, i) => (
            <FadeIn key={i}>
              <div className="rounded-2xl border p-4 md:p-6 hover:shadow-sm transition">
                <div className="text-lg font-semibold">{ed.degree}</div>
                <div className="opacity-80">{ed.school}</div>
                <div className="text-sm opacity-70">Year: {ed.year}</div>
                <div className="mt-2 text-sm opacity-80">{ed.extra}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" icon={<Mail className="w-6 h-6" />}>
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-3">Get in touch</h3>
              <p className="text-sm opacity-80 mb-4">
                Prefer email? Use the quick button or the form — both go to the same inbox.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                <Mail className="w-4 h-4" /> Email me
              </a>
              <div className="mt-4 text-sm">
                <div className="flex items-center gap-2 opacity-80">
                  <Phone className="w-4 h-4" /> {profile.phone}
                </div>
                <div className="flex items-center gap-2 opacity-80 mt-1">
                  <MapPin className="w-4 h-4" /> {profile.location}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-3">Quick message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget as HTMLFormElement);
                  const subject = encodeURIComponent(`${fd.get("name")} - ${fd.get("topic")}`);
                  const body = encodeURIComponent(
                    `${fd.get("message")}\n\nFrom: ${fd.get("name")} <${fd.get("email")}>`
                  );
                  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                }}
                className="space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="px-3 py-2 rounded-xl border bg-white/70 dark:bg-white/10"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="px-3 py-2 rounded-xl border bg-white/70 dark:bg-white/10"
                  />
                </div>
                <input
                  name="topic"
                  placeholder="Topic (optional)"
                  className="w-full px-3 py-2 rounded-xl border bg-white/70 dark:bg-white/10"
                />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message…"
                  className="w-full px-3 py-2 rounded-xl border bg-white/70 dark:bg-white/10"
                />
                <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                  Send via Email
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 md:px-8 py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and Framer Motion.
      </footer>
    </div>
  );
}
