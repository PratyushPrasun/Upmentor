// Source of truth for UpMentor website copy, structure, and editorial content
// Authentic institutional AI literacy infrastructure for schools

export const COMPANY = {
  name: 'UpMentor Edutech Pvt. Ltd.',
  shortName: 'UpMentor',
  tagline: 'Build AI-Ready Humans.',
  descriptor: 'AI Literacy Infrastructure for Schools.',
  positioning: 'Not another coding company. We build institutional AI capability, not weekend workshop novelties.',
  region: 'Odisha & Across India',
  targetBoards: ['CBSE', 'ICSE', 'State Board'],
  contact: {
    phones: ['+91 84800 46645', '+91 82601 56717'],
    rawPhones: ['8480046645', '8260156717'],
    whatsapp: '+91 98275 17488',
    whatsappRaw: '919827517488',
    whatsappDefaultMsg: "Hi UpMentor, I'd like to know more about AILA for our school.",
    instagram: '@joinupmentor',
    instagramUrl: 'https://instagram.com/joinupmentor',
    email: 'partnerships@upmentor.in',
    address: 'Bhubaneswar, Odisha, India',
    responseTime: 'Within 4 business hours'
  },
  copyrightYear: 2026
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'For Schools', path: '/for-schools' },
  { name: 'Credentials', path: '/credentials' },
  { name: 'Contact & Demo', path: '/contact' }
];

export const STATS = [
  { label: 'Structured Sessions', value: 24, suffix: '', highlight: 'Hands-on curriculum' },
  { label: 'Intensive Weeks', value: 8, suffix: ' Wks', highlight: 'Integrated in timetable' },
  { label: 'Architectural Phases', value: 3, suffix: '', highlight: 'Cognition → Production → Identity' },
  { label: 'Core Student Assets', value: 4, suffix: '', highlight: 'Portfolio, Capstone Brief, Resume, GitHub' }
];

export const MARQUEE_ITEMS = [
  'CBSE Affiliated Schools',
  'ICSE & ISC Campuses',
  'Odisha State Board Schools',
  'Higher Secondary Institutions',
  'Autonomous Junior Colleges',
  'Teacher AI Empowerment',
  'Critical Thinking First',
  'Responsible AI Governance'
];

export const POSITIONING_BENTO = [
  {
    numeral: '01',
    badge: 'Category Shift',
    title: 'A New Category: AI Literacy Infrastructure',
    description: 'Schools buy outcomes, not disposable courses. UpMentor does not sell standalone workshops or hobbyist coding kits. We install institutional AI literacy that aligns with academic rigor and future careers.',
    tag: 'Institutional Partnership',
    gridSpan: 'md:col-span-8'
  },
  {
    numeral: '02',
    badge: 'Curriculum Depth',
    title: 'Structured 8-Week Rigour',
    description: 'A 24-session academic progression. We move students from cognitive fundamentals to autonomous production sprints.',
    tag: 'No Rote Coding',
    gridSpan: 'md:col-span-4'
  },
  {
    numeral: '03',
    badge: 'Ethical Foundation',
    title: 'Responsible AI & Critical Thinking First',
    description: 'Tools change every three months; critical inquiry does not. Students master prompt architecture, bias auditing, source verification, and context engineering before touching generative automation.',
    tag: 'Literacy Before Tools',
    gridSpan: 'md:col-span-4'
  },
  {
    numeral: '04',
    badge: 'Documented Outputs',
    title: 'Four Tangible Student Deliverables',
    description: 'Every student graduates with a live production portfolio, an industry-partner sprint capstone, an ATS-standard technical resume, and an authentic GitHub code presence.',
    tag: 'Demonstrated Capability',
    gridSpan: 'md:col-span-8'
  }
];

