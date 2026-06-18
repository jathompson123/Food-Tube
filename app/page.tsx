"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const FLAVORS = [
  {
    name: "Thanksgiving Dinner",
    desc: "Turkey, stuffing, cranberry sauce, and pie. All of it.",
    color: "bg-amber-700",
    emoji: "🦃",
  },
  {
    name: "Breakfast Scramble",
    desc: "Eggs, bacon, toast, and OJ. Morning in a squeeze.",
    color: "bg-yellow-500",
    emoji: "🍳",
  },
  {
    name: "Pizza Night",
    desc: "Three-cheese pepperoni. Your Friday, simplified.",
    color: "bg-red-600",
    emoji: "🍕",
  },
  {
    name: "Garden Fresh",
    desc: "For people who want to feel healthy but hate salad.",
    color: "bg-green-600",
    emoji: "🥗",
  },
  {
    name: "Sunday Roast",
    desc: "Beef, potatoes, gravy, the whole ordeal. In seconds.",
    color: "bg-orange-700",
    emoji: "🥩",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I used to spend 20 minutes eating lunch. Now I spend 45 seconds. I have reclaimed my life.",
    name: "Tyler M.",
    title: "Productivity Enthusiast",
    stars: 5,
  },
  {
    quote:
      "My dentist asked if I had been flossing more. I said no, I have been chewing less. He did not get it.",
    name: "Sarah K.",
    title: "Verified Tuber",
    stars: 5,
  },
  {
    quote:
      "I ate a full Thanksgiving dinner on my morning commute. FoodTube did not just change my diet. It changed who I am.",
    name: "Dave R.",
    title: "Power User",
    stars: 5,
  },
  {
    quote:
      "My kids eat their vegetables now. They have no idea. I have no regrets.",
    name: "Parent of the Year",
    title: "Verified Parent",
    stars: 5,
  },
];

