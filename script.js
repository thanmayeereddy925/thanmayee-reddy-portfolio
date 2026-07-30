// ==========================================================================
// 1. DATA STRUCTURES — FULL PROJECT DATA WITH GITHUB LINKS & IMAGES
// ==========================================================================
const PROJECTS = [
  {
    id: "ytbt-cardio",
    title: "YTBT Cardio NLP",
    desc: "A 2D CNN + Transformer system translating 12-lead ECG waveform images into structured medical reports with a multi-role Flask web portal (Doctor, Patient, Technician, Admin) and SQLite audit logs.",
    tags: ["PyTorch", "Transformers", "CNN", "NLP", "Flask", "SQLite"],
    icon: "🫀",
    github: "https://github.com/thanmayeereddy925/ECG_reportprediction_NLP",
    images: [
      "images/projects/image10.png",
      "images/projects/image8.png",
      "images/projects/image5.png",
      "images/projects/image6.png"
    ],
    longDesc: `YTBT Cardio NLP is a multi-modal clinical diagnostic system that translates 12-lead ECG waveform grid images into structured cardiology text reports.

<strong>Architecture:</strong> A 2D CNN Visual Encoder captures spatial patterns from the ECG grid image, feeding into a causal Transformer Decoder that generates the report token-by-token using a custom Byte-Pair Encoding (BPE) tokenizer trained on cardiology terminology.

<strong>Multi-Role Flask Portal:</strong>
• <b>Technician</b> — Uploads patient ECG PDF reports and triggers AI decoding
• <b>Doctor (Cardiologist)</b> — Reviews AI-generated reports, corrects them, and adds final diagnosis
• <b>Patient</b> — Views finalized reports, ECG images in lightbox, and submits health doubts to their doctor
• <b>Admin/Receptionist</b> — Manages staff, maps patients to doctors, monitors analytics charts and audit logs

<strong>Dataset:</strong> PTB-XL real clinical ECG records (21,000+ recordings), rendered as 12-lead grid PNG images.
<strong>Training:</strong> 25 epochs with BPE tokenizer trained on a custom cardiology medical corpus.
<strong>NLG Scores:</strong> BLEU & ROUGE-L evaluation for report quality.`
  },
  {
    id: "studymind-ai",
    title: "StudyMind AI",
    desc: "An adaptive study navigator that generates personalized learning roadmaps and dynamic study timetables using Flask, SQLite, and Google Gemini API with a Random Forest ML engine and proctored anti-cheat exam portal.",
    tags: ["Flask", "Gemini API", "Machine Learning", "SQLite", "Scikit-learn"],
    icon: "🧠",
    github: "https://github.com/thanmayeereddy925/StudyMind-AI",
    images: [
      "images/projects/image33.png",
      "images/projects/image17.png",
      "images/projects/image13.png",
      "images/projects/image38.png",
      "images/projects/image32.png",
      "images/projects/image35.png",
      "images/projects/image39.png",
      "images/projects/image37.png"
    ],
    longDesc: `StudyMind AI is an intelligent, adaptive learning platform that personalizes a student's entire study journey from goal-setting to assessment.

<strong>Core Features:</strong>
• <b>AI Roadmap Generator</b> — Uses Google Gemini API to break any study goal into a week-by-week custom curriculum with prerequisite sequencing
• <b>Interactive Knowledge Graph</b> — Visual node-based representation of study concepts, showing completion, in-progress, and locked topics
• <b>Smart Study Planner</b> — Generates optimized daily agendas based on cognitive energy level, deadlines, and available hours
• <b>ML Diagnostic Engine</b> — A Scikit-learn Random Forest Classifier analyzes quiz scores, study time, attempts, and error patterns to classify concept mastery states (Mastered / Review Needed / Critical Gap)
• <b>Remedial Topic Injection</b> — When a Critical Gap is detected, the system automatically injects prerequisite remedial topics into the roadmap
• <b>Proctored Exam Portal</b> — Anti-cheat features with tab-switch detection, peer-synced timers, and time-box enforcement
• <b>Career Compass & Peer Community</b> — Additional modules for career pathway guidance and collaborative learning

<strong>Tech Stack:</strong> Flask backend, SQLite database, Google Gemini API, Scikit-learn Random Forest, Bayesian Knowledge Tracing (BKT) principles.`
  },
  {
    id: "spam-detection",
    title: "Spam Email Detection",
    desc: "A supervised machine learning model classifying spam vs. ham using 13 custom engineered features, connected to Gmail IMAP for real-time inbox analysis and classification.",
    tags: ["Machine Learning", "Scikit-Learn", "Python", "Pandas", "IMAP"],
    icon: "✉️",
    github: "https://github.com/thanmayeereddy925/spam_email_detector",
    images: [
      "images/projects/image20.png",
      "images/projects/image26.png",
      "images/projects/image16.png",
      "images/projects/image19.png"
    ],
    longDesc: `SpamShield is a real-time email classifier that connects directly to your Gmail inbox via IMAP and evaluates every email against 13 custom-engineered features.

<strong>The 13-Feature Extraction Logic:</strong>
1. <b>Sender Domain</b> — Flags suspicious extensions (.xyz, .click, .top)
2. <b>Subject Keywords</b> — Detects "Winner", "Urgent", "Prize"
3. <b>Body Keywords</b> — Scans for "Money", "Verify", "Account"
4. <b>URL Presence</b> — Identifies embedded hyperlinks
5. <b>Suspicious URL Patterns</b> — Detects IP-based or non-standard URLs
6. <b>Link Density</b> — Counts total links for phishing detection
7. <b>Attachment Presence</b> — Flags emails with file attachments
8. <b>Dangerous File Types</b> — Flags .exe, .zip, .js attachments
9. <b>HTML Content</b> — Checks for HTML vs. plain text formatting
10. <b>Urgency/Threat Words</b> — "Immediately", "Expire", "Action Required"
11. <b>Auth Language</b> — Fake "Official Partner" or "Verified" claims
12. <b>Length Abnormality</b> — Unusual email character counts
13. <b>Security Indicators</b> — "Unauthorized Access", "Security Alert" phrases

<strong>Real-Time Integration:</strong> Connects to Gmail using Google App Password via IMAP, fetches the latest 10–15 emails, and outputs a live Spam/Ham breakdown.
<strong>Dataset:</strong> SMS Spam Collection, adapted and retrained with the 13-feature schema.
<strong>Tech Stack:</strong> Python, Scikit-learn, Pandas, Joblib, IMAP library.`
  },
  {
    id: "iot-chatbot",
    title: "IoT Hardware Chatbot (RAG)",
    desc: "A retrieval-augmented generation chatbot for IoT sensors and microcontrollers, retrieving from technical documentation and Wikipedia API, with LLM-powered context-aware responses via a Flask interface.",
    tags: ["RAG", "Flask", "LLM", "NLP", "Wikipedia API"],
    icon: "🤖",
    github: "https://github.com/thanmayeereddy925/iot_hardware_bot",
    images: [
      "images/projects/image29.png",
      "images/projects/image15.png"
    ],
    longDesc: `The IoT Hardware Chatbot is a domain-specific Retrieval-Augmented Generation (RAG) system built to answer technical questions about sensors, microcontrollers, modules, actuators, and electronics.

<strong>Architecture — RAG Pipeline:</strong>
• <b>Document Retrieval</b> — A custom knowledge base of technical IoT documentation (Arduino, ESP8266, sensor datasheets) is chunked and indexed for semantic search
• <b>Wikipedia API Integration</b> — For hardware components not in the local knowledge base, the system queries Wikipedia in real-time for supplementary context
• <b>LLM Response Generation</b> — Retrieved context is passed to a language model to generate accurate, hardware-specific, context-aware answers
• <b>Flask Interface</b> — A clean dark-themed chat interface for seamless hardware Q&A

<strong>Use Cases:</strong> Quickly look up pin configurations, sensor specifications, wiring instructions, communication protocols (I2C, SPI, UART), and code examples for common IoT hardware.
<strong>Tech Stack:</strong> Python, Flask, RAG framework (LangChain / custom), Wikipedia API, LLM backend.`
  },
  {
    id: "accident-detection",
    title: "Accident Detection using Deep Learning",
    desc: "An AI-based computer vision system that detects road accidents from uploaded images using a trained CNN (TensorFlow/Keras) + YOLOv8 model, with Telegram alert integration when an accident is detected.",
    tags: ["TensorFlow", "Keras", "YOLOv8", "Flask", "Computer Vision", "Telegram API"],
    icon: "🚗",
    github: "https://github.com/thanmayeereddy925/accident_detection",
    images: [
      "images/projects/image36.png",
      "images/projects/image14.png",
      "images/projects/image23.png",
      "images/projects/image18.png"
    ],
    longDesc: `This deep learning system detects road accidents from image inputs and, when an accident is confirmed, automatically requests the user's GPS location and sends a Google Maps link to an emergency Telegram channel.

<strong>Detection Pipeline:</strong>
• Upload an image via the web interface
• The system runs the image through a trained accident/no-accident CNN classifier (TensorFlow/Keras, accident_model_final.h5)
• A YOLOv8 object detection model (best.pt / best.onnx) also runs for more precise localization
• Confidence score is displayed alongside the prediction
• If accident is detected, the browser requests location permission and sends coordinates + Google Maps link to Telegram

<strong>Models Trained:</strong>
• <b>accident_model_final.h5</b> — Custom CNN trained on road accident image datasets (TensorFlow/Keras)
• <b>best.pt / best.onnx</b> — YOLOv8 weights for scene-level detection

<strong>Flask Deployment:</strong> Web app with drag-and-drop file upload, prediction panel, confidence meter, and Telegram integration status.
<strong>Tech Stack:</strong> Python, TensorFlow, Keras, YOLOv8, Flask, Telegram Bot API.`
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection using Deep Learning",
    desc: "A deep learning binary classifier to detect AI-generated or manipulated media (deepfakes) using CNN-based feature extraction. Initial version complete — currently being rebuilt with improved architecture from scratch.",
    tags: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Binary Classification"],
    icon: "👥",
    github: "https://github.com/thanmayeereddy925/Deepfake",
    images: [
      "images/projects/image27.png",
      "images/projects/image31.png",
      "images/projects/image21.png"
    ],
    longDesc: `The Deepfake Detection project builds a binary image classifier to distinguish <b>real faces</b> from <b>deepfake-generated faces</b> using convolutional neural networks.

<strong>Current Version (v1 — Initial):</strong>
• Model trained on the Roboflow Deepfake Detection Dataset
• Binary classification: training_real vs. training_fake
• Framework: TensorFlow / Keras
• Evaluated with accuracy metrics, confusion matrix, and classification report
• Training data (~937 MB) excluded from repo due to size — sourced from Roboflow

<strong>⚠️ Status — Rebuilding from Scratch:</strong>
This project is currently being rebuilt with an improved architecture. The v2 version will include:
• Deeper CNN / ResNet-based feature extraction
• Attention mechanism for spatial focus on manipulated regions
• Support for video-level detection (frame-by-frame)
• Improved dataset with higher variety of deepfake techniques

<strong>Tech Stack:</strong> Python, TensorFlow, Keras, NumPy, Matplotlib, Scikit-learn.`
  },
  {
    id: "prod-tracker",
    title: "AI Workforce Productivity Tracker",
    desc: "An intelligent productivity & task management system with multi-role dashboards (Manager/Employee/Admin), AI-powered suspicious activity detection, manager feedback loops, and work log analytics using Flask and SQLite.",
    tags: ["Machine Learning", "Flask", "AI", "SQLite", "Data Analysis"],
    icon: "📈",
    github: "https://github.com/thanmayeereddy925/AI-Productivity-Tracker",
    images: [
      "images/projects/image7.png",
      "images/projects/image1.png",
      "images/projects/image22.png",
      "images/projects/image34.png",
      "images/projects/image9.png",
      "images/projects/image30.png",
      "images/projects/image11.png",
      "images/projects/image3.png",
      "images/projects/image4.png",
      "images/projects/image2.png",
      "images/projects/image25.png",
      "images/projects/image24.png"
    ],
    longDesc: `The AI Workforce Productivity & Task Management System is a multi-role web application that gives managers, employees, and admins different data views and interaction controls for monitoring and optimizing workplace productivity.

<strong>Role-Based Dashboards:</strong>
• <b>Manager Dashboard</b> — Assign tasks (with priority levels: High/Medium/Low), view all employee progress, verify completed tasks, monitor productivity logs, and detect suspicious activity
• <b>Employee Dashboard</b> — View assigned tasks, update task status, log actual hours, submit work entries for manager review
• <b>Admin Panel</b> — System-level visibility and user management

<strong>AI Features:</strong>
• <b>Suspicious Activity Detection</b> — Flags anomalies in task completion patterns (e.g., zero hours but marked complete, repeated rejections)
• <b>Productivity Analytics</b> — Tracks estimated vs. actual hours, completion rates, and performance trends over time
• <b>Manager Feedback Loop</b> — Managers review completed tasks, provide written feedback or objection reasons

<strong>Tech Stack:</strong> Python, Flask, SQLite, Pandas (for data processing), vanilla HTML/CSS for dashboards.`
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    desc: "A computer vision application using Deep Learning (CNNs) and Zero Shot Learning to detect and classify plant diseases from leaf images. Currently under active development — repository and full documentation coming soon.",
    tags: ["Deep Learning", "FastAPI", "CNN", "Zero Shot Learning", "Computer Vision"],
    icon: "🌱",
    github: "https://github.com/thanmayeereddy925/plant_disease_detection",
    images: [],
    longDesc: `The Plant Disease Detection project uses Deep Learning to analyze leaf images and identify diseases with high accuracy, providing early warnings for agricultural decision-making.

<strong>⚠️ Status — Under Active Development:</strong>
This project is currently being built as part of work at QuGates Technologies. The repository and full documentation will be added soon.

<strong>Planned Architecture:</strong>
• <b>CNN Backbone</b> — EfficientNet / ResNet feature extractor for leaf image classification
• <b>Zero Shot Learning</b> — Classify plant diseases even for unseen disease categories using semantic embeddings
• <b>Transfer Learning</b> — Fine-tuned on PlantVillage dataset (54,000+ labeled leaf images, 38 disease classes)
• <b>FastAPI Backend</b> — High-performance REST API for real-time inference
• <b>Image Upload Interface</b> — Web interface for uploading leaf images and receiving disease diagnosis

<strong>Target:</strong> Real-time disease detection from field images via mobile upload, with actionable treatment recommendations.
<strong>Tech Stack (Planned):</strong> Python, TensorFlow/Keras, FastAPI, OpenCV, Scikit-learn.`
  },
  {
    id: "smart-agri",
    title: "IoT Smart Agriculture System",
    desc: "A smart agriculture setup using environmental sensors (temperature, humidity, soil moisture) connected via Arduino/ESP8266 to monitor field conditions and support automated smart irrigation decisions.",
    tags: ["IoT", "Arduino", "ESP8266", "Sensors", "Embedded Systems"],
    icon: "🌾",
    github: "https://github.com/thanmayeereddy925",
    images: [
      "images/projects/image12.jpg"
    ],
    longDesc: `The IoT-Based Smart Agricultural System is an embedded hardware project that automates monitoring of environmental conditions for smart irrigation decision support.

<strong>Hardware Components:</strong>
• <b>Arduino Uno</b> — Main microcontroller for sensor data reading and logic processing
• <b>ESP8266 Wi-Fi Module</b> — Wireless data transmission and IoT connectivity
• <b>DHT11/DHT22 Sensor</b> — Temperature and humidity monitoring
• <b>Soil Moisture Sensor</b> — Detects soil water content levels
• <b>Relay Module</b> — Controls irrigation pump based on sensor readings

<strong>System Logic:</strong>
• Continuously reads temperature, humidity, and soil moisture values
• Compares against predefined thresholds for optimal crop growth
• Automatically triggers irrigation relay when soil moisture falls below threshold
• Data can be sent over Wi-Fi for remote monitoring

<strong>Achievement:</strong> 🏆 Won the College Project Expo — demonstrated end-to-end hardware working with real-time sensor visualization and automated irrigation trigger.
<strong>Tech Stack:</strong> C/C++ (Arduino IDE), ESP8266, DHT11, soil moisture sensors, relay module.`
  }
];