export const AILA_PHASES = [
  {
    phase: 'Phase I',
    title: 'AI Cognition',
    duration: 'Sessions 01 – 08 • Weeks 1 to 3',
    summary: 'Building high-order mental models. Moving students from passive consumers to systematic prompt architects and context engineers.',
    curriculum: [
      'Deconstructing Large Language Models & Deep Learning intuition',
      'Cognitive Prompt Engineering: Zero-shot, Few-shot & Chain-of-Thought',
      'Responsible AI: Hallucination detection, bias evaluation & data privacy',
      'The Professional AI Stack: LLMs, embeddings, and research synthesis',
      'Context Engineering: Multi-turn prompt chaining for complex reasoning'
    ],
    outcomeBadge: 'Outcome: Cognitive Proficiency & Prompt Fluency'
  },
  {
    phase: 'Phase II',
    title: 'AI Production',
    duration: 'Sessions 09 – 16 • Weeks 4 to 6',
    summary: 'Direct application to real academic and commercial problem statements across Science, Commerce, and Humanities streams.',
    curriculum: [
      'Discipline-Specific AI: Differential equation solvers, market research & textual analysis',
      'Competitive Exam Intelligence: AI-assisted conceptual mastery for JEE, NEET & CUET',
      'Real-world Client Sprint: Solving a live operational problem with an industry partner',
      'Micro-Internship Simulation: Structured deliverables under industry timelines',
      'Data synthesis, automated workflows, and prototype deployment'
    ],
    outcomeBadge: 'Outcome: Live Project Sprint & Evaluated Capstone'
  },
  {
    phase: 'Phase III',
    title: 'AI Identity',
    duration: 'Sessions 17 – 24 • Weeks 7 to 8',
    summary: 'Translating technical mastery into professional distinction, university admissions readiness, and lifelong personal branding.',
    curriculum: [
      'Executive Personal Branding: Articulating AI literacy to university admission boards',
      'Career Intelligence: Mapping AI-proof career trajectories across industries',
      'Production Portfolio: Deploying public case studies on GitHub and custom domains',
      'Technical Profile Optimization & Engineering Networking for high-schoolers',
      'Capstone Presentation & Formal Technical Defense'
    ],
    outcomeBadge: 'Outcome: Public Portfolio & Technical Capstone Defense'
  }
];

export const STUDENT_DELIVERABLES = [
  {
    title: 'Public Digital Portfolio',
    description: 'A custom, hosted portfolio showcasing live AI projects, client problem solutions, and research briefs built during the program.',
    iconType: 'portfolio'
  },
  {
    title: 'Industry Partner Sprint Capstone',
    description: 'Formal capstone evaluation validating completion of the Phase II real client sprint with an assigned industry partner.',
    iconType: 'brief'
  },
  {
    title: 'ATS-Optimised Professional Resume',
    description: 'Industry-standard resume reflecting technical proficiencies, project outcomes, and prompt architecture expertise.',
    iconType: 'resume'
  },
  {
    title: 'Verified GitHub Presence',
    description: 'An authentic digital profile with public code repositories, prompt engineering notebooks, and technical documentation.',
    iconType: 'code'
  }
];

export const SCHOOL_DELIVERABLES = [
  { item: 'Physical Student Workbooks', desc: 'Custom printed guided inquiry workbooks for every session' },
  { item: 'Standardised Evaluation Rubrics', desc: 'Clear scoring matrices for critical thinking, prompt accuracy, and code logic' },
  { item: 'Comprehensive Session Lesson Plans', desc: 'Mapped to school timetable without burdening existing faculty' },
  { item: 'Student Project Dossiers & Defense Logs', desc: 'Documented evaluation portfolios validating student technical artifacts' },
  { item: 'Institutional Progress & Engagement Reports', desc: 'Executive dashboard for principals and trustees tracking cohort progress' },
  { item: 'Faculty Orientation Sessions', desc: 'Introductory alignment for school leadership and computer science teachers' }
];

