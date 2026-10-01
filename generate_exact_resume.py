import os
import fitz
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register TrueType Calibri from Windows Fonts directory
pdfmetrics.registerFont(TTFont('Calibri', r'C:\Windows\Fonts\calibri.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Bold', r'C:\Windows\Fonts\calibrib.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Italic', r'C:\Windows\Fonts\calibrii.ttf'))
pdfmetrics.registerFont(TTFont('Calibri-Light', r'C:\Windows\Fonts\calibril.ttf'))

def build_exact_resume(filename="Resume.pdf"):
    # Margins: 60 pt left/right (~0.83 in), 38 pt top/bottom (~0.53 in)
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=60,
        rightMargin=60,
        topMargin=38,
        bottomMargin=38
    )

    c_black = colors.HexColor("#000000")
    c_blue = colors.HexColor("#1f4e79")
    c_line = colors.HexColor("#7f7f7f")

    styles = getSampleStyleSheet()

    # Title: "Gadi Thanmayee" (Calibri-Light 28pt, centered)
    title_style = ParagraphStyle(
        'ExactTitle',
        parent=styles['Normal'],
        fontName='Calibri-Light',
        fontSize=27,
        leading=30,
        textColor=c_black,
        alignment=1
    )

    contact_style = ParagraphStyle(
        'ExactContact',
        parent=styles['Normal'],
        fontName='Calibri',
        fontSize=10.5,
        leading=14,
        textColor=c_black
    )

    heading_style = ParagraphStyle(
        'ExactHeading',
        parent=styles['Normal'],
        fontName='Calibri-Bold',
        fontSize=11,
        leading=13,
        textColor=c_black
    )

    body_style = ParagraphStyle(
        'ExactBody',
        parent=styles['Normal'],
        fontName='Calibri',
        fontSize=10,
        leading=13,
        textColor=c_black
    )

    proj_style = ParagraphStyle(
        'ExactProj',
        parent=styles['Normal'],
        fontName='Calibri',
        fontSize=9.8,
        leading=12.5,
        textColor=c_black
    )

    bullet_style = ParagraphStyle(
        'ExactBullet',
        parent=styles['Normal'],
        fontName='Calibri',
        fontSize=9.8,
        leading=12.5,
        textColor=c_black,
        leftIndent=16,
        firstLineIndent=-10,
        spaceAfter=1
    )

    sub_bullet_style = ParagraphStyle(
        'ExactSubBullet',
        parent=styles['Normal'],
        fontName='Calibri',
        fontSize=9.3,
        leading=11.8,
        textColor=c_black,
        leftIndent=16,
        spaceAfter=1.5
    )

    def section(title):
        p = Paragraph(title, heading_style)
        line = HRFlowable(width="100%", thickness=0.75, color=c_line, spaceBefore=2, spaceAfter=5)
        return [p, line]

    story = []

    # =========================================================================
    # PAGE 1: Header, Contact, Objective, Education, Projects (Part 1 - 6 items)
    # =========================================================================
    story.append(Paragraph("Gadi Thanmayee", title_style))
    story.append(Spacer(1, 5))

    contact_left = (
        'Hyderabad , Telangana<br/>'
        'Phone : 8332930925<br/>'
        'Email : <font color="#1f4e79"><u><a href="mailto:thanmayeereddy925@gmail.com">thanmayeereddy925@gmail.com</a></u></font>'
    )
    contact_right = (
        'Linkedin : <font color="#1f4e79"><u><a href="http://www.linkedin.com/in/gadithanmayee">http://www.linkedin.com/in/gadithanmayee</a></u></font><br/>'
        'Github : <font color="#1f4e79"><u><a href="https://github.com/thanmayeereddy925">https://github.com/thanmayeereddy925</a></u></font><br/>'
        '<font color="#1f4e79"><u><a href="https://thanmayee-reddy-portfolio.vercel.app">Portfolio</a></u></font>'
    )

    t_contact = Table(
        [[Paragraph(contact_left, contact_style), Paragraph(contact_right, contact_style)]],
        colWidths=[246, 246]
    )
    t_contact.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_contact)
    story.append(Spacer(1, 8))

    # Objective
    story.extend(section("Objective :"))
    obj_text = (
        "Curious and motivated 3rd-year engineering student with a strong focus on Machine Learning, "
        "Generative AI, Computer Vision, and IoT microcontrollers. Passionate about learning new technologies and applying them to "
        "real-world projects. Eager to gain hands-on experience through internships, contribute to meaningful "
        "projects, and develop practical skills while exploring innovative solutions."
    )
    story.append(Paragraph(obj_text, body_style))
    story.append(Spacer(1, 8))

    # Education
    story.extend(section("Education :"))
    edu_1 = (
        "Marri Laxman Reddy Institute of Technology and Management [MLRITM] , Btech - Computer "
        "Science and Engineering [AIML]"
    )
    edu_1_date = "Sept 2024 &ndash; Jun 2028"
    edu_2 = "Intermediate , Narayana Junior College , Kukatpally"
    edu_2_date = "July 2024"

    t_edu = Table([
        [Paragraph(f"&bull;&nbsp; {edu_1}", body_style), Paragraph(edu_1_date, ParagraphStyle('RDate1', parent=body_style, alignment=2))],
        [Paragraph(f"&bull;&nbsp; {edu_2}", body_style), Paragraph(edu_2_date, ParagraphStyle('RDate2', parent=body_style, alignment=2))]
    ], colWidths=[372, 120])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 8))

    # Projects Header (Page 1 has 6 projects)
    story.extend(section("Projects :"))

    p1_projects = [
        ("Plant Health AI Platform :", "Developed a multimodal leaf disease diagnostic platform using transfer learning (CNNs) to classify crop pathologies, providing calibrated confidence scores, disease treatment guidance, and a web dashboard for agricultural decision support."),
        ("Ultron Autonomous Desktop Assistant :", "Developed an autonomous desktop agent translating voice and natural-language commands into precise operating system actions, application navigation, active system telemetry (CPU/RAM), and workflow automation using Python and PyAutoGUI."),
        ("IntelliDoc RAG Engine :", "Built an enterprise Retrieval-Augmented Generation application integrating MongoDB Vector Search and Sentence Transformers to index technical manuals, hardware datasheets, and answer complex domain queries with zero hallucinations."),
        ("IoT-Based Smart Agricultural System :", "Built a basic smart agriculture system using sensors to monitor environmental conditions and support simple irrigation decisions using IoT concepts."),
        ("Spam Email Detection Using Machine Learning :", "Created a basic supervised machine learning model to classify emails as spam or non-spam, involving data preprocessing, feature extraction, and model evaluation using customized 13 features and connected to an email for real time detection."),
        ("IoT Chatbot :", "Built a RAG-based chatbot for IoT sensors and microcontrollers that retrieves relevant information from technical documents, integrates Wikipedia API for additional knowledge, generates context-aware responses using an LLM, and showcases results through a Flask Interface.")
    ]

    for title, desc in p1_projects:
        story.append(Paragraph(f"<b>{title}</b> {desc}", proj_style))
        story.append(Spacer(1, 3.5))

    # Clean PageBreak to Page 2
    story.append(PageBreak())

    # =========================================================================
    # PAGE 2: Projects (Part 2 - 4 items), Skills, Experience (QuGates & Oorjith)
    # =========================================================================
    p2_projects = [
        ("Accident Detection using Deep Learning :", "Developed an AI-based system to detect road accidents from images using deep learning. Built and trained the model using Python, TensorFlow/Keras, NumPy, and Pandas, and deployed it through a Flask-based web application for accident detection."),
        ("Deepfake Detection using Deep Learning :", "Developed a deep learning model to identify AI-generated or manipulated media (deepfakes). Implemented the detection system using Python, TensorFlow/PyTorch, and OpenCV to classify media as real or fake."),
        ("YTBT Cardio NLP :", "Developed YTBT Cardio NLP, a PyTorch 2D CNN + Transformer system translating 12-lead ECG waveform images into structured reports. Built a multi-role Flask portal (Doctor/Patient/Technician/Admin) with SQLite audit logs."),
        ("StudyMind AI :", "Developed StudyMind AI, an adaptive study navigator that generates personalized learning roadmaps and dynamic study timetables using Flask, SQLite, and Google Gemini API. Implemented a Random Forest ML engine to classify student concept mastery and automatically inject remedial topics, secured by a custom proctored, anti-cheat exam portal and synced peer timers.")
    ]

    for title, desc in p2_projects:
        story.append(Paragraph(f"<b>{title}</b> {desc}", proj_style))
        story.append(Spacer(1, 3.5))

    story.append(Spacer(1, 6))

    # Skills Section
    story.extend(section("Skills"))

    skills = [
        ("Programming:", "Python, C (basics), SQL, JavaScript (Basics)"),
        ("Core Concepts:", "Basics of Machine Learning, Supervised Learning, Data Preprocessing"),
        ("IoT & Embedded (Basic):", "Arduino, ESP8266, Sensors, IoT fundamentals"),
        ("Libraries & Tools:", "Pandas, NumPy, Scikit-learn"),
        ("Generative AI & RAG:", "RAG Applications, Prompt Engineering, LLM Integration, Vector Search"),
        ("Deep Learning & Frameworks:", "TensorFlow/Keras, PyTorch, OpenCV"),
        ("Backend & Cloud:", "Flask, SQLite, MongoDB Atlas Vector Search, AWS Cloud Foundations"),
        ("Other :", "Enthusiastic, Problem-solving, willingness to learn, basic project implementation, technical leadership")
    ]

    for label, val in skills:
        story.append(Paragraph(f"&bull; <b>{label}</b> {val}", bullet_style))

    story.append(Spacer(1, 6))

    # Experience Section (QuGates & Oorjith both fit cleanly on Page 2!)
    story.extend(section("Experience :"))

    story.append(Paragraph("<b>AI/ML Intern</b>", body_style))
    exp1_comp = (
        '<font color="#1f4e79"><u><a href="https://qugates.com">QuGates Technologies</a></u></font> | Bengaluru, Karnataka<br/>'
        '<b>June 2026 &ndash; Present</b>'
    )
    story.append(Paragraph(exp1_comp, body_style))
    story.append(Spacer(1, 2))

    qugates_points = [
        "Developing AI and Machine Learning solutions for <b>crop disease detection</b> using computer vision and deep learning techniques.",
        "Building intelligent image classification models to identify plant diseases and improve agricultural decision-making.",
        "Working on software automation solutions to streamline workflows and reduce manual processes.",
        "Performing data preprocessing, model training, testing, and performance evaluation for AI applications.",
        "Collaborating with the development team to integrate AI models into software solutions."
    ]
    for pt in qugates_points:
        story.append(Paragraph(f"&bull; {pt}", bullet_style))

    story.append(Spacer(1, 4))

    # Role 2: Oorjith
    story.append(Paragraph("<b>Part-Time:</b>", body_style))
    exp2_comp = (
        '<b><font color="#1f4e79"><u>Oorjith</u></font></b> | Chandigarh , Punjab<br/>'
        '<b>July 2026 &ndash; Present</b>'
    )
    story.append(Paragraph(exp2_comp, body_style))
    story.append(Spacer(1, 2))

    oorjith_points = [
        "Develop and support machine learning solutions by applying data preprocessing, model development, and performance evaluation techniques.",
        "Collaborate with cross-functional teams to build and optimize AI-driven applications using Python and machine learning frameworks.",
        "Assist in analyzing datasets, improving model performance, and implementing practical AI solutions for real-world use cases."
    ]
    for pt in oorjith_points:
        story.append(Paragraph(f"&bull; {pt}", bullet_style))

    # Clean PageBreak to Page 3
    story.append(PageBreak())

    # =========================================================================
    # PAGE 3: Patent, Extra-Curriculars, Courses & Certifications, Achievements
    # =========================================================================
    # Patent Section
    story.extend(section("Patent :"))
    story.append(Paragraph("<b>Team Lead &mdash; Indian Patent Application No: 202641109078 (IP India)</b>", body_style))
    story.append(Paragraph("<i>Title: Uncertainty-Aware Multimodal Crop Health Detection, Forecasting and Adaptive Management System</i>", body_style))
    story.append(Spacer(1, 2))
    pat_points = [
        "Spearheaded an engineering team to architect an uncertainty-aware vision pipeline fusing multispectral crop imagery with environmental sensor metrics to detect crop pathology and output calibrated risk forecasting.",
        "Formulated an adaptive management loop that maps diagnostic outputs to localized remediation strategies with quantifiable confidence intervals."
    ]
    for pt in pat_points:
        story.append(Paragraph(f"&bull; {pt}", bullet_style))

    story.append(Spacer(1, 7))

    # Extra-Curricular Activities & Leadership Section (User Explicit Request)
    story.extend(section("Extra-Curricular Activities &amp; Leadership :"))

    extra_curriculars = [
        ("Secretary — Robotics & Automation Lab (RAL Club), MLRITM (2024 – Present):",
         "Directing club administrative operations, managing budgets, and coordinating inter-departmental innovation projects across robotics, AI, and embedded automation."),
        ("Lead Event Coordinator — RAL Club Events & Technical Symposia:",
         "Organized and orchestrated flagship college robotics exhibitions, technical hack days, and project showcases engaging 200+ active student participants across departments."),
        ("Technical Mentor & Workshop Instructor:",
         "Conducted hands-on technical workshops instructing junior batches in Arduino microcontrollers, ESP8266 IoT connectivity, and Python for AI, guiding 100+ students through circuit design and sensor telemetry."),
        ("Hackathon Coordinator & Team Lead — Smart India Hackathon (SIH) & Competitions:",
         "Led cross-functional teams in competitive national hackathons (including SIH initiatives) focused on AI-driven agricultural solutions and smart automation prototypes, driving architecture design and live demonstrations.")
    ]

    for title, desc in extra_curriculars:
        story.append(Paragraph(f"&bull; <b>{title}</b> {desc}", bullet_style))

    story.append(Spacer(1, 7))

    # Courses & Certifications Section
    story.extend(section("Courses &amp; Certifications:"))

    certs = [
        ("Prime 2.0: AI/ML Batch — Currently Pursuing",
         "Topics: Machine Learning, Deep Learning, Generative AI, RAG, AI Projects, PyTorch, and AI Engineering."),
        ("Python with AI Course — AI for Techies — Currently Pursuing",
         "Focused on Python programming, AI fundamentals, problem-solving, and AI-based application development."),
        ("AI Projects Module — Currently Pursuing",
         "Hands-on AI/ML project development and deployment of real-world applications."),
        ("Infosys Springboard Certification — GAN for Cardiovascular Disease (CVD)",
         "Hands-on machine learning model training using Generative Adversarial Networks (GANs) for medical image generation and risk analysis."),
        ("AWS Academy Graduate — AWS Academy Cloud Foundations",
         "Completed Amazon Web Services (AWS) training covering cloud architecture, compute, security, storage, and networking services."),
        ("Generative AI with MongoDB & Vector Search — MongoDB",
         "Hands-on certification in semantic vector embeddings, vector search indexes, and RAG architectures."),
        ("AWS Educate — Machine Learning Foundations & Generative AI",
         "Amazon Web Services (AWS) training covering machine learning pipelines, deep learning fundamentals, and GenAI concepts."),
        ("Infosys Springboard — Robotic Process Automation (RPA) & Computer Vision 101",
         "Automation workflows, bot configuration, and image processing fundamentals with OpenCV.")
    ]

    for title, desc in certs:
        story.append(Paragraph(f"&bull; <b>{title}</b>", bullet_style))
        if desc:
            story.append(Paragraph(desc, sub_bullet_style))

    story.append(Spacer(1, 7))

    # Achievements Section
    story.extend(section("Achievements"))

    achievements = [
        ("Winner, Project Expo", "Presented and demonstrated an IoT-based Smart Irrigation System, explaining its working and impact."),
        ("Published Patent Application (Team Lead)", "Filed and published Indian Patent application for Uncertainty-Aware Multimodal Crop Health AI System (App No: 202641109078).")
    ]

    for title, desc in achievements:
        story.append(Paragraph(f"&bull; <b>{title}</b> &ndash; {desc}", bullet_style))

    doc.build(story)
    print(f"Generated {filename} successfully with exact 3-page template!")

if __name__ == '__main__':
    build_exact_resume("Resume.pdf")
    doc = fitz.open("Resume.pdf")
    print("Verification: Total pages =", len(doc))
    for i, page in enumerate(doc):
        print(f"Page {i+1} rect:", page.rect)