// Local Storage Keys
const KEYS = {
  text: "tr_portfolio_text_v1",
  projectImages: "tr_portfolio_proj_images_v1",
  profileImage: "tr_portfolio_profile_image_v1"
};

// ==========================================================================
// 2. PAGE INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadTextOverrides();
  loadProfileImage();
  renderProjects();
  initActiveTabObserver();
  initEditMode();
  initContactForm();
  initProjectModal();
});

// Load saved text from localStorage
function loadTextOverrides() {
  const overrides = JSON.parse(localStorage.getItem(KEYS.text)) || {};
  document.querySelectorAll("[data-editable-id]").forEach(el => {
    const id = el.dataset.editableId;
    if (overrides[id] !== undefined) {
      el.innerHTML = overrides[id];
    }
  });
}

// Load saved profile photo
function loadProfileImage() {
  const savedProfile = localStorage.getItem(KEYS.profileImage);
  if (savedProfile) {
    document.getElementById("profileImg").src = savedProfile;
  }
}

// Save text modifications
function saveTextOverride(id, htmlContent) {
  const overrides = JSON.parse(localStorage.getItem(KEYS.text)) || {};
  overrides[id] = htmlContent.trim();
  localStorage.setItem(KEYS.text, JSON.stringify(overrides));
}

