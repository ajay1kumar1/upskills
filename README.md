# Upskills.in — Professional Corporate Website

A premium enterprise technology consulting website built with React.js, TypeScript, Tailwind CSS, and Framer Motion.

**Live Site**: https://upskills.in

## Company Overview

Upskills.in is a leading enterprise technology consulting firm specializing in:

- Enterprise IT Consulting & Architecture
- Artificial Intelligence & Generative AI Solutions
- Agentic AI & Intelligent Automation
- Cloud Architecture & Migration
- Data Engineering & Analytics
- Software Engineering & Modernization
- Digital Transformation Consulting
- Technology Staffing & Engineering Services

Led by CEO **Sapna Singh**, the company serves Fortune 500 enterprises globally.

---

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Data**: Structured TypeScript files (no external CMS)

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Footer with contact info
│   ├── CookieConsent.tsx   # Cookie notice banner
│   └── AIArchitectureDiagram.tsx
│
├── pages/
│   ├── Home.tsx            # Homepage with all sections
│   ├── About.tsx           # Company overview & CEO profile
│   ├── Services.tsx        # Services grid with filters
│   ├── ServiceDetail.tsx   # Dynamic service pages
│   ├── AI.tsx              # Dedicated AI solutions page
│   ├── Industries.tsx      # Industry specialization
│   ├── Insights.tsx        # Thought leadership articles
│   ├── Contact.tsx         # Contact form with validation
│   └── NotFound.tsx        # 404 page
│
├── data/
│   ├── services.ts         # Service definitions (12 services)
│   ├── industries.ts       # Industry definitions
│   └── insights.ts         # Sample editorial content
│
├── App.tsx                 # Main app with routing
├── main.tsx               # Entry point
└── index.css              # Global styles & Tailwind config
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/upskillsin/upskills.in.git
cd upskills.in

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
```

---

## Environment Configuration

Create a `.env.local` file with your company details:

```env
VITE_COMPANY_EMAIL=contact@upskills.in
VITE_COMPANY_PHONE=+1-800-UPSKILLS
VITE_API_URL=https://api.upskills.in
```

All placeholder contact information uses placeholder text and should be replaced with verified company details.

---

## Content Management

The website uses structured TypeScript files for all content:

### Adding a Service

Edit `src/data/services.ts`:

```typescript
{
  id: 'service-slug',
  title: 'Service Title',
  slug: 'service-slug',
  category: 'Category Name',
  description: 'Service description...',
  image: 'https://images.unsplash.com/...',
  challenges: ['Challenge 1', 'Challenge 2'],
  capabilities: ['Capability 1', 'Capability 2'],
  benefits: ['Benefit 1', 'Benefit 2']
}
```

### Adding an Industry

Edit `src/data/industries.ts`.

### Adding an Insight Article

Edit `src/data/insights.ts`.

**Note**: All editorial and case study content is marked as illustrative/placeholder until approved.

---

## Features

### ✅ Homepage Sections

- Hero with headline and CTAs
- Trust/value proposition
- Core services grid (6 services)
- AI & GenAI spotlight
- AI architecture diagram
- Industries served
- CEO leadership section
- Insights/articles
- Final contact CTA

### ✅ Navigation

- Responsive header with logo
- Mobile hamburger menu
- Services dropdown
- AI spotlight button
- Active page highlighting
- Scroll-to-top on route change

### ✅ Pages Built

1. **Home** — Complete homepage with all sections
2. **About Us** — Company overview, mission, vision, values, CEO profile
3. **Services** — Services grid with category filters
4. **Service Detail** — Dynamic pages for each service
5. **AI Solutions** — Dedicated AI page with architecture diagram
6. **Industries** — Industry-specific solutions
7. **Insights** — Editorial content grid
8. **Contact** — Contact form with validation
9. **404** — Not found page

### ✅ Functional Requirements

- Responsive navigation (desktop + mobile)
- React Router navigation
- Working CTAs
- Contact form validation
- Service detail navigation
- Internal links
- Scroll-to-top behavior
- Accessible controls
- Loading/error states
- 404 page
- Cookie notice
- Reusable components
- SEO metadata

---

## Design System

### Colors

**Primary Palette**:
- Navy: `#060B19` (background)
- Blue: `#0066FF` (primary accent)
- Cyan: `#00CEC9` (secondary accent)
- Violet: `#6C5CE7` (special accent)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components

- Glass panels with backdrop blur
- Gradient borders and text
- Subtle animations with Framer Motion
- Professional enterprise aesthetic

---

## Content Guidelines

### Allowed Content

- General enterprise technology consulting information
- AI architecture and capabilities
- Service offerings and descriptions
- Industry sectors served
- Leadership profile (CEO Sapna Singh)

### Placeholder Content (Do NOT invent)

- ❌ Customer names or logos
- ❌ Years in business
- ❌ Revenue figures
- ❌ Certifications or awards
- ❌ Project results or case studies
- ❌ Delivery locations
- ❌ Team bios (except CEO profile)

Use clearly labeled placeholders for unverified information.

---

## SEO & Performance

- Semantic HTML5 structure
- Open Graph metadata (update in index.html)
- Descriptive image alt text
- Lazy loading for images
- Optimized image sizes
- Fast page loading
- Accessible color contrast
- Keyboard navigation support

Target keywords:
- IT Consulting Services
- Enterprise AI Solutions
- Generative AI Consulting
- Agentic AI Solutions
- Enterprise Architecture
- Cloud Transformation
- Digital Transformation

---

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Option 2: Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Option 3: Docker (Containerized)

```bash
# Build image
docker build -t upskills-in .

# Run container
docker run -d -p 3000:80 upskills-in

# Or with docker-compose
docker-compose up -d
```

### Option 4: Standard Hosting

1. Run `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure SPA fallback for React Router

---

## Development Notes

### Important Considerations

1. **No Backend**: Contact form shows demo success message. Connect to API endpoint for production.
2. **Placeholder Images**: All images from Unsplash. Replace with brand assets.
3. **No Claims**: Avoid unsupported claims about customers, revenue, or awards.
4. **CEO Profile**: Do not invent qualifications or career history for Sapna Singh.
5. **Case Studies**: Clearly mark illustrative examples.

### CI/CD with GitHub Actions

The project includes three GitHub Actions workflows:

- **CI** (`.github/workflows/ci.yml`): Builds and tests on push/PR
- **Deploy** (`.github/workflows/deploy.yml`): Deploys to production on main branch
- **Lint** (`.github/workflows/lint.yml`): Code quality checks

To enable deployments:
1. Push code to GitHub
2. Configure secrets for your hosting provider (Vercel, Netlify, Docker Hub)
3. Workflows will run automatically

### Future Enhancements

- CMS integration (Contentful, Sanity, Strapi)
- Backend API for contact form
- Blog with Markdown support
- Analytics integration
- Newsletter subscription
- Multi-language support
- Client portal integration

---

## License

© 2026 Upskills.in. All rights reserved.

Built by the Upskills.in Technology Team
Led by Sapna Singh, CEO
```

---

## Support

For technical support or deployment assistance, contact the Upskills.in technology team.

**Project Status**: Production-ready enterprise website
**Last Updated**: November 2026
