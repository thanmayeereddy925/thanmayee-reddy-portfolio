// ==========================================================================
// 1. DATA STRUCTURES (DEFAULT VALUES FROM RESUME)
// ==========================================================================
const PROJECTS = [
  {
    id: "smart-agri",
    title: "IoT-Based Smart Agricultural System",
    desc: "A smart agriculture setup using environmental sensors to monitor temperature, humidity, and soil moisture to support automated irrigation decisions.",
    tags: ["IoT", "Arduino", "Sensors", "ESP8266"],
    icon: "🌾"
  },
  {
    id: "spam-detection",
    title: "Spam Email Detection",
    desc: "A supervised machine learning model classifying spam vs. ham using 13 engineered features, connected to an active inbox for real-time validation.",
    tags: ["Python", "Scikit-Learn", "ML", "Pandas"],
    icon: "✉️"
  },
  {
    id: "iot-chatbot",
    title: "IoT Chatbot (RAG)",
    desc: "A retrieval-augmented generation chatbot pulling from microcontrollers documentation and Wikipedia API, deployed with a Flask interface.",
    tags: ["RAG", "Flask", "LLM", "NLP"],
    icon: "🤖"
  },
  {
    id: "accident-detection",
    title: "Accident Detection using Deep Learning",
    desc: "An AI-based computer vision system trained on custom datasets using TensorFlow/Keras to detect road accidents in real-time, deployed via Flask.",
    tags: ["TensorFlow", "Keras", "CV", "Flask"],
    icon: "🚗"
  },
  {
    id: "deepfake-detection",
    title: "Deepfake Detection using Deep Learning",
    desc: "A deep learning model utilizing OpenCV and PyTorch to scan media frames and detect AI-generated manipulations or face swaps.",
    tags: ["PyTorch", "OpenCV", "Deep Learning", "CV"],
    icon: "👥"
  },
  {
    id: "ytbt-cardio",
    title: "YTBT Cardio NLP",
    desc: "A 2D CNN + Transformer system translating 12-lead ECG waveform images into structured medical reports with a multi-role Flask web portal.",
    tags: ["PyTorch", "Transformers", "CNN", "NLP"],
    icon: "🫀"
  },
  {
    id: "studymind-ai",
    title: "StudyMind AI",
    desc: "An adaptive study navigator that generates customized roadmaps using Random Forest engines, proctored exam portals, and Gemini APIs.",
    tags: ["Flask", "Gemini API", "Random Forest", "SQLite"],
    icon: "🧠"
  }
];

// Local Storage Keys
const KEYS = {
  text: "tr_portfolio_text_v1",
  projectImages: "tr_portfolio_proj_images_v1",
  profileImage: "tr_portfolio_profile_image_v1"
};

