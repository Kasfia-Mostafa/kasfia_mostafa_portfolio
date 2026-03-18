import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./components/ProjectCard";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import "./App.css";

const deskSignals = [
  {
    label: "Status",
    value: "Available for Full-Time and Remote Roles",
    tag: "OPEN",
  },
  {
    label: "Focus",
    value: "Full-Stack MERN Products and REST API Development",
    tag: "BUILD",
  },
  {
    label: "Recent",
    value: "Web Developer at Lhasa Technology Studios",
    tag: "LIVE",
  },
  {
    label: "Research",
    value: "2 IEEE Publications in AI and Predictive Analytics",
    tag: "PAPER",
  },
];

const experiences = [
  {
    company: "Lhasa Technology Studios (Remote, Texas)",
    role: "Web Developer",
    period: "04/2026 - Present",
    appointmentLetter:
      "https://drive.google.com/file/d/REPLACE_WITH_LHASA_APPOINTMENT_LETTER/view",
    description:
      "Built and deployed interactive user interfaces using the React ecosystem. Utilized React Router for better client-side navigation and optimized page transitions. Debugged frontend issues using DevTools and implemented unit testing for core components. Maintained version control via GitHub, participating in code reviews and agile workflows.",
    quote:
      "Frontend excellence through iterative practice and careful engineering.",
  },
  {
    company: "SoftVerse Group (Onsite, Dhaka)",
    role: "MERN Full Stack Developer Intern",
    period: "02/2026 - 05/2026",
    appointmentLetter:
      "https://drive.google.com/file/d/13xAO-BzfGDYiUjBnP79JIWR5dbjatfJv/view?usp=sharing",
    description:
      "Developed and maintained full-stack web applications using MERN stack. Built responsive front-end components with React and managed state efficiently to improve user experience. Collaborated with the development team to debug issues and optimize application performance.",
    quote: "Shipped full-stack features with stable API-to-UI integration.",
  },
  {
    company: "Solution Hub Technologies (Remote, Dhaka)",
    role: "Analytics Assistant",
    period: "04/2025 - 06/2025",
    appointmentLetter:
      "https://drive.google.com/file/d/1OjzWqr9oUafSML7COMSp2hg1rQ89Kzfk/view?usp=sharing",
    description:
      "Managed daily employee attendance and task records. Monitored work activities and ensured task completion. Identified and reported violations or irregularities in performance to drive accountability.",
    quote: "Data discipline improved team execution quality.",
  },
];

const educationStories = [
  {
    title: "Bachelor of Computer Science and Engineering",
    dateline: "DHAKA, BANGLADESH (2022 - 2026)",
    body: "Currently pursuing Bachelor of Computer Science and Engineering (BCSE) at International University of Business Agriculture and Technology (IUBAT).",
  },
  {
    title: "Higher Secondary & Secondary School Certificate",
    dateline: "DHAKA, BANGLADESH (2017 - 2021)",
    body: "Accomplished the Secondary School Certificate (SSC - 2019) and Higher Secondary School Certificate (HSC- 2021) from the esteemed Uttara High School and College, Dhaka. And specializing in the Science Group.",
  },
];

const projects = [
  {
    title: "CarePulse - Healthcare Platform",
    subtitle: "Patient registration and appointment lifecycle management",
    stacks: "Next.js, TypeScript, Appwrite, Twilio, Tailwind CSS",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    edition: "HealthTech Feature",
    stamp: "Featured",
    github: "https://github.com/Kasfia-Mostafa/CarePulse",
    live: "https://care-pulse-one.vercel.app/",
    thumb: "https://i.ibb.co.com/ZpHqv2kD/care.png",
    size: "fullpage",
    hasCircle: true,
  },
  {
    title: "Hirrd - Job Post and Hiring Website",
    subtitle: "MERN hiring workflow with secure role-based operations",
    stacks: "React, Node.js, Express.js, MongoDB, JWT",
    description:
      "A full-stack MERN web application with responsive React frontend, secure Node.js/Express REST APIs, MongoDB persistence, authentication, and complete CRUD-based recruitment workflows.",
    edition: "Career Tech Bulletin",
    stamp: "Press Pick",
    github: "https://github.com/Kasfia-Mostafa/Hirrd",
    live: "https://hirrd-alpha.vercel.app/",
    thumb: "https://i.ibb.co.com/Tx4T7pT5/hirrd.jpg",
    size: "quarter",
    hasCircle: false,
  },
  {
    title: "Mi Casa - Real Estate Website",
    subtitle: "Immersive property browsing with multi-role ecosystem",
    stacks: "React, Node.js, Express.js, MongoDB, GSAP",
    description:
      "A sophisticated full-stack real estate application that revolutionizes property browsing with immersive animations and a multi-role ecosystem. Built with the MERN stack, the platform facilitates interactions between buyers, agents, and administrators.",
    edition: "Property Desk",
    stamp: "Top Story",
    github: "https://github.com/Kasfia-Mostafa/mi-casa",
    live: "https://github.com/Kasfia-Mostafa/mi-casa",
    thumb:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    size: "quarter",
    hasCircle: true,
  },
];