export const TESTIMONIALS = [
  {
    quote: "UpMentor shifted our perspective entirely. Instead of teaching our students another superficial scratch block tool, they gave them genuine intellectual scaffolding. Our students now use AI to interrogate science concepts and build real prototypes.",
    author: "Senior Academic Coordinator",
    role: "CBSE Senior Secondary Campus",
    location: "Bhubaneswar, Odisha",
    metric: "180+ Students Trained"
  },
  {
    quote: "What impressed management was the school-first delivery model. UpMentor brought their own structured workbooks, session mentors, and clear evaluation rubrics. It integrated seamlessly into our academic calendar without disrupting normal classes.",
    author: "Principal",
    role: "ICSE Affiliated High School",
    location: "Cuttack, Odisha",
    metric: "Phase I & II Completed"
  },
  {
    quote: "Our daughter built a real market intelligence tool during her 8 weeks. Seeing her articulate how prompt context works and explaining ethical AI safeguards to us was eye-opening. This is the preparation schools actually need.",
    author: "Parent of Grade 11 Student",
    role: "AILA Pilot Cohort",
    location: "Sambalpur, Odisha",
    metric: "Capstone Defense Graduate"
  }
];

export const VISION_ROADMAP = [
  {
    stage: '01',
    title: 'School AI Literacy Accelerator (AILA)',
    desc: 'The foundational 8-week program turning standard classrooms across Odisha into AI-literate innovation hubs.',
    status: 'Active Deployment'
  },
  {
    stage: '02',
    title: 'Teacher AI Training & Accreditation',
    desc: 'Empowering school educators with pedagogical AI frameworks to automate lesson planning and evaluate AI-assisted student work.',
    status: 'Rolling Out 2026'
  },
  {
    stage: '03',
    title: 'National AI Olympiad for Schools',
    desc: 'An annual problem-solving tournament testing critical thinking, model alignment, and prompt architecture across India.',
    status: 'Upcoming'
  },
  {
    stage: '04',
    title: 'Corporate AI Literacy & Research Initiatives',
    desc: 'Bridging high-school talent with corporate R&D teams and university AI research laboratories.',
    status: 'Roadmap'
  }
];

export const PARTNERSHIP_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'A 20-minute consultation with school leadership to evaluate current infrastructure, timetable windows, and cohort size.'
  },
  {
    step: '02',
    title: 'Awareness Demo Workshop',
    desc: 'A live on-campus masterclass for students and teachers demonstrating the difference between coding and true AI cognition.'
  },
  {
    step: '03',
    title: 'Pilot Program Cohort',
    desc: 'A focused single-class pilot cohort allowing management and parents to witness tangible student outputs firsthand.'
  },
  {
    step: '04',
    title: 'Full AILA Institution Rollout',
    desc: 'Institutional integration across grades 8 through 12, complete with printed workbooks, mentors, and lab management.'
  },
  {
    step: '05',
    title: 'Capstone Review & Exhibition',
    desc: 'Final capstone exhibition, technical defense presentations, and handover of student engineering portfolios and client sprint briefs.'
  }
];

export const SCHOOL_FAQS = [
  {
    q: 'Does UpMentor require our school to hire new computer science teachers?',
    a: 'No. UpMentor provides trained mentors and certified instructors who lead or co-facilitate every session. Your existing teachers receive orientation and can observe sessions to enhance their own AI pedagogy.'
  },
  {
    q: 'What hardware infrastructure is needed from the school?',
    a: 'Any standard computer laboratory with reliable internet connectivity and modern browsers (Chrome/Firefox) is sufficient. No expensive GPUs or specialized servers are required, as modern cloud-based AI environments are utilized.'
  },
  {
    q: 'How does AILA fit into an already packed academic timetable?',
    a: 'AILA is scheduled as 3 sessions per week (or weekend lab blocks) across 8 weeks. It can be slotted into regular computer periods, activity periods, or zero periods with zero disruption to core board exam subjects.'
  },
  {
    q: 'How does UpMentor handle student data privacy and safety?',
    a: 'Strict adherence to data safety is central to our ethos. We use enterprise privacy sandboxes where student prompts and queries are never used to train public models. Content moderation filters are rigorously applied.'
  },
  {
    q: 'What is the commercial model for schools?',
    a: 'We offer flexible institutional models: direct school-sponsored deployment or a parent-opted school partnership model. We also offer fully supported free demo sessions to give leadership clarity before financial commitment.'
  }
];