// ==========================================================================
// 2. PAGE INITIALIZATION (LOAD FROM STORAGE)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadTextOverrides();
  loadProfileImage();
  renderProjects();
  initActiveTabObserver();
  initEditMode();
  initContactForm();
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
// 3. PROJECT CARD RENDER & MEDIA OVERRIDES
// ==========================================================================
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};
  grid.innerHTML = "";

  PROJECTS.forEach((p, idx) => {
    const customImg = savedImages[p.id] || null;
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-media">
        ${customImg 
          ? `<img src="${customImg}" alt="${p.title}" />` 
          : `<div class="project-gradient-bg gradient-${idx % 7}"></div>
             <div class="project-placeholder-content">
               <span class="ph-badge">Project 0${idx + 1}</span>
               <span class="ph-logo">${p.icon}</span>
             </div>`
        }
        <div class="project-upload-overlay">
          <label class="upload-overlay-btn">
            <span>${customImg ? "Change Image" : "Upload Image"}</span>
            <input type="file" accept="image/*" data-project-id="${p.id}" />
          </label>
          ${customImg ? `<button class="upload-overlay-btn btn-danger" style="margin-top:6px; padding:6px 12px;" onclick="removeProjectImage('${p.id}')">Remove</button>` : ""}
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
      </div>
    `;
    grid.appendChild(card);
  });

  // Attach upload event listeners to file inputs
  grid.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const pId = e.target.dataset.projectId;
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};
        savedImages[pId] = reader.result; // base64
        localStorage.setItem(KEYS.projectImages, JSON.stringify(savedImages));
        renderProjects();
      };
      reader.readAsDataURL(file);
    });
  });

  // Re-apply contenteditable states if we are in Edit Mode
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
// 4. INTERSECTION OBSERVER FOR TABS ACTIVE STATE
// ==========================================================================
function initActiveTabObserver() {
  const tabs = document.querySelectorAll(".nav-tab");
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    rootMargin: "-25% 0px -65% 0px", // triggers when section dominates viewport center
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
// 5. EDIT MODE CONTROLLER
// ==========================================================================
function initEditMode() {
  const editToggleBtn = document.getElementById("editToggleBtn");
  const profileUploadInput = document.getElementById("profileUploadInput");
  const saveCodeBtn = document.getElementById("saveCodeBtn");
  const resetStorageBtn = document.getElementById("resetStorageBtn");
  
  // Modals
  const codeModal = document.getElementById("codeModal");
  const modalClose = document.getElementById("modalClose");
  const downloadHtmlBtn = document.getElementById("downloadHtmlBtn");
  const downloadJsBtn = document.getElementById("downloadJsBtn");

  // Toggle Edit Mode
  editToggleBtn?.addEventListener("click", () => {
    const isEditMode = document.body.classList.toggle("edit-mode");
    
    // Toggle contenteditable attributes
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
        ? "<strong>Edit Mode Active:</strong> Click any text area (dashed outline) to edit directly. Hover over cards or profile photo to upload images. Changes persist locally."
        : "These projects are loaded dynamically. You can click <strong>Edit Portfolio</strong> in the bottom right to upload custom screenshots or change details.";
    }
  });

  // Profile photo upload
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

  // Modal actions
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

  // Reset local storage overrides
  resetStorageBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all edits? This will restore the default resume content and clear uploaded images.")) {
      localStorage.removeItem(KEYS.text);
      localStorage.removeItem(KEYS.projectImages);
      localStorage.removeItem(KEYS.profileImage);
      alert("Cleared! Reloading page...");
      window.location.reload();
    }
  });

  // Download Code Trigger (index.html)
  downloadHtmlBtn?.addEventListener("click", () => {
    generateAndDownloadHtml();
  });

  // Download Code Trigger (script.js)
  downloadJsBtn?.addEventListener("click", () => {
    generateAndDownloadJs();
  });
}

// Attach listeners to editable elements to capture text input
function attachTextListener(el) {
  // Save content on blur (focus loss) or input
  el.addEventListener("blur", () => {
    saveTextOverride(el.dataset.editableId, el.innerHTML);
  });
}

// ==========================================================================
// 6. DYNAMIC EXPORTS (DOWNLOAD UPDATED WORK LIVE)
// ==========================================================================
async function generateAndDownloadHtml() {
  try {
    const res = await fetch("index.html");
    let htmlContent = await res.text();

    // Parse the HTML content using a temporary DOM Parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const textOverrides = JSON.parse(localStorage.getItem(KEYS.text)) || {};
    
    // Replace all default placeholders in index.html with the user's overrides
    doc.querySelectorAll("[data-editable-id]").forEach(el => {
      const id = el.dataset.editableId;
      if (textOverrides[id] !== undefined) {
        el.innerHTML = textOverrides[id];
      }
    });

    // Remove edit-mode indicators and active classes from navigation
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

    const textOverrides = JSON.parse(localStorage.getItem(KEYS.text)) || {};
    const savedImages = JSON.parse(localStorage.getItem(KEYS.projectImages)) || {};

    // We can inject the overrides directly into the JS code!
    // We will generate the PROJECTS array with updated descriptions, and include default base64 strings if applicable.
    const updatedProjects = PROJECTS.map(p => {
      const descId = `proj-desc-${p.id}`;
      const titleId = `proj-title-${p.id}`;
      
      let title = p.title;
      let desc = p.desc;

      if (textOverrides[titleId]) title = textOverrides[titleId].replace(/<[^>]*>/g, ""); // strip tags
      if (textOverrides[descId]) desc = textOverrides[descId].replace(/<[^>]*>/g, "");

      return {
        id: p.id,
        title: title,
        desc: desc,
        tags: p.tags,
        icon: p.icon,
        // If they uploaded a project image, we can embed the base64 or leave it to point to a local file
        // To keep it simple, we check if they want to embed base64 or keep null. Let's keep it embedded if they want.
        image: savedImages[p.id] || null 
      };
    });

    // Replace the default projects array in the script content
    const projectsRegex = /const PROJECTS = \[\s*[\s\S]*?\s*\];/;
    const newProjectsCode = `const PROJECTS = ${JSON.stringify(updatedProjects, null, 2)};`;
    jsContent = jsContent.replace(projectsRegex, newProjectsCode);

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
// 7. CONTACT FORM SUBMISSION
// ==========================================================================
function initContactForm() {
  document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("femail").value.trim();
    const msg = document.getElementById("fmsg").value.trim();
    
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hello Thanmayee,\n\n${msg}\n\nBest regards,\n${name}\nEmail: ${email}`);
    
    window.location.href = `mailto:thanmayeereddy925@gmail.com?subject=${subject}&body=${body}`;
  });
}
