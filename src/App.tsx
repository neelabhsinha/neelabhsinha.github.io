
import { Box } from '@mui/material';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Header from './components/Layout/Header';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import EducationSection from './components/Sections/Education';
import ExperienceSection from './components/Sections/Experience';
import PublicationsSection from './components/Sections/Publications';
import ProjectsSection from './components/Sections/Projects';
import SkillsSection from './components/Sections/Skills';
import CertificationsSection from './components/Sections/Certifications';
import ContactSection from './components/Sections/Contact';
import { profileData } from './data/profile';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        background: isDark 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 20%, #e3f2fd 40%, #f1f5f9 60%, #f0f4f8 80%, #ffffff 100%)',
      }}
    >
      <Header />
      <main>
        <Hero personal={profileData.personal} />
        <About personal={profileData.personal} />
        <EducationSection education={profileData.education} />
        <ExperienceSection experience={profileData.experience} />
        <PublicationsSection publications={profileData.publications} />
        <ProjectsSection projects={profileData.projects} />
        <SkillsSection skills={profileData.skills} />
        <CertificationsSection certifications={profileData.certifications} />
        <ContactSection personal={profileData.personal} contact={profileData.contact} />
      </main>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
