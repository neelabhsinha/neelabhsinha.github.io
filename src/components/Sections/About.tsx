import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { PersonalInfo } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface AboutProps {
  personal: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personal }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
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
              About Me
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              Get to know more about my background, expertise, and passion for technology
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <motion.div variants={fadeInUp}>
                <Card
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        textAlign: 'justify',
                        '& strong': {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: personal.bio }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mt: 4 }}>
            <Box sx={{ flex: 1 }}>
              <motion.div variants={fadeInUp}>
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      Current Focus
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        '& strong': {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: personal.currentFocus }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            <Box sx={{ flex: 1 }}>
              <motion.div variants={fadeInUp}>
                <Card
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 2,
                      }}
                    >
                      Interests & Hobbies
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.7,
                        '& strong': {
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                        },
                      }}
                      dangerouslySetInnerHTML={{ __html: personal.hobbies }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
