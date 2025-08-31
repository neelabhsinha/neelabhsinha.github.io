import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  useTheme,
  Link,
  Avatar,
} from '@mui/material';
import {
  School,
  CalendarToday,
  LocationOn,
  Launch,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Education } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface EducationProps {
  education: Education[];
}

const EducationSection: React.FC<EducationProps> = ({ education }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <Box
      id="education"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(18, 18, 18, 0.5)' 
          : 'rgba(248, 249, 250, 0.5)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Education
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              My academic journey
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: '12px 12px 0 0',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                          {edu.institutionLogo ? (
                            <Avatar
                              src={edu.institutionLogo}
                              alt={edu.institution}
                              sx={{ width: 48, height: 48 }}
                            />
                          ) : (
                            <School
                              sx={{
                                color: theme.palette.primary.main,
                                fontSize: '2rem',
                                mt: 0.5,
                              }}
                            />
                          )}
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="h5"
                              component="h3"
                              gutterBottom
                              sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                lineHeight: 1.3,
                              }}
                            >
                              {edu.degree}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Link
                                href={edu.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  textDecoration: 'none',
                                  color: theme.palette.primary.main,
                                  fontWeight: 500,
                                  fontSize: '1.1rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 0.5,
                                  '&:hover': {
                                    textDecoration: 'underline',
                                  },
                                }}
                              >
                                {edu.institution}
                                <Launch sx={{ fontSize: '1rem' }} />
                              </Link>
                            </Box>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarToday sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {formatDate(edu.startDate)} - {edu.endDate === 'Present' ? 'Present' : formatDate(edu.endDate)}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {edu.location}
                            </Typography>
                          </Box>
                        </Stack>

                        {edu.gpa && (
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 2,
                              color: theme.palette.text.primary,
                              fontWeight: 500,
                            }}
                          >
                            GPA: {edu.gpa}
                          </Typography>
                        )}

                        {edu.description && (
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 2, lineHeight: 1.6 }}
                          >
                            {edu.description}
                          </Typography>
                        )}

                        {edu.courses && edu.courses.length > 0 && (
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                mb: 1.5,
                              }}
                            >
                              Relevant Courses:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                              {edu.courses.map((course, courseIndex) => (
                                <Chip
                                  key={courseIndex}
                                  label={course}
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    mb: 1,
                                    '&:hover': {
                                      backgroundColor: theme.palette.primary.main + '20',
                                    },
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EducationSection;
