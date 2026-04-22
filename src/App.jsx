import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Disc3,
  ExternalLink,
  Menu,
  Music2,
  Ticket,
  X,
} from "lucide-react";

const TICKET_LINK =
  "https://events.bookitbee.com/ukundergroundnetwork/ukundergroundnetwork-presents-private-members-club/";

const INSTAGRAM_LINK = "https://www.instagram.com/ukundergroundnetwork";

const BASE_ARTISTS = [
  {
    display: "THATICEKIDD",
    key: "thaticekidd",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "SICNTWISTD",
    key: "sicntwistd",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "NINENINETEKK",
    key: "nineninetekk",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "10K",
    key: "10k",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "MARLO",
    key: "marlo",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "CUFFSKI",
    key: "cuffski",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "REVIVECHIZL",
    key: "revivechizl",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "KYRXN",
    key: "kyrxn",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "LONESTAR",
    key: "lonestar",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "NOAH KNIGHT",
    key: "noahknight",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "KAZGETKASH",
    key: "kazgetkash",
    bio: "Joint-act demo page. Replace this with an individual bio for KAZGETKASH.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "JVR",
    key: "jvr",
    bio: "Joint-act demo page. Replace this with an individual bio for JVR.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center 1%",
  },
  {
    display: "WHOISPDP",
    key: "whoispdp",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "WMB",
    key: "wmb",
    bio: "High-energy demo placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "DRACOIST",
    key: "dracoist",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "VELLI",
    key: "velli",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "LUVATT",
    key: "luvatt",
    bio: "Joint-act demo page. Replace this with an individual bio for LUVATT.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "ROMEREO",
    key: "romereo",
    bio: "Joint-act demo page. Replace this with an individual bio for ROMEREO.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "BBY GLO",
    key: "bbyglo",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center 1%",
  },
  {
    display: "REZ818",
    key: "rez818",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center 10%",
  },
  {
    display: "DULL3N",
    key: "dull3n",
    bio: "High-energy demo bio placeholder. Replace this with a short 2–4 line artist description for the live site.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center 20%",
  },
  {
    display: "DJ JACKY P",
    key: "djjackyp",
    bio: "DJ bio placeholder. Replace this with a short 2–4 line description for DJ JACKY P.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "BARTZ",
    key: "bartz",
    bio: "DJ bio placeholder. Replace this with a short 2–4 line description for BARTZ.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "DJ 1TAKE",
    key: "dj1take",
    bio: "DJ bio placeholder. Replace this with a short 2–4 line description for DJ 1TAKE.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "DJ SCATTYSOPHIIE",
    key: "djscattysophiie",
    bio: "DJ bio placeholder. Replace this with a short 2–4 line description for DJ SCATTYSOPHIIE.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
  {
    display: "DJ SKI",
    key: "djski",
    bio: "DJ bio placeholder. Replace this with a short 2–4 line description for DJ SKI.",
    instagram: "",
    soundcloud: "",
    spotify: "",
    imagePosition: "center",
  },
];

const TABS = [
  { id: "poster", label: "POSTER" },
  { id: "lineup", label: "LINEUP" },
  { id: "about", label: "ABOUT US" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function cleanValue(value = "") {
  return value.replace(/^"(.*)"$/, "$1").trim();
}

function parseBioLinks(text) {
  const sections = text
    .split(/^##\s+/m)
    .map((section) => section.trim())
    .filter(Boolean);

  const parsed = {};

  for (const section of sections) {
    const lines = section
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (!lines.length) continue;

    const name = lines[0];
    if (
      !name ||
      name.toLowerCase() === "notes" ||
      name.toLowerCase() === "djs"
    ) {
      continue;
    }

    let bio = "";
    let instagram = "";
    let soundcloud = "";
    let spotify = "";

    for (const line of lines.slice(1)) {
      if (line.startsWith("Bio:")) {
        bio = cleanValue(line.replace(/^Bio:\s*/, ""));
      } else if (line.startsWith("Instagram:")) {
        instagram = cleanValue(line.replace(/^Instagram:\s*/, ""));
      } else if (line.startsWith("SoundCloud:")) {
        soundcloud = cleanValue(line.replace(/^SoundCloud:\s*/, ""));
      } else if (line.startsWith("Spotify:")) {
        spotify = cleanValue(line.replace(/^Spotify:\s*/, ""));
      }
    }

    parsed[name.toLowerCase()] = {
      bio,
      instagram,
      soundcloud,
      spotify,
    };
  }

  return parsed;
}

function AccessButton({ className = "", label = "GET ACCESS" }) {
  return (
    <a
      href={TICKET_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative z-20 inline-flex items-center justify-center gap-2 border border-white bg-white px-4 py-3 text-[0.72rem] font-black tracking-[0.35em] text-black transition hover:scale-[1.01]",
        className
      )}
    >
      <Ticket className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const [showExperiencePrompt, setShowExperiencePrompt] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeTab, setActiveTab] = useState("poster");
  const [artists, setArtists] = useState(BASE_ARTISTS);
  const [activeArtistKey, setActiveArtistKey] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  const activeArtist = useMemo(
    () => artists.find((artist) => artist.key === activeArtistKey) || null,
    [artists, activeArtistKey]
  );

  useEffect(() => {
    async function loadBioLinks() {
      try {
        const response = await fetch("/biolinks.txt");
        if (!response.ok) {
          throw new Error(`Failed to fetch biolinks.txt: ${response.status}`);
        }

        const text = await response.text();
        const parsed = parseBioLinks(text);

        const mergedArtists = BASE_ARTISTS.map((artist) => {
          const entry = parsed[artist.display.toLowerCase()] || {};

          return {
            ...artist,
            bio: entry.bio || artist.bio,
            instagram: entry.instagram || "",
            soundcloud: entry.soundcloud || "",
            spotify: entry.spotify || "",
          };
        });

        setArtists(mergedArtists);
      } catch (error) {
        console.error("Could not load biolinks.txt", error);
      }
    }

    loadBioLinks();
  }, []);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowY = entered ? "auto" : "hidden";
    document.body.style.overscrollBehaviorX = "none";
    document.documentElement.style.overscrollBehaviorX = "none";

    return () => {
      document.body.style.overflow = "";
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
      document.body.style.overscrollBehaviorX = "";
      document.documentElement.style.overflowX = "";
      document.documentElement.style.overscrollBehaviorX = "";
    };
  }, [entered]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!activeArtist) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
      return;
    }

    const src = `/${activeArtist.key}.mp3`;

    audio.pause();
    audio.removeAttribute("src");
    audio.load();

    if (entered && soundOn) {
      audio.src = src;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }, [activeArtist, entered, soundOn]);

  const handleEnterExperience = () => {
    setShowExperiencePrompt(true);
  };

  const handleExperienceChoice = (enabled) => {
    setSoundOn(enabled);
    setEntered(true);
    setShowExperiencePrompt(false);
  };

  const selectArtist = (key) => {
    setActiveArtistKey(key);
    setActiveTab("poster");
    setMenuOpen(false);
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || !activeArtist) return;

    if (audio.paused) {
      setSoundOn(true);
      audio.src = `/${activeArtist.key}.mp3`;
      try {
        await audio.play();
      } catch {}
    } else {
      audio.pause();
    }
  };

  const artistLinks = [
    { label: "INSTAGRAM", href: activeArtist?.instagram },
    { label: "SOUNDCLOUD", href: activeArtist?.soundcloud },
    { label: "SPOTIFY", href: activeArtist?.spotify },
  ].filter((link) => {
    const value = (link.href || "").trim().toLowerCase();
    return value && value !== "none" && value !== "#";
  });

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-black text-white antialiased"
      style={{ fontFamily: '"Oswald", sans-serif' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
        html, body, #root {
          max-width: 100%;
          width: 100%;
          overflow-x: hidden !important;
          background: #000;
          overscroll-behavior-x: none;
        }
        * {
          box-sizing: border-box;
        }
        body {
          touch-action: pan-y;
        }
        img, video, canvas, svg {
          max-width: 100%;
        }
        @keyframes softFlicker {
          0%, 100% { opacity: 1; }
          48% { opacity: .98; }
          50% { opacity: .9; }
          52% { opacity: .98; }
        }
        .grain {
          background-image:
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 3px 3px, 7px 7px;
          background-position: 0 0, 1px 1px;
          mix-blend-mode: screen;
          opacity: .06;
          pointer-events: none;
        }
      `}</style>

      <audio ref={audioRef} preload="none" />

      <AnimatePresence>
        {!entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black px-5 py-5 sm:px-8 sm:py-8"
          >
            <div className="absolute inset-0 grain pointer-events-none" />

            <div className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center overflow-hidden">
              <div className="flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-5 sm:gap-6">
                <div className="flex w-full items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="UK Underground Network logo"
                    className="mx-auto max-h-[42vh] w-auto max-w-full object-contain sm:max-h-[46vh]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback =
                        e.currentTarget.parentElement.querySelector(".fallback-logo");
                      if (fallback) fallback.style.display = "block";
                    }}
                    draggable={false}
                  />
                  <div className="fallback-logo hidden text-[clamp(4rem,16vw,10rem)] font-black tracking-[0.08em] text-white">
                    UKUGN
                  </div>
                </div>

                <div className="w-full max-w-4xl text-center">
                  <div className="text-[0.65rem] font-black tracking-[0.42em] text-white/75 sm:text-[0.78rem]">
                    UKUNDERGROUNDNETWORK PRESENTS
                  </div>

                  <div className="mt-3 text-[clamp(1.9rem,5vw,4.6rem)] font-black leading-[0.94] tracking-[0.1em]">
                    PRIVATE MEMBERS CLUB 001
                  </div>

                  <div className="mt-4 text-[0.72rem] font-black tracking-[0.4em] text-white/75 sm:text-[0.85rem]">
                    ACCESS: LIMITED
                  </div>

                  <button
                    onClick={handleEnterExperience}
                    className="mt-7 inline-flex items-center gap-3 border border-white bg-white px-6 py-4 text-[0.72rem] font-black tracking-[0.35em] text-black"
                  >
                    ENTER EXPERIENCE
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExperiencePrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 px-6"
          >
            <div className="absolute inset-0 grain pointer-events-none" />
            <motion.div
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              className="relative w-full max-w-xl border border-white/20 bg-black p-6 text-center sm:p-8"
            >
              <div className="text-[0.7rem] font-black tracking-[0.45em] text-white/60">
                INTERACTIVE EXPERIENCE
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-[0.12em] sm:text-3xl">
                ENABLE SOUND?
              </h2>
              <p className="mt-4 text-sm leading-7 tracking-[0.04em] text-white/75 sm:text-base">
                Click on any artist name on the poster to hear their music, read their
                bio, or find links. Please choose whether to enable or disable sound
                for this experience.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => handleExperienceChoice(true)}
                  className="inline-flex items-center justify-center border border-white bg-white px-5 py-4 text-[0.72rem] font-black tracking-[0.35em] text-black"
                >
                  ENABLE SOUND
                </button>
                <button
                  onClick={() => handleExperienceChoice(false)}
                  className="inline-flex items-center justify-center border border-white/20 px-5 py-4 text-[0.72rem] font-black tracking-[0.35em] text-white"
                >
                  CONTINUE WITHOUT SOUND
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_30%)]" />

          <header className="relative z-10 sticky top-0 overflow-x-hidden border-b border-white/20 bg-black/90 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="md:hidden">
                <div className="grid grid-cols-[48px_1fr_48px] items-center gap-2">
                  <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white/90"
                    aria-label="Open menu"
                  >
                    {menuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </button>

                  <div className="flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="UK Underground Network logo"
                      className="h-10 w-auto object-contain"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div aria-hidden="true" className="h-11 w-11" />
                </div>

                <div className="mt-3 text-center">
                  <div className="text-[0.58rem] font-bold tracking-[0.34em] text-white/70">
                    UKUNDERGROUNDNETWORK PRESENTS
                  </div>
                  <div className="mt-1 whitespace-nowrap text-[1rem] font-black tracking-[0.22em] text-white">
                    PMC 001
                  </div>
                </div>
              </div>

              <div className="relative hidden min-h-[64px] items-center justify-between gap-4 md:flex">
                <div className="min-w-0 pr-28">
                  <div className="text-[0.64rem] font-bold tracking-[0.42em] text-white/70">
                    UKUNDERGROUNDNETWORK PRESENTS
                  </div>
                  <div className="mt-1 text-lg font-black tracking-[0.24em] text-white">
                    PMC 001
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/logo.png"
                    alt="UK Underground Network logo"
                    className="h-12 w-auto object-contain"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="relative z-10 flex items-center gap-2">
                  <AccessButton label="GET ACCESS" />

                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "border px-4 py-2 text-[0.7rem] font-black tracking-[0.35em] transition",
                        activeTab === tab.id
                          ? "border-white bg-white text-black"
                          : "border-white/20 text-white hover:border-white/60"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={cn("md:hidden", menuOpen ? "block" : "hidden")}>
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 pb-4 sm:px-6">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMenuOpen(false);
                    }}
                    className={cn(
                      "border px-4 py-3 text-left text-[0.7rem] font-black tracking-[0.35em] transition",
                      activeTab === tab.id
                        ? "border-white bg-white text-black"
                        : "border-white/20 text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}

                <AccessButton
                  className="col-span-2 w-full py-4"
                  label="GET ACCESS"
                />
              </div>
            </div>
          </header>

          <main className="relative z-10 mx-auto grid max-w-7xl gap-5 overflow-x-hidden px-4 py-4 pb-12 sm:px-6 lg:grid-cols-[1.55fr_0.95fr] lg:gap-6">
            <div className="relative z-20 md:hidden">
              <AccessButton className="w-full py-4" label="GET ACCESS" />
            </div>

            <section className="relative overflow-hidden border border-white/20 bg-black/85 shadow-2xl shadow-black/50">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{ animation: "softFlicker 7s infinite" }}
              />

              {activeTab === "poster" && (
                <div className="relative z-10 p-4 sm:p-6">
                  <div className="border border-white/85 p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-4 border-b border-white/80 pb-3">
                      <div className="max-w-[62%]">
                        <div className="text-[0.58rem] font-black tracking-[0.55em] text-white/90 sm:text-[0.68rem]">
                          UKUNDERGROUNDNETWORK PRESENTS
                        </div>
                        <div className="mt-1 text-[clamp(1.4rem,4vw,2.8rem)] font-black leading-[0.9] tracking-[0.12em]">
                          PRIVATE MEMBERS CLUB™
                        </div>
                      </div>
                      <div className="text-right text-[0.6rem] font-black tracking-[0.4em] text-white/85 sm:text-[0.7rem]">
                        <div>PMC_001</div>
                        <div className="mt-1 text-[0.52rem] tracking-[0.32em] text-white/65 sm:text-[0.58rem]">
                          FOR HIGH ENERGY RAP FANS
                        </div>
                      </div>
                    </div>

                    <div className="grid place-items-center py-5 sm:py-8">
                      <div className="text-[clamp(6rem,20vw,18rem)] font-black leading-none tracking-[-0.06em]">
                        001
                      </div>
                    </div>

                    <div className="border-y border-white/80 py-3 text-center text-[0.7rem] font-black tracking-[0.38em] sm:text-[0.82rem]">
                      ACCESS: LIMITED <span className="px-2">|</span> ENTRY: £5{" "}
                      <span className="px-2">|</span> LOCATION: DEADWAX
                    </div>

                    <div className="grid gap-3 border-b border-white/80 py-4 text-center sm:py-5">
                      <div className="text-[clamp(1.4rem,4vw,2.9rem)] font-black leading-none tracking-[0.12em]">
                        <div>DOORS 6PM</div>
                        <div className="mt-1">SATURDAY 4TH JULY</div>
                      </div>
                      <div className="text-[clamp(1rem,3vw,2rem)] font-black leading-tight tracking-[0.12em]">
                        20+ / 1 NIGHT / BIRMINGHAM
                      </div>
                      <div className="text-[clamp(1rem,3vw,1.9rem)] font-black leading-tight tracking-[0.12em]">
                        + VERY SPECIAL GUESTS
                      </div>
                    </div>

                    <div className="space-y-3 py-4">
                      <div className="hidden gap-3 text-center text-[clamp(1.1rem,3.6vw,2.3rem)] font-black leading-tight tracking-[0.1em] sm:grid">
                        <ArtistLine
                          artists={["THATICEKIDD", "SICNTWISTD", "NINENINETEKK", "10K", "MARLO"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["REVIVECHIZL", "KYRXN", "DULL3N"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["LONESTAR + NOAH KNIGHT", "WMB", "KAZGETKASH + JVR", "DRACOIST"]}
                          onSelect={selectArtist}
                          keepPairsTogether={["LONESTAR + NOAH KNIGHT"]}
                        />
                        <ArtistLine
                          artists={["LUVATT + ROMEREO", "WHOISPDP"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["BBY GLO", "REZ818", "VELLI", "CUFFSKI"]}
                          onSelect={selectArtist}
                        />
                      </div>

                      <div className="grid gap-3 text-center text-[clamp(1.1rem,3.6vw,2.3rem)] font-black leading-tight tracking-[0.1em] sm:hidden">
                        <ArtistLine
                          artists={["THATICEKIDD", "SICNTWISTD", "NINENINETEKK"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["MARLO", "CUFFSKI", "REVIVECHIZL", "KYRXN"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["10K", "WHOISPDP", "DRACOIST", "DULL3N"]}
                          onSelect={selectArtist}
                        />
                        <ArtistLine
                          artists={["LONESTAR + NOAH KNIGHT", "KAZGETKASH + JVR", "WMB"]}
                          onSelect={selectArtist}
                          keepPairsTogether={["LONESTAR + NOAH KNIGHT"]}
                        />
                        <ArtistLine
                          artists={["LUVATT + ROMEREO", "VELLI", "REZ818"]}
                          onSelect={selectArtist}
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/80 pt-3 text-center text-[0.62rem] font-black tracking-[0.35em] text-white/90 sm:text-[0.72rem]">
                      <ArtistLine
                        artists={["DJ JACKY P", "BARTZ", "DJ 1TAKE", "DJ SCATTYSOPHIIE", "DJ SKI"]}
                        onSelect={selectArtist}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "lineup" && (
                <div className="relative z-10 p-4 sm:p-6">
                  <SectionTitle eyebrow="LINEUP INDEX" title="SELECT AN ARTIST OR DJ" />
                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {artists.map((artist) => (
                      <button
                        key={artist.key}
                        onClick={() => selectArtist(artist.key)}
                        className={cn(
                          "flex items-center justify-between border px-4 py-4 text-left transition",
                          activeArtistKey === artist.key
                            ? "border-white bg-white text-black"
                            : "border-white/20 bg-white/0 text-white hover:border-white/60"
                        )}
                      >
                        <div className="min-w-0">
                          <div
                            className={cn(
                              "text-[0.68rem] font-black tracking-[0.45em]",
                              activeArtistKey === artist.key ? "text-black/50" : "text-white/55"
                            )}
                          >
                            PROFILE
                          </div>
                          <div className="mt-1 break-words text-xl font-black tracking-[0.12em]">
                            {artist.display}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "about" && (
                <div className="relative z-10 p-4 sm:p-6">
                  <SectionTitle eyebrow="ABOUT US" title="UKUNDERGROUNDNETWORK" />
                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <div className="border border-white/20 p-5">
                      <div className="text-xs font-black tracking-[0.45em] text-white/55">
                        WHO WE ARE
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-7 tracking-[0.06em] text-white/80 sm:text-base">
                        We created UKUNDERGROUNDNETWORK to connect, not compete. We aim
                        to be the glue between promoters and creatives in the UK music
                        scene.
                      </p>

                      <a
                        href={INSTAGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center gap-3 border border-white bg-white px-5 py-4 text-center text-[0.78rem] font-black tracking-[0.3em] text-black transition hover:scale-[1.01] sm:w-auto"
                      >
                        <ExternalLink className="h-5 w-5" />
                        FOLLOW US FOR UPDATES
                      </a>
                    </div>

                    <div className="border border-white/20 p-5">
                      <div className="text-xs font-black tracking-[0.45em] text-white/55">
                        EVENT INFO
                      </div>
                      <div className="mt-3 space-y-2 text-sm font-black tracking-[0.18em] sm:text-base">
                        <div>VENUE: DEADWAX</div>
                        <div>ENTRY: £5</div>
                        <div>DOORS: 6PM</div>
                        <div>DATE: SATURDAY 4TH JULY</div>
                        <div>BIRMINGHAM</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            <aside className="relative z-10 flex min-w-0 flex-col gap-4">
              <div className="border border-white/20 bg-black/85 p-4 shadow-2xl shadow-black/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-[0.62rem] font-black tracking-[0.55em] text-white/55">
                      NOW SHOWING
                    </div>
                    <div className="mt-1 break-words text-2xl font-black tracking-[0.14em]">
                      {activeArtist?.display || "SELECT AN ARTIST"}
                    </div>
                  </div>

                  <button
                    onClick={() => setSoundOn((v) => !v)}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-2 border px-3 py-2 text-[0.65rem] font-black tracking-[0.3em] transition",
                      soundOn ? "border-white bg-white text-black" : "border-white/20 text-white"
                    )}
                  >
                    <Music2 className="h-4 w-4" />
                    {soundOn ? "SOUND ON" : "SILENT"}
                  </button>
                </div>

                <div className="mt-4 overflow-hidden border border-white/20 bg-white/5">
                  <div className="aspect-[1/1] w-full overflow-hidden bg-black">
                    {activeArtist ? (
                      <img
                        key={activeArtist.key}
                        src={`/${activeArtist.key}.png`}
                        alt={activeArtist.display}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: activeArtist.imagePosition || "center" }}
                        draggable={false}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-8 text-center text-xl font-black leading-relaxed tracking-[0.12em] text-white/80 sm:text-2xl">
                        CLICK ON AN ARTIST TO HEAR A PREVIEW AND LEARN MORE
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    disabled={!activeArtist}
                    className={cn(
                      "inline-flex flex-1 items-center justify-center gap-2 border px-4 py-3 text-[0.72rem] font-black tracking-[0.35em] transition",
                      activeArtist
                        ? "border-white bg-white text-black hover:scale-[1.01]"
                        : "cursor-not-allowed border-white/15 bg-white/10 text-white/35"
                    )}
                  >
                    <Disc3 className="h-4 w-4" />
                    PLAY TRACK
                  </button>

                  <button
                    onClick={() => setActiveTab("lineup")}
                    className="inline-flex items-center justify-center border border-white/20 p-3 text-white transition hover:border-white/70"
                    aria-label="Open lineup"
                  >
                    <Menu className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 border border-white/20 p-4">
                  <div className="text-xs font-black tracking-[0.45em] text-white/55">BIO</div>
                  <p className="mt-3 text-sm leading-7 tracking-[0.05em] text-white/80">
                    {activeArtist?.bio ||
                      "Click on an artist to hear a preview, view their image, and learn more about them."}
                  </p>

                  {artistLinks.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {artistLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-[0.62rem] font-black tracking-[0.35em] text-white/90 transition hover:border-white/70"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden border border-white/20 bg-black/85 p-4 lg:block">
                <div className="text-[0.62rem] font-black tracking-[0.55em] text-white/55">
                  PRIVATE MEMBERS CLUB 001
                </div>
                <div className="mt-2 text-2xl font-black tracking-[0.12em]">£5 ENTRY</div>
                <p className="mt-3 text-sm leading-7 tracking-[0.05em] text-white/75">
                  CLICK HERE TO GAIN ACCESS TO OUR EVENT.
                </p>
                <AccessButton className="mt-4 w-full" label="GET ACCESS" />
              </div>
            </aside>
          </main>
        </div>
      )}
    </div>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <div className="text-[0.62rem] font-black tracking-[0.55em] text-white/55">
        {eyebrow}
      </div>
      <div className="mt-1 text-2xl font-black tracking-[0.14em] sm:text-3xl">
        {title}
      </div>
    </div>
  );
}

function ArtistLine({ artists, onSelect, keepPairsTogether = [] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
      {artists.map((name, index) => {
        const normalized = name.toLowerCase();
        const shouldKeepTogether = keepPairsTogether.includes(name);

        return (
          <React.Fragment key={`${name}-${index}`}>
            {normalized.includes(" + ") ? (
              shouldKeepTogether ? (
                <span className="inline-flex flex-nowrap items-center gap-x-2 whitespace-nowrap">
                  {name.split(" + ").map((part, partIndex, arr) => {
                    const displayName = part.trim();
                    return (
                      <React.Fragment key={`${displayName}-${partIndex}`}>
                        <button
                          onClick={() => onSelect(mapArtistNameToKey(displayName))}
                          className="whitespace-nowrap transition hover:opacity-70"
                        >
                          {displayName}
                        </button>
                        {partIndex < arr.length - 1 && <span>+</span>}
                      </React.Fragment>
                    );
                  })}
                </span>
              ) : (
                <>
                  {name.split(" + ").map((part, partIndex, arr) => {
                    const displayName = part.trim();
                    return (
                      <React.Fragment key={`${displayName}-${partIndex}`}>
                        <button
                          onClick={() => onSelect(mapArtistNameToKey(displayName))}
                          className="transition hover:opacity-70"
                        >
                          {displayName}
                        </button>
                        {partIndex < arr.length - 1 && <span>+</span>}
                      </React.Fragment>
                    );
                  })}
                </>
              )
            ) : (
              <button
                onClick={() => onSelect(mapArtistNameToKey(name))}
                className="transition hover:opacity-70"
              >
                {name}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function mapArtistNameToKey(name) {
  const normalized = name.toLowerCase().trim();

  const mapping = {
    thaticekidd: "thaticekidd",
    sicntwistd: "sicntwistd",
    nineninetekk: "nineninetekk",
    "10k": "10k",
    marlo: "marlo",
    cuffski: "cuffski",
    revivechizl: "revivechizl",
    kyrxn: "kyrxn",
    lonestar: "lonestar",
    "noah knight": "noahknight",
    kazgetkash: "kazgetkash",
    jvr: "jvr",
    whoispdp: "whoispdp",
    wmb: "wmb",
    dracoist: "dracoist",
    velli: "velli",
    luvatt: "luvatt",
    romereo: "romereo",
    "bby glo": "bbyglo",
    rez818: "rez818",
    dull3n: "dull3n",
    "dj jacky p": "djjackyp",
    bartz: "bartz",
    "dj 1take": "dj1take",
    djscattysophiie: "djscattysophiie",
    "dj scattysophiie": "djscattysophiie",
    "dj ski": "djski",
  };

  return mapping[normalized] || normalized.replace(/\s|\+|™|\.|,/g, "");
}
