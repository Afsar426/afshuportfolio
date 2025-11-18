import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#FFFFFF",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#1E293B",
          boxShadow: "0 0 25px rgba(14, 165, 233, 0.1)",
          border: "1px solid #E0F2FE",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#0EA5E9", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#64748B", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "#F8FAFC",
            padding: "24px 20px",
            borderRadius: 12,
            border: "1px solid #E0F2FE",
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#0EA5E9", marginBottom: 4 }}>
              👨‍💻 AFSAR AZAM 
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#475569" }}>
              2nd Year B.Tech — Artificial Intelligence | SAGE University, Indore
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#64748B" }}>
              📍 Indore, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#64748B" }}>
              ✉️ afsarazam404@gmail.com | 📞 +91 9522708713
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
            background: "linear-gradient(135deg, #0EA5E944, #FFFFFF)",
            borderRadius: 12,
            padding: "14px 20px",
            border: "1px solid #E0F2FE",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#0EA5E9" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#475569" }}>
              2nd-year B.Tech AI student focused on data analysis, machine learning, and UI/UX development.
              Skilled in Python, TensorFlow, Scikit-learn, and data visualization. Passionate about
              creating intelligent systems that solve real-world problems and crafting sleek user experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid #E0F2FE",
            borderRadius: 12,
            padding: "20px 24px",
            background: "#F8FAFC",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#0EA5E9", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Artificial Intelligence</strong> — SAGE University, Indore, 2024–2028 <br />
              <span style={{ color: "#64748B" }}>2nd Year (Ongoing)</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — [BIHAR Board]</strong> (BSEB, 2024) <br />
              <span style={{ color: "#64748B" }}>Percentage: [XX%]</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — [GYAN BHARTI]</strong> (CBSE, 2022)
              <br />
              <span style={{ color: "#64748B" }}>Percentage: [XX%]</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#0EA5E9", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ MyMoneyMentor-AI: AI-powered personal finance planner</li>
            <li>2️⃣ GreenLoop: Sustainable community gardening platform</li>
            <li>3️⃣ Jarvis: Voice-activated personal assistant</li>
            <li>4️⃣ COVID-19 Trend Analysis: Data visualization project</li>
            <li>5️⃣ Netflix Data Analysis: Exploratory data analysis</li>
            <li>6️⃣ Amazon Data Analysis: Analytical study of product datasets</li>
            <li>7️⃣ Library Management System: C++ and MySQL-based system</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#0EA5E9", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C++",
              "JavaScript",
              "HTML & CSS",
              "React",
              "TensorFlow",
              "Scikit-learn",
              "NumPy",
              "Pandas",
              "Matplotlib",
              "Power BI",
              "Excel",
              "Git",
              "Figma",
              "Machine Learning",
              "Deep Learning",
              "NLP",
              "Data Preprocessing",
              "Exploratory Data Analysis",
              "Data Visualization",
              "UI/UX Design",
              "Problem Solving",
              "Teamwork",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(14,165,233,0.2)" }}
                style={{
                  background: "rgba(255,255,255,0.9)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#1E293B",
                  border: "1px solid #E0F2FE",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Afsar426" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/afsar-azam-426/" }, // TODO: Update with actual LinkedIn URL
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#0EA5E9" }}
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #E0F2FE",
          }}
        >
          <iframe
            src="/AfsarResume.pdf"
            title="Afsar Azam Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#F8FAFC",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/AfsarResume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "linear-gradient(90deg, #0EA5E9, #0284C7)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
