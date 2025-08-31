import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Code,
  Psychology,
  Web,
  Storage,
  Cloud,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { SkillCategory } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface SkillsProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName.toLowerCase();
    if (name.includes('programming') || name.includes('language')) {
      return <Code sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
    }
    if (name.includes('machine learning') || name.includes('ai')) {
      return <Psychology sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
    }
    if (name.includes('development') || name.includes('framework')) {
      return <Web sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
    }
    if (name.includes('database') || name.includes('search')) {
      return <Storage sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
    }
    if (name.includes('cloud') || name.includes('devops')) {
      return <Cloud sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
    }
    return <Code sx={{ fontSize: '2rem', color: theme.palette.primary.main }} />;
  };

  // Display skill icon (image)
  const getSkillIcon = (icon: string) => {
    return (
      <Box
        sx={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={icon}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          onError={(e) => {
            // Fallback to a default icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = '🔧';
          }}
        />
      </Box>
    );
  };

  return (
    <Box
      id="skills"
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
              Technical Skills
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}
            >
              Technologies and tools I work with across different domains
            </Typography>
          </motion.div>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 4,
            maxWidth: '1200px',
            mx: 'auto'
          }}>
            {skills.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: theme.palette.primary.main,
                      borderRadius: '12px 12px 0 0',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      {getCategoryIcon(category.name)}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          lineHeight: 1.3,
                        }}
                      >
                        {category.name}
                      </Typography>
                    </Box>

                    <Stack spacing={2}>
                      {category.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (skillIndex * 0.05) 
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 1.5,
                              borderRadius: 2,
                              backgroundColor: theme.palette.action.hover,
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                backgroundColor: theme.palette.action.selected,
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            {getSkillIcon(skill.icon)}
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 500,
                                color: theme.palette.text.primary,
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>
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

export default SkillsSection;
