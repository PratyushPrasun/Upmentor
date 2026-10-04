# UpMentor Edutech Pvt. Ltd. — Official Multi-Page Web Platform

> **"Build AI-Ready Humans."**  
> *AI Literacy Infrastructure for Schools.*

A complete, production-quality multi-page web platform engineered for **UpMentor Edutech Pvt. Ltd.** Designed specifically for school principals, management trustees, and forward-thinking parents across CBSE, ICSE, and Odisha State Board institutions.

---

## 🏛️ Brand & Design Rationale

### Color Palette (Directly Sampled from the UpMentor Monogram)
- **Deep Midnight Ink (`#0B192C`)**: Grounding base for high-contrast typography, hero headings, and executive actions.
- **Electric Blue (`#0284C7`)**: The vibrant curved ascent sampled from the dynamic 'U' logo mark; used for primary accents, links, and category tags.
- **Upward Growth Green (`#10B981` / `#059669`)**: Derived from the logo’s upward momentum arrow; symbolizes future readiness, verification status, and student achievements.
- **Soft Tinted Off-White Background (`#F8FAFC`)**: A gentle, logo-tinted wash preventing stark pure `#FFFFFF` glare and avoiding dark-mode tech cliches.
- **Alternating Card Surfaces (`#FFFFFF`, `#F1F5F9`, `#F0FDF4`, `#F0F9FF`)**: Editorial surfaces with fine hairline dividers (`border-slate-200/80`).

### Typography Hierarchy
- **Display & Headings**: `Bricolage Grotesque` (Google Fonts, weights 500/700/800). Characterful, modern, tightly tracked (`-0.025em`) with editorial distinction.
- **Body & Interface**: `Plus Jakarta Sans` (Google Fonts, weights 400/500/600/700). High x-height, crisp legibility across mobile and desktop.

### Anti-AI-Template Audit Checklist (100% Adherence)
- ❌ **No purple-to-blue gradients** → Replaced with curated brand navy, electric blue, and emerald accents.
- ❌ **No centered hero with 3 identical icon cards** → Built an asymmetric editorial grid, composed real photography with floating credential & engagement badges.
- ❌ **No emoji icons** → Replaced with bespoke SVGs and clean line iconography.
- ❌ **No blurry glassmorphism blobs** → Clean, crisp hairline dividers and subtle elevations.
- ❌ **No stock 'Welcome to our platform' copy** → Authoritative, outcomes-driven language designed for school principals and academic directors.
- ❌ **No generic stock photos** → Built exclusively with all 6 real classroom/field photos and verified certificate specimens.

---

## 🚀 Quick Start & Development

### Requirements
- Node.js `v18+` or `v22+`
- npm `v9+` or `v11+`

### Installation & Launch
```bash
# Navigate to the workspace
cd Upmentor

# Install dependencies (already installed)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The application runs locally on `http://localhost:5174/` (or `http://localhost:5173/`).

---

## 📁 Project Architecture