const ENJOYERS = [
  {
    src: "/enjoyer-1.png",
    alt: "Woman relaxing and tubing",
    caption: "Anytime. Anywhere. Any meal.",
  },
  {
    src: "/enjoyer-2.png",
    alt: "Friends tubing together",
    caption: "FoodTube brings people together.",
  },
  {
    src: "/enjoyer-3.png",
    alt: "Cyclist tubing on the go",
    caption: "Never stop moving for food again.",
  },
  {
    src: "/enjoyer-4.png",
    alt: "Kid tubing at lunch",
    caption: "They love it. You love it. Everyone wins.",
  },
];

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const toggleJingle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <main className="max-w-[430px] mx-auto overflow-x-hidden">
      <audio ref={audioRef} src="/jingle.wav" preload="auto" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-ft-green-dark min-h-screen flex flex-col items-center justify-center px-6 pb-10 pt-16 text-center overflow-hidden">
        {/* sunburst background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "repeating-conic-gradient(#f5a611 0deg, #f5a611 10deg, transparent 10deg, transparent 20deg)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <Image
            src="/logo.png"
            alt="FoodTube logo"
            width={260}
            height={260}
            priority
            className="drop-shadow-2xl"
          />

          <h1 className="text-white text-4xl font-black leading-tight tracking-tight">
            Why chew when
            <br />
            <span className="text-ft-yellow">you can tube?</span>
          </h1>

          <p className="text-green-200 text-lg leading-relaxed max-w-xs">
            Real food. Blended. In a tube.{" "}
            <span className="text-white font-semibold">
              No forks. No plates. No excuses.
            </span>
          </p>

          {/* Jingle button */}
          <button
            onClick={toggleJingle}
            className={`tube-btn px-6 py-3 text-sm gap-2 border-2 ${
              playing
                ? "bg-ft-yellow text-ft-green-dark border-ft-yellow"
                : "bg-transparent text-ft-yellow border-ft-yellow hover:bg-ft-yellow hover:text-ft-green-dark"
            }`}
          >
            <span className="text-lg">{playing ? "⏹" : "▶"}</span>
            {playing ? "Stop Jingle" : "Play Our Jingle"}
          </button>

          <a
            href="#order"
            className="tube-btn bg-ft-red text-white px-10 py-4 text-base shadow-xl shadow-red-900/50"
          >
            Get Your Tubes
          </a>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="text-green-400 text-xs tracking-widest animate-bounce">
            SCROLL DOWN
          </div>
        </div>
      </section>

      {/* ── TAGLINE STRIP ────────────────────────────────── */}
      <section className="bg-ft-yellow py-5 px-4 overflow-hidden">
        <div className="flex gap-8 animate-[marquee_12s_linear_infinite] whitespace-nowrap">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-ft-green-dark font-black text-sm uppercase tracking-widest shrink-0"
              >
                Real Food &bull; Blended &bull; In a Tube &bull;&nbsp;
              </span>
            ))}
        </div>
      </section>

      {/* ── WHY FOODTUBE ─────────────────────────────────── */}
      <section className="bg-white px-5 py-12">
        <h2 className="text-ft-green-dark text-3xl font-black text-center mb-2 leading-tight">
          Finally. Food that gets it.
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 leading-relaxed">
          Eating used to require effort. We fixed that.
        </p>

        <div className="flex flex-col gap-4">
          {[
            {
              icon: "🧪",
              title: "100% Real Ingredients",
              body: "Every tube contains an entire meal, blended to a smooth, consistent paste. We do not cut corners. We blend them.",
            },
            {
              icon: "😮",
              title: "Zero Chewing Required",
              body: "Let your jaw finally rest. You have been using it your whole life. It is time.",
            },
            {
              icon: "⚡",
              title: "Eat in Under 60 Seconds",
              body: "A full meal in the time it takes to microwave leftovers. Except this is better. And in a tube.",
            },
            {
              icon: "🌍",
              title: "Eat Literally Anywhere",
              body: "On your bike. On a call. In a meeting. In the shower. FoodTube goes where forks cannot.",
            },
            {
              icon: "📊",
              title: "Nutritionally Complete",
              body: "We balanced the macros so you do not have to Google what a macro is.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 bg-ft-cream rounded-2xl p-4 border border-amber-100"
            >
              <span className="text-3xl shrink-0 mt-0.5">{icon}</span>
              <div>
                <h3 className="font-black text-ft-green-dark text-base mb-1">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIFESTYLE GALLERY ─────────────────────────────── */}
      <section className="bg-ft-green-dark px-5 py-12">
        <h2 className="text-white text-3xl font-black text-center mb-2 leading-tight">
          Real People.{" "}
          <span className="text-ft-yellow">Real Tubes.</span>
        </h2>
        <p className="text-green-300 text-sm text-center mb-8">
          Join millions* who have chosen the tube life.
          <br />
          <span className="text-green-500 text-xs">
            *number may be aspirational
          </span>
        </p>

        <div className="grid grid-cols-2 gap-3">
          {ENJOYERS.map(({ src, alt, caption }) => (
            <div key={src} className="relative rounded-2xl overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={200}
                height={220}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-bold leading-tight">
                {caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FLAVORS ──────────────────────────────────────── */}
      <section className="bg-ft-cream px-5 py-12">
        <h2 className="text-ft-green-dark text-3xl font-black text-center mb-2 leading-tight">
          The Lineup
        </h2>
        <p className="text-gray-500 text-sm text-center mb-8">
          Every meal you love. Tubed.
        </p>

        <div className="flex flex-col gap-3">
          {FLAVORS.map(({ name, desc, color, emoji }) => (
            <div
              key={name}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-amber-100"
            >
              <div
                className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0`}
              >
                {emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-black text-ft-green-dark text-base leading-tight">
                  {name}
                  <span className="text-gray-400 font-normal text-xs">
                    &nbsp;™
                  </span>
                </h3>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="text-ft-red font-black text-sm shrink-0">
                $9.99
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6 italic">
          Sold in packs of 6. Mix and match encouraged.
        </p>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-ft-green px-5 py-12">
        <h2 className="text-white text-3xl font-black text-center mb-2 leading-tight">
          The People Have Spoken
        </h2>
        <p className="text-green-200 text-sm text-center mb-8">
          5 stars across the board. Literally every review.
        </p>

        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map(({ quote, name, title, stars }) => (
            <div
              key={name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
            >
              <div className="text-ft-yellow text-lg mb-2">
                {"★".repeat(stars)}
              </div>
              <p className="text-white text-sm leading-relaxed mb-3 italic">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-green-300 text-xs">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AS SEEN ON ────────────────────────────────────── */}
      <section className="bg-white px-5 py-10 text-center">
        <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-6">
          As Seen On
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {[
            "Tube Weekly",
            "Blend Life Magazine",
            "The Squeezer",
            "No-Fork Times",
          ].map((pub) => (
            <span
              key={pub}
              className="text-gray-300 font-black text-sm tracking-wide"
            >
              {pub}
            </span>
          ))}
        </div>
      </section>

      {/* ── ORDER CTA ─────────────────────────────────────── */}
      <section
        id="order"
        className="bg-ft-red px-5 py-16 flex flex-col items-center text-center"
      >
        <div
          className="absolute"
          style={{
            background:
              "repeating-conic-gradient(rgba(255,255,255,0.04) 0deg, rgba(255,255,255,0.04) 10deg, transparent 10deg, transparent 20deg)",
            inset: 0,
            pointerEvents: "none",
          }}
        />
        <h2 className="text-white text-4xl font-black leading-tight mb-3">
          Ready to
          <br />
          Start Tubing?
        </h2>
        <p className="text-red-200 text-base mb-8 leading-relaxed max-w-xs">
          Free shipping on orders over $30. Because you deserve to tube without
          paying extra.
        </p>

        <button className="tube-btn bg-white text-ft-red px-12 py-5 text-lg shadow-2xl shadow-red-900/50">
          Order Now
        </button>

        <p className="text-red-300 text-xs mt-4">
          30-day tube-back guarantee.
        </p>

        <div className="mt-12 flex gap-6 text-white/60 text-2xl">
          <span>📦</span>
          <span>🚚</span>
          <span>✅</span>
        </div>
        <div className="flex gap-6 text-white/50 text-xs mt-1">
          <span>Pack of 6</span>
          <span>Free Ship</span>
          <span>Guaranteed</span>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-ft-green-dark px-5 py-10 text-center">
        <Image
          src="/logo.png"
          alt="FoodTube"
          width={100}
          height={100}
          className="mx-auto mb-4 opacity-80"
        />
        <p className="text-green-400 text-xs leading-relaxed max-w-xs mx-auto">
          FoodTube&trade; is a registered trademark of FoodTube International
          LLC. Product may vary from meal depicted. No meals were harmed in the
          blending process. Chewing optional but not recommended.
        </p>
        <p className="text-green-700 text-xs mt-4">
          &copy; {new Date().getFullYear()} FoodTube. All rights reserved.
        </p>
      </footer>

      {/* ── MARQUEE KEYFRAME ──────────────────────────────── */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}
