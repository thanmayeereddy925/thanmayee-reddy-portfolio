// ==========================================================================
// 1. DATA STRUCTURES — FULL PROJECT DATA WITH GITHUB LINKS & IMAGES
// ==========================================================================
const PROJECTS = [
  {
    id: "plant-health-ai",
    title: "AI Plant Health & Disease Detection",
    desc: "A computer vision and agentic diagnostic system classifying plant leaf diseases with deep CNNs and Zero-Shot Learning to deliver automated agronomy treatment plans.",
    tags: ["Computer Vision", "Deep Learning", "Agentic AI", "Agriculture", "FastAPI"],
    icon: "🌱",
    github: null,
    images: [],
    longDesc: `<p>The AI Plant Health Platform is an intelligent diagnostic system bridging high-throughput computer vision classification with an agentic reasoning engine to detect leaf diseases early and deliver actionable agronomy guidance to farmers.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Delayed identification of crop foliar infections leads to massive agricultural losses and over-reliance on chemical pesticides. Smallholder farmers lack rapid access to plant pathology experts when outbreaks first appear.</p>

<h4 class="modal-section-title">Solution Overview</h4>
<p>A dual-stage diagnostic pipeline: an image classification backbone rapidly detects known leaf diseases from field photos, while a Zero-Shot semantic module flags rare strains. An agentic reasoning engine synthesizes the diagnosis with local environmental variables to generate organic and chemical treatment roadmaps.</p>

<h4 class="modal-section-title">System Architecture</h4>
<pre class="modal-arch-box">
[ Field Leaf Photo ]
        ↓
[ Preprocessing & CLAHE Contrast Enhancement ]
        ↓
[ Deep CNN Feature Extractor (EfficientNet / ResNet) ]
        ↓
[ Zero-Shot Semantic Vector Alignment (for unseen strains) ]
        ↓
[ Pathogen Classification & Confidence Score ]
        ↓
[ Agentic Agronomy Reasoning Engine ]
        ↓
[ Actionable Organic / Chemical Remedy Plan + Dosage ]
</pre>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>Computer Vision & DL:</b> PyTorch, CNNs (ResNet, EfficientNet), Zero-Shot Learning, OpenCV.</li>
  <li><b>Backend & Services:</b> Python, FastAPI microservice, REST API endpoints.</li>
  <li><b>Data & Evaluation:</b> PlantVillage dataset (54,000+ leaf images across 38 crop disease classes).</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Image Pipeline:</b> Engineered leaf segmentation and background clutter removal to reduce false positives from field soil and weeds.</li>
  <li><b>Zero-Shot Module:</b> Incorporated semantic embeddings to detect emerging disease variants without model retraining.</li>
  <li><b>API Service:</b> Designed a high-throughput FastAPI microservice serving sub-second inference for mobile clients.</li>
  <li><b>Internship Context:</b> Developed under active research and prototyping during internship at <b>QuGates Technologies</b>.</li>
</ul>

<h4 class="modal-section-title">Results & Future Improvements</h4>
<ul class="modal-bullet-list">
  <li><b>Performance:</b> High classification accuracy on multi-class crop datasets with sub-second inference latency.</li>
  <li><b>Future Roadmap:</b> On-device edge deployment using TensorRT on autonomous agricultural drone cameras for wide-field surveys.</li>
</ul>`
  },
  {
    id: "ultron-automation",
    title: "Ultron — AI Desktop Automation",
    desc: "An autonomous desktop assistant that translates spoken and text instructions into real-time operating system actions, application controls, and multi-step computer workflows.",
    tags: ["Agentic AI", "Voice AI", "Automation", "Python", "OS Control"],
    icon: "🤖",
    github: null,
    images: [],
    longDesc: `<p>Ultron is an autonomous desktop automation agent that converts natural-language voice and text commands into automated operating system controls, application orchestrations, and productivity workflows.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Repetitive desktop tasks—such as launching specific workspaces, controlling media, organizing file directories, and looking up technical docs—require constant manual mouse and keyboard interactions that break creative focus.</p>

<h4 class="modal-section-title">Solution Overview</h4>
<p>An autonomous agent loop that combines Speech-to-Text with an LLM-based action planner. Spoken commands are parsed into structured intent parameters and mapped to safe native OS tools (PyAutoGUI, subprocesses, system APIs) with real-time audio and visual feedback.</p>

<h4 class="modal-section-title">Interactive Workflow Example</h4>
<pre class="modal-arch-box">
User Spoken Command:
"Open Spotify and play my coding playlist"
       ↓
Speech-to-Text Transcription (Whisper / SpeechRecognition)
       ↓
Intent Understanding & Entity Extraction (LLM Agent)
       ↓
Action Planning Engine (Safety Guardrails Verified)
       ↓
Tool Invocation (App Launcher → Window Focus → Media Key Dispatch)
       ↓
Spotify Launches → Search Triggered → Coding Playlist Plays
</pre>

<h4 class="modal-section-title">System Architecture</h4>
<pre class="modal-arch-box">
[ Spoken / Typed Prompt ]
           ↓
[ Audio Transcription (Whisper Engine) ]
           ↓
[ LLM Intent & Parameter Extraction ]
           ↓
[ Multi-Step Action Planner & Safety Checks ]
           ↓
[ Tool Dispatcher (App Control, Browser Automation, File System) ]
           ↓
[ Native OS Execution via PyAutoGUI & Subprocesses ]
           ↓
[ Visual Notification & TTS Confirmation Feedback ]
</pre>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>Core Engine:</b> Python, SpeechRecognition, PyAudio, Pyttsx3 / TTS.</li>
  <li><b>Agent Logic:</b> LLM Prompt Orchestration, Structured JSON Tool Calling, Task Planner.</li>
  <li><b>OS Automation:</b> PyAutoGUI, OS Subprocesses, Keyboard/Mouse Hooks.</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Voice Trigger Loop:</b> Built asynchronous microphone capture with noise filtering for continuous listening without freezing the interface.</li>
  <li><b>Intent Parser:</b> Structured natural language into verifiable JSON tool payloads with strict parameter validation.</li>
  <li><b>Safety Guardrails:</b> Implemented whitelist protections ensuring system critical commands cannot be triggered inadvertently.</li>
</ul>

<h4 class="modal-section-title">Results & Future Improvements</h4>
<ul class="modal-bullet-list">
  <li><b>Performance:</b> Seamless hands-free multitasking with low end-to-end voice latency.</li>
  <li><b>Future Roadmap:</b> Vision-Language grounding (allowing Ultron to "see" and click visual UI elements on screen) and LangGraph agent coordination.</li>
</ul>`
  },
  {
    id: "accident-detection",
    title: "Accident Detection & Road Safety Vision",
    desc: "An AI-based computer vision system that detects road accidents from surveillance imagery using custom CNN + YOLOv8 models and dispatches emergency Telegram alerts with GPS coordinates.",
    tags: ["TensorFlow", "Keras", "YOLOv8", "Computer Vision", "Telegram API", "Flask"],
    icon: "🚗",
    github: "https://github.com/thanmayeereddy925/accident_detection",
    images: [
      "images/projects/image36.png",
      "images/projects/image14.png",
      "images/projects/image23.png",
      "images/projects/image18.png"
    ],
    longDesc: `<p>An automated computer vision safety application that detects vehicular accidents from video feeds or camera snapshots and dispatches emergency location alerts with GPS coordinates via Telegram.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Traffic collisions on highways and intersections often go unnoticed for critical minutes, delaying emergency medical response and risking lives. Automated monitoring is essential for instant dispatch.</p>

<h4 class="modal-section-title">Solution Overview</h4>
<p>A dual-model computer vision pipeline: an image classification CNN identifies collision probability, while YOLOv8 localizes damaged vehicle boundaries. When confirmed, browser GPS coordinates are fetched and dispatched to emergency Telegram channels in under 3 seconds.</p>

<h4 class="modal-section-title">Detection & Alert Pipeline</h4>
<pre class="modal-arch-box">
[ Traffic Camera Feed / Snapshot ]
               ↓
[ CNN Classification (accident_model_final.h5) ]
               ↓
[ YOLOv8 Object Detection (best.pt / ONNX Bounding Boxes) ]
               ↓
[ Severity Threshold Confirmation (Confidence &gt; 80%) ]
               ↓
[ GPS Coordinate Extraction ]
               ↓
[ Telegram Bot Emergency Dispatch with Google Maps Link ]
</pre>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>Deep Learning:</b> TensorFlow, Keras, YOLOv8 (ONNX & PyTorch backends), OpenCV.</li>
  <li><b>Backend & Deployment:</b> Python, Flask web server, REST API.</li>
  <li><b>Integration:</b> Telegram Bot API, Geolocation API.</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Model Training:</b> Trained the custom CNN classifier on curated vehicle crash datasets and fine-tuned YOLOv8 for vehicle damage localization.</li>
  <li><b>Alert Integration:</b> Engineered the automated Telegram emergency bot pipeline that formats timestamped alerts with live Google Maps navigation links.</li>
  <li><b>Web Interface:</b> Created a lightweight Flask interface featuring real-time image upload, confidence progress meters, and detection logs.</li>
</ul>`
  },
  {
    id: "smart-agri",
    title: "Smart Irrigation & Rain Alert System",
    desc: "An automated agricultural hardware system monitoring soil moisture, temperature, humidity, and rainfall via Arduino/ESP8266 with automated relay pump control and an audio rain buzzer alarm.",
    tags: ["IoT", "Automation", "Sensors", "Arduino", "Embedded Systems"],
    icon: "🌾",
    github: null,
    images: [
      "images/projects/image12.jpg"
    ],
    longDesc: `<p>An embedded IoT agricultural system engineered to automate soil moisture monitoring, closed-loop irrigation, and real-time weather event alerting.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Excessive watering and unexpected heavy rainfall cause crop root damage, water wastage, and fertilizer runoff. Farmers require automated irrigation threshold triggers and immediate rain warnings.</p>

<h4 class="modal-section-title">System Architecture & Circuit</h4>
<pre class="modal-arch-box">
[ Soil Moisture + Raindrop + DHT11 Sensors ]
                     ↓
[ Arduino Uno (Main Microcontroller & Logic Engine) ]
                     ↓
       ┌─────────────┴─────────────┐
       ↓                           ↓
[ Soil Moisture &lt; Threshold ]    [ Rain Detected on Module ]
       ↓                           ↓
[ 5V Relay Activates Pump ]      [ Piezoelectric Buzzer Alarms ]
</pre>

<h4 class="modal-section-title">Hardware Components</h4>
<ul class="modal-bullet-list">
  <li><b>Microcontrollers:</b> Arduino Uno (real-time sensor sampling & logic execution) + ESP8266 NodeMCU.</li>
  <li><b>Sensors:</b> Capacitive soil moisture sensor, DHT11 (ambient temperature & humidity), raindrop sensor plate.</li>
  <li><b>Actuators:</b> 5V single-channel relay module, 12V submersible water pump, piezoelectric buzzer.</li>
</ul>

<h4 class="modal-section-title">College Project Expo Achievement</h4>
<ul class="modal-bullet-list">
  <li>🏆 <b>Winner — 1st Place:</b> Awarded first prize at the College Project Expo for demonstrating live automated irrigation switching and sensory alert pipelines to faculty judges.</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Circuit Architecture:</b> Breadboard circuit design, pin mapping, voltage division, and relay isolation protection.</li>
  <li><b>Firmware Programming:</b> Wrote C++ logic for sensor hysteresis calibration, moisture thresholds, and rain alarm triggers.</li>
  <li><b>Expo Demonstration:</b> Led the technical presentation explaining the real-world agricultural impact and sensory data pipeline.</li>
</ul>`
  },
  {
    id: "iot-chatbot",
    title: "IoT Hardware Chatbot (RAG System)",
    desc: "A domain-specific Retrieval-Augmented Generation (RAG) assistant for microcontrollers and sensors, indexing local technical datasheets with Wikipedia API fallback and context-aware responses.",
    tags: ["RAG", "GenAI", "LLMs", "Flask", "NLP", "Wikipedia API"],
    icon: "💡",
    github: "https://github.com/thanmayeereddy925/iot_hardware_bot",
    images: [
      "images/projects/image15.png",
      "images/projects/image29.png"
    ],
    longDesc: `<p>The IoT Hardware Chatbot is a domain-specific Retrieval-Augmented Generation (RAG) assistant designed to provide accurate pinouts, wiring diagrams, and code snippets for microcontrollers and sensors.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Hardware developers and engineering students waste excessive time navigating 500-page microcontroller datasheets to confirm pin assignments, I2C/SPI bus addresses, and voltage tolerances.</p>

<h4 class="modal-section-title">RAG System Architecture</h4>
<pre class="modal-arch-box">
[ User Technical Query (e.g. "ESP8266 I2C SDA pin") ]
                     ↓
[ Query Embedding & Semantic Search ]
                     ↓
[ Local Knowledge Base (Datasheets, Pinouts, ESP/Arduino Specs) ]
                     ↓
[ Wikipedia API Fallback Search (if component is novel) ]
                     ↓
[ Context Injection into Prompt Pipeline ]
                     ↓
[ LLM Synthesizes Hallucination-Free Technical Answer + C++ Code ]
</pre>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>RAG Pipeline:</b> Python, Text Chunking, Embeddings, Wikipedia API Dynamic Fallback.</li>
  <li><b>Backend & UI:</b> Flask web framework, conversational chat UI with syntax-highlighted code blocks.</li>
  <li><b>Hardware Coverage:</b> Arduino Uno, ESP8266 NodeMCU, ESP32, and 20+ common sensor/actuator modules.</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Knowledge Indexing:</b> Extracted and structured pinout matrices and register configurations from manufacturer datasheets into a clean local retrieval corpus.</li>
  <li><b>Dynamic Fallback:</b> Programmed automated Wikipedia API retrieval queries when local vector similarity thresholds were not met.</li>
  <li><b>Web Interface:</b> Developed a responsive Flask interface with code copy buttons and query suggestions.</li>
</ul>`
  },
  {
    id: "ytbt-cardio",
    title: "YTBT Cardio NLP — ECG to Medical Report Translation",
    desc: "A clinical deep learning system translating 12-lead ECG waveform images into structured medical reports with a multi-role Flask web portal (Doctor, Patient, Technician, Admin) and SQLite audit logs.",
    tags: ["PyTorch", "Transformers", "2D CNN", "NLP", "Flask", "SQLite"],
    icon: "🫀",
    github: "https://github.com/thanmayeereddy925/ECG_reportprediction_NLP",
    images: [
      "images/projects/image10.png",
      "images/projects/image8.png",
      "images/projects/image5.png",
      "images/projects/image6.png"
    ],
    longDesc: `<p>YTBT Cardio NLP is a clinical AI system that translates 12-lead electrocardiogram (ECG) grid images directly into structured cardiology diagnostic text reports.</p>

<h4 class="modal-section-title">Problem Statement</h4>
<p>Interpreting 12-lead ECG waveforms requires specialized cardiologists. In rural or overwhelmed clinics, delayed interpretation slows critical treatment for acute cardiac conditions.</p>

<h4 class="modal-section-title">Deep Learning Architecture</h4>
<pre class="modal-arch-box">
[ 12-Lead ECG Waveform Grid Image ]
                 ↓
[ 2D CNN Visual Encoder (Extracts Spatial Waveform Geometry) ]
                 ↓
[ Feature Vector Projection ]
                 ↓
[ Transformer Decoder with Specialized Clinical BPE Tokenizer ]
                 ↓
[ Auto-Regressive Report Generation (Rhythm, Axis, Ischemia Findings) ]
                 ↓
[ Multi-Role Clinical Portal with Doctor Review & Prescriptions ]
</pre>

<h4 class="modal-section-title">Tech Stack & Dataset</h4>
<ul class="modal-bullet-list">
  <li><b>Deep Learning:</b> PyTorch, 2D CNN Encoder, Transformer Decoder, Custom BPE Tokenizer.</li>
  <li><b>Dataset & Metrics:</b> Trained on 21,000+ clinical ECGs from the PTB-XL benchmark; evaluated with BLEU and ROUGE-L scores.</li>
  <li><b>Clinical Portal:</b> Flask, SQLite database, role-based access control (Doctor, Patient, Technician, Admin).</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Preprocessing:</b> Converted raw medical ECG records into cleaned, standardized image representations with grid artifact normalization.</li>
  <li><b>Model Engineering:</b> Trained the combined vision-to-language model and specialized the BPE tokenizer for cardiology terminology.</li>
  <li><b>Role-Based System:</b> Designed the multi-tier medical portal ensuring patient privacy, technician upload pipelines, and doctor sign-off workflows.</li>
</ul>`
  },
  {
    id: "studymind-ai",
    title: "StudyMind AI — Adaptive Learning & Mastery Navigator",
    desc: "An adaptive study navigator that generates personalized learning roadmaps and dynamic study timetables using Flask, SQLite, and Google Gemini API with a Random Forest ML mastery diagnostic engine.",
    tags: ["Flask", "Gemini API", "Machine Learning", "Scikit-learn", "SQLite"],
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
    longDesc: `<p>StudyMind AI is an adaptive learning navigator that creates personalized curriculum roadmaps, optimizes daily study agendas, and identifies concept mastery using Machine Learning.</p>

<h4 class="modal-section-title">System Architecture</h4>
<pre class="modal-arch-box">
[ Subject Goal & Available Hours ]
                ↓
[ Gemini API Curriculum Roadmap Generator ]
                ↓
[ Node-Based Knowledge Graph & Dynamic Daily Agenda ]
                ↓
[ Proctored Anti-Cheat Quiz & Diagnostic Testing ]
                ↓
[ Scikit-Learn Random Forest Mastery Classifier ]
                ↓
  ┌─────────────┴─────────────┐
  ↓                           ↓
[ Concept Mastered ]   [ Critical Gap Detected ]
                              ↓
               [ Auto-Inject Remedial Roadmap Topic ]
</pre>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>Core Engine:</b> Python, Flask, Google Gemini API, Scikit-learn (Random Forest).</li>
  <li><b>Database & Storage:</b> SQLite relational database tracking student velocity, quiz submissions, and topics.</li>
  <li><b>Exam Features:</b> Proctored exam portal with tab-switch detection, countdown timers, and auto-submission.</li>
</ul>

<h4 class="modal-section-title">My Key Contribution</h4>
<ul class="modal-bullet-list">
  <li><b>Roadmap Generation:</b> Structured prompt engineering pipelines that return week-by-week prerequisite-sequenced learning paths.</li>
  <li><b>Diagnostic Engine:</b> Built the Random Forest classification model categorizing concept mastery (Mastered vs. Review Needed vs. Critical Gap).</li>
  <li><b>Auto-Remediation:</b> Engineered the graph update routine that injects prerequisite foundational modules into the roadmap when critical knowledge gaps are detected.</li>
</ul>`
  },
  {
    id: "prod-tracker",
    title: "AI Workforce Productivity Tracker",
    desc: "An intelligent productivity and task management system featuring multi-role dashboards (Manager, Employee, Admin), ML-based work log anomaly detection, and project analytics using Flask and SQLite.",
    tags: ["Machine Learning", "Flask", "SQLite", "Data Analytics"],
    icon: "📈",
    github: "https://github.com/thanmayeereddy925/AI-Productivity-Tracker",
    images: [
      "images/projects/image34.png",
      "images/projects/image7.png",
      "images/projects/image1.png",
      "images/projects/image22.png",
      "images/projects/image9.png",
      "images/projects/image30.png"
    ],
    longDesc: `<p>The AI Workforce Productivity Tracker is an enterprise dashboard application delivering structured task allocation, work logging, and automated performance anomaly tracking.</p>

<h4 class="modal-section-title">Core Architecture & Features</h4>
<ul class="modal-bullet-list">
  <li><b>Multi-Role Dashboard:</b> Dedicated portals for Managers (task assignment, progress tracking, audits), Employees (task logging, proof submission), and Admins (user provisioning).</li>
  <li><b>Suspicious Activity Detection:</b> Machine learning engine flags work log anomalies, rapid duplicate submissions, and irregular hour spikes.</li>
  <li><b>Manager Review Feedback Loop:</b> Structured feedback system allowing managers to provide objection reasons upon task review.</li>
  <li><b>Time Analytics:</b> Comparative visualization tracking estimated vs. actual project completion hours.</li>
</ul>

<h4 class="modal-section-title">Tech Stack</h4>
<ul class="modal-bullet-list">
  <li><b>Backend & Framework:</b> Python, Flask web server, Jinja2 templates, SQLite.</li>
  <li><b>Analytics & ML:</b> Scikit-learn, Pandas, Chart.js for visualization dashboards.</li>
</ul>`
  }
];

// Local Storage Keys
const KEYS = {
  text: "tr_portfolio_text_v1",
  projectImages: "tr_portfolio_proj_images_v1",
  profileImage: "tr_portfolio_profile_image_v2"
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
  localStorage.removeItem("tr_portfolio_profile_image_v1");
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