// ==========================================================================
// 3. PROJECT CARD RENDER
// ==========================================================================
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};
  grid.innerHTML = "";

  PROJECTS.forEach((p, idx) => {
    const customImg = savedImages[p.id] || null;
    const primaryImg = customImg || (p.images && p.images.length > 0 ? p.images[0] : null);
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="project-media">
        ${primaryImg
          ? `<img src="${primaryImg}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />`
          : `<div class="project-gradient-bg gradient-${idx % 7}"></div>
             <div class="project-placeholder-content">
               <span class="ph-badge">Project 0${idx + 1}</span>
               <span class="ph-logo">${p.icon}</span>
             </div>`
        }
        <div class="project-upload-overlay">
          <label class="upload-overlay-btn">
            <span>${customImg ? "Change Image" : "Upload Image"}</span>
            <input type="file" accept="image/*" data-project-id="${p.id}" onclick="event.stopPropagation()" />
          </label>
          ${customImg ? `<button class="upload-overlay-btn btn-danger" style="margin-top:6px; padding:6px 12px;" onclick="event.stopPropagation(); removeProjectImage('${p.id}')">Remove</button>` : ""}
        </div>
      </div>
      <div class="project-info">
        <div class="project-meta">
          <span class="project-id">#${p.id}</span>
          <span class="project-id" style="font-weight: 700; color: var(--accent);">0${idx + 1}</span>
        </div>
        <h3 class="project-card-title" data-editable-id="proj-title-${p.id}">${p.title}</h3>
        <p class="project-card-desc" data-editable-id="proj-desc-${p.id}">${p.desc}</p>
        <div class="project-card-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
        <div style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn-view-project" data-project-id="${p.id}" onclick="event.stopPropagation(); openProjectModal('${p.id}')">
            View Details →
          </button>
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-github-link" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:5px;vertical-align:middle;"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
            GitHub
          </a>` : ""}
        </div>
      </div>
    `;

    // Click on card opens modal
    card.addEventListener("click", () => openProjectModal(p.id));
    grid.appendChild(card);
  });

  // Attach upload event listeners
  grid.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const pId = e.target.dataset.projectId;
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};
        savedImages[pId] = reader.result;
        localStorage.setItem(KEYS.projectImages, JSON.stringify(savedImages));
        renderProjects();
      };
      reader.readAsDataURL(file);
    });
  });

  // Re-apply contenteditable if in edit mode
  if (document.body.classList.contains("edit-mode")) {
    grid.querySelectorAll("[data-editable-id]").forEach(el => {
      el.contentEditable = "true";
      attachTextListener(el);
    });
  }
}

