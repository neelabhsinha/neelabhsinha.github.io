import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  Chip,
  Stack,
  Button,
  useTheme,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  School,
  Description,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { PersonalInfo } from '../../types';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

interface HeroProps {
  personal: PersonalInfo;
}

const socialIcons: Record<string, React.ReactNode> = {
  email: <Email />,
  linkedin: <LinkedIn />,
  github: <GitHub />,
  scholar: <School />,
  resume: <Description />,
};

const Hero: React.FC<HeroProps> = ({ personal }) => {
  const theme = useTheme();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="home"
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 12, md: 16 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
          : 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 30% 20%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 6
            }}
          >
            <Box 
              sx={{ 
                flex: { md: '0 0 66.666667%' },
                order: { xs: 2, md: 1 },
                width: '100%'
              }}
            >
              <motion.div variants={fadeInLeft}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(45deg, #64b5f6 30%, #42a5f5 90%)'
                      : 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                  }}
                >
                  {personal.name}
                </Typography>
              </motion.div>



              <motion.div variants={fadeInLeft}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    mb: 2,
                    '& strong': {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  }}
                  dangerouslySetInnerHTML={{ 
                    __html: personal.bio.length > 300 
                      ? personal.bio.substring(0, personal.bio.lastIndexOf(' ', 300)) + '...'
                      : personal.bio
                  }}
                />
                {personal.bio.length > 300 && (
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      aboutSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 2,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Read More →
                  </Button>
                )}
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 4 }}>
                  {personal.interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Chip
                        label={interest}
                        variant="outlined"
                        sx={{
                          mb: 1,
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main + '20',
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>

              <motion.div variants={fadeInLeft}>
                <Stack direction="row" spacing={2}>
                  {personal.social.map((social, index) => (
                    <motion.div
                      key={social.platform}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.2 + (0.1 * index) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="large"
                        sx={{
                          backgroundColor: theme.palette.background.paper,
                          boxShadow: theme.shadows[2],
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            boxShadow: theme.shadows[4],
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        {socialIcons[social.platform]}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Box>

            <Box 
              sx={{ 
                flex: { md: '0 0 33.333333%' },
                order: { xs: 1, md: 2 },
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <motion.div
                variants={fadeInRight}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Avatar
                      src={personal.avatar}
                      alt={personal.name}
                      sx={{
                        width: { xs: 200, sm: 250, md: 300 },
                        height: { xs: 200, sm: 250, md: 300 },
                        border: `4px solid ${theme.palette.primary.main}`,
                        boxShadow: theme.shadows[10],
                      }}
                    />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      opacity: 0.2,
                      animation: 'float 3s ease-in-out infinite',
                      '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0px)' },
                        '50%': { transform: 'translateY(-10px)' },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -10,
                      left: -10,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.secondary.main,
                      opacity: 0.3,
                      animation: 'float 4s ease-in-out infinite reverse',
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
