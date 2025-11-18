import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: "Exploring the serene landscapes of Goa 🏖️✨",
      photos: ["/gallery/goa.jpeg", "/gallery/goa2.jpeg"],
    },
    {
      id: 2,
      caption:
        "Weekend getaway to clear my head 🌄 Sometimes inspiration strikes when you’re away from the screen.",
      photos: ["/gallery/lonawala.jpeg", "/gallery/lonawala2.jpeg"],
    },
    {
      id: 3,
      caption: "Adventurous trip to Matheran hills 🏔️",
      photos: ["/gallery/matheran.jpeg", "/gallery/matheran2.jpeg"],
    },
    {
      id: 4,
      caption: "Memorable moments captured 📸",
      photos: ["/gallery/m.png", "/gallery/m2.jpeg"],
    },
    {
      id: 5,
      caption: "LeetCode coding session 💻",
      photos: ["/gallery/leet.jpg"],
    },
    {
      id: 6,
      caption: "Personal project snapshot 📱",
      photos: ["/gallery/p1.jpeg", "/gallery/photo.jpeg"],
    },
    {
      id: 7,
      caption: "Personal illustration 1 🎨",
      photos: ["/gallery/personal1.svg"],
    },
    {
      id: 8,
      caption: "Personal illustration 2 🎨",
      photos: ["/gallery/personal2.svg"],
    },
    {
      id: 9,
      caption: "Personal illustration 3 🎨",
      photos: ["/gallery/personal3.svg"],
    },
    {
      id: 10,
      caption: "Personal illustration 4 🎨",
      photos: ["/gallery/personal4.svg"],
    },
    {
      id: 11,
      caption: "Personal illustration 5 🎨",
      photos: ["/gallery/personal5.svg"],
    },
    {
      id: 12,
      caption: "Personal illustration 6 🎨",
      photos: ["/gallery/personal6.svg"],
    },
    {
      id: 13,
      caption: "Personal illustration 7 🎨",
      photos: ["/gallery/personal7.svg"],
    },
    {
      id: 14,
      caption: "Personal illustration 8 🎨",
      photos: ["/gallery/personal8.svg"],
    },
    {
      id: 15,
      caption: "WhatsApp shared memory 📱",
      photos: ["/gallery/WhatsApp Image 2025-11-03 at 18.29.30_2e88fc21.jpeg"],
    },
    {
      id: 16,
      caption: "LIBRARY MANAGEMENT SYSTEM PROJECT",
      photos: ["/gallery/librar.png"],
    },
  ],
  projects: [
    {
      id: 1,
      caption:
        "MyMoneyMentor-AI: AI-powered personal finance planner that tracks expenses and generates smart budget insights.",
      photos: ["/gallery/projec1.jpg", "/gallery/project2.jpg"],
    },
    {
      id: 2,
      caption:
        "GreenLoop: AI-driven platform to help local residents convert household waste into compost.",
      photos: ["/gallery/project3.jpg", "/gallery/project4.jpg"],
    },
    {
      id: 3,
      caption:
        "Jarvis: Intelligent assistant project for automation and task management.",
      photos: ["/gallery/project5.png", "/gallery/project6.png"] // fixed path, ISL.png is in public/
    },
    {
      id: 4,
      caption:
        "COVID Tracker: Application for monitoring COVID-19 data and trends.",
      photos: ["/covid.png"], // fixed path, covid.png is in public/
    },
    {
      id: 5,
      caption:
        "Netflix Data Analysis: Project for analyzing Netflix data and insights.",
      photos: ["/Docuchat.png"], // fixed path, Docuchat.png is in public/
    },
    {
      id: 6,
      caption: "Project illustration 5 📊",
      photos: ["/gallery/project5.png"],
    },
    {
      id: 7,
      caption: "Project illustration 6 📊",
      photos: ["/gallery/project6.png"],
    },
    {
      id: 8,
      caption: "Project illustration 7 📊",
      photos: ["/gallery/project7.svg"],
    },
    {
      id: 9,
      caption: "Project illustration 8 📊",
      photos: ["/gallery/project8.svg"],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "Hackathon Finalist and Project Excellence Award winner 🏆!",
      photos: ["/gallery/ach1.svg", "/gallery/ach2.svg"],
    },
    {
      id: 2,
      caption: "Sustainable Innovation Recognition for GreenLoop 🌱",
      photos: ["/gallery/ach3.svg"],
    },
    {
      id: 3,
      caption: "Achievement illustration 4 🏅",
      photos: ["/gallery/ach4.svg"],
    },
    {
      id: 4,
      caption: "Achievement illustration 5 🏅",
      photos: ["/gallery/ach5.svg"],
    },
    {
      id: 5,
      caption: "Achievement illustration 6 🏅",
      photos: ["/gallery/ach6.svg"],
    },
    {
      id: 6,
      caption: "Achievement illustration 7 🏅",
      photos: ["/gallery/ach7.svg"],
    },
    {
      id: 7,
      caption: "Achievement illustration 8 🏅",
      photos: ["/gallery/ach8.svg"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${
                  post.photos.length > 1 ? "multi" : "single"
                }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