// Remove project image override
window.removeProjectImage = function(pId) {
  const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};
  delete savedImages[pId];
  localStorage.setItem(KEYS.projectImages, JSON.stringify(savedImages));
  renderProjects();
};

// ==========================================================================
// 4. PROJECT DETAIL MODAL
// ==========================================================================
function initProjectModal() {
  // Create modal element
  const modal = document.createElement("div");
  modal.id = "projectModal";
  modal.className = "project-modal-overlay";
  modal.innerHTML = `
    <div class="project-modal-box">
      <button class="project-modal-close" id="projectModalClose">✕</button>
      <div class="project-modal-inner" id="projectModalInner"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Close on backdrop click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });
  document.getElementById("projectModalClose").addEventListener("click", closeProjectModal);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

window.openProjectModal = function(projectId) {
  const p = PROJECTS.find(proj => proj.id === projectId);
  if (!p) return;

  const modal = document.getElementById("projectModal");
  const inner = document.getElementById("projectModalInner");

  // Build image gallery
  const imagesHTML = p.images && p.images.length > 0
    ? `<div class="modal-gallery">
        <div class="modal-main-img-wrap">
          <img id="modalMainImg" src="${p.images[0]}" alt="${p.title}" class="modal-main-img" />
        </div>
        ${p.images.length > 1 ? `
        <div class="modal-thumbs">
          ${p.images.map((img, i) => `
            <img src="${img}" alt="Screenshot ${i+1}" class="modal-thumb ${i === 0 ? 'active' : ''}" onclick="switchModalImg(this, '${img}')" />
          `).join("")}
        </div>` : ""}
      </div>`
    : `<div class="modal-no-img"><span>${p.icon}</span><p>Screenshots coming soon</p></div>`;

  inner.innerHTML = `
    <div class="modal-header">
      <span class="modal-icon">${p.icon}</span>
      <div>
        <h2 class="modal-title">${p.title}</h2>
        <div class="modal-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </div>
    ${imagesHTML}
    <div class="modal-description">
      <h3>About This Project</h3>
      <div class="modal-long-desc">${p.longDesc}</div>
    </div>
    ${p.github ? `
    <div class="modal-footer">
      <a href="${p.github}" target="_blank" rel="noopener" class="modal-github-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="margin-right:8px;vertical-align:middle;"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
        View on GitHub
      </a>
    </div>` : ""}
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.switchModalImg = function(thumb, src) {
  document.getElementById("modalMainImg").src = src;
  document.querySelectorAll(".modal-thumb").forEach(t => t.classList.remove("active"));
  thumb.classList.add("active");
};

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================================================
// 5. INTERSECTION OBSERVER FOR TABS ACTIVE STATE
// ==========================================================================
function initActiveTabObserver() {
  const tabs = document.querySelectorAll(".nav-tab");
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    rootMargin: "-25% 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        tabs.forEach(tab => {
          if (tab.getAttribute("href") === `#${sectionId}`) {
            tab.classList.add("active");
          } else {
            tab.classList.remove("active");
          }
        });
      }
    });
  }, options);

  sections.forEach(sec => observer.observe(sec));
}

