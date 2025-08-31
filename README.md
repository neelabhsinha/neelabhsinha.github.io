# Neelabh Sinha - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features a clean design with smooth animations, dark/light theme support, and modular data management.

## 🚀 Live Demo

Visit the live website: [neelabhsinha.github.io](https://neelabhsinha.github.io)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Material-UI (MUI)
- **Animations**: Framer Motion
- **Styling**: CSS-in-JS with MUI's `sx` prop
- **Deployment**: GitHub Pages with GitHub Actions
- **Linting**: ESLint + TypeScript ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── Header.tsx          # Navigation header with theme toggle
│   └── Sections/
│       ├── About.tsx           # About me section
│       ├── Contact.tsx         # Contact information
│       ├── Education.tsx       # Academic background
│       ├── Experience.tsx      # Work experience
│       ├── Hero.tsx            # Landing section
│       ├── Projects.tsx        # Project showcase
│       ├── Publications.tsx    # Research publications
│       ├── Skills.tsx          # Skills and technologies
│       └── Certifications.tsx  # Professional certifications
├── data/                       # Modular data files
│   ├── personal.ts            # Personal information
│   ├── education.ts           # Education data
│   ├── experience.ts          # Work experience
│   ├── projects.ts            # Project details
│   ├── publications.ts        # Publication data
│   ├── skills.ts              # Skills and technologies
│   ├── certifications.ts      # Certification details
│   ├── contact.ts             # Contact information
│   └── profile.ts             # Main data aggregator
├── hooks/
│   └── useTheme.tsx           # Custom theme hook
├── types/
│   └── index.ts               # TypeScript type definitions
└── App.tsx                    # Main application component
```

## 🎨 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Smooth Animations**: Framer Motion powered animations
- **Modular Data**: Easy content management through separate data files
- **Type Safety**: Full TypeScript support
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized bundle size and loading

## 📝 How to Add Content

### Adding a New Project

1. **Edit `src/data/projects.ts`**:
```typescript
{
  id: "your-project-id",
  title: "Your Project Title",
  summary: "Brief project description",
  description: "Detailed project description (optional)",
  date: "2024-01-01",
  tags: ["React", "TypeScript", "AI"],
  image: "/path/to/project-image.jpg", // Optional
  links: [
    {
      type: "github",
      url: "https://github.com/username/project",
      label: "GitHub"
    },
    {
      type: "demo",
      url: "https://demo-link.com",
      label: "Live Demo"
    }
  ],
  category: "Web Development",
  featured: true // Optional: highlights the project
}
```

**Available link types**: `github`, `demo`, `report`, `slides`, `video`, `external`

### Adding a New Publication

1. **Edit `src/data/publications.ts`**:
```typescript
{
  id: "your-publication-id",
  title: "Your Publication Title",
  authors: ["Your Name", "Co-author Name"],
  date: "2024-01-01",
  venue: "Conference/Journal Name",
  venueShort: "Conf. Abbr.", // Optional
  abstract: "Publication abstract",
  tags: ["AI", "Machine Learning"],
  featured: true, // Optional: highlights the publication
  image: "/path/to/publication-image.jpg", // Optional
  links: [
    {
      type: "pdf",
      url: "https://link-to-pdf.com",
      label: "PDF"
    },
    {
      type: "code",
      url: "https://github.com/username/code",
      label: "Code"
    }
  ]
}
```

**Available link types**: `pdf`, `code`, `dataset`, `video`, `slides`, `poster`, `arxiv`, `doi`

### Adding Work Experience

1. **Edit `src/data/experience.ts`**:
```typescript
{
  id: "company-id",
  position: "Your Position",
  company: "Company Name",
  location: "City, Country",
  startDate: "2024-01-01",
  endDate: "Present", // or "2024-12-31"
  description: [
    "Key responsibility or achievement 1",
    "Key responsibility or achievement 2",
    "Key responsibility or achievement 3"
  ],
  companyUrl: "https://company-website.com", // Optional
  companyLogo: "https://company-logo-url.com", // Optional
  current: true // Set to true if this is your current position
}
```

### Adding Education

1. **Edit `src/data/education.ts`**:
```typescript
{
  id: "university-id",
  degree: "Degree Type, Field",
  institution: "University Name",
  location: "City, Country",
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  gpa: "3.8/4.0", // Optional
  courses: [
    "Course 1",
    "Course 2",
    "Course 3"
  ],
  description: "Additional details", // Optional
  url: "https://university-website.com", // Optional
  institutionLogo: "https://university-logo-url.com" // Optional
}
```

### Adding Skills

1. **Edit `src/data/skills.ts`**:
```typescript
{
  id: "category-id",
  name: "Category Name",
  items: [
    {
      name: "Skill Name",
      level: 90, // Proficiency level (0-100)
      icon: "skill-icon" // Optional: icon identifier
    }
  ]
}
```

### Adding Certifications

1. **Edit `src/data/certifications.ts`**:
```typescript
{
  id: "certification-id",
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "2024-01-01",
  expiryDate: "2025-01-01", // Optional
  credentialId: "CERT-123456", // Optional
  url: "https://verification-url.com", // Optional
  image: "/path/to/certification-image.jpg" // Optional
}
```

### Updating Personal Information

1. **Edit `src/data/personal.ts`**:
```typescript
{
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your bio with <strong>HTML tags</strong> for emphasis",
  avatar: "/path/to/avatar.jpg",
  interests: ["Interest 1", "Interest 2"],
  currentFocus: "Your current focus with <strong>HTML tags</strong>",
  hobbies: "Your hobbies with <strong>HTML tags</strong>",
  social: [
    {
      platform: "github",
      url: "https://github.com/username",
      icon: "github",
      label: "GitHub"
    }
  ]
}
```

## 🎯 Customization Guide

### Changing Theme Colors

1. **Edit `src/hooks/useTheme.tsx`**:
```typescript
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#your-primary-color',
    },
    secondary: {
      main: '#your-secondary-color',
    },
  },
});
```

### Adding New Sections

1. Create a new component in `src/components/Sections/`
2. Add the section to `src/App.tsx`
3. Update TypeScript types if needed

### Modifying Animations

1. **Edit component animations**:
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

## 🚀 Development

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/neelabhsinha/neelabhsinha.github.io.git
cd neelabhsinha.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The website is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to GitHub Pages**:
```bash
# The dist folder contains the built files
# GitHub Actions will automatically deploy these files
```

### GitHub Actions Workflow

The deployment is handled by `.github/workflows/deploy.yml`:

- **Triggers**: Push to `main` branch or manual workflow dispatch
- **Build**: Node.js 22.12.0, npm ci, npm run build
- **Deploy**: Automatic deployment to GitHub Pages
- **Cache**: npm dependencies are cached for faster builds

## 🔧 Configuration Files

### Package.json
- **Dependencies**: React, MUI, Framer Motion, etc.
- **Scripts**: Development, build, and lint commands
- **Build**: Vite configuration for optimal production builds

### TypeScript Configuration
- **tsconfig.json**: TypeScript compiler options
- **tsconfig.node.json**: Node.js specific TypeScript config

### ESLint Configuration
- **eslint.config.js**: Linting rules for code quality
- **.eslintignore**: Files to exclude from linting

## 📊 Performance Optimization

- **Code Splitting**: Automatic code splitting by Vite
- **Image Optimization**: Optimized images for web
- **Bundle Analysis**: Use `npm run build` to see bundle size
- **Lazy Loading**: Components load as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Vite](https://vitejs.dev/) for the build tool
- [GitHub Pages](https://pages.github.com/) for hosting

## 📞 Contact

- **Website**: [neelabhsinha.github.io](https://neelabhsinha.github.io)
- **GitHub**: [@neelabhsinha](https://github.com/neelabhsinha)
- **LinkedIn**: [Neelabh Sinha](https://linkedin.com/in/neelabhsinha)

---

**Built with ❤️ using React, TypeScript, and Vite**
