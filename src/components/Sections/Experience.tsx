import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  useTheme,
  Link,
  Button,
} from '@mui/material';
import {
  Work,
  CalendarToday,
  LocationOn,
  Launch,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Experience } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showAllExperience, setShowAllExperience] = useState(false);

  // Show only first 2 experiences unless "see more" is clicked
  const displayedExperience = showAllExperience ? experience : experience.slice(0, 2);

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0) {
      return remainingMonths > 0 
        ? `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`
        : `${years} yr${years > 1 ? 's' : ''}`;
    }
    return `${months} mo${months > 1 ? 's' : ''}`;
  };

  return (
    <Box
      id="experience"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
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
              Experience
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              My professional journey in technology and research
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: experience.length > 2 ? 120 : 0, // Stop 120px before bottom when "see more" button is present
                width: 2,
                background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                transform: { md: 'translateX(-50%)' },
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {displayedExperience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Timeline dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: 12, md: '50%' },
                        transform: { xs: 'none', md: 'translateX(-50%)' },
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: exp.current ? theme.palette.primary.main : theme.palette.background.paper,
                        border: `3px solid ${theme.palette.primary.main}`,
                        zIndex: 2,
                        boxShadow: theme.shadows[2],
                      }}
                    />

                    <Card
                      elevation={0}
                      sx={{
                        ml: { xs: 6, md: index % 2 === 0 ? 0 : 6 },
                        mr: { xs: 0, md: index % 2 === 0 ? 6 : 0 },
                        width: { xs: '100%', md: 'calc(50% - 48px)' },
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
                          background: exp.current 
                            ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                            : theme.palette.divider,
                          borderRadius: '12px 12px 0 0',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                          {exp.companyLogo ? (
                            <Avatar
                              src={exp.companyLogo}
                              alt={exp.company}
                              sx={{ width: 48, height: 48 }}
                            />
                          ) : (
                            <Work
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
                              {exp.position}
                              {exp.current && (
                                <Typography
                                  component="span"
                                  sx={{
                                    ml: 1,
                                    px: 1,
                                    py: 0.5,
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    color: theme.palette.primary.main,
                                    backgroundColor: theme.palette.primary.main + '20',
                                    borderRadius: 1,
                                  }}
                                >
                                  CURRENT
                                </Typography>
                              )}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              {exp.companyUrl ? (
                                <Link
                                  href={exp.companyUrl}
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
                                  {exp.company}
                                  <Launch sx={{ fontSize: '1rem' }} />
                                </Link>
                              ) : (
                                <Typography
                                  variant="h6"
                                  sx={{
                                    color: theme.palette.primary.main,
                                    fontWeight: 500,
                                  }}
                                >
                                  {exp.company}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </Box>

                        <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarToday sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {formatDate(exp.startDate)} - {formatDate(exp.endDate)} · {calculateDuration(exp.startDate, exp.endDate)}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Box>
                        </Stack>

                        <Box>
                          {exp.description.map((item, itemIndex) => (
                            <Typography
                              key={itemIndex}
                              variant="body1"
                              color="text.secondary"
                              sx={{
                                mb: 1,
                                lineHeight: 1.6,
                                position: 'relative',
                                pl: 2,
                                '&::before': {
                                  content: '"•"',
                                  position: 'absolute',
                                  left: 0,
                                  color: theme.palette.primary.main,
                                  fontWeight: 'bold',
                                },
                              }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* See More Button */}
            {experience.length > 2 && (
              <motion.div variants={fadeInUp}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => setShowAllExperience(!showAllExperience)}
                    sx={{
                      borderRadius: 2,
                      px: 4,
                      py: 1.5,
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                      },
                    }}
                  >
                    {showAllExperience ? 'Show Less' : `See ${experience.length - 2} More Experience`}
                  </Button>
                </Box>
              </motion.div>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
