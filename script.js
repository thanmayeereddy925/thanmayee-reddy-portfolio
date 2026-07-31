// ==========================================================================
// 1. DATA STRUCTURES — FULL PROJECT DATA WITH GITHUB LINKS & IMAGES
// ==========================================================================
const PROJECTS = [
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
    longDesc: `<p>SpamShield is a real-time email classification system that connects directly to your active Gmail inbox via IMAP and evaluates messages against 13 custom-engineered structural and linguistic features.</p>

<h4 class="modal-section-title">13-Feature Extraction Engine</h4>
<ul class="modal-bullet-list">
  <li><b>Sender Domain:</b> Flags suspicious or disposable domain extensions (.xyz, .click, .top).</li>
  <li><b>Subject Keywords:</b> Scans for high-risk spam triggers ("Winner", "Urgent", "Prize", "Claim").</li>
  <li><b>Body Keywords:</b> Identifies monetary and security bait phrases ("Wire Transfer", "Verify Account", "Bitcoin").</li>
  <li><b>URL Presence & Density:</b> Analyzes the total count and proportion of hyperlinked text.</li>
  <li><b>Suspicious URL Patterns:</b> Detects raw IP addresses and unencrypted non-standard links.</li>
  <li><b>Attachment Inspection:</b> Scans for attached files and flags dangerous extensions (.exe, .zip, .js, .vbs).</li>
  <li><b>Formatting & Urgency Language:</b> Identifies artificial threat words ("Immediately", "Account Suspended", "Action Required").</li>
  <li><b>Security Indicators:</b> Detects fake authentication claims and security alert spoofing.</li>
</ul>

<h4 class="modal-section-title">Real-Time IMAP Integration</h4>
<ul class="modal-bullet-list">
  <li><b>Live Inbox Connection:</b> Connects securely using Google App Password via Python's IMAP library.</li>
  <li><b>Batch Analysis:</b> Pulls the latest 10–50 messages on demand and outputs a live visual Spam vs. Ham breakdown.</li>
  <li><b>Dataset:</b> Trained on the SMS Spam Collection dataset, adapted and retrained with our custom 13-feature schema using Scikit-learn.</li>
</ul>`
  },
  {
    id: "iot-chatbot",
    title: "IoT Hardware Chatbot (RAG)",
    desc: "A retrieval-augmented generation chatbot for IoT sensors and microcontrollers, retrieving from technical documentation and Wikipedia API, with LLM-powered context-aware responses via a Flask interface.",
    tags: ["RAG", "Flask", "LLM", "NLP", "Wikipedia API"],
    icon: "🤖",
    github: "https://github.com/thanmayeereddy925/iot_hardware_bot",
    images: [
      "images/projects/image15.png",
      "images/projects/image29.png"
    ],
    longDesc: `<p>The IoT Hardware Chatbot is a domain-specific Retrieval-Augmented Generation (RAG) assistant designed to provide accurate technical assistance for microcontrollers, sensors, actuators, and embedded electronics.</p>

<h4 class="modal-section-title">RAG System Architecture</h4>
<ul class="modal-bullet-list">
  <li><b>Document Retrieval Engine:</b> Indexes a local knowledge base of technical datasheets and pinout guides for Arduino Uno, ESP8266, ESP32, and common sensor modules.</li>
  <li><b>Wikipedia API Fallback:</b> Dynamically fetches Wikipedia context in real time for hardware components not present in the local database.</li>
  <li><b>LLM Synthesis:</b> Injects retrieved context into prompt pipelines to generate hallucination-free, technical responses.</li>
  <li><b>Web Interface:</b> Flask-backed dark-slate conversational interface supporting code block formatting and syntax highlighting.</li>
</ul>

<h4 class="modal-section-title">Supported Technical Queries</h4>
<ul class="modal-bullet-list">
  <li><b>Pinouts & Wiring:</b> Instant pin connection guidance for I2C, SPI, UART, and analog inputs.</li>
  <li><b>Troubleshooting:</b> Debugging common hardware errors, voltage level shifting, and baud rate mismatches.</li>
  <li><b>Code Snippets:</b> Pre-formatted C/C++ (Arduino IDE) initialization code for instant testing.</li>
</ul>`
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
    longDesc: `<p>An automated computer vision safety application that detects vehicular accidents from image feeds and dispatches emergency location alerts to emergency channels via Telegram.</p>

<h4 class="modal-section-title">Detection & Alert Pipeline</h4>
<ul class="modal-bullet-list">
  <li><b>Image Input:</b> Upload traffic camera snapshots or accident imagery through the web portal.</li>
  <li><b>CNN Classification:</b> Evaluates image using a custom-trained Keras model (<code>accident_model_final.h5</code>) to output accident confidence percentage.</li>
  <li><b>YOLOv8 Object Detection:</b> Applies bounding box object detection (<code>best.pt</code> / <code>best.onnx</code>) to pinpoint damaged vehicle regions.</li>
  <li><b>GPS Emergency Alert:</b> When an accident is confirmed, the browser requests GPS coordinates and dispatches a Google Maps location link directly to an emergency Telegram channel via Bot API.</li>
</ul>

<h4 class="modal-section-title">Model Training & Deployment</h4>
<ul class="modal-bullet-list">
  <li><b>Dataset:</b> Trained on curated road crash and traffic camera datasets.</li>
  <li><b>Deployment:</b> Lightweight Flask web server with live progress indicator, confidence meter, and Telegram log feedback.</li>
</ul>`
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
    longDesc: `<p>This project implements a computer vision classifier designed to distinguish authentic human facial imagery from AI-generated or manipulated deepfake images.</p>

<h4 class="modal-section-title">Version 1 (Initial Release)</h4>
<ul class="modal-bullet-list">
  <li><b>Model Baseline:</b> Convolutional Neural Network trained using TensorFlow / Keras.</li>
  <li><b>Dataset:</b> Evaluated on the Roboflow Deepfake Detection Dataset (real vs. fake facial crops).</li>
  <li><b>Output:</b> Sigmoid classification score indicating the likelihood of synthetic manipulation.</li>
</ul>

<h4 class="modal-section-title">Version 2 (Current Architecture Rebuild)</h4>
<ul class="modal-bullet-list">
  <li><b>Enhanced Backbone:</b> Transitioning to ResNet50 with spatial attention mechanisms for finer edge artifact detection.</li>
  <li><b>Temporal Verification:</b> Adding frame-by-frame temporal analysis for deepfake video detection.</li>
</ul>`
  },
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
    longDesc: `<p>YTBT Cardio NLP is a clinical AI system that translates 12-lead electrocardiogram (ECG) grid images directly into structured cardiology diagnostic text reports.</p>

<h4 class="modal-section-title">Deep Learning Architecture</h4>
<ul class="modal-bullet-list">
  <li><b>2D CNN Visual Encoder:</b> Extracts spatial waveform features across 12-lead grid layouts.</li>
  <li><b>Transformer Decoder:</b> Generates medical diagnosis text auto-regressively token-by-token.</li>
  <li><b>Custom BPE Tokenizer:</b> Trained on a specialized cardiology corpus to handle complex medical terminology.</li>
  <li><b>Dataset & Evaluation:</b> Trained on 21,000+ clinical ECGs from the PTB-XL dataset; scored using BLEU and ROUGE-L metrics.</li>
</ul>

<h4 class="modal-section-title">Multi-Role Clinical Portal</h4>
<ul class="modal-bullet-list">
  <li><b>Technician Role:</b> Uploads ECG PDFs, extracts grid images, and triggers AI decoding.</li>
  <li><b>Doctor (Cardiologist) Role:</b> Reviews AI reports, edits findings, adds prescriptions, and answers patient queries.</li>
  <li><b>Patient Role:</b> Accesses finalized reports, views high-resolution ECG images in a lightbox, and submits health doubts.</li>
  <li><b>Admin Role:</b> Manages doctor-patient assignments, views analytics charts, and monitors security audit logs.</li>
</ul>`
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
    longDesc: `<p>StudyMind AI is an adaptive learning navigator that creates personalized study roadmaps, optimizes daily study timetables, and evaluates student mastery using Machine Learning.</p>

<h4 class="modal-section-title">Core Features & Architecture</h4>
<ul class="modal-bullet-list">
  <li><b>AI Curriculum Roadmap Generator:</b> Powered by Google Gemini API to construct week-by-week prerequisite-sequenced learning paths.</li>
  <li><b>Interactive Knowledge Graph:</b> Visual node-based graph tracking completed, active, and locked study modules.</li>
  <li><b>Dynamic Study Planner:</b> Creates time-slotted daily agendas based on target study hours and cognitive energy state.</li>
  <li><b>ML Mastery Diagnostic Engine:</b> Scikit-learn Random Forest Classifier evaluates quiz scores, error patterns, and study velocity to classify concept mastery (Mastered / Review Needed / Critical Gap).</li>
  <li><b>Remedial Auto-Injection:</b> Automatically inserts prerequisite remedial topics into the student's roadmap when a Critical Gap is identified.</li>
  <li><b>Proctored Exam System:</b> Includes tab-switch detection, synchronized countdown timers, and auto-submission enforcement.</li>
</ul>`
  },
  {
    id: "prod-tracker",
    title: "AI Workforce Productivity Tracker",
    desc: "An intelligent productivity & task management system with multi-role dashboards (Manager/Employee/Admin), AI-powered suspicious activity detection, manager feedback loops, and work log analytics using Flask and SQLite.",
    tags: ["Machine Learning", "Flask", "AI", "SQLite", "Data Analysis"],
    icon: "📈",
    github: "https://github.com/thanmayeereddy925/AI-Productivity-Tracker",
    images: [
      "images/projects/image34.png",
      "images/projects/image7.png",
      "images/projects/image1.png",
      "images/projects/image22.png",
      "images/projects/image9.png",
      "images/projects/image30.png",
      "images/projects/image11.png",
      "images/projects/image3.png",
      "images/projects/image4.png",
      "images/projects/image2.png",
      "images/projects/image25.png",
      "images/projects/image24.png"
    ],
    longDesc: `<p>The AI Workforce Productivity & Task Management System is a enterprise dashboard application providing structured task allocation, work logging, and automated performance tracking.</p>

<h4 class="modal-section-title">Role-Based Dashboard Features</h4>
<ul class="modal-bullet-list">
  <li><b>Manager Portal:</b> Task creation with priority levels (High/Medium/Low), employee progress tracking, work entry verification, and log audits.</li>
  <li><b>Employee Portal:</b> Task board view, active hour logging, submission of task proof, and feedback tracking.</li>
  <li><b>Admin Control Panel:</b> User account provisioning, role management, and global organization metrics.</li>
</ul>

<h4 class="modal-section-title">AI & Analytics Capabilities</h4>
<ul class="modal-bullet-list">
  <li><b>Suspicious Activity Detection:</b> Machine learning engine flags work log anomalies (e.g. zero hours logged for complex tasks, rapid re-submissions).</li>
  <li><b>Manager Feedback Loop:</b> Built-in review system allowing managers to provide written feedback or objection reasons upon task rejection.</li>
  <li><b>Time Analytics:</b> Comparative charts analyzing estimated vs. actual project completion hours.</li>
</ul>`
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    desc: "A computer vision application using Deep Learning (CNNs) and Zero Shot Learning to detect and classify plant diseases from leaf images. Currently under active development as part of an internship project at QuGates Technologies.",
    tags: ["Deep Learning", "FastAPI", "CNN", "Zero Shot Learning", "Computer Vision"],
    icon: "🌱",
    github: null,
    images: [],
    longDesc: `<p>The Plant Disease Detection project applies Deep Learning to analyze leaf photos and identify plant diseases early, providing actionable insights for agricultural health.</p>

<h4 class="modal-section-title">Project Context & Status</h4>
<ul class="modal-bullet-list">
  <li><b>Internship Project:</b> Developed as part of an AI engineering internship at <b>QuGates Technologies</b>.</li>
  <li><b>Development Status:</b> Under active development — full source code repository and documentation will be published upon completion.</li>
</ul>

<h4 class="modal-section-title">Technical Architecture & Features</h4>
<ul class="modal-bullet-list">
  <li><b>CNN Backbone:</b> Fine-tuned EfficientNet / ResNet feature extractors trained on 54,000+ images from the PlantVillage dataset across 38 disease classes.</li>
  <li><b>Zero Shot Learning:</b> Incorporates semantic vector embeddings to identify novel or rare plant diseases without full retraining.</li>
  <li><b>FastAPI Microservice:</b> High-throughput REST API for rapid leaf image inference.</li>
  <li><b>Field Integration:</b> Mobile-friendly web upload interface designed for agricultural field workers.</li>
</ul>`
  },
  {
    id: "smart-agri",
    title: "IoT Smart Agriculture System",
    desc: "A smart agriculture setup using environmental sensors (temperature, humidity, soil moisture, raindrops) connected via Arduino/ESP8266 with an automated relay pump and rain alarm buzzer.",
    tags: ["IoT", "Arduino", "ESP8266", "Sensors", "Embedded Systems"],
    icon: "🌾",
    github: null,
    images: [
      "images/projects/image12.jpg"
    ],
    longDesc: `<p>The IoT-Based Smart Agricultural System is a complete embedded hardware project designed to automate soil moisture monitoring, smart irrigation, and weather event detection.</p>

<h4 class="modal-section-title">Hardware Components & Circuit</h4>
<ul class="modal-bullet-list">
  <li><b>Microcontrollers:</b> Arduino Uno (main sensor processing & logic execution) + ESP8266 NodeMCU (Wi-Fi data transmission).</li>
  <li><b>Soil Moisture Sensor:</b> Continuously checks soil hydration levels to automate smart irrigation.</li>
  <li><b>DHT11 Sensor:</b> Monitors real-time ambient temperature and relative humidity.</li>
  <li><b>Raindrops Module & Buzzer Alert:</b> Detects rainfall on the field surface and immediately triggers an onboard <b>piezoelectric buzzer</b> as an audio rain indication alarm.</li>
  <li><b>Relay Module & Water Pump:</b> Controls the high-voltage irrigation pump based on automated sensor threshold triggers.</li>
</ul>

<h4 class="modal-section-title">Achievement & Expo Award</h4>
<ul class="modal-bullet-list">
  <li><b>Expo Winner:</b> 🏆 Won 1st place in the College Project Expo for demonstrating live automated irrigation and rain alarm buzzer triggers.</li>
</ul>`
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
