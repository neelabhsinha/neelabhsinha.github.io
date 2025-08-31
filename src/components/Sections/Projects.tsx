import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  IconButton,
  useTheme,
  Link,
  Collapse,
  Button,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Description,
  VideoLibrary,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Project, ProjectLink } from '../../types';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface ProjectsProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Sort projects by date
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Show only first 6 projects unless "see more" is clicked
  const displayedProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, 6);

  const toggleExpanded = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  const getLinkIcon = (type: ProjectLink['type']) => {
    switch (type) {
      case 'github':
        return <GitHub />;
      case 'demo':
        return <Launch />;
      case 'report':
        return <Description />;
      case 'video':
        return <VideoLibrary />;
      default:
        return <Launch />;
    }
  };

  const getLinkLabel = (type: ProjectLink['type']) => {
    switch (type) {
      case 'github':
        return 'GitHub';
      case 'demo':
        return 'Demo';
      case 'report':
        return 'Report';
      case 'video':
        return 'Video';
      case 'slides':
        return 'Slides';
      default:
        return 'GitHub';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <Box
      id="projects"
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
              Projects
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
            >
              A collection of projects that I have had fun with
            </Typography>
          </motion.div>



          {/* Projects Grid */}
          <motion.div variants={fadeInUp}>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { 
                  xs: '1fr', 
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)'
                },
                gap: 4
              }}>
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
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
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >


                      {project.image && (
                        <CardMedia
                          component="img"
                          image={project.image}
                          alt={project.title}
                          sx={{ 
                            objectFit: 'cover',
                            height: { xs: '180px', sm: '200px', md: '220px' },
                            width: '100%'
                          }}
                        />
                      )}

                      <CardContent sx={{ flex: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            lineHeight: 1.3,
                            pr: project.featured ? 4 : 0,
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          {formatDate(project.date)}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                          sx={{ lineHeight: 1.6, flex: 1 }}
                        >
                          {project.summary}
                        </Typography>

                        {project.description && (
                          <>
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                                mb: 1,
                              }}
                              onClick={() => toggleExpanded(project.id)}
                            >
                              <Typography
                                variant="body2"
                                color="primary"
                                sx={{ fontWeight: 500 }}
                              >
                                {expandedProjects.has(project.id) ? 'Show Less' : 'Read More'}
                              </Typography>
                              {expandedProjects.has(project.id) ? (
                                <ExpandLess color="primary" />
                              ) : (
                                <ExpandMore color="primary" />
                              )}
                            </Box>

                            <Collapse in={expandedProjects.has(project.id)}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ lineHeight: 1.6, mb: 2 }}
                              >
                                {project.description}
                              </Typography>
                            </Collapse>
                          </>
                        )}

                        <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.tags.map((tag, tagIndex) => (
                            <Chip
                              key={tagIndex}
                              label={tag}
                              size="small"
                              variant="outlined"
                              sx={{
                                '&:hover': {
                                  backgroundColor: theme.palette.primary.main + '20',
                                },
                              }}
                            />
                          ))}
                        </Box>

                        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                          {project.links.map((link, linkIndex) => (
                            <motion.div
                              key={linkIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <IconButton
                                component={Link}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                  backgroundColor: theme.palette.background.default,
                                  border: `1px solid ${theme.palette.divider}`,
                                  borderRadius: 2,
                                  px: 1.5,
                                  py: 0.5,
                                  '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    borderColor: theme.palette.primary.main,
                                  },
                                  transition: 'all 0.3s ease-in-out',
                                }}
                              >
                                {getLinkIcon(link.type)}
                                <Typography
                                  variant="caption"
                                  sx={{ ml: 0.5, fontWeight: 500 }}
                                >
                                  {getLinkLabel(link.type)}
                                </Typography>
                              </IconButton>
                            </motion.div>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* See More Button */}
              {sortedProjects.length > 6 && (
                <motion.div variants={fadeInUp}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => setShowAllProjects(!showAllProjects)}
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
                      {showAllProjects ? 'Show Less' : `See ${sortedProjects.length - 6} More Projects`}
                    </Button>
                  </Box>
                </motion.div>
              )}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
