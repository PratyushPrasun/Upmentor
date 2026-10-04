/**
 * Authentic Credibility, Recognition & Governance Data
 * Strictly based on genuine government recognitions, industry collaborations,
 * mentor affiliations, and verified certificates.
 * Zero fabricated numbers, IDs, dates, or false partnership claims.
 */

// 1. OFFICIAL REGISTRATIONS & RECOGNITIONS
export const OFFICIAL_RECOGNITIONS = [
  {
    id: 'startup-india',
    title: 'Startup India Recognised',
    issuer: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    authority: 'Ministry of Commerce & Industry, Government of India',
    badge: 'National Recognition',
    category: 'National Startup Ecosystem',
    description: 'Recognised as an official educational technology startup driving foundational and applied artificial intelligence literacy across schools in India.',
    verifiedSector: "Education & Education Technology",
    hasCertificate: true,
    certificateId: 'cert-startup-india',
    logoType: 'startup-india'
  },
  {
    id: 'startup-odisha',
    title: 'Startup Odisha Recognised',
    issuer: 'Micro, Small & Medium Enterprises Department',
    authority: 'Government of Odisha',
    badge: 'State Recognition',
    category: 'State Innovation Ecosystem',
    description: 'Formally recognised under the Odisha Startup Policy 2016 as an innovative deep-tech and school AI education initiative.',
    verifiedSector: 'EdTech & Applied Engineering',
    hasCertificate: true,
    certificateId: 'cert-startup-odisha',
    logoType: 'startup-odisha'
  },
  {
    id: 'mca-registered',
    title: 'MCA Registered',
    issuer: 'Ministry of Corporate Affairs',
    authority: 'Government of India',
    badge: 'Statutory Compliance',
    category: 'Corporate Registration',
    description: 'Incorporated as UpMentor Edutech Private Limited under the Companies Act as registered on the MCA21 national portal.',
    verifiedSector: 'Private Limited Company',
    hasCertificate: false,
    logoType: 'mca'
  },
  {
    id: 'msme-registered',
    title: 'MSME Registered',
    issuer: 'Ministry of Micro, Small and Medium Enterprises',
    authority: 'Government of India',
    badge: 'Enterprise Registry',
    category: 'National Enterprise',
    description: 'Formally registered under the Government of India MSME framework, fostering indigenous capability and technical capacity building.',
    verifiedSector: 'Micro & Small Enterprise',
    hasCertificate: false,
    logoType: 'msme'
  }
];

// 2. INDUSTRY COLLABORATIONS
export const INDUSTRY_COLLABORATIONS = [
  {
    id: 'ridoxy',
    name: 'Ridoxy Automation Pvt. Ltd.',
    shortName: 'Ridoxy Automation',
    logoType: 'ridoxy',
    domain: 'Aerial Robotics & UAV Systems',
    focus: 'Autonomous flight systems, fixed-wing aerial hardware, and onboard vision telemetry.',
    collaborationScope: 'Hands-on hardware interaction, drone flight telemetry inspection, and aerospace problem sprints for student cohorts.'
  },
  {
    id: 'anvpy',
    name: 'AnvPy',
    shortName: 'AnvPy Platform',
    logoType: 'anvpy',
    domain: 'Mobile Python Compiler & Dev Tools',
    focus: 'On-device Python 3 IDE, native compilation, and mobile computational environment.',
    collaborationScope: 'Practical programming environments enabling students to code, test, and run Python algorithms directly on mobile hardware.'
  },
  {
    id: 'octanet',
    name: 'OctaNet',
    shortName: 'OctaNet Systems',
    logoType: 'octanet',
    domain: 'Network Infrastructure & Services',
    focus: 'System architecture, network routing, and distributed communications engineering.',
    collaborationScope: 'Technical curriculum inputs on network topologies, IoT connectivity, and applied software engineering pipelines.'
  },
  {
    id: 'sahnar',
    name: 'Sahnar Technologies',
    shortName: 'Sahnar Tech',
    logoType: 'sahnar',
    domain: 'Digital Solutions & Enterprise Software',
    focus: 'Full-stack software engineering, digital product deployment, and AI data solutions.',
    collaborationScope: 'Real-world software engineering benchmarks, code quality audits, and industry sprint simulations.'
  }
];