// ==========================================================================
// 6. EDIT MODE CONTROLLER
// ==========================================================================
function initEditMode() {
  const editToggleBtn = document.getElementById("editToggleBtn");
  const profileUploadInput = document.getElementById("profileUploadInput");
  const saveCodeBtn = document.getElementById("saveCodeBtn");
  const resetStorageBtn = document.getElementById("resetStorageBtn");

  const codeModal = document.getElementById("codeModal");
  const modalClose = document.getElementById("modalClose");
  const downloadHtmlBtn = document.getElementById("downloadHtmlBtn");
  const downloadJsBtn = document.getElementById("downloadJsBtn");

  editToggleBtn?.addEventListener("click", () => {
    const isEditMode = document.body.classList.toggle("edit-mode");

    document.querySelectorAll("[data-editable-id]").forEach(el => {
      el.contentEditable = isEditMode ? "true" : "false";
      if (isEditMode) {
        attachTextListener(el);
      }
    });

    editToggleBtn.querySelector("span").textContent = isEditMode ? "Exit Edit Mode" : "Edit Portfolio";
    const editHint = document.getElementById("editHint");
    if (editHint) {
      editHint.innerHTML = isEditMode
        ? "<strong>Edit Mode Active:</strong> Click any text area (dashed outline) to edit directly. Hover over cards to upload images."
        : "Click on any project card to view full details, screenshots, and GitHub repository link.";
    }
  });

  profileUploadInput?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem(KEYS.profileImage, reader.result);
      document.getElementById("profileImg").src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  saveCodeBtn?.addEventListener("click", () => {
    codeModal.classList.add("active");
  });

  modalClose?.addEventListener("click", () => {
    codeModal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === codeModal) {
      codeModal.classList.remove("active");
    }
  });

  resetStorageBtn?.addEventListener("click", () => {
    if (confirm("Reset all edits? This will restore default content and clear uploaded images.")) {
      localStorage.removeItem(KEYS.text);
      localStorage.removeItem(KEYS.projectImages);
      localStorage.removeItem(KEYS.profileImage);
      alert("Cleared! Reloading page...");
      window.location.reload();
    }
  });

  downloadHtmlBtn?.addEventListener("click", () => {
    generateAndDownloadHtml();
  });

  downloadJsBtn?.addEventListener("click", () => {
    generateAndDownloadJs();
  });
}