// ==========================================
// AUTHENTIC COMPETENCY & TECHNICAL FRAMEWORK
// Used for Home Page Capstone/Skills & Credentials Page
// ==========================================

export const TECHNICAL_CAPABILITIES = [
  {
    id: 'prompt-architecture',
    tabName: 'Prompt Architecture & LLMs',
    title: 'Cognitive Prompt Engineering & Context Architecture',
    badge: 'Cognition Track • Phase I',
    summary: 'Moving students beyond basic chat queries. Students master multi-turn context windows, reasoning scaffolds, and systematic verification heuristics.',
    coreSkills: [
      'Multi-turn Context Engineering & Memory Constraints',
      'Chain-of-Thought (CoT) & Tree-of-Thought (ToT) Scaffolding',
      'System Role Definitions & Behavioral Guardrails',
      'Hallucination Auditing & Source Cross-Verification',
      'Zero-Shot vs. Few-Shot Exemplar Calibration'
    ],
    toolchain: ['OpenAI APIs', 'Anthropic Claude', 'Hugging Face Transformers', 'LangChain Principles', 'Promptflow'],
    studentDeliverable: 'Production Prompt Notebook with verified edge-case test suites and benchmark evaluations.',
    sampleCode: `// Multi-Turn Context Architecture Schema
const systemGuardrail = {
  role: "system",
  content: \`You are an academic research assistant for secondary physics.
  Strict Rule: Never output raw formulas without dimensional analysis.
  Validation Check: Flag potential hallucinations in citations immediately.\`
};
const reasoningChain = [
  { step: 1, action: "Deconstruct boundary conditions" },
  { step: 2, action: "Simulate edge parameters" },
  { step: 3, action: "Cross-audit against reference data" }
];`
  },
  {
    id: 'autonomous-systems',
    tabName: 'Autonomous Systems & Vision',
    title: 'Autonomous Robotics, UAV Telemetry & Computer Vision',
    badge: 'Hardware Track • Phase II',
    summary: 'Physical computing meets algorithmic control. High-school cohorts inspect drone aerodynamics, telemetry radio links, and real-time object tracking.',
    coreSkills: [
      'Fixed-Wing UAV & Multi-Rotor Aerodynamic Principles',
      'Real-Time Telemetry Logging & Flight Log Analysis',
      'Computer Vision Edge Detection & Object Tracking Intuition',
      'Sensor Fusion (IMU, Barometer, GPS, Optical Flow)',
      'Autonomous Failsafe Programming & Field Safety Protocols'
    ],
    toolchain: ['Fixed-Wing UAVs', 'Hexacopter Platforms', 'Telemetry Radios', 'OpenCV Basics', 'Mission Planner'],
    studentDeliverable: 'Recorded telemetry mission log and computer vision flight demonstration on school campus.',
    sampleCode: `// Telemetry Stream Parser & Failsafe Watchdog
function parseFlightTelemetry(packet) {
  const { altitude, airspeed, batteryVolts, gpsFix } = packet;
  if (batteryVolts < 10.8 || gpsFix < 3) {
    return { status: "TRIGGER_RTL", reason: "Failsafe threshold reached" };
  }
  return { status: "NOMINAL_CRUISE", pitch: packet.pitch, yaw: packet.yaw };
}`
  },
  {
    id: 'embedded-iot',
    tabName: 'Embedded Circuits & Sensors',
    title: 'Embedded Microcontrollers & Situational Sensor Mesh',
    badge: 'Prototyping Track • Phase II',
    summary: 'Bridging software logic with real electrical signals. Students build situational environmental sensors demonstrated to state civil and police leadership.',
    coreSkills: [
      'Microcontroller Architecture & GPIO Signal Routing',
      'Analog vs. Digital Sensor Interfacing (Ultrasonic, IR, Gas)',
      'Real-Time Interrupt Handlers & Low-Power Sleep Cycles',
      'Hardware Breadboarding, Schematic Reading & Soldering Safety',
      'Serial Communication Protocols (UART, I2C, SPI)'
    ],
    toolchain: ['Arduino Uno & Nano', 'ESP32 IoT Boards', 'Analog/Digital Sensors', 'Logic Analyzers', 'Breadboards'],
    studentDeliverable: 'Working situational sensor physical prototype with real-time audio/visual alert triggers.',
    sampleCode: `// Microcontroller Sensor Threshold Trigger
#define SENSOR_PIN A0
#define ALERT_LED 13

void setup() {
  Serial.begin(115200);
  pinMode(ALERT_LED, OUTPUT);
}

void loop() {
  int sensorValue = analogRead(SENSOR_PIN);
  if (sensorValue > THRESHOLD_LIMIT) {
    digitalWrite(ALERT_LED, HIGH);
    Serial.println("ALERT: Situational Threshold Exceeded!");
  }
  delay(100);
}`
  },
  {
    id: 'production-tooling',
    tabName: 'Production & Open-Source',
    title: 'Production Engineering, Git & Open-Source Portfolio',
    badge: 'Identity Track • Phase III',
    summary: 'Transforming classroom learning into public proof. Students deploy working applications, manage Git version control, and present technical capstones.',
    coreSkills: [
      'Version Control with Git, Branching & GitHub Workflows',
      'Static Site Generation & Custom Domain Deployment',
      'Markdown Technical Writing & README Architectural Specs',
      'ATS-Optimized Engineering Resume Structuring',
      'Technical Capstone Oral Defense to Review Committees'
    ],
    toolchain: ['Git', 'GitHub Repositories', 'Vercel / GitHub Pages', 'Markdown', 'VS Code'],
    studentDeliverable: 'Publicly hosted project portfolio URL and ATS-compliant technical resume ready for university boards.',
    sampleCode: `# Student Capstone Architecture Spec
## Title: Autonomous Telemetry & Sensor Monitor
- **Lead Author:** Secondary AILA Cohort Member
- **Repository:** github.com/student-profile/aila-capstone
- **Live Deployment:** aila-capstone.vercel.app
- **Peer Review:** Passed Phase III Institutional Defense`
  }
];