// 3. INDUSTRY MENTORS (Organizations where our mentors currently work)
export const MENTOR_ORGANIZATIONS = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    logoType: 'microsoft',
    domain: 'Cloud & AI Platforms',
    description: 'Mentors bringing enterprise cloud architectures, LLM systems, and global engineering practices.'
  },
  {
    id: 'amex',
    name: 'American Express',
    logoType: 'amex',
    domain: 'Financial Intelligence & Scale',
    description: 'Mentors contributing expertise in enterprise data integrity, security paradigms, and analytical precision.'
  },
  {
    id: 'wipro',
    name: 'Wipro',
    logoType: 'wipro',
    domain: 'Global Technology Services',
    description: 'Mentors with deep backgrounds in enterprise consulting, distributed systems, and large-scale delivery.'
  },
  {
    id: 'tcs',
    name: 'TCS',
    logoType: 'tcs',
    domain: 'IT Consulting & Infrastructure',
    description: 'Mentors sharing industry insights on software architecture, client delivery rigor, and digital transformation.'
  },
  {
    id: 'accenture',
    name: 'Accenture',
    logoType: 'accenture',
    domain: 'Applied Intelligence & Strategy',
    description: 'Mentors guiding students on operational technology execution, AI solutioning, and executive presentation.'
  },
  {
    id: 'eccouncil',
    name: 'EC-Council',
    logoType: 'eccouncil',
    domain: 'Cybersecurity & Governance',
    description: 'Mentors emphasizing ethical computing, system security, threat auditing, and responsible digital citizenship.'
  }
];

// 4. GENUINE CERTIFICATES PROVIDED WITH THE PROJECT
export const GENUINE_CERTIFICATES = [
  {
    id: 'cert-startup-india',
    title: 'Certificate of Recognition — Startup India',
    issuer: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India',
    issuingBody: 'Government of India',
    certificateNumber: 'DIPP275932',
    dateOfIssue: '06-08-2026',
    validity: 'Valid up to 16-06-2036 (10 years from incorporation)',
    recognizedEntity: 'UPMENTOR EDUTECH PRIVATE LIMITED',
    category: 'National Recognition',
    previewImage: '/certificates/startup-india-doc.png',
    pdfUrl: '/certificates/startup-india-recognition.pdf',
    originalPdfPath: '/startup india (1).pdf',
    highlight: 'DPIIT Recognised EdTech Entity',
    details: [
      { label: 'Certificate No.', value: 'DIPP275932' },
      { label: 'Issuing Ministry', value: 'Ministry of Commerce & Industry, DPIIT' },
      { label: 'Recognised Sector', value: "'Education' Industry and 'Education Technology' sector" },
      { label: 'Entity Form', value: 'Private Limited Company (Inc. 17-06-2026)' },
      { label: 'Date of Issue', value: '06-08-2026' },
      { label: 'Validity', value: 'Valid up to 16-06-2036' }
    ]
  },
  {
    id: 'cert-startup-odisha',
    title: 'Certificate of Recognition — Startup Odisha',
    issuer: 'Micro, Small & Medium Enterprises Department, Government of Odisha',
    issuingBody: 'Government of Odisha',
    certificateNumber: 'OSP/SP/02945',
    dateOfIssue: '29-09-2026',
    validity: 'Odisha Startup Policy 2016',
    recognizedEntity: 'UPMENTOR EDUTECH PRIVATE LIMITED',
    category: 'State Recognition',
    previewImage: '/certificates/startup-odisha-doc.png',
    pdfUrl: '/certificates/startup-odisha-recognition.pdf',
    originalPdfPath: '/STARTUP ODISHA .pdf',
    highlight: 'Government of Odisha MSME Recognized',
    details: [
      { label: 'Registration No.', value: 'OSP/SP/02945' },
      { label: 'Issuing Department', value: 'MSME Department, Government of Odisha' },
      { label: 'Regulatory Framework', value: 'Odisha Startup Policy - 2016' },
      { label: 'Corporate Reg. Ref.', value: 'U85500OD2026PTC054209 (MCA21)' },
      { label: 'Date of Issue', value: '29-09-2026' },
      { label: 'Place of Issue', value: 'Bhubaneswar, Odisha' }
    ]
  }
];
