import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🧠 MyMoneyMentor-AI',
    desc: 'MyMoneyMentor-AI is an intelligent financial planning assistant designed to help users manage their money smartly. It tracks daily expenses, categorizes transactions automatically, analyzes spending habits, and provides AI-powered savings recommendations.',
    ss: '/momo.png',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Flask', 'HTML', 'CSS'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },
  {
    title: '🌱 GreenLoop — Sustainable Community Gardening Platform',
    desc: 'GreenLoop is an AI-driven platform that encourages urban sustainability by helping local residents convert household waste into compost and grow organic vegetables. It uses machine learning to monitor compost health, track progress, and offer personalized gardening advice.',
    ss: '/mentalhealth.jpg',
    tech: ['Python', 'TensorFlow', 'React.js', 'Firebase', 'HTML', 'CSS'],
    live: 'https://afsar426.github.io/GREENLOOP/',
    code: 'https://github.com/Afsar426'
  },
  {
    title: '🎙️ Jarvis — Voice Assistant',
    desc: 'Jarvis is a Python-based personal assistant that performs tasks through voice commands — including opening apps, searching Google, playing music, and reading out information.',
    ss: '/ISL.png',
    tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'OS', 'datetime'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },

  // ⭐ Added Your MobileFixPro Project
  {
    title: '🔧 MobileFixPro — AI-Powered Mobile Repair & Tracking Platform',
    desc: 'MobileFixPro is an advanced mobile repair booking and diagnostics platform that enables users to schedule repairs, track technicians in real time, and get AI-driven issue detection. Using React, Tailwind CSS, Framer Motion, and Leaflet Maps, the platform delivers seamless booking, live status updates, smooth animations, and smart troubleshooting assistance.',
    ss: '/mobilefixpro.png',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Leaflet Maps', 'JavaScript', 'AI Diagnostics'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },

  {
    title: '📊 COVID-19 Trend Analysis',
    desc: 'A full-scale data analytics and visualization project analyzing the spread and trends of COVID-19 using real datasets. It predicts future cases and compares trends across regions.',
    ss: '/portfolio.jpg',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Prophet', 'NumPy'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },
  {
    title: '🎬 Netflix Data Analysis',
    desc: 'Exploratory Data Analysis project on Netflix\'s dataset that uncovers global content patterns, regional preferences, and genre trends.',
    ss: '/Docuchat.png',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Seaborn'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },
  {
    title: '🛍️ Amazon Data Analysis',
    desc: 'A data-driven analysis of Amazon product and review datasets to extract insights about pricing, user sentiment, and category performance. The project uses NLP to analyze review sentiments and discover correlations with ratings and price.',
    ss: '/ProfileX.png',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLTK', 'NLP'],
    live: '#',
    code: 'https://github.com/Afsar426'
  },
  {
    title: '📚 Library Management System',
    desc: 'A C++ and MySQL-based system to manage a library\'s operations — adding books, issuing, returning, and tracking inventory.',
    ss: '/breastpred.jpg',
    tech: ['C++', 'MySQL'],
    live: '#',
    code: 'https://github.com/Afsar426'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: 'rgba(255,255,255,0.9)',
          borderRadius: 16,
          padding: 30,
          border: '1px solid rgba(0,123,255,0.1)'
        }}
      >
        <motion.h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            background: 'linear-gradient(90deg, #007bff, #0056b3)',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <p style={{ color: '#6c757d', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          A showcase of my AI, data science, and software development projects — from intelligent financial assistants to sustainable tech solutions.
        </p>

        <div
          className="projects-grid"
          style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,123,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,123,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#007bff', marginBottom: 6 }}>{p.title}</h3>

                <p style={{ fontSize: 14, color: '#333', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,123,255,0.05)',
                        border: '1px solid rgba(0,123,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#007bff'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.9)',
                      color: '#007bff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,123,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}