```
Upmentor/
├── public/
│   ├── certificates/             # Verifiable AILA certificate specimens
│   │   ├── UPM-AILA-104822.svg
│   │   ├── UPM-AILA-104823.svg
│   │   ├── UPM-AILA-104824.svg
│   │   └── UPM-AILA-104825.svg
│   ├── logo.jpeg                 # Official UpMentor logo mark
│   ├── um.jpeg                   # Drone & AI tech presentation with police dignitary
│   ├── um1.jpeg                  # UAV hardware demonstration to military commanders
│   ├── um3.jpeg                  # Auditorium keynote: "Don't Just Learn It. Build It."
│   ├── um4.jpeg                  # School grounds flight demonstration (60+ students)
│   ├── um6.jpeg                  # UpMentor autonomous drone fleet deployment
│   ├── um7.jpeg                  # Applied AI & robotics lab cohort
│   ├── sitemap.xml               # Search engine index sitemap
│   └── robots.txt                # Crawler permissions
├── src/
│   ├── api/
│   │   └── contactHandler.js     # Backend/serverless lead notification handler
│   ├── components/
│   │   ├── Button.jsx            # Reusable button with variants & loading state
│   │   ├── Card.jsx              # Reusable container with subtle elevation
│   │   ├── FloatingWhatsApp.jsx  # Floating WhatsApp widget with prefilled message
│   │   ├── Footer.jsx            # Multi-column footer with contact details & board badges
│   │   ├── Icons.jsx             # Bespoke SVG marks (Instagram, LinkedIn, WhatsApp)
│   │   ├── LightboxModal.jsx     # Fullscreen zoomable lightbox with keyboard controls
│   │   ├── Navbar.jsx            # Sticky responsive navigation with active states
│   │   ├── Reveal.jsx            # Framer Motion scroll-reveal container
│   │   ├── ScrollToTop.jsx       # Route-change viewport scroll reset
│   │   └── Section.jsx           # Editorial section wrapper with numerals & badges
│   ├── data/
│   │   ├── assets.js             # Asset registry & dynamic image loader
│   │   └── content.js            # Single source of truth for site copy & program details
│   ├── pages/
│   │   ├── Home.jsx              # Hero, stats, bento grid, AILA phases, gallery, deliverables
│   │   ├── About.jsx             # Vision/Mission, differentiators, 3 phases, values, team block
│   │   ├── ForSchools.jsx        # Institutional value, 5-step partnership, table, FAQ accordion
│   │   ├── Credentials.jsx       # Certificate gallery with instant ledger verification tool
│   │   └── Contact.jsx           # Dual-audience form (School vs Parent) with spam honeypot
│   ├── App.jsx                   # Route configuration with React.lazy code splitting
│   ├── index.css                 # Tailwind CSS tokens & typography rules
│   └── main.jsx                  # Application entry point
├── package.json
└── vite.config.js
```

---

## 🖼️ How to Add or Update Images

1. **Classroom / Event Photos**:
   - Save your `.jpeg` or `.png` photo into `public/` (e.g. `public/um8.jpeg`).
   - Open [src/data/assets.js](file:///d:/Anti/Upmentor/src/data/assets.js) and append an item to `GALLERY_IMAGES`:
     ```js
     {
       id: 'um8',
       src: '/um8.jpeg',
       title: 'Your Event Title',
       category: 'Classroom / Lab',
       caption: 'Contextual description of the session...',
       alt: 'Descriptive alt text for accessibility'
     }
     ```
   - The photo will automatically appear in the masonry gallery and zoomable lightbox without changing any component logic.

2. **Certificates**:
   - Drop your verified certificate image into `public/certificates/` (e.g. `UPM-AILA-104826.svg` or `.png`).
   - Add the record to `CERTIFICATE_IMAGES` in [src/data/assets.js](file:///d:/Anti/Upmentor/src/data/assets.js).
   - It will immediately become inspectable and searchable in the Credential Verification Tool on `/credentials`.

---

## 📝 How to Edit Website Content

All site text, statistics, partnership steps, FAQs, and phone numbers are centralized in:
👉 **[src/data/content.js](file:///d:/Anti/Upmentor/src/data/content.js)**

To update:
- **Phone Numbers / WhatsApp / Socials**: Modify `COMPANY.contact`.
- **AILA Phases / Curriculum**: Edit `AILA_PHASES`.
- **School FAQs**: Edit `SCHOOL_FAQS`.
- **Institutional Deliverables**: Edit `SCHOOL_DELIVERABLES`.

---

## ✉️ Connecting the Contact & Demo Form

The form on `/contact` includes client-side validation, spam protection (honeypot field), and dual-audience routing.

### Connect to a Live Backend:
Add the following variable to a `.env` file in the project root:
```env
VITE_CONTACT_API_URL="https://your-backend.com/api/contact"
# OR for Formspree:
# VITE_CONTACT_API_URL="https://formspree.io/f/YOUR_FORM_ID"
```

A complete reference backend implementation is provided in [src/api/contactHandler.js](file:///d:/Anti/Upmentor/src/api/contactHandler.js), compatible with Express, Next.js API routes, AWS Lambda, or Cloudflare Workers.

---

## 📞 UpMentor Direct Contact Information
- **Calls**: `+91 84800 46645` & `+91 82601 56717`
- **WhatsApp**: `+91 98275 17488` (Floating button prefilled with: *"Hi UpMentor, I'd like to know more about AILA for our school."*)
- **Instagram**: `@joinupmentor`
- **Headquarters**: Bhubaneswar, Odisha, India
- **Copyright**: © 2026 UpMentor Edutech Pvt. Ltd. All rights reserved.
