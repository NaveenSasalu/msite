import React, { useState, useEffect } from "react";
import {
  Terminal,
  Code2,
  Cpu,
  Layers,
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Github,
  Twitter,
  Zap,
  Activity,
  GitBranch,
  Settings2,
  ClipboardCheck,
  LifeBuoy,
  ShieldCheck,
  Clock,
  ChevronDown,
  Plus,
  Minus,
  Cloud,
  Box,
  Infinity,
} from "lucide-react";

import "./index.css";

// --- CONFIGURATION: Content for Kaayaka.in ---
const CONTENT = {
  brand: "Kaayaka",
  domain: "kaayaka.in",
  logo: "kaayaka-logo.jpg",
  slogan: "Precision Engineering. Purposeful Automation.",
  hero: {
    title: "Modernizing Enterprise IT through Intelligence & Automation",
    subtitle:
      "From GitOps-driven delivery to robust ITSM frameworks, we provide the architectural backbone for high-velocity software organizations.",
    ctaPrimary: "Consult an Expert",
    ctaSecondary: "Explore Methodology",
  },
  stats: [
    {
      label: "Deployment Speed",
      value: "10x",
      detail: "Faster release cycles",
    },
    {
      label: "Infrastructure Uptime",
      value: "99.99%",
      detail: "Enterprise SLA",
    },
    {
      label: "Manual Toil Reduced",
      value: "85%",
      detail: "Through automation",
    },
    { label: "Clients Globally", value: "xx+", detail: "Trusted partners" },
  ],
  services: [
    {
      icon: <Terminal className="w-8 h-8 text-blue-500" />,
      title: "DevOps",
      desc: "Streamlining development lifecycles with robust CI/CD pipelines and infrastructure as code.",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-500" />,
      title: "GitOps",
      desc: "Declarative infrastructure and application management using Git as the single source of truth.",
    },
    {
      icon: <Activity className="w-8 h-8 text-emerald-500" />,
      title: "SRE",
      desc: "Ensuring site reliability through error budgets, SLIs/SLOs, and proactive incident management.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Automation",
      desc: "Eliminating toil by automating repetitive manual tasks across your entire technical stack.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-cyan-500" />,
      title: "IT Request Management",
      desc: "Centralizing and accelerating internal service delivery with modern service desk workflows.",
    },
    {
      icon: <Settings2 className="w-8 h-8 text-indigo-500" />,
      title: "ITSM",
      desc: "Aligning IT services with business needs through industry-standard ITIL frameworks.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-rose-500" />,
      title: "App Dev & Support",
      desc: "End-to-end application development paired with 24/7 managed support services.",
    },
  ],
  stack: [
    "Docker",
    "Kubernetes",
    "K3s",
    "ArgoCD",
    "Terraform",
    "Prometheus",
    "ServiceNow",
    "Jira",
    "React",
    "Go",
  ],
  process: [
    {
      step: "01",
      title: "Audit & Analysis",
      desc: "We evaluate your current ITSM and DevOps maturity levels to identify bottlenecks.",
    },
    {
      step: "02",
      title: "Architecture",
      desc: "Designing automation workflows and GitOps structures tailored to your team's velocity.",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Incremental rollout of infrastructure and request management tools with zero downtime.",
    },
    {
      step: "04",
      title: "Managed Growth",
      desc: "Continuous SRE oversight, observability tuning, and ongoing application support.",
    },
  ],
  faq: [
    {
      q: "How does GitOps benefit my existing infrastructure?",
      a: "GitOps provides a single source of truth for your infrastructure. It ensures that your K8s or Kubernetes cluster state always matches what's in your Git repository, enabling easy rollbacks and automated syncing via ArgoCD.",
    },
    {
      q: "Can you help migrate our legacy ITSM to a modern workflow?",
      a: "Yes. We specialize in mapping traditional ITIL processes into automated request management systems, reducing manual ticket handling.",
    },
    {
      q: "Is Kaayaka specialized in K8s specifically?",
      a: "While we handle standard Kubernetes, we are specialists in K8s for edge computing and lightweight environments, ensuring high performance on smaller footprints.",
    },
  ],
  testimonials: [
    {
      name: "Arun Varma",
      role: "VP Engineering, TechScale",
      quote:
        "Kaayaka's GitOps implementation reduced our deployment lead time from days to minutes.",
    },
    {
      name: "Deepa Nair",
      role: "Operations Lead, GlobalConnect",
      quote:
        "Our IT request management has never been this fluid. Total visibility across the entire org.",
    },
  ],
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 font-bold text-2xl tracking-tight text-slate-900 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={CONTENT.logo}
              alt={`${CONTENT.brand} Logo`}
              className="w-10 h-10 object-contain rounded-lg shadow-sm"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <span className="tracking-tighter uppercase font-black">
              {CONTENT.brand}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <button
              onClick={() => scrollTo("services")}
              className="hover:text-indigo-600 transition-colors"
            >
              Offerings
            </button>
            <button
              onClick={() => scrollTo("process")}
              className="hover:text-indigo-600 transition-colors"
            >
              Methodology
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-indigo-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Start Project
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
            <button
              className="text-left py-2"
              onClick={() => scrollTo("services")}
            >
              Offerings
            </button>
            <button
              className="text-left py-2"
              onClick={() => scrollTo("process")}
            >
              Methodology
            </button>
            <button className="text-left py-2" onClick={() => scrollTo("faq")}>
              FAQ
            </button>
            <button
              className="text-left py-2 text-indigo-600 font-bold"
              onClick={() => scrollTo("contact")}
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-25 md:pb-15 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              GitOps-Managed Infrastructure
            </div>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
              {CONTENT.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              {CONTENT.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-indigo-200"
              >
                {CONTENT.hero.ctaPrimary} <ArrowRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollTo("process")}
                className="px-8 py-5 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
              >
                {CONTENT.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mr-4">
                Stack:
              </span>
              {CONTENT.stack.map((item, i) => (
                <span
                  key={i}
                  className="font-mono text-sm font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {CONTENT.stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 text-center">
              Core Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 text-center tracking-tight">
              Our Offerings
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONTENT.services.map((s, idx) => (
              <div
                key={idx}
                className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-white w-fit rounded-2xl shadow-sm border border-slate-100 group-hover:bg-indigo-50 transition-all">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Methodology */}
      <section
        id="process"
        className="py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">
                Methodology
              </h2>
              <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">
                Engineered for <br />{" "}
                <span className="text-indigo-400 underline decoration-indigo-400/20">
                  Consistency.
                </span>
              </h3>
              <div className="space-y-12">
                {CONTENT.process.map((p, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 text-indigo-400 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{p.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md">
                <div className="mb-8 flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono tracking-tighter">
                    gitops_sync.yaml
                  </div>
                </div>
                <pre className="font-mono text-xs md:text-sm text-indigo-300 overflow-x-auto">
                  {`strategy: GitOps
reconcile: EveryPush
security:
  - scans: true
  - access: RBAC
  - secrets: SealedSecrets
automation:
  - ci_cd: ArgoCD
  - infra: Terraform`}
                </pre>
                <div className="mt-10 pt-10 border-t border-white/10 italic text-slate-400">
                  "We automate the mundane so your engineers can focus on the
                  mission."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3 tracking-tighter">
              Questions
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Common Queries
            </h3>
          </div>
          <div className="space-y-4">
            {CONTENT.faq.map((item, i) => (
              <div
                key={i}
                className="border border-slate-100 rounded-2xl bg-slate-50 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-lg text-slate-800 hover:bg-white transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {item.q}
                  {activeFaq === i ? (
                    <Minus className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {activeFaq === i && (
                  <div className="p-6 pt-0 text-slate-600 leading-relaxed bg-white text-lg">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="lg:col-span-2 p-12 text-white flex flex-col justify-between bg-indigo-900/20">
              <div>
                <img
                  src={CONTENT.logo}
                  alt=""
                  className="w-12 h-12 mb-10 object-contain rounded-lg"
                />
                <h3 className="text-4xl font-black mb-6 tracking-tight">
                  Let's solve your tech debt.
                </h3>
                <p className="text-indigo-200 text-lg mb-8 opacity-80">
                  Ready to automate your K8s cluster or modernize your ITSM
                  approach?
                </p>
              </div>
              <div className="space-y-4 font-bold">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-indigo-400" /> hello@
                  {CONTENT.domain}
                </div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <ShieldCheck /> Service Excellence
                </div>
              </div>
            </div>

            <form
              className="lg:col-span-3 p-12 bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 outline-none"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 outline-none"
                    placeholder="Project goals..."
                  ></textarea>
                </div>
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                Send Message <Zap className="w-5 h-5 fill-white" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3 font-black text-2xl tracking-tighter">
              <img
                src={CONTENT.logo}
                alt=""
                className="w-8 h-8 object-contain"
              />
              KAAYAKA
            </div>
            <div className="flex gap-8 text-slate-400 font-bold uppercase text-xs tracking-widest">
              <a href="#" className="hover:text-indigo-600">
                Twitter
              </a>
              <a href="#" className="hover:text-indigo-600">
                Github
              </a>
              <a href="#" className="hover:text-indigo-600">
                Linkedin
              </a>
            </div>
            <p className="text-slate-400 text-sm font-mono tracking-tighter">
              © {new Date().getFullYear()} {CONTENT.brand} Consulting. Managed via GitOps.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