// ==========================================
// AUTHENTIC EVALUATION RUBRIC (Replaces Fake Certificates)
// ==========================================

export const EVALUATION_RUBRIC = [
  {
    dimension: 'Cognitive Architecture & Context Engineering',
    weight: '35%',
    badge: 'Cognition',
    description: 'Evaluation of the student’s ability to structure multi-turn prompt chains, enforce guardrails, and mitigate model hallucinations.',
    criteria: [
      { level: 'Developing', desc: 'Uses standard single-turn prompts with occasional ambiguity.' },
      { level: 'Proficient', desc: 'Constructs multi-step prompt chains with clear system constraints.' },
      { level: 'Capstone Distinction', desc: 'Architects comprehensive zero-shot and few-shot pipelines with automated validation filters.' }
    ]
  },
  {
    dimension: 'Technical Execution & Hardware/Code Rigour',
    weight: '30%',
    badge: 'Execution',
    description: 'Demonstrating functional code, working hardware prototypes, or reliable telemetry integration without broken logic.',
    criteria: [
      { level: 'Developing', desc: 'Code runs with mentor assistance; hardware breadboard requires troubleshooting.' },
      { level: 'Proficient', desc: 'Independent code deployment with clean variable naming and error handling.' },
      { level: 'Capstone Distinction', desc: 'Production-ready deployment on public web hosts or autonomous flight hardware test completion.' }
    ]
  },
  {
    dimension: 'Responsible AI & Ethical Governance',
    weight: '20%',
    badge: 'Ethics',
    description: 'Deep understanding of data privacy, model bias, intellectual property, and adherence to sandboxed data protocols.',
    criteria: [
      { level: 'Developing', desc: 'Recognizes overt bias and basic plagiarism issues.' },
      { level: 'Proficient', desc: 'Conducts formal hallucination audits and enforces source cross-referencing.' },
      { level: 'Capstone Distinction', desc: 'Produces a formal Ethical AI Impact Assessment addressing demographic biases and edge-cases.' }
    ]
  },
  {
    dimension: 'Technical Defense & Engineering Documentation',
    weight: '15%',
    badge: 'Defense',
    description: 'Ability to clearly articulate architectural trade-offs, answer adversarial review questions, and publish clean documentation.',
    criteria: [
      { level: 'Developing', desc: 'Basic presentation summarizing project objectives.' },
      { level: 'Proficient', desc: 'Clear oral defense covering technical challenges and debugging workflows.' },
      { level: 'Capstone Distinction', desc: 'Commanding technical presentation before peers and faculty, backed by a complete GitHub README dossier.' }
    ]
  }
];