const certificates = [
  {
    title: "Web Development",
    issuer: "Programming Hero",
    year: "2024",
    link: "https://drive.google.com/file/d/1CxOxFqyNiEXf1efNyoAWg4tf9yYa800l/view?usp=sharing",
    image: "https://i.ibb.co.com/p6M7YYfX/Web-Development.jpg",
  },
  {
    title: "NASA Space App Challenge",
    issuer: "NASA International Space Apps Challenge",
    year: "2024",
    link: "https://drive.google.com/file/d/1-t_aHGdTIjCrGe1HQz4wmoFEy97I4yVi/view?usp=sharing",
    image: "https://i.ibb.co.com/gMwM28W9/NASA-Space-App-Challenge.jpg",
  },
  {
    title: "Web Development Hackathon",
    issuer: "HackCSB",
    year: "2024",
    link: "https://drive.google.com/file/d/1WsBiwEVKI_2jtz30GD5oQ6t1vznLXRCk/view?usp=sharing",
    image: "https://i.ibb.co.com/7dsXN66F/Web-Development-Hackathon.jpg",
  },
  {
    title: "Python With Machine Learning",
    issuer: "ICT Division of Bangladesh",
    year: "2025",
    link: "https://drive.google.com/file/d/1JoTQ3bAxXwF96EL3NeFhnpi4JqWjP4Mj/view?usp=sharing",
    image: "https://i.ibb.co.com/FLmhy9nM/Python-With-Machine-Learning.jpg",
  },
];

const researchPapers = [
  {
    title:
      "A Hybrid Deep Learning Framework for Robust Detection of Rice Leaf Diseases Using CNN and Transformer-Based Attention",
    abstract:
      "This publication proposes a hybrid deep learning pipeline that combines convolutional feature extraction with transformer-based attention to improve disease detection reliability in rice leaves. The framework targets robust classification under diverse field-image conditions and supports practical decision-making for agricultural monitoring workflows.",
    authors: "Kasfia Mostafa, Faisal Imran, Maliha Anjum, Sazibul Islam Siam",
    manuscript: "https://ieeexplore.ieee.org/document/11171957",
    label: "READ FULL MANUSCRIPT",
  },
  {
    title:
      "A Data-Driven Approach to Customer Churn Prediction in E-Commerce Business Using Machine Learning",
    abstract:
      "This study presents a machine-learning approach for identifying high-risk churn segments in e-commerce environments. The proposed framework emphasizes feature-driven prediction and actionable retention insights, enabling organizations to improve customer continuity through evidence-based intervention strategies.",
    authors: "Sazibul Islam Siam, Faisal Imran, Maliha Anjum, Kasfia Mostafa",
    manuscript: "https://ieeexplore.ieee.org/document/11172144",
    label: "READ FULL MANUSCRIPT",
  },
];

const tickerItems = [
  "AVAILABLE FOR HIRE",
  "MERN FULL STACK DEVELOPER",
  "KASFIA MOSTAFA",
  "DHAKA, BANGLADESH",
  "REACT · NEXT · TYPESCRIPT · NODE · MONGODB",
  "OPEN TO REMOTE OPPORTUNITIES",
];

const projectImageFallback =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23efe8d8'/%3E%3Cstop offset='100%25' stop-color='%23d8d0bd'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23333' font-size='44' font-family='Georgia, serif'%3EProject Image%3C/text%3E%3C/svg%3E";

const specialisms = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#13AA52",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Github",
    icon: SiGithub,
    color: "#181717",
  },
];

const LOADER_STICKY_MODE = false;

function experienceHeadline(role) {
  return `${role.toUpperCase()}.`;
}

