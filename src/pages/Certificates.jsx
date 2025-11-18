import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Python for Data Science",
      org: "Coursera / Udemy",
      date: "2025",
      img: "/certs/Data science.png",
      link: "/certs/Data science.png",
    },
    {
      title: "AI Fundamentals",
      org: "Google AI / Microsoft Learn",
      date: "2025",
      img: "/certs/google.png",
      link: "/certs/google.png",
    },
    {
      title: "Hugging Face Project",
      org: "SimpliLearn/SkillUP",
      date: "2025",
      img: "/certs/hugging.png",
      link: "/certs/hugging.png",
    },
  ],
  other: [
    {
      title: "Hackathon Winner",
      org: "Hack2Skill",
      date: "2025",
      img: "/certs/hack2skill.png",
      link: "/certs/hack2skill.png",
    },
    {
      title: "Project Excellence Award",
      org: "AI for Digital Readliness",
      date: "2025",
      img: "/certs/adira.png",
      link: "/certs/adira.png",
    },
    {
      title: "IOT",
      org: "Lora summer internship",
      date: "2025",
      img: "/certs/IOT.png",
      link: "/certs/IOT.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#FFFFFF", borderRadius: 12, padding: 24, border: "1px solid #E0F2FE" }}>
        <h2 style={{
          fontSize: "1.8rem",
          background: "linear-gradient(90deg, #0EA5E9, #0284C7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: 4
        }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#64748B" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                cursor: "pointer",
                background: tab === t ? "#0EA5E9" : "#FFFFFF",
                color: tab === t ? "#fff" : "#0EA5E9",
                fontWeight: 500,
                transition: "0.3s",
                border: "1px solid #E0F2FE",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)",
                }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 12,
                  padding: 16,
                  color: "#1E293B",
                  border: "1px solid #E0F2FE",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#64748B" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#0EA5E9",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
