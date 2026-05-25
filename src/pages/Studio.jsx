import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSmartphone,
  FiCpu,
  FiGlobe,
  FiExternalLink,
  FiArrowRight,
  FiZap,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

/* ──────────────────────────────────────────────
   Studio product data – ANLABS branded
   ────────────────────────────────────────────── */
const pillars = [
  {
    id: "android",
    label: "Android Apps",
    icon: FiSmartphone,
    accent: "from-emerald-400 to-cyan-500",
    accentDark: "dark:from-emerald-500 dark:to-cyan-400",
    dotColor: "bg-emerald-400",
    description:
      "Polished mobile experiences shipped on the Google Play Store — from subscription trackers to icon packs.",
    products: [
      {
        name: "SubReminder",
        tagline: "Subscription reminders without surprise charges",
        description:
          "Track renewal dates, upcoming payments, and monthly subscription spending in one simple Android app.",
        status: "live",
        tags: ["Subscriptions", "Reminders", "Budget"],
        link: "https://subreminder-website.vercel.app/",
      },
      {
        name: "Trip Tally",
        tagline: "Travel expense splitter for trips & groups",
        description:
          "Split costs, track trip spending, and keep group budgets understandable with a clean travel companion.",
        status: "live",
        tags: ["Travel", "Expense Splitting", "Groups"],
        link: "https://triptally.vercel.app/",
      },
      {
        name: "Woodfy Icon Pack",
        tagline: "Warm wood-inspired icons for Android",
        description:
          "A custom Android icon pack with a warm wood-inspired visual style for personalized home screens.",
        status: "live",
        tags: ["Personalization", "Icons", "Design"],
        link: "https://anlabs-dev.vercel.app/apps/woodfy-icon-pack",
      },
      {
        name: "Luma Walls",
        tagline: "Curated wallpapers for sharp visuals",
        description:
          "A curated wallpaper app built for sharp visuals, clean browsing, and expressive phone personalization.",
        status: "soon",
        tags: ["Wallpapers", "Personalization"],
        link: "",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Automations",
    icon: FiCpu,
    accent: "from-violet-500 to-fuchsia-500",
    accentDark: "dark:from-violet-400 dark:to-fuchsia-400",
    dotColor: "bg-violet-400",
    description:
      "Intelligent agents, RAG pipelines, and automated workflows that remove repetitive work from business ops.",
    products: [
      {
        name: "Automata AI",
        tagline: "AI Automation hub & workflow engine",
        description:
          "A dedicated automation hub for AI agents, business workflows, LLM tools, and repeatable automation systems.",
        status: "live",
        tags: ["Agents", "Workflows", "LLM"],
        link: "https://anlabs-dev.vercel.app/apps/automata-ai",
      },
      {
        name: "Personalised RAG",
        tagline: "Answer from private knowledge bases",
        description:
          "Retrieval-augmented AI assistant that answers from private knowledge bases with context-aware responses.",
        status: "building",
        tags: ["RAG", "LLM", "Knowledge Base"],
        link: "",
      },
      {
        name: "Voice Agent",
        tagline: "Conversational AI for calls & support",
        description:
          "Conversational AI voice workflow for calls, lead qualification, appointment handling, and customer support.",
        status: "building",
        tags: ["Voice AI", "Telephony", "Agents"],
        link: "",
      },
      {
        name: "Social Media AI Manager",
        tagline: "Content planning & post automation",
        description:
          "Automation system for content planning, post generation, scheduling support, and performance-focused social workflows.",
        status: "building",
        tags: ["Social Media", "Content AI", "Scheduling"],
        link: "",
      },
    ],
  },
  {
    id: "web",
    label: "Web Products",
    icon: FiGlobe,
    accent: "from-amber-400 to-orange-500",
    accentDark: "dark:from-amber-300 dark:to-orange-400",
    dotColor: "bg-amber-400",
    description:
      "SaaS concepts, product pages, and web experiences that turn ideas into usable, launch-ready products.",
    products: [
      {
        name: "SubReminder Web",
        tagline: "Product pages & app feature previews",
        description:
          "Web experience for SubReminder with product pages, download routing, and app feature previews.",
        status: "live",
        tags: ["Product Page", "Marketing", "Web"],
        link: "https://subreminder-website.vercel.app/",
      },
      {
        name: "Toothsi Dental Clinic",
        tagline: "Dental clinic website & SaaS concept",
        description:
          "Responsive dental clinic website focused on appointment discovery, treatment details, and clean patient navigation.",
        status: "building",
        tags: ["SaaS", "Healthcare", "Appointments"],
        link: "",
      },
      {
        name: "ANLABS Website",
        tagline: "Studio portfolio & product hub",
        description:
          "AI automation, SaaS, and Android product studio website showcasing launched apps and Ajinkya's builder profile.",
        status: "live",
        tags: ["Studio", "Portfolio", "Hub"],
        link: "https://anlabs-dev.vercel.app/",
      },
    ],
  },
];

const stats = [
  { value: "09", label: "Products mapped", icon: FiLayers },
  { value: "04", label: "Android apps", icon: FiSmartphone },
  { value: "04", label: "AI Automations", icon: FiCpu },
  { value: "03", label: "Web products", icon: FiGlobe },
];

/* ──────────────────────────────────────────────
   Status pill
   ────────────────────────────────────────────── */
const StatusPill = ({ status }) => {
  const config = {
    live: {
      bg: "bg-emerald-500/15 dark:bg-emerald-400/15",
      text: "text-emerald-700 dark:text-emerald-300",
      dot: "bg-emerald-500 dark:bg-emerald-400",
      label: "Live",
    },
    building: {
      bg: "bg-amber-500/15 dark:bg-amber-400/15",
      text: "text-amber-700 dark:text-amber-300",
      dot: "bg-amber-500 dark:bg-amber-400",
      label: "Building",
    },
    soon: {
      bg: "bg-slate-500/15 dark:bg-slate-400/15",
      text: "text-slate-600 dark:text-slate-300",
      dot: "bg-slate-400 dark:bg-slate-500",
      label: "Coming Soon",
    },
  };
  const c = config[status] || config.soon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${c.bg} ${c.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};

/* ──────────────────────────────────────────────
   Product Card
   ────────────────────────────────────────────── */
const ProductCard = ({ product, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:border-slate-700/60 dark:bg-slate-800/80 dark:shadow-black/20 dark:hover:border-slate-600 dark:hover:shadow-black/30"
  >
    {/* Subtle gradient hover glow */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-400/10 dark:to-violet-400/10" />

    <div className="relative z-10">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-poppins text-lg font-semibold text-text-light dark:text-text-dark">
            {product.name}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {product.tagline}
          </p>
        </div>
        <StatusPill status={product.status} />
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {product.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700/60 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 font-poppins text-sm">
        {product.link ? (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Open project
            <FiExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="font-semibold text-slate-400 dark:text-slate-500">
            Case study soon
          </span>
        )}
      </div>
    </div>
  </motion.article>
);

/* ──────────────────────────────────────────────
   Pillar Tab Button
   ────────────────────────────────────────────── */
const PillarTab = ({ pillar, isActive, onClick }) => {
  const Icon = pillar.icon;
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
        isActive
          ? "bg-white text-slate-900 shadow-lg shadow-slate-200/50 dark:bg-slate-800 dark:text-white dark:shadow-black/30"
          : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
      }`}
      whileTap={{ scale: 0.97 }}
    >
      <Icon className="h-4.5 w-4.5" />
      {pillar.label}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className={`absolute -bottom-0.5 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r ${pillar.accent}`}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
};

/* ──────────────────────────────────────────────
   Main Studio Page
   ────────────────────────────────────────────── */
const Studio = () => {
  const [activePillar, setActivePillar] = useState("android");
  const currentPillar = pillars.find((p) => p.id === activePillar);

  return (
    <section className="max-container bg-white dark:bg-slate-950">
      {/* ─── Hero ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12"
      >
        {/* Background decorative blobs */}
        <div className="pointer-events-none absolute -left-32 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl dark:from-violet-500/5 dark:to-fuchsia-500/5" />
        <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl dark:from-cyan-500/5 dark:to-blue-500/5" />

        <div className="relative">
          {/* Brand mark */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-lg dark:from-slate-100 dark:to-slate-300">
              <span className="font-poppins text-lg font-extrabold text-white dark:text-slate-900">
                AN
              </span>
            </div>
            <div>
              <h2 className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                ANLABS Studio
              </h2>
            </div>
          </div>

          <h1 className="head-text">
            Products built at{" "}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-blue-400 dark:to-cyan-400">
              ANLABS
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A product studio by{" "}
            <span className="font-semibold text-slate-800 dark:text-white">
              Ajinkya Narke
            </span>{" "}
            — building Android apps, AI automations, and web products that turn
            ideas into launch-ready experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://anlabs-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl dark:from-slate-100 dark:to-slate-300 dark:text-slate-900"
            >
              <FiZap className="h-4 w-4" />
              Visit ANLABS
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600"
            >
              All Projects
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ─── Stats strip ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-md dark:border-slate-700/60 dark:from-slate-800/80 dark:to-slate-800/40 dark:hover:border-slate-600"
            >
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/5 to-violet-500/5 blur-2xl transition-opacity group-hover:opacity-100 dark:from-blue-400/10 dark:to-violet-400/10" />
              <Icon className="mb-2 h-5 w-5 text-slate-400 dark:text-slate-500" />
              <p className="font-poppins text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* ─── Pillar tabs ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <div className="flex flex-wrap gap-2 rounded-2xl bg-slate-100/80 p-2 dark:bg-slate-800/50">
          {pillars.map((pillar) => (
            <PillarTab
              key={pillar.id}
              pillar={pillar}
              isActive={activePillar === pillar.id}
              onClick={() => setActivePillar(pillar.id)}
            />
          ))}
        </div>
      </motion.div>

      {/* ─── Active pillar content ─── */}
      <AnimatePresence mode="wait">
        {currentPillar && (
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {/* Pillar header */}
            <div className="mb-8 flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${currentPillar.accent} ${currentPillar.accentDark} shadow-lg`}
              >
                <currentPillar.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-poppins text-xl font-bold text-text-light dark:text-text-dark sm:text-2xl">
                  {currentPillar.label}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {currentPillar.description}
                </p>
              </div>
            </div>

            {/* Product grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {currentPillar.products.map((product, i) => (
                <ProductCard key={product.name} product={product} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Workflow / Process strip ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <div className="mb-8 text-center">
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
            How we build
          </p>
          <h2 className="mt-2 font-poppins text-2xl font-bold text-text-light dark:text-text-dark sm:text-3xl">
            From idea to product
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Map the workflow",
              desc: "Clarify the user, business process, inputs, outputs, and success metrics before writing any code.",
              icon: FiLayers,
            },
            {
              step: "02",
              title: "Prototype & ship",
              desc: "Build the smallest useful product path first, then connect APIs, automations, and data storage.",
              icon: FiZap,
            },
            {
              step: "03",
              title: "Polish & grow",
              desc: "Improve UI, performance, reliability so the product is ready for real users at scale.",
              icon: FiTrendingUp,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/30 p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg dark:border-slate-700/60 dark:from-slate-800/80 dark:to-slate-800/40 dark:hover:border-slate-600"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/5 to-blue-500/5 blur-2xl dark:from-violet-400/10 dark:to-blue-400/10" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-poppins text-3xl font-extrabold text-slate-200 dark:text-slate-700">
                      {item.step}
                    </span>
                    <Icon className="h-5 w-5 text-violet-500 dark:text-violet-400" />
                  </div>
                  <h3 className="mb-2 font-poppins text-lg font-semibold text-text-light dark:text-text-dark">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* ─── CTA ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-12 text-center dark:from-slate-800 dark:via-slate-750 dark:to-slate-800 sm:px-12">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Start a project
            </p>
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Got an idea? Let's build it at ANLABS.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Bring a product idea, automation need, or SaaS workflow and turn it
              into something real.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Get in touch
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://anlabs-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-500 hover:text-white"
              >
                Visit ANLABS
                <FiExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-12" />
    </section>
  );
};

export default Studio;