// ==========================================
// AUTHENTIC CAPSTONE PROJECT SHOWCASE
// ==========================================

export const CAPSTONE_PROJECTS = [
  {
    id: 'cap-uav',
    title: 'Autonomous UAV Telemetry & Campus Flight Routine',
    subtitle: 'Demonstrated to senior armed forces commanders and 60+ on-campus students',
    image: '/um1.jpeg',
    tags: ['Fixed-Wing UAV', 'Telemetry Radios', 'Flight Logs', 'Autonomous Flight'],
    challenge: 'Designing an aerial telemetry routine that logs real-time attitude, airspeed, and GPS coordinates while executing precision landing trajectories on campus grounds.',
    solution: 'Students integrated telemetry transmitters, configured mission parameters in ground-control software, and evaluated sensor drift under open-air field conditions.',
    impact: 'Live demonstration executed on school grounds; reviewed by visiting armed forces officers.'
  },
  {
    id: 'cap-sensor',
    title: 'Situational Sensor Mesh & Hardware Prototype',
    subtitle: 'Demonstrated to state police and civil administration dignitaries',
    image: '/um.jpeg',
    tags: ['Microcontrollers', 'Breadboard Circuits', 'Situational IoT', 'Live Trigger'],
    challenge: 'Creating a standalone sensor circuit capable of detecting physical situational anomalies without relying on continuous cloud connectivity.',
    solution: 'High-school cohort assembled an edge circuit using microcontrollers and calibrated sensor arrays, programming interrupt-driven alert triggers for rapid response.',
    impact: 'Presented directly to senior civil administration and police dignitaries during institutional project review.'
  },
  {
    id: 'cap-robotics',
    title: 'Autonomous Robotics & Vision Workbench',
    subtitle: 'Hands-on hardware lab with multi-rotor and fixed-wing airframes',
    image: '/um7.jpeg',
    tags: ['Robotics Hardware', 'Sensor Diagnostics', 'Autonomous Fleet', 'Lab Cohort'],
    challenge: 'Deconstructing flight controllers and motor speed controllers to understand embedded feedback loops in autonomous robotics.',
    solution: 'Collaborative cohort sessions where students calibrated brushless motor ESCs, verified radio signal integrity, and tested multi-sensor wiring harnesses.',
    impact: 'Equipped students with practical electrical and aerospace intuition beyond classroom theory.'
  },
  {
    id: 'cap-stem',
    title: 'Domain AI Differential Equation & Concept Solver',
    subtitle: 'AI-assisted conceptual mastery for secondary science & mathematics',
    image: '/hero/real/coding-terminal-workspace.jpg',
    tags: ['Context Engineering', 'Prompt Chaining', 'JEE / NEET Prep', 'Python'],
    challenge: 'Generic LLMs frequently fail at multi-step calculus and rotational dynamics, providing inaccurate or hallucinated formula steps.',
    solution: 'Students designed structured prompt chains that force step-by-step dimensional analysis, intermediate sanity checks, and first-principles reasoning.',
    impact: 'Validated across 50+ difficult differential calculus and electromagnetic physics problem sets.'
  }
];