function attachTextListener(el) {
  el.addEventListener("blur", () => {
    saveTextOverride(el.dataset.editableId, el.innerHTML);
  });
}

// ==========================================================================
// 7. DYNAMIC EXPORTS
// ==========================================================================
async function generateAndDownloadHtml() {
  try {
    const res = await fetch("index.html");
    let htmlContent = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const textOverrides = JSON.parse(localStorage.getItem(KEYS.text)) || {};
    doc.querySelectorAll("[data-editable-id]").forEach(el => {
      const id = el.dataset.editableId;
      if (textOverrides[id] !== undefined) {
        el.innerHTML = textOverrides[id];
      }
    });
    doc.body.classList.remove("edit-mode");
    doc.querySelectorAll(".nav-tab").forEach(tab => tab.classList.remove("active"));
    const aboutTab = doc.querySelector('.nav-tab[href="#about"]');
    if (aboutTab) aboutTab.classList.add("active");
    const outputHtml = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
    triggerDownload(outputHtml, "index.html", "text/html");
  } catch (e) {
    console.error(e);
    alert("Error compiling index.html. Check console.");
  }
}

async function generateAndDownloadJs() {
  try {
    const res = await fetch("script.js");
    let jsContent = await res.text();
    triggerDownload(jsContent, "script.js", "application/javascript");
  } catch (e) {
    console.error(e);
    alert("Error compiling script.js. Check console.");
  }
}

function triggerDownload(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ==========================================================================
// 8. CONTACT FORM SUBMISSION
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.innerHTML;

    if(btn) {
      btn.innerHTML = "Sending...";
      btn.style.opacity = "0.7";
      btn.style.pointerEvents = "none";
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        showToast("Sent! See you soon !!");
        form.reset();
      } else {
        showToast("Something went wrong. Please try again.", true);
      }
    } catch (error) {
      console.error(error);
      showToast("Error sending message.", true);
    } finally {
      if(btn) {
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      }
    }
  });
}

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.innerText = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.padding = "15px 25px";
  toast.style.backgroundColor = isError ? "#ff3a54" : "#4ade80";
  toast.style.color = isError ? "#fff" : "#070a13";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
  toast.style.zIndex = "9999";
  toast.style.fontFamily = "var(--font-body)";
  toast.style.fontWeight = "600";
  toast.style.transform = "translateY(100px)";
  toast.style.opacity = "0";
  toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  }, 10);

  setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
