from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

try:
    pdfmetrics.registerFont(TTFont('Calibri', r'C:\Windows\Fonts\calibri.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri-Bold', r'C:\Windows\Fonts\calibrib.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri-Italic', r'C:\Windows\Fonts\calibrii.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri-Light', r'C:\Windows\Fonts\calibril.ttf'))
    f_main = 'Calibri'
    f_bold = 'Calibri-Bold'
    f_light = 'Calibri-Light'
    f_italic = 'Calibri-Italic'
except:
    f_main = 'Helvetica'
    f_bold = 'Helvetica-Bold'
    f_light = 'Helvetica'
    f_italic = 'Helvetica-Oblique'

def generate_resume(output_path="Resume.pdf"):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=36,
        bottomMargin=36
    )

    c_black = colors.HexColor("#000000")
    c_blue = colors.HexColor("#1f4e79")
    c_line = colors.HexColor("#7f7f7f")

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName=f_light,
        fontSize=26,
        leading=28,
        textColor=c_black,
        alignment=1
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName=f_main,
        fontSize=10,
        leading=14,
        textColor=c_black
    )

    heading_style = ParagraphStyle(
        'DocHeading',
        parent=styles['Normal'],
        fontName=f_bold,
        fontSize=11,
        leading=13,
        textColor=c_black
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName=f_main,
        fontSize=9.8,
        leading=13,
        textColor=c_black
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=styles['Normal'],
        fontName=f_main,
        fontSize=9.5,
        leading=12.5,
        textColor=c_black,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=2
    )

    sub_bullet_style = ParagraphStyle(
        'DocSubBullet',
        parent=styles['Normal'],
        fontName=f_main,
        fontSize=9.3,
        leading=12,
        textColor=c_black,
        leftIndent=14,
        spaceAfter=1.5
    )

    role_title_style = ParagraphStyle(
        'DocRoleTitle',
        parent=styles['Normal'],
        fontName=f_bold,
        fontSize=10.5,
        leading=13,
        textColor=c_black,
        spaceBefore=4,
        spaceAfter=1
    )

    role_meta_style = ParagraphStyle(
        'DocRoleMeta',
        parent=styles['Normal'],
        fontName=f_italic,
        fontSize=9.5,
        leading=12,
        textColor=colors.HexColor("#333333"),
        spaceAfter=3
    )

    def section(title):
        p = Paragraph(title, heading_style)
        line = HRFlowable(width="100%", thickness=0.75, color=c_line, spaceBefore=2, spaceAfter=4)
        return [p, line]

    story = []

    # ==========================================
    # PAGE 1: Header, Contact, Objective, Education, Skills
    # ==========================================
    story.append(Paragraph("Gadi Thanmayee", title_style))
    story.append(Spacer(1, 6))

    c_left = (
        'Hyderabad, Telangana<br/>'
        'Phone: 8332930925<br/>'
        'Email: <font color="#1f4e79"><u><a href="mailto:thanmayeereddy925@gmail.com">thanmayeereddy925@gmail.com</a></u></font>'
    )
    c_right = (
        'LinkedIn: <font color="#1f4e79"><u><a href="http://www.linkedin.com/in/gadithanmayee">http://www.linkedin.com/in/gadithanmayee</a></u></font><br/>'
        'GitHub: <font color="#1f4e79"><u><a href="https://github.com/thanmayeereddy925">https://github.com/thanmayeereddy925</a></u></font><br/>'
        'Portfolio: <font color="#1f4e79"><u><a href="https://thanmayee-reddy-portfolio.vercel.app">https://thanmayee-reddy-portfolio</a></u></font>'
    )
    t_c = Table([[Paragraph(c_left, contact_style), Paragraph(c_right, contact_style)]], colWidths=[250, 254])
    t_c.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_c)
    story.append(Spacer(1, 8))

    story.extend(section("Objective:"))
    obj_p = (
        "Motivated AI/ML Developer and Undergraduate engineering student in Computer Science &amp; Engineering "
        "(AI &amp; ML) at MLRITM, Hyderabad. Secretary of the Robotics &amp; Automation Lab (RAL Club). Hands-on "
        "experience across Computer Vision, Deep Learning, Generative AI, RAG pipelines, and intelligent workflow "
        "automation. Currently working as an AI/ML Engineer at SustiVision AI, completed a three-month AI/ML "
        "internship at Qugate Technologies, and serving as ML Developer (Part-Time) at Oorjith. Passionate about "
        "turning trained machine learning models into robust, production-ready software systems and real-world architectures."
    )
    story.append(Paragraph(obj_p, body_style))
    story.append(Spacer(1, 8))

    story.extend(section("Education:"))
    edu_table_data = [
        [
            Paragraph("<b>Marri Laxman Reddy Institute of Technology and Management [MLRITM]</b>,<br/>Btech - Computer Science and Engineering [AIML]", body_style),
            Paragraph("<b>Sept 2024 – Jun 2028</b>", ParagraphStyle('RAlign', parent=body_style, alignment=2))
        ],
        [
            Paragraph("Intermediate, Narayana Junior College, Kukatpally", body_style),
            Paragraph("<b>July 2024</b>", ParagraphStyle('RAlign', parent=body_style, alignment=2))
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[370, 134])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 8))

    story.extend(section("Skills :"))
    skills_lines = [
        "<b>Programming:</b> Python, C, C++, Java",
        "<b>Machine Learning:</b> Scikit-learn, Pandas, NumPy, Model Evaluation, Feature Engineering, Supervised Learning",
        "<b>Deep Learning:</b> PyTorch, TensorFlow, Keras, CNNs, Transfer Learning, Neural Networks",
        "<b>Computer Vision:</b> OpenCV, YOLOv8, Object Detection, Image Classification, Foliar Diagnostics",
        "<b>Generative AI &amp; Agentic AI:</b> LLMs, RAG Pipelines, Prompt Engineering, AI Agents, Tool Calling, NLP, Vector Embeddings",
        "<b>Frameworks &amp; APIs:</b> FastAPI, Flask, Streamlit, Google Gemini API, REST APIs",
        "<b>Tools &amp; Platforms:</b> Git &amp; GitHub, VS Code, Antigravity, Linux, PyAutoGUI",
        "<b>Databases:</b> SQL, SQLite, Vector Databases (MongoDB Vector Search)",
        "<b>Professional &amp; Interpersonal:</b> Problem-solving, Implementation Planning, Technical Presentation, Team Collaboration"
    ]
    for sk in skills_lines:
        story.append(Paragraph(sk, body_style))
        story.append(Spacer(1, 2))

    story.append(PageBreak())

    # ==========================================
    # PAGE 2: Experience
    # ==========================================
    story.extend(section("Experience:"))

    story.append(Paragraph("<b>AI/ML Engineer (Part-Time)</b>", role_title_style))
    story.append(Paragraph("SustiVision AI | Nigeria, Africa &bull; <b>Present</b>", role_meta_style))
    sv_bullets = [
        "Serving as an AI/ML Engineer, applying and advancing practical expertise across artificial intelligence, machine learning, and computer vision systems.",
        "Designing and executing practical implementations of AI/ML architectures, exploring alternative algorithmic approaches and innovative problem-solving methods.",
        "Contributing actively to project development, model experimentation, and continuous technical improvement with a focus on meaningful real-world outcomes.",
        "Developing intelligent software solutions across modern AI/ML frameworks, tools, and scalable inference environments.",
        "Approaching complex engineering challenges from multiple perspectives to construct and refine robust AI-driven applications."
    ]
    for b in sv_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>AI/ML Intern</b>", role_title_style))
    story.append(Paragraph("Qugate Technologies | Bengaluru, Karnataka &bull; <b>June 2026 – September 2026 (Completed)</b>", role_meta_style))
    qugate_bullets = [
        "Completed a three-month AI/ML internship gaining practical experience in AI/ML implementation, debugging, and productionizing models.",
        "Worked on the AI/ML platform for LEGOPHONICS, a hydroponics-based indoor farming system, collaborating closely with hardware engineers.",
        "Developed deep learning and computer vision models for crop disease detection and plant health diagnostics to enhance agronomic decision-making.",
        "Engineered intelligent image classification models and software automation solutions to streamline operational workflows and reduce manual tasks.",
        "Performed dataset preprocessing, model training, validation, performance benchmarking, and system integration.",
        "Cultivated hands-on expertise in the end-to-end AI development lifecycle, from data curation to testing and deployment."
    ]
    for b in qugate_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>ML Developer (Part-Time)</b>", role_title_style))
    story.append(Paragraph("Oorjith | Chandigarh, Punjab (Remote) &bull; <b>July 2026 – Present</b>", role_meta_style))
    oorjit_bullets = [
        "Develop and support machine learning solutions by applying data preprocessing, exploratory analysis, and feature engineering techniques.",
        "Collaborate with cross-functional engineering teams to build, optimize, and evaluate AI-driven applications using Python and machine learning frameworks.",
        "Assist in analysing datasets, tuning model hyperparameters, and delivering practical AI solutions for production use cases.",
        "Gain hands-on experience across the entire machine learning workflow, from feature engineering to model deployment and runtime optimization."
    ]
    for b in oorjit_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Secretary — Robotics &amp; Automation Lab (RAL Club)</b>", role_title_style))
    story.append(Paragraph("MLRITM, Hyderabad &bull; <b>2024 – Present</b>", role_meta_style))
    ral_bullets = [
        "Directing club technical initiatives, workshops, innovation competitions, and bootcamps for 200+ engineering students.",
        "Coordinating student engineering teams for national hackathons, embedded systems prototyping, and autonomous drone demonstrations.",
        "Leading hands-on peer mentoring sessions in microcontrollers, sensor-actuator interfacing, and integrated software-hardware automation pipelines."
    ]
    for b in ral_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))

    story.append(PageBreak())

    # ==========================================
    # PAGE 3: Projects (Part 1)
    # ==========================================
    story.extend(section("Projects:"))

    projects_p1 = [
        (
            "AI Plant Health &amp; Disease Detection (Patent Filed — Team Lead)",
            [
                "Developed a computer vision and agentic diagnostic system classifying plant leaf diseases using deep CNNs and Zero-Shot Learning.",
                "Delivered automated agronomy treatment plans, continuous foliar monitoring, and adaptive agronomic decision support.",
                "Filed official patent with the Indian Patent Office (Application No: 202641109078) as Team Lead for the core diagnostic architecture.",
                "Engineered high-throughput inference endpoints using FastAPI microservices and PyTorch deep learning models.",
                "<b>Tech Stack:</b> Python, FastAPI, PyTorch, Computer Vision, Deep Learning, Agentic AI, Zero-Shot Learning, OpenCV."
            ]
        ),
        (
            "Ultron — AI Desktop Automation Agent",
            [
                "Developed an autonomous desktop AI assistant translating spoken and text instructions into real-time operating system actions.",
                "Implemented multi-step computer workflow automation, application control, and speech recognition pipelines.",
                "Engineered voice-controlled agentic loops using Speech AI, PyAutoGUI, tool calling, and structured task execution.",
                "<b>Tech Stack:</b> Python, Agentic AI, Voice AI, PyAutoGUI, Tool Calling, Speech Recognition, OS Automation."
            ]
        ),
        (
            "Accident Detection &amp; Road Safety Vision",
            [
                "Built an AI-powered computer vision system detecting vehicular road accidents from surveillance video imagery in real time.",
                "Trained custom CNN and YOLOv8 models for accurate object detection and incident classification under diverse lighting conditions.",
                "Integrated automated emergency dispatch sending Telegram alerts with precise GPS coordinates to response teams.",
                "Deployed the detection system as an interactive Flask-based web application with real-time video feed processing.",
                "<b>Tech Stack:</b> Python, TensorFlow, Keras, YOLOv8, OpenCV, Flask, Telegram API."
            ]
        ),
        (
            "Smart Irrigation &amp; Rain Alert System (Winner — College Project Expo)",
            [
                "Designed and implemented an automated agricultural hardware system monitoring soil moisture, temperature, humidity, and rainfall.",
                "Programmed Arduino and ESP8266 microcontrollers to control relay pumps and trigger an audio rain buzzer alert.",
                "Demonstrated the complete sensory pipeline and water conservation impact, winning 1st Place at the College Project Expo.",
                "<b>Tech Stack:</b> Arduino, ESP8266, IoT Sensors, Relay Modules, Embedded C/C++, Hardware Automation."
            ]
        )
    ]
    for p_title, p_bullets in projects_p1:
        story.append(Paragraph(f"<b>{p_title}</b>", role_title_style))
        for pb in p_bullets:
            story.append(Paragraph(f"&bull; {pb}", bullet_style))
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # ==========================================
    # PAGE 4: Projects (Part 2)
    # ==========================================
    projects_p2 = [
        (
            "IoT Hardware Chatbot (RAG System)",
            [
                "Developed a domain-specific Retrieval-Augmented Generation (RAG) assistant for IoT sensors, boards, and microcontrollers.",
                "Indexed technical datasheets into vector representations with Wikipedia API fallback for comprehensive knowledge retrieval.",
                "Leveraged LLMs to synthesize accurate, context-aware technical responses showcased through an interactive Flask web UI.",
                "<b>Tech Stack:</b> Python, RAG Pipelines, LLMs, Flask, NLP, Vector Databases, Wikipedia API."
            ]
        ),
        (
            "YTBT Cardio NLP — ECG to Medical Report Translation",
            [
                "Built a clinical multimodal deep learning architecture translating 12-lead ECG waveform images into structured medical reports.",
                "Combined a PyTorch 2D CNN feature extractor with a Transformer language model for sequential diagnostic report generation.",
                "Engineered a secure multi-role Flask web portal (Doctor, Patient, Technician, Admin) equipped with SQLite audit logs.",
                "<b>Tech Stack:</b> Python, PyTorch, Transformers, 2D CNN, NLP, Flask, SQLite."
            ]
        ),
        (
            "StudyMind AI — Adaptive Learning &amp; Mastery Navigator",
            [
                "Developed an adaptive personalized study navigator generating tailored learning roadmaps and dynamic study timetables.",
                "Integrated Google Gemini API for automated curriculum generation and intelligent study guidance.",
                "Implemented a Random Forest ML engine to diagnose student concept mastery levels and dynamically inject remedial topics.",
                "Built a secure proctored anti-cheat exam portal with synchronized peer timers using Flask and SQLite.",
                "<b>Tech Stack:</b> Python, Flask, SQLite, Google Gemini API, Scikit-learn, Random Forest."
            ]
        ),
        (
            "AI Workforce Productivity &amp; Task Management System",
            [
                "Built an intelligent productivity and task tracking platform featuring multi-role dashboards for Managers, Employees, and Admins.",
                "Integrated machine learning algorithms for work log anomaly detection, identifying irregularities and workflow bottlenecks.",
                "Implemented project analytics, progress visualization, and performance reporting using Flask and SQLite.",
                "<b>Tech Stack:</b> Python, Flask, SQLite, Machine Learning, Scikit-learn, Data Analytics."
            ]
        ),
        (
            "Spam Email Detection Using Machine Learning",
            [
                "Developed a supervised machine learning classification pipeline to accurately detect and filter spam emails.",
                "Conducted comprehensive text preprocessing, TF-IDF vectorization, and engineered 13 custom feature extractions.",
                "Connected the trained model to a live email account for automated real-time incoming message classification.",
                "<b>Tech Stack:</b> Python, Scikit-learn, Pandas, NumPy, Feature Engineering, Supervised Learning."
            ]
        )
    ]
    for p_title, p_bullets in projects_p2:
        story.append(Paragraph(f"<b>{p_title}</b>", role_title_style))
        for pb in p_bullets:
            story.append(Paragraph(f"&bull; {pb}", bullet_style))
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # ==========================================
    # PAGE 5: Patents & Courses/Certifications
    # ==========================================
    story.extend(section("Patents &amp; Intellectual Property:"))
    story.append(Paragraph("<b>UNCERTAINTY-AWARE MULTIMODAL CROP HEALTH DETECTION, FORECASTING AND ADAPTIVE MANAGEMENT SYSTEM</b>", role_title_style))
    pat_bullets = [
        "<b>Role:</b> Team Lead",
        "<b>Application No:</b> 202641109078",
        "<b>Filing Authority:</b> Indian Patent Office (IP India)",
        "<b>Filing Date:</b> September 11, 2026",
        "<b>Docket &amp; CBR:</b> Docket 143606 | CBR 74259",
        "<b>Institution:</b> Dept. of CSM, MLRITM, Hyderabad",
        "<b>System Overview:</b> Led the research and engineering team in architecting an uncertainty-aware multimodal diagnostic system. The system integrates high-resolution foliar computer vision with multi-sensor environmental inputs to detect crop diseases under ambiguous field conditions, forecast pathogen progression, and generate adaptive agronomy interventions."
    ]
    for b in pat_bullets:
        story.append(Paragraph(f"&bull; {b}", bullet_style))
    story.append(Spacer(1, 8))

    story.extend(section("Courses &amp; Certifications:"))
    certs = [
        "Building RAG Apps Using MongoDB — MongoDB | Retrieval-Augmented Generation &amp; Vector Search — <b>Completed</b>",
        "Building AI-Powered Search with MongoDB — MongoDB | Vector Indexes &amp; Semantic Querying — <b>Completed</b>",
        "Vector Search Fundamentals — MongoDB | High-Dimensional Embeddings &amp; Similarity Search — <b>Completed</b>",
        "AWS Educate — Introduction to Generative AI — AWS Educate | Foundation Models, LLMs &amp; Prompt Engineering — <b>Completed</b>",
        "Computer Vision 101 — Applied AI | CNNs, Image Filters &amp; Object Detection — <b>Completed</b>",
        "GAN for Cardiovascular Disease (CVD) — Infosys Springboard | Medical Deep Learning — <b>Completed</b>",
        "Introduction to Deep Learning — Deep Learning Track | Neural Network Architectures &amp; Backpropagation — <b>Completed</b>",
        "Introduction to NLP (Natural Language Processing) — Applied AI | Tokenization, Embeddings &amp; Transformers — <b>Completed</b>",
        "AWS Educate — Machine Learning Foundations — AWS Educate | Feature Pipelines &amp; Model Evaluation — <b>Completed</b>",
        "AWS Academy Graduate — Cloud Foundations — AWS Academy | Cloud Architecture, Model Serving &amp; Infrastructure — <b>Completed</b>",
        "Programming in Python with AI — Technical Education | Object-Oriented Design &amp; Microservices — <b>Completed</b>",
        "Introduction to Robotic Process Automation — Automation Track | Software Bots &amp; Workflow Automation — <b>Completed</b>",
        "Prime 2.0: AI/ML Batch — Advanced Training | ML, Deep Learning, GenAI, RAG Systems, PyTorch — <b>In Progress</b>"
    ]
    for c in certs:
        story.append(Paragraph(f"&bull; {c}", sub_bullet_style))

    story.append(PageBreak())

    # ==========================================
    # PAGE 6: Achievements & Ideas
    # ==========================================
    story.extend(section("Achievements:"))
    achievements = [
        "<b>Winner, College Project Expo (1st Place):</b> Awarded 1st place for designing, developing, and demonstrating an IoT-based Smart Irrigation &amp; Rain Alert System, showcasing its sensory pipeline and agricultural water conservation impact.",
        "<b>Official Patent Lead:</b> Filed official Indian Patent Application No. 202641109078 for an AI-based multimodal crop health detection, forecasting, and adaptive agronomic management system.",
        "<b>Secretary — Robotics &amp; Automation Lab (RAL Club):</b> Directing club activities, technical bootcamps, drone demonstrations, and embedded automation showcases for 200+ engineering students at MLRITM.",
        "<b>Smart India Hackathon (SIH):</b> Active participant and team contributor designing real-time AI automated solutions for complex challenges."
    ]
    for a in achievements:
        story.append(Paragraph(f"&bull; {a}", bullet_style))
    story.append(Spacer(1, 10))

    story.extend(section("Ideas &amp; Currently Exploring:"))
    ideas = [
        "<b>AI Plant Health Platform:</b> Computer Vision + Agentic AI for plant leaf disease detection, continuous monitoring, and automated agronomy decision support (Deep Learning, Zero-Shot Learning, Agriculture Vision).",
        "<b>Ultron — AI Desktop Assistant:</b> Voice-controlled AI agents for desktop automation, converting speech into autonomous OS controls and multi-step computer workflows (Speech AI, PyAutoGUI, Tool Calling).",
        "<b>Agentic AI Workflows:</b> Researching and experimenting with autonomous AI agents, multi-tool calling, structured reasoning loops, and automated task execution (LangGraph, Tool Calling, RAG).",
        "<b>Currently Learning &amp; Mastering:</b> Agentic AI, LangGraph, Advanced Computer Vision, Transfer Learning, FastAPI Deployment, and Voice AI."
    ]
    for i_item in ideas:
        story.append(Paragraph(f"&bull; {i_item}", bullet_style))

    doc.build(story)
    print(f"Generated {output_path} successfully!")

if __name__ == "__main__":
    generate_resume("t:\\Portfolio\\Resume.pdf")
