import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const CTA_URL = "https://singingfiles.com/show.php?l=0&u=2460515&id=73209";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg">
            <span className="text-foreground">Survey</span>
            <span className="text-brand-green">Earn</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="#how-it-works"
            className="hover:text-foreground transition-colors"
          >
            How it Works
          </a>
          <a
            href="#benefits"
            className="hover:text-foreground transition-colors"
          >
            Benefits
          </a>
          <a
            href="#testimonials"
            className="hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="nav.primary_button"
          className="bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-background pt-12 pb-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-brand-green-light text-brand-green text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            🇺🇸 US Users Only — Limited Slots Available
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
            Earn <span className="text-brand-green">$50</span> per day from your
            phone in USA
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground mb-8">
            {[
              "Free to join!",
              "Instant payout via PayPal/Venmo",
              "No special skills required",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Start Earning Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            ⚠️ Only available for users in the{" "}
            <strong className="text-foreground">United States</strong>!{" "}
            <span className="text-red-600 font-semibold">(Limited Slots)</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <img
            src="/assets/generated/people-using-phones.dim_800x500.jpg"
            alt="People earning money on their phones"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-brand-green" />,
      title: "Real Cash Earnings",
      desc: "Get paid real money for completing simple surveys. Withdraw your earnings instantly.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-green" />,
      title: "Takes Only Minutes",
      desc: "Each survey takes 5–15 minutes. Earn during your commute, lunch break, or relaxing at home.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-green" />,
      title: "Thousands Already Earning",
      desc: "Join over 50,000+ Americans who are already earning extra cash every day with SurveyEarn.",
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Why Choose SurveyEarn?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The easiest way to earn extra money from your smartphone — no
            experience needed.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-green-light border border-brand-green/20 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                {f.icon}
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Sign Up Free",
      desc: "Create your free account in under 60 seconds. No credit card required.",
    },
    {
      num: "2",
      title: "Complete Surveys",
      desc: "Answer simple questions about products and services from your phone.",
    },
    {
      num: "3",
      title: "Get Paid Instantly",
      desc: "Cash out to PayPal, Venmo, or Visa gift card whenever you want.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Start earning in 3 simple steps
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-brand-green text-white font-extrabold text-xl flex items-center justify-center mb-4 shadow-lg">
                {step.num}
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hiw.primary_button"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Start Earning Now <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Jessica M.",
      location: "Texas, USA",
      avatar: "JM",
      rating: 5,
      text: "I was skeptical at first but I've been earning $40–$60 every single day! It's become my morning routine — coffee, surveys, cash. Best decision I made this year.",
    },
    {
      name: "David R.",
      location: "Florida, USA",
      avatar: "DR",
      rating: 5,
      text: "I'm a stay-at-home dad and this has been a game changer. I earn during nap time and withdraw straight to my PayPal. Already made $1,200 this month!",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Real People. Real Earnings.
          </h2>
          <p className="text-muted-foreground">
            See what our members are saying
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-muted rounded-2xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={`star-${t.name}-${j}`}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PayoutMethods() {
  const methods = ["PayPal", "Venmo", "Visa Gift Card", "Amazon Gift Card"];

  return (
    <section className="py-12 px-4 bg-brand-green-light border-y border-brand-green/20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
          Verified Payout Methods
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {methods.map((m) => (
            <span
              key={m}
              className="bg-white border border-brand-green/30 text-foreground font-semibold text-sm px-5 py-2 rounded-full shadow-sm"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 px-4 bg-brand-green">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Earning{" "}
            <span className="text-yellow-300">$50/day</span>?
          </h2>
          <p className="text-white/80 mb-8">
            Join thousands of Americans already earning extra cash. Slots are
            limited — don't miss out!
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer_cta.primary_button"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-green font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Start Earning Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-white/70 text-sm">
            ⚠️ Only available in the United States
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-white/60 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-white" />
          </div>
          <span className="text-white font-semibold">SurveyEarn</span>
        </div>
        <div className="flex gap-6">
          <a href="#footer" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#footer" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#footer" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <p>
          © {year}. Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-2 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <Testimonials />
        <PayoutMethods />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
