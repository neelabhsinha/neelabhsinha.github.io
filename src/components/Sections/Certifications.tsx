import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Certification } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { themeVariables } from '../../data/theme';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = () => {
    return <EmojiEvents sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
  };

  return (
    <Box
      id="certifications"
      ref={ref}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? themeVariables.gradients.section.dark
          : themeVariables.gradients.section.light,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {getCategoryIcon()}
              </motion.div>
              
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mt: 2,
                  mb: 3,
                  fontWeight: 'bold',
                  background: theme.palette.mode === 'dark'
                    ? themeVariables.gradients.brand.dark
                    : themeVariables.gradients.brand.light,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Certifications
              </Typography>
              
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Professional certifications and achievements that validate my expertise
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: 0.1 + (index * 0.1) }}
              >
                <Box
                  component="a"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                    height: '100%',
                  }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      border: `2px solid ${theme.palette.divider}`,
                      borderRadius: 3,
                      backgroundColor: theme.palette.background.paper,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(100, 181, 246, 0.2)' : 'rgba(25, 118, 210, 0.15)'}`,
                      },
                    }}
                  >
                    <CardContent 
                      sx={{ 
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            lineHeight: 1.3,
                          }}
                        >
                          {cert.title}
                        </Typography>
                        
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ 
                            mb: 2, 
                            fontWeight: 500,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {cert.issuer}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ 
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          fontWeight: 500,
                        }}
                      >
                        {new Date(cert.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long' 
                        })}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CertificationsSection;
