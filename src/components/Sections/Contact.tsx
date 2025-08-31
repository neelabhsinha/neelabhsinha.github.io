import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Email,
  LinkedIn,
  GitHub,
  School,
  Description,
  LocationOn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { PersonalInfo, ContactInfo } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface ContactProps {
  personal: PersonalInfo;
  contact: ContactInfo;
}

const ContactSection: React.FC<ContactProps> = ({ personal, contact }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialIcons: Record<string, React.ReactNode> = {
    email: <Email />,
    linkedin: <LinkedIn />,
    github: <GitHub />,
    scholar: <School />,
    resume: <Description />,
  };

  return (
    <Box
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 70% 80%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 80%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
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
              Get In Touch
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              Feel free to reach out for anything - I'd love to hear from you
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                p: { xs: 4, md: 6 },
                textAlign: 'center',
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
                  borderRadius: '12px 12px 0 0',
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 3,
                    }}
                  >
                    Let's Connect!
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mb: 4 }}
                  >
                    <LocationOn sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ fontWeight: 500 }}
                    >
                      {contact.location}
                    </Typography>
                  </Stack>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      mb: 4,
                      maxWidth: '500px',
                      mx: 'auto',
                    }}
                  >
                    Have any questions or potential collaborations? I'd love to hear from you!
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
                    {/* Direct email contact */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={`mailto:${contact.email}`}
                        size="large"
                        sx={{
                          width: 64,
                          height: 64,
                          backgroundColor: theme.palette.background.default,
                          border: `2px solid ${theme.palette.divider}`,
                          color: theme.palette.text.primary,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            borderColor: theme.palette.primary.main,
                            boxShadow: theme.shadows[8],
                          },
                        }}
                      >
                        <Email fontSize="large" />
                      </IconButton>
                    </motion.div>

                    {/* LinkedIn from social */}
                    {personal.social.filter(social => 
                      social.platform === 'linkedin'
                    ).map((social, index) => (
                      <motion.div
                        key={social.platform}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + (0.1 * index) }}
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
                            width: 64,
                            height: 64,
                            backgroundColor: theme.palette.background.default,
                            border: `2px solid ${theme.palette.divider}`,
                            color: theme.palette.text.primary,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.main,
                              color: 'white',
                              borderColor: theme.palette.primary.main,
                              boxShadow: theme.shadows[8],
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

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mt: 8,
            pt: 4,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            © 2025 {personal.name}. Built with React, TypeScript & Material-UI.
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            Designed and developed with ❤️
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