function RegMark({ className }) {
  return (
    <svg
      className={`reg-mark ${className}`}
      viewBox="0 0 22 22"
      fill="none"
      stroke="#111"
      strokeWidth="1"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="11" y1="0" x2="11" y2="22" />
      <line x1="0" y1="11" x2="22" y2="11" />
      <circle cx="11" cy="11" r="2" fill="#111" />
    </svg>
  );
}

function DocIcon({ className }) {
  return (
    <svg
      className={`doc-icon ${className || ""}`}
      viewBox="0 0 18 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 2h10l4 4v14a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1z" />
      <path d="M12 2v5h4M5 10h8M5 14h8M5 18h5" />
    </svg>
  );
}

function ContactIcon({ className }) {
  return (
    <svg
      className={`doc-icon ${className || ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="15" height="12" rx="1.6" />
      <path d="M3.5 5l6.5 5 6.5-5" />
    </svg>
  );
}

function LinkedInIcon({ className, style }) {
  return (
    <svg
      className={`doc-icon ${className || ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 11.02 5 2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.84v1.71h.05c.53-1.01 1.84-2.08 3.8-2.08C20.17 8.63 21 10.78 21 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21H9z" />
    </svg>
  );
}

function GitHubIcon({ className, style }) {
  return (
    <svg
      className={`doc-icon ${className || ""}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={style}
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.27-.01-1.17-.01-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.97 10.97 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.28 5.7.42.36.79 1.07.79 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56a11.53 11.53 0 007.87-10.95C23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

function App() {
  const appRef = useRef(null);
  const headerRef = useRef(null);
  const copyStampRef = useRef(null);
  const contactStampRef = useRef(null);
  const letterpressRef = useRef([]);
  const loaderCloseTimeoutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderClosing, setIsLoaderClosing] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [dateLabel, setDateLabel] = useState(() =>
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }),
  );

  // Reset scroll position and URL on page load
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.location.hash = "";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateLabel(
        new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        }),
      );
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  function closeLoader() {
    setIsLoaderClosing(true);
    if (loaderCloseTimeoutRef.current) {
      window.clearTimeout(loaderCloseTimeoutRef.current);
    }
    loaderCloseTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      setIsLoaderClosing(false);
      document.body.style.overflow = "";
    }, 280);
  }

  const [loadingPercent, setLoadingPercent] = useState(
    LOADER_STICKY_MODE ? 72 : 0,
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const loaderDuration = prefersReducedMotion ? 700 : 2600;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (LOADER_STICKY_MODE) {
      // Keep loader static and visible while designing.
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    // Animate progress continuously and close once complete.
    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        const next = Math.min(100, prev + Math.random() * 12 + 6);
        if (next >= 100) {
          clearInterval(interval);
          window.setTimeout(() => {
            closeLoader();
          }, 80);
        }
        return next;
      });
    }, 120);

    const timer = window.setTimeout(() => {
      setLoadingPercent(100);
      window.setTimeout(() => {
        closeLoader();
      }, 80);
    }, loaderDuration);

    return () => {
      window.clearTimeout(timer);
      clearInterval(interval);
      if (loaderCloseTimeoutRef.current) {
        window.clearTimeout(loaderCloseTimeoutRef.current);
      }
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (LOADER_STICKY_MODE) return;

    gsap.registerPlugin(ScrollTrigger);
    const scrollNormalizer = null;

    const buttonSelector = [
      ".postit-btn",
      ".lead-link",
      ".stamp-btn",
      ".clipping-btn",
      ".research-link",
      ".certificate-link",
      ".board-link",
      ".typewriter-key",
      ".release-sheet",
      ".press-badge",
      ".project-card__btn",
    ].join(", ");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        appRef.current,
        { y: 60, scale: 0.985, boxShadow: "0 0 0 rgba(0,0,0,0)" },
        {
          y: 0,
          scale: 1,
          boxShadow: "0 24px 80px rgba(0,0,0,0.55)",
          duration: 1.1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".masthead-nav-col, .masthead-hero-col, .masthead-sidebar-col",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.3,
        },
      );

      gsap
        .timeline({ delay: 0.55 })
        .fromTo(
          contactStampRef.current,
          { opacity: 0, scale: 1.5, rotate: -22, y: -28 },
          {
            opacity: 1,
            scale: 0.96,
            rotate: 3,
            y: 0,
            duration: 0.28,
            ease: "power3.in",
          },
        )
        .to(contactStampRef.current, {
          scale: 1,
          rotate: 2,
          duration: 0.2,
          ease: "back.out(2.4)",
        });

      gsap.to(headerRef.current, {
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: "rgba(244,241,234,0.96)",
        ease: "power2.out",
        scrollTrigger: { start: "top top", end: "+=220", scrub: true },
      });

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        const cards = section.querySelectorAll(".stagger-item");
        gsap.fromTo(
          section,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 83%" },
          },
        );

        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 22 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 80%" },
            },
          );
        }
      });

      gsap.fromTo(
        ".classifieds-layout",
        { opacity: 0, scaleY: 0.25, transformOrigin: "top center" },
        {
          opacity: 1,
          scaleY: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: "#contact", start: "top 85%" },
        },
      );

      const certificateCards = gsap.utils.toArray(".certificate-card");
      if (certificateCards.length) {
        gsap.from(certificateCards, {
          y: 34,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: "#certifications", start: "top 82%" },
        });
      }

      const researchAbstracts = gsap.utils.toArray(".research-abstract-wrap");
      if (researchAbstracts.length) {
        gsap.fromTo(
          researchAbstracts,
          { opacity: 0, scaleY: 0.15, transformOrigin: "top center" },
          {
            opacity: 1,
            scaleY: 1,
            duration: 0.75,
            ease: "power2.out",
            stagger: 0.14,
            scrollTrigger: { trigger: "#research", start: "top 82%" },
          },
        );
      }

      const animatedButtons = gsap.utils.toArray(buttonSelector);
      animatedButtons.forEach((button, index) => {
        gsap.fromTo(
          button,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.42,
            ease: "power2.out",
            delay: index * 0.02,
            scrollTrigger: {
              trigger: button,
              start: "top 92%",
            },
          },
        );
      });
    }, appRef);

    return () => {
      if (scrollNormalizer) scrollNormalizer.kill();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 360);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("kasfiamostafa03@gmail.com");
      gsap
        .timeline()
        .set(copyStampRef.current, { autoAlpha: 1, scale: 0.7, rotate: -10 })
        .to(copyStampRef.current, {
          scale: 1,
          rotate: 0,
          duration: 0.22,
          ease: "back.out(2.4)",
        })
        .to(copyStampRef.current, {
          autoAlpha: 0,
          y: -8,
          duration: 0.42,
          delay: 1.2,
          ease: "power2.out",
        });
    } catch {
      // no-op
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function restartPage() {
    window.location.reload();
  }

  if (LOADER_STICKY_MODE) {
    return (
      <div className="launch-loader" role="status" aria-live="polite">
        <div className="launch-loader__sheet">
          <img
            src="https://i.ibb.co.com/hxkKq61L/km-remove.png"
            alt="KM logo"
            className="launch-loader__logo"
          />
          <div className="launch-loader__meter" aria-hidden="true">
            <span
              className="launch-loader__meter-fill"
              style={{ width: `${loadingPercent}%` }}
            />
          </div>
          <p className="launch-loader__progress">
            {Math.round(loadingPercent)}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div
          className={`launch-loader ${isLoaderClosing ? "is-exit" : ""}`}
          role="status"
          aria-live="polite"
        >
          <div className="launch-loader__sheet">
            <img
              src="https://i.ibb.co.com/hxkKq61L/km-remove.png"
              alt="KM logo"
              className="launch-loader__logo"
            />
            <div className="launch-loader__meter" aria-hidden="true">
              <span
                className="launch-loader__meter-fill"
                style={{ width: `${loadingPercent}%` }}
              />
            </div>
            <p className="launch-loader__progress">
              {Math.round(loadingPercent)}%
            </p>
          </div>
        </div>
      )}

      <div
        ref={appRef}
        className={`broadsheet-paper ${isLoading ? "is-loading" : "is-ready"}`}
      >
        <header ref={headerRef} className="top-strap">
          <div className="page-inner top-strap__inner">
            <button
              type="button"
              className="top-strap__logo-btn"
              onClick={restartPage}
              aria-label="Restart page"
            >
              <img
                src="https://i.ibb.co.com/hxkKq61L/km-remove.png"
                alt="KM logo"
                className="top-strap__logo"
              />
            </button>

            <span>WEB DEVELOPER · {dateLabel}</span>
            <span>EST. 2026 · VOL IV</span>
          </div>
        </header>

        <div className="page-inner page-inner--main">
          <section
            className="masthead-section reveal-section"
            aria-label="Masthead"
          >
            <div className="masthead-grid" style={{ position: "relative" }}>
              <RegMark className="reg-mark--tl" />
              <RegMark className="reg-mark--tr" />
              <RegMark className="reg-mark--bl" />
              <RegMark className="reg-mark--br" />

              <a
                href="#contact"
                className="postit-btn"
                ref={contactStampRef}
                aria-label="Go to contact section"
                onClick={handleSmoothScroll}
              >
                Contact Desk
              </a>

              <div className="masthead-nav-col">
                <p className="kicker">Today&apos;s Edition</p>
                <a
                  href="#education"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Editorial: Education
                </a>
                <a
                  href="#experience"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Business: Experience
                </a>
                <a
                  href="#projects"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Display Ads: Projects
                </a>

                <a
                  href="#research"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Science Desk: Research
                </a>
                <a
                  href="#certifications"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Legal Notices: Certificates
                </a>
                <a
                  href="#contact"
                  className="lead-link"
                  onClick={handleSmoothScroll}
                  style={{
                    transition: "transform 150ms ease, box-shadow 150ms ease",
                    boxShadow: "0 1px 0 rgba(17, 17, 17, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translate(1px, 1px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(17, 17, 17, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translate(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 0 rgba(17, 17, 17, 0.06)";
                  }}
                >
                  Classifieds: Contact
                </a>

                <div className="market-list" style={{ marginTop: "24px" }}>
                  <p className="kicker" style={{ marginBottom: 0 }}>
                    News Desk
                  </p>
                  {deskSignals.map((signal) => (
                    <article key={signal.label} className="market-item">
                      <div className="market-item__head">
                        <span>{signal.label}</span>
                        <span className="market-item__tag">{signal.tag}</span>
                      </div>
                      <p className="market-item__copy">{signal.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="col-rule" aria-hidden="true" />

              <div className="masthead-hero-col">
                <p className="kicker">Front Page</p>
                <h1 className="masthead-name">
                  KASFIA
                  <br />
                  MOSTAFA
                </h1>
                <p className="masthead-tagline">
                  Web Developer · MERN Stack · Dhaka, Bangladesh
                </p>

                <div className="masthead-portrait-frame">
                  <div className="halftone-wrap">
                    <img
                      src="https://i.ibb.co.com/fdfrfWnd/KM.jpg"
                      alt="Kasfia Mostafa portrait"
                      className="hero-portrait"
                    />
                  </div>
                </div>

                <div className="stamp-row">
                  <a href="https://drive.google.com/file/d/17mRTodF-NERYpsUUjDlRahMG19Lhz5ty/view?usp=sharing" className="Documents-btn">
                    <span className="folderContainer" aria-hidden="true">
                      <svg
                        className="fileBack"
                        width="146"
                        height="113"
                        viewBox="0 0 146 113"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                          fill="url(#paint0_linear_117_4)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_117_4"
                            x1="0"
                            y1="0"
                            x2="72.93"
                            y2="95.4804"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#8F88C2" />
                            <stop offset="1" stopColor="#5C52A2" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        className="filePage"
                        width="88"
                        height="99"
                        viewBox="0 0 88 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="88"
                          height="99"
                          fill="url(#paint0_linear_117_6)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_117_6"
                            x1="0"
                            y1="0"
                            x2="81"
                            y2="160.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#686868" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        className="fileFront"
                        width="160"
                        height="79"
                        viewBox="0 0 160 79"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                          fill="url(#paint0_linear_117_5)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_117_5"
                            x1="38.7619"
                            y1="8.71323"
                            x2="66.9106"
                            y2="82.8317"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#C3BBFF" />
                            <stop offset="1" stopColor="#51469A" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <p className="text">Download Resume</p>
                  </a>
                  <a
                    href="#contact"
                    className="Documents-btn Documents-btn--contact"
                    onClick={handleSmoothScroll}
                  >
                    <ContactIcon className="doc-icon" />
                    <p className="text">Contact Me</p>
                  </a>
                </div>
              </div>

              <div className="col-rule" aria-hidden="true" />

              <div className="masthead-sidebar-col">
                <p className="kicker">About The Author</p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.92rem",
                    lineHeight: 1.72,
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                >
                  I&apos;m a web developer specializing in building full-stack
                  web applications. Proficient in Nextjs, React, MongoDB, Express.js,
                  and Node.js to create dynamic, scalable, and user-friendly
                  solutions.
                </p>
                <p
                  style={{
                    fontFamily: "Courier Prime, monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "20px",
                    borderTop: "1px solid #111",
                    paddingTop: "10px",
                  }}
                >
                  Specialisms
                </p>
                {specialisms.map((spec) => {
                  const IconComponent = spec.icon;
                  return (
                    <div
                      key={spec.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                        borderBottom: "1px dashed rgba(17,17,17,0.2)",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.82rem",
                        transition: "transform 0.2s ease, opacity 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateX(4px)";
                        e.currentTarget.style.opacity = "0.95";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.opacity = "1";
                      }}
                    >
                      <IconComponent
                        size={18}
                        style={{
                          color: spec.color,
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      {spec.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section-block reveal-section" id="education">
            <div className="section-head">
              <p className="kicker">Letter from the Editor</p>
              <h2>Education</h2>
            </div>

            <div className="human-interest-grid">
              {educationStories.map((story) => (
                <article key={story.title} className="human-block stagger-item">
                  <p className="dateline">{story.dateline}</p>
                  <h3>{story.title}</h3>
                  <p>{story.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal-section" id="experience">
            <div className="section-head">
              <p className="kicker">Business Gazette</p>
              <h2>Work Experience</h2>
            </div>

            <div className="experience-list">
              {experiences.map((job) => (
                <article
                  key={job.company}
                  className="experience-item stagger-item"
                >
                  <p className="dateline">{job.period}</p>
                  <h3 className="exp-headline">
                    {experienceHeadline(job.role)}
                  </h3>
                  <p className="exp-meta">{job.company}</p>

                  <div className="exp-body-grid">
                    <div className="exp-col">
                      <blockquote className="exp-pull-quote">
                        {job.quote}
                      </blockquote>
                      <p className="article-copy">{job.description}</p>
                    </div>
                  </div>
                  <a
                    href={job.appointmentLetter}
                    target="_blank"
                    rel="noreferrer"
                    className="clipping-btn"
                  >
                    View Appointment Letter
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal-section" id="projects">
            <div className="section-head">
              <p className="kicker">Premium Showcase</p>
              <h2>Featured Work</h2>
              <p className="editor-letter">
                I started my developer journey by obsessing over how digital
                products communicate. Over time, that curiosity became a craft
                rooted in engineering discipline, interface clarity, and
                performance-focused full-stack delivery. I build software that
                feels intentional, reads cleanly, and scales with confidence.
              </p>
            </div>

            <svg
              className="projects-decoration"
              viewBox="0 0 800 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="dash-pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="10"
                    x2="10"
                    y2="10"
                    stroke="#ff006e"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                </pattern>
              </defs>
              <rect width="800" height="60" fill="url(#dash-pattern)" />
            </svg>

            <div className="ads-grid">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={idx}
                  imageFallback={projectImageFallback}
                />
              ))}
            </div>
          </section>

          <section
            className="section-block reveal-section research-section"
            id="research"
          >
            <div className="research-head">
              <p className="kicker">Science & Technology Supplement</p>
              <h2>RESEARCH & ACADEMIC INQUIRY</h2>
              <span className="research-vol">Vol. 1 - Science Daily</span>
            </div>

            <div className="research-grid">
              {researchPapers.map((paper, idx) => (
                <article
                  key={paper.title}
                  className="research-article stagger-item"
                >
                  <h3 className="research-title">{paper.title}</h3>
                  <p className="research-credit">
                    Authored by {paper.authors}.
                  </p>

                  <div className="research-abstract-wrap">
                    <p className="research-abstract">
                      <span className="research-summary-tag">Summary</span>
                      {paper.abstract}
                    </p>
                  </div>

                  <a
                    href={paper.manuscript}
                    target="_blank"
                    rel="noreferrer"
                    className="research-link"
                  >
                    {paper.label}
                  </a>

                  {idx === 0 && (
                    <div className="research-divider" aria-hidden="true" />
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section-block reveal-section" id="certifications">
            <div className="section-head accreditation-head">
              <p className="kicker">Legal Notices</p>
              <h2>OFFICIAL ACCREDITATIONS</h2>
            </div>

            <div className="cert-grid">
              {certificates.map((certificate, idx) => (
                <article
                  key={certificate.title}
                  className="certificate-card stagger-item"
                >
                  <p className="certificate-kicker">
                    Notice No. {String(idx + 1).padStart(2, "0")}
                  </p>
                  <figure className="certificate-frame">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = projectImageFallback;
                      }}
                    />
                  </figure>
                  <p className="certificate-caption">Official Archive Scan</p>
                  <h3 className="certificate-title">{certificate.title}</h3>
                  <p className="certificate-meta">
                    Issued by {certificate.issuer} - {certificate.year}
                  </p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-link"
                  >
                    View Original
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>

        <footer className="contact-desk reveal-section" id="contact">
          <div className="page-inner contact-desk__inner">
            <div className="double-rule" aria-hidden="true" />

            <div className="classifieds-layout">
              <div className="desk-paper desk-paper--vertical">
                <p className="desk-vertical-title">
                  Editorial Office · Correspondence Desk
                </p>
              </div>

              <article
                className="desk-paper editorial-board"
                style={{ position: "relative" }}
              >
                <p className="kicker">Main Contact</p>
                <h2>LET&apos;S CORRESPOND.</h2>
                <p className="board-note">
                  Reach out for editorial collaborations, product builds, and
                  full-stack development partnerships with clean delivery
                  standards and high accountability.
                </p>

                <div className="board-row">
                  <p className="board-label">Lead Story: Email Dispatch</p>
                  <a
                    href="mailto:kasfiamostafa03@gmail.com"
                    className="board-link board-link--no-bar"
                    aria-label="Email kasfiamostafa03@gmail.com"
                  >
                    kasfiamostafa03@gmail.com
                  </a>
                  <br />
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="typewriter-key"
                  >
                    Copy Address
                  </button>
                  <p className="board-label" style={{ marginTop: "12px" }}>
                    Desk Line: +8801608640114 · Dhaka, Bangladesh
                  </p>
                </div>

                <div className="press-pass">
                  <div className="press-pass__copy">
                    <p className="board-label">Official Press Credentials</p>
                    <a href="/Kasfia_Mostafa.pdf" className="release-sheet">
                      <DocIcon />
                      FOR IMMEDIATE RELEASE: DOWNLOAD RESUME
                    </a>
                  </div>
                </div>

                <span
                  ref={copyStampRef}
                  className="copy-stamp"
                  aria-live="polite"
                >
                  COPIED
                </span>
              </article>

              <article className="desk-paper action-desk">
                <p className="kicker">Circulation Desk</p>
                <h3>Public Channels</h3>
                <a
                  href="https://www.linkedin.com/in/kasfiamostafa09/"
                  target="_blank"
                  rel="noreferrer"
                  className="press-badge ink-link"
                  ref={(el) => {
                    letterpressRef.current[0] = el;
                  }}
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon
                    className="doc-icon"
                    style={{ color: "#0A66C2" }}
                  />
                  LinkedIn Profile
                </a>

                <a
                  href="https://github.com/Kasfia-Mostafa"
                  target="_blank"
                  rel="noreferrer"
                  className="press-badge ink-link"
                  ref={(el) => {
                    letterpressRef.current[1] = el;
                  }}
                  aria-label="GitHub profile"
                >
                  <GitHubIcon
                    className="doc-icon"
                    style={{ color: "#181717" }}
                  />
                  GitHub Profile
                </a>
              </article>
            </div>

            <svg
              className="desk-dust"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g stroke="currentColor" fill="none" strokeWidth="1">
                <path d="M20 20 L180 28" />
                <path d="M280 32 L460 24" />
                <path d="M540 18 L680 26" />
                <path d="M780 30 L980 22" />
                <path d="M1020 24 L1160 32" />
                <path d="M70 44 L240 38" />
                <path d="M310 50 L460 42" />
                <path d="M560 36 L760 48" />
              </g>
            </svg>

            <div
              className="double-rule double-rule--bottom"
              aria-hidden="true"
            />
          </div>
        </footer>

        <button
          type="button"
          className={`scroll-top-btn${showScrollTop ? " is-visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>

        <div className="breaking-ticker" aria-label="Breaking news ticker">
          <span className="ticker-label">BREAKING</span>
          <div className="breaking-track">
            {[...tickerItems, ...tickerItems, ...tickerItems].map(
              (item, idx) => (
                <span key={`${item}-${idx}`} className="breaking-item">
                  {item} &nbsp;•&nbsp;
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
