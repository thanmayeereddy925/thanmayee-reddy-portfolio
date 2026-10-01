import os
import fitz  # PyMuPDF
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        footer_text = f"Thanmayee Reddy — Curriculum Vitae | Page {self._pageNumber} of {page_count}"
        self.drawRightString(A4[0] - 36, 20, footer_text)
        self.drawString(36, 20, "Confidential — Portfolio: thanmayee-reddy-portfolio.vercel.app")
        self.restoreState()

def build_pdf(filename="Resume.pdf"):
    # Margins: 32 pt (~0.44 inch) left/right, 28 pt top/bottom
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=32
    )

    content_width = A4[0] - 72  # ~523 pt

    # Colors
    c_primary = colors.HexColor("#0f172a")    # Deep slate navy
    c_accent = colors.HexColor("#0284c7")     # Modern blue accent
    c_dark = colors.HexColor("#1e293b")       # Dark text
    c_muted = colors.HexColor("#475569")      # Secondary text
    c_border = colors.HexColor("#cbd5e1")     # Subtle divider line

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=c_primary,
        alignment=1 # Center
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=c_accent,
        alignment=1
    )

    contact_style = ParagraphStyle(
        'ContactRow',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_muted,
        alignment=1
    )

    sec_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=c_primary,
        spaceBefore=0,
        spaceAfter=0
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=c_dark
    )

    item_subtitle_style = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=c_muted
    )

    item_date_style = ParagraphStyle(
        'ItemDate',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=c_muted,
        alignment=2 # Right
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_dark
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11,
        textColor=c_dark,
        leftIndent=12,
        firstLineIndent=-8
    )

    def section_header(title):
        p = Paragraph(title.upper(), sec_heading_style)
        line = HRFlowable(width="100%", thickness=1, color=c_border, spaceBefore=2, spaceAfter=5)
        return [p, line]

    story = []

    # ==================== HEADER ====================
    story.append(Paragraph("THANMAYEE REDDY (GADI THANMAYEE)", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("AI/ML Engineer &bull; Generative AI &amp; Computer Vision &bull; Patent Team Lead &bull; 3rd-Year B.Tech", tagline_style))
    story.append(Spacer(1, 3))
    
    contact_text = (
        "Hyderabad, Telangana, India &nbsp;|&nbsp; "
        "+91 8332930925 &nbsp;|&nbsp; "
        '<font color="#0284c7"><a href="mailto:thanmayeereddy925@gmail.com">thanmayeereddy925@gmail.com</a></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><a href="https://www.linkedin.com/in/gadithanmayee">linkedin.com/in/gadithanmayee</a></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><a href="https://github.com/thanmayeereddy925">github.com/thanmayeereddy925</a></font>'
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))

    # ==================== SUMMARY ====================
    story.extend(section_header("Professional Profile"))
    summary_text = (
        "Passionate 3rd-year B.Tech Computer Science (AI &amp; ML) engineer at MLRITM, active Patent Team Lead, and "
        "AI/ML Freelancer. Experienced in building and deploying real-world Machine Learning, Generative AI (RAG), "
        "and Computer Vision solutions. Hands-on expertise spanning deep learning architectures (CNNs, GANs, Transformers), "
        "IoT sensor integration, and end-to-end full-stack AI pipelines from model training to production APIs. "
        "Proven leadership as RAL Club Secretary, technical workshop instructor, and event coordinator."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # ==================== EDUCATION ====================
    story.extend(section_header("Education"))
    
    edu_table_data = [
        [
            Paragraph("<b>Marri Laxman Reddy Institute of Technology and Management (MLRITM)</b>", item_title_style),
            Paragraph("Hyderabad, Telangana", item_date_style)
        ],
        [
            Paragraph("B.Tech in Computer Science and Engineering (Artificial Intelligence &amp; Machine Learning) — <i>3rd Year (3.1)</i>", item_subtitle_style),
            Paragraph("Sept 2024 &ndash; June 2028", item_date_style)
        ],
        [
            Paragraph("<b>Narayana Junior College</b> &mdash; <i>Intermediate (MPC - Mathematics, Physics, Chemistry)</i>", item_title_style),
            Paragraph("Completed July 2024", item_date_style)
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[content_width*0.75, content_width*0.25])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 6))

    # ==================== TECHNICAL SKILLS ====================
    story.extend(section_header("Technical Skills"))
    
    skills_data = [
        [Paragraph("<b>Core Languages:</b>", item_title_style), Paragraph("Python (Advanced), C, SQL, JavaScript (Basics)", body_style)],
        [Paragraph("<b>AI / ML &amp; GenAI:</b>", item_title_style), Paragraph("Machine Learning, Deep Learning, Generative AI, RAG Pipelines, Prompt Eng., GANs, Computer Vision, NLP", body_style)],
        [Paragraph("<b>Frameworks &amp; Libs:</b>", item_title_style), Paragraph("PyTorch, TensorFlow / Keras, Scikit-learn, OpenCV, Pandas, NumPy, Hugging Face", body_style)],
        [Paragraph("<b>Backend &amp; Cloud:</b>", item_title_style), Paragraph("Flask, FastAPI, REST APIs, SQLite, MongoDB Atlas Vector Search, AWS Cloud Foundations", body_style)],
        [Paragraph("<b>Embedded &amp; IoT:</b>", item_title_style), Paragraph("Arduino, ESP8266, Sensor Telemetry, Microcontrollers, Hardware-Software Interfacing", body_style)],
        [Paragraph("<b>Developer Tools:</b>", item_title_style), Paragraph("Git, GitHub, VS Code, Linux/Bash, Model Benchmarking, Full-Stack Deployment", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[110, content_width - 110])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 6))

    # ==================== WORK EXPERIENCE ====================
    story.extend(section_header("Experience &amp; Industry Roles"))

    # Role 1: QuGates
    exp1_head = [
        [Paragraph("<b>AI/ML Intern</b> &mdash; <i>QuGates Technologies</i>", item_title_style),
         Paragraph("June 2026 &ndash; Present | Bengaluru, Karnataka", item_date_style)]
    ]
    t_e1 = Table(exp1_head, colWidths=[content_width*0.65, content_width*0.35])
    t_e1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_e1)
    story.append(Paragraph("&bull; Developing end-to-end computer vision and deep learning models for automated crop pathology classification.", bullet_style))
    story.append(Paragraph("&bull; Engineered software automation solutions to streamline workflows, eliminate manual checks, and accelerate model evaluation.", bullet_style))
    story.append(Paragraph("&bull; Implemented robust data preprocessing, feature engineering, and inference pipelines integrated into production services.", bullet_style))
    story.append(Spacer(1, 4))

    # Role 2: Oorjith
    exp2_head = [
        [Paragraph("<b>Machine Learning Developer (Part-Time / Freelance)</b> &mdash; <i>Oorjith</i>", item_title_style),
         Paragraph("July 2026 &ndash; Present | Chandigarh, Punjab", item_date_style)]
    ]
    t_e2 = Table(exp2_head, colWidths=[content_width*0.68, content_width*0.32])
    t_e2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_e2)
    story.append(Paragraph("&bull; Designing and optimizing predictive machine learning pipelines using Python, Scikit-learn, and PyTorch for domain use cases.", bullet_style))
    story.append(Paragraph("&bull; Collaborating with cross-functional teams to benchmark model convergence, evaluate latency, and optimize production pipelines.", bullet_style))
    story.append(Paragraph("&bull; Assisting in end-to-end ML deployment lifecycle from exploratory data analysis to maintainable inference modules.", bullet_style))
    story.append(Spacer(1, 6))

    # ==================== PATENT ====================
    story.extend(section_header("Intellectual Property &amp; Patents"))
    pat_head = [
        [Paragraph("<b>Team Lead</b> &mdash; <i>Indian Patent Application No: 202641109078 (IP India)</i>", item_title_style),
         Paragraph("Published &amp; Filed", item_date_style)]
    ]
    t_pat = Table(pat_head, colWidths=[content_width*0.75, content_width*0.25])
    t_pat.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_pat)
    story.append(Paragraph("<b>Title:</b> <i>Uncertainty-Aware Multimodal Crop Health Detection, Forecasting and Adaptive Management System</i>", body_style))
    story.append(Paragraph("&bull; Spearheaded an engineering team to architect an uncertainty-aware vision pipeline fusing multispectral crop imagery with environmental sensor metrics to detect crop pathology and output calibrated risk forecasting.", bullet_style))
    story.append(Paragraph("&bull; Formulated an adaptive management loop that maps diagnostic outputs to localized remediation strategies with quantifiable confidence intervals.", bullet_style))

    # ==================== FORCE EXACT 2-PAGE BREAK ====================
    story.append(PageBreak())

    # ==================== PAGE 2: PROJECTS ====================
    story.extend(section_header("Featured AI/ML Projects"))

    # Project 1: Plant Health AI
    story.append(Paragraph("<b>Plant Health AI Platform</b> &mdash; <i>Computer Vision &bull; PyTorch &bull; Flask &bull; Automated Diagnosis</i>", item_title_style))
    story.append(Paragraph("&bull; Engineered a multimodal leaf disease diagnostic system utilizing transfer learning (CNNs) to classify crop pathologies across diverse agricultural conditions.", bullet_style))
    story.append(Paragraph("&bull; Implemented calibrated confidence scoring, treatment advisories, and an interactive web interface for real-time farmer decision support.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: Ultron Desktop Automation
    story.append(Paragraph("<b>Ultron Autonomous Desktop Assistant</b> &mdash; <i>Agentic AI &bull; PyAutoGUI &bull; Speech &bull; OS Automation</i>", item_title_style))
    story.append(Paragraph("&bull; Developed an autonomous desktop agent translating voice and natural-language commands into precise operating system actions and workspace navigation.", bullet_style))
    story.append(Paragraph("&bull; Integrated system telemetry monitoring (CPU/RAM/storage), smart app orchestration, and proactive audio/text query fulfillment.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3: IntelliDoc RAG Engine
    story.append(Paragraph("<b>IntelliDoc RAG Engine</b> &mdash; <i>Generative AI &bull; MongoDB Vector Search &bull; Sentence Transformers &bull; LLM</i>", item_title_style))
    story.append(Paragraph("&bull; Built an enterprise Retrieval-Augmented Generation application indexing complex technical PDF manuals and hardware datasheets.", bullet_style))
    story.append(Paragraph("&bull; Combined semantic chunking, vector similarity retrieval (MongoDB Vector Search), and contextual prompt engineering for zero-hallucination QA.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 4: YTBT Cardio & CVD Prediction
    story.append(Paragraph("<b>YTBT Cardio NLP &amp; Heart Disease Predictor</b> &mdash; <i>PyTorch &bull; 2D CNN &bull; Transformers &bull; Healthcare AI</i>", item_title_style))
    story.append(Paragraph("&bull; Created a clinical intelligence system translating 12-lead ECG waveform images into structured medical diagnostic reports using PyTorch.", bullet_style))
    story.append(Paragraph("&bull; Integrated a multi-role hospital portal (Doctor/Patient/Admin) backed by audit trails and trained a CVD GAN for synthetic data augmentation.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 5: StudyMind AI
    story.append(Paragraph("<b>StudyMind AI &mdash; Adaptive Learning Navigator</b> &mdash; <i>Machine Learning &bull; Google Gemini API &bull; Random Forest</i>", item_title_style))
    story.append(Paragraph("&bull; Built an intelligent study roadmap engine generating personalized timetables and adaptive curricula based on real-time diagnostic assessments.", bullet_style))
    story.append(Paragraph("&bull; Implemented a Random Forest mastery classifier that dynamically diagnoses weak concepts, supported by a proctored assessment environment.", bullet_style))
    story.append(Spacer(1, 6))

    # ==================== EXTRA-CURRICULAR & LEADERSHIP ====================
    # USER REQUEST: "add the extra curicular section of secretary , co - ordinator , metor for few workshops , hackthons Co ordinator for the event in the club !!"
    story.extend(section_header("Leadership &amp; Extra-Curricular Activities"))

    lead1_head = [
        [Paragraph("<b>Secretary</b> &mdash; <i>Robotics &amp; Automation Lab (RAL Club), MLRITM</i>", item_title_style),
         Paragraph("2024 &ndash; Present | College Leadership", item_date_style)]
    ]
    t_l1 = Table(lead1_head, colWidths=[content_width*0.7, content_width*0.3])
    t_l1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_l1)
    story.append(Paragraph("&bull; Directing club administrative operations, managing budgets, and coordinating inter-departmental innovation projects across robotics, AI, and embedded automation.", bullet_style))
    story.append(Paragraph("&bull; Mentoring student development teams to transition theoretical engineering concepts into deployable hardware-software prototypes.", bullet_style))
    story.append(Spacer(1, 3))

    lead2_head = [
        [Paragraph("<b>Lead Event Coordinator</b> &mdash; <i>RAL Club Technical Symposia &amp; Project Expos</i>", item_title_style),
         Paragraph("Technical Events", item_date_style)]
    ]
    t_l2 = Table(lead2_head, colWidths=[content_width*0.75, content_width*0.25])
    t_l2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_l2)
    story.append(Paragraph("&bull; Organized and orchestrated flagship college robotics exhibitions, technical hack days, and project showcases engaging 200+ active student participants.", bullet_style))
    story.append(Paragraph("&bull; Coordinated venue logistics, guest speakers, evaluation rubrics, and industry jury panels for university-level technical competitions.", bullet_style))
    story.append(Spacer(1, 3))

    lead3_head = [
        [Paragraph("<b>Technical Mentor &amp; Workshop Instructor</b> &mdash; <i>Hands-on Engineering Workshops</i>", item_title_style),
         Paragraph("Mentorship &amp; Training", item_date_style)]
    ]
    t_l3 = Table(lead3_head, colWidths=[content_width*0.75, content_width*0.25])
    t_l3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_l3)
    story.append(Paragraph("&bull; Conducted specialized hands-on workshops instructing junior batches in Arduino microcontrollers, ESP8266 IoT connectivity, and Python for AI.", bullet_style))
    story.append(Paragraph("&bull; Guided 100+ students through debugging sensor telemetry, circuit design, and writing embedded firmware.", bullet_style))
    story.append(Spacer(1, 3))

    lead4_head = [
        [Paragraph("<b>Hackathon Coordinator &amp; Team Lead</b> &mdash; <i>Smart India Hackathon (SIH) &amp; Tech Competitions</i>", item_title_style),
         Paragraph("Hackathon Leadership", item_date_style)]
    ]
    t_l4 = Table(lead4_head, colWidths=[content_width*0.75, content_width*0.25])
    t_l4.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_l4)
    story.append(Paragraph("&bull; Led cross-functional teams in competitive national hackathons (including SIH initiatives) focused on AI-driven agricultural solutions and smart automation.", bullet_style))
    story.append(Paragraph("&bull; Managed end-to-end sprint deliverables, problem-statement formulation, architectural pitching, and real-time live demonstrations.", bullet_style))
    story.append(Spacer(1, 6))

    # ==================== CERTIFICATIONS & HONORS ====================
    story.extend(section_header("Certifications &amp; Achievements"))

    certs_data = [
        [
            Paragraph("&bull; <b>AWS Academy Graduate:</b> Cloud Foundations &bull; <i>AWS Academy</i>", bullet_style),
            Paragraph("&bull; <b>MongoDB:</b> Generative AI with MongoDB &amp; Vector Search", bullet_style)
        ],
        [
            Paragraph("&bull; <b>AWS Educate:</b> Machine Learning Foundations &bull; <i>Amazon Web Services</i>", bullet_style),
            Paragraph("&bull; <b>AWS Educate:</b> Generative AI &bull; <i>Amazon Web Services</i>", bullet_style)
        ],
        [
            Paragraph("&bull; <b>Infosys Springboard:</b> GAN for Cardiovascular Disease (CVD)", bullet_style),
            Paragraph("&bull; <b>Infosys Springboard:</b> Robotic Process Automation (RPA)", bullet_style)
        ],
        [
            Paragraph("&bull; <b>Infosys Springboard:</b> Computer Vision 101 &amp; Python with AI", bullet_style),
            Paragraph("&bull; <b>Prime 2.0:</b> AI/ML Batch &bull; PyTorch, Deep Learning &amp; AI Eng.", bullet_style)
        ],
        [
            Paragraph("&bull; <b>Winner, Project Expo:</b> IoT-based Smart Agricultural System (demonstrated live)", bullet_style),
            Paragraph("&bull; <b>Published Patent:</b> Uncertainty-Aware Multimodal Crop Health AI (#202641109078)", bullet_style)
        ]
    ]
    t_cert = Table(certs_data, colWidths=[content_width*0.5, content_width*0.5])
    t_cert.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_cert)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Built {filename} successfully.")

if __name__ == '__main__':
    build_pdf("Resume.pdf")
    doc = fitz.open("Resume.pdf")
    print("Verification: Total pages =", len(doc))
    for i, p in enumerate(doc):
        print(f"Page {i+1} rect:", p.rect)